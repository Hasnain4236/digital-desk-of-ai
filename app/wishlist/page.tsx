"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Heart, ShoppingCart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useWishlistStore, useCartStore } from '@/lib/store'
import { useToast } from '@/components/ui/use-toast'
import { formatPrice } from '@/lib/utils'

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()
  const { items, removeItem, clearWishlist } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart(item.product)
    toast({
      title: "Added to cart",
      description: `${item.product.name} has been added to your cart.`,
    })
  }

  const handleRemove = (productId: string, productName: string) => {
    removeItem(productId)
    toast({
      title: "Removed from wishlist",
      description: `${productName} has been removed from your wishlist.`,
    })
  }

  if (!mounted) return null

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Heart className="h-24 w-24 text-muted-foreground mb-6" />
        <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-muted-foreground mb-6">
          Save items you love by clicking the heart icon on products.
        </p>
        <Button asChild size="lg">
          <Link href="/shop">
            Browse Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Wishlist</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Wishlist ({items.length})</h1>
          <Button 
            variant="outline" 
            className="text-destructive"
            onClick={clearWishlist}
          >
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.productId} className="group overflow-hidden">
              <div className="relative aspect-square bg-muted">
                <Image
                  src={item.product.images[0] || '/images/placeholder.jpg'}
                  alt={item.product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemove(item.productId, item.product.name)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <Link 
                  href={`/product/${item.productId}`}
                  className="font-medium hover:text-primary line-clamp-2 min-h-[48px]"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  SKU: {item.product.sku}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(item.product.price)}
                  </span>
                  <span className={item.product.inStock ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
                    {item.product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => handleAddToCart(item)}
                  disabled={!item.product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
