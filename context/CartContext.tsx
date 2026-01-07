"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    updateQuantity: () => { },
    clearCart: () => { },
    total: 0,
    itemCount: 0,
});

// Version key to force cart reset when structure changes
const CART_VERSION = "v2";
const CART_KEY = "digital_desk_cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from local storage on mount
    useEffect(() => {
        try {
            const version = localStorage.getItem("cart_version");
            
            // If version mismatch or old cart key exists, clear everything
            if (version !== CART_VERSION || localStorage.getItem("cart")) {
                localStorage.removeItem("cart"); // Remove old key
                localStorage.removeItem(CART_KEY);
                localStorage.setItem("cart_version", CART_VERSION);
                setIsLoaded(true);
                return;
            }

            const savedCart = localStorage.getItem(CART_KEY);
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    const validItems = parsedCart.filter(item => 
                        item && 
                        typeof item.id === 'string' && 
                        typeof item.name === 'string' && 
                        typeof item.price === 'number' && 
                        !isNaN(item.price) &&
                        item.price > 0 &&
                        typeof item.quantity === 'number' &&
                        !isNaN(item.quantity) &&
                        item.quantity > 0 &&
                        item.quantity <= 10 // Max 10 per item to prevent corruption
                    ).map(item => ({
                        id: item.id,
                        name: item.name,
                        price: Number(item.price),
                        imageUrl: item.imageUrl || "",
                        quantity: Math.min(10, Math.max(1, Math.floor(Number(item.quantity))))
                    }));
                    setItems(validItems);
                }
            }
        } catch (error) {
            console.error("Error loading cart:", error);
            localStorage.removeItem(CART_KEY);
            localStorage.removeItem("cart");
        }
        setIsLoaded(true);
    }, []);

    // Save cart to local storage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(CART_KEY, JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addItem = useCallback((newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
        // Always add exactly 1 item
        const quantityToAdd = 1;
        const priceAsNumber = Number(newItem.price);
        
        if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
            console.error("Invalid price:", newItem.price);
            return;
        }

        setItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === newItem.id);
            if (existingItem) {
                // Cap at 10 items max
                const newQuantity = Math.min(10, existingItem.quantity + quantityToAdd);
                return prevItems.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            }
            return [...prevItems, {
                id: newItem.id,
                name: newItem.name,
                price: priceAsNumber,
                imageUrl: newItem.imageUrl || "",
                quantity: quantityToAdd
            }];
        });
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, []);

    const updateQuantity = useCallback((id: string, quantity: number) => {
        const newQuantity = Math.max(1, Math.min(10, Math.floor(Number(quantity))));
        if (isNaN(newQuantity)) return;
        
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const total = items.reduce((sum, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return sum + (price * quantity);
    }, 0);

    const itemCount = items.reduce((count, item) => count + (Number(item.quantity) || 0), 0);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
