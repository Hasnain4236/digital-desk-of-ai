"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Zap } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  inStock?: boolean;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice,
  imageUrl, 
  category,
  inStock = true 
}: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, price, imageUrl, quantity: 1 });
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, price, imageUrl, quantity: 1 });
    router.push("/checkout");
  };

  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg group">
      <Link href={`/shop/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={imageUrl || "/placeholder.png"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
          {originalPrice && originalPrice > price && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              {Math.round((1 - price / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="font-semibold truncate">{name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg text-primary">{formatPrice(price)}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button 
          variant="outline" 
          className="flex-1" 
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          <ShoppingCart className="mr-1 h-4 w-4" /> Add
        </Button>
        <Button 
          className="flex-1" 
          onClick={handleBuyNow}
          disabled={!inStock}
        >
          <Zap className="mr-1 h-4 w-4" /> Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
