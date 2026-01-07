"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";

export default function Header() {
  const { user, role } = useAuth();
  const { itemCount } = useCart();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/digital_desk_of_ai.png" 
            alt="Digital Desk of AI" 
            width={150} 
            height={50} 
            className="h-14 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold hidden md:inline-block" style={{ fontFamily: 'Satoshi, sans-serif' }}>Digital Desk of AI</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/shop" className="transition-colors hover:text-foreground/80 text-foreground/60">Shop</Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Cart icon - always visible */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Button>
          </Link>

          {user ? (
            <>
              {role === "seller" && (
                <Link href="/seller/dashboard">
                  <Button variant="outline" size="sm">Seller Dashboard</Button>
                </Link>
              )}
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
