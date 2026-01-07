"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Share2,
  Facebook,
  Twitter,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCartStore, useWishlistStore } from '@/lib/store'
import { useToast } from '@/components/ui/use-toast'
import { Product } from '@/lib/types'
import { formatPrice, cn } from '@/lib/utils'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const addToCart = useCartStore((state) => state.addItem)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const inWishlist = isInWishlist(product.id)

  const hasDiscount = product.comparePrice && product.comparePrice > product.price
  const discountPercentage = hasDiscount 
    ? Math.round(((product.comparePrice! - product.price) / product.comparePrice!) * 100)
    : 0

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product, quantity)
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
      })
    }
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.images[selectedImage] || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {hasDiscount && (
              <Badge variant="destructive">-{discountPercentage}% OFF</Badge>
            )}
            {product.featured && (
              <Badge className="bg-green-500">Featured</Badge>
            )}
          </div>

          {/* Navigation Arrows */}
          {product.images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2",
                  selectedImage === index ? "border-primary" : "border-transparent"
                )}
              >
                <Image
                  src={image || '/images/placeholder.jpg'}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Category & SKU */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link 
            href={`/shop?category=${product.category}`}
            className="hover:text-primary"
          >
            {product.category.replace('-', ' ').toUpperCase()}
          </Link>
          <span>|</span>
          <span>SKU: {product.sku}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

        {/* Stock Status */}
        <div className="flex items-center gap-2">
          {product.inStock ? (
            <Badge variant="outline" className="text-green-600 border-green-600">
              In Stock
            </Badge>
          ) : (
            <Badge variant="outline" className="text-red-600 border-red-600">
              Out of Stock
            </Badge>
          )}
          {product.stockQuantity && product.stockQuantity < 10 && product.inStock && (
            <span className="text-sm text-orange-600">
              Only {product.stockQuantity} left!
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-xl text-muted-foreground line-through">
              {formatPrice(product.comparePrice!)}
            </span>
          )}
        </div>

        {/* Login for wholesale */}
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Login to see wholesale prices
          </p>
          <Link href="/seller/login" className="text-primary text-sm font-medium hover:underline">
            LOGIN FOR WHOLESALE
          </Link>
        </div>

        <Separator />

        {/* Quantity & Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                disabled={!product.inStock || quantity >= product.stockQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWishlistToggle}
            >
              <Heart className={cn("h-5 w-5", inWishlist && "fill-red-500 text-red-500")} />
            </Button>
          </div>
        </div>

        <Separator />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <Truck className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over ₹999</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Secure Payment</p>
              <p className="text-xs text-muted-foreground">100% secure</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <RotateCcw className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Easy Returns</p>
              <p className="text-xs text-muted-foreground">7 day return</p>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Share:</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium">Tags:</span>
            {product.tags.map((tag) => (
              <Link
                key={tag}
                href={`/shop?tag=${tag}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Product Tabs - Full Width */}
      <div className="lg:col-span-2 mt-8">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additional">Additional Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="additional" className="mt-4">
            <div className="space-y-2">
              <div className="flex border-b py-2">
                <span className="w-40 font-medium">SKU</span>
                <span>{product.sku}</span>
              </div>
              <div className="flex border-b py-2">
                <span className="w-40 font-medium">Category</span>
                <span className="capitalize">{product.category.replace('-', ' ')}</span>
              </div>
              {product.subcategory && (
                <div className="flex border-b py-2">
                  <span className="w-40 font-medium">Subcategory</span>
                  <span className="capitalize">{product.subcategory.replace('-', ' ')}</span>
                </div>
              )}
              <div className="flex border-b py-2">
                <span className="w-40 font-medium">Stock Status</span>
                <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
