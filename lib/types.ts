// Product Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  comparePrice?: number
  images: string[]
  category: string
  subcategory?: string
  sku: string
  inStock: boolean
  stockQuantity: number
  tags: string[]
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

// Category Types
export interface Category {
  id: string
  name: string
  slug: string
  image?: string
  description?: string
  subcategories?: Subcategory[]
  order: number
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  parentId: string
}

// User Types
export interface User {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  role: 'customer' | 'seller' | 'admin'
  phone?: string
  address?: Address
  createdAt: Date
}

export interface Address {
  street: string
  city: string
  state: string
  pincode: string
  country: string
}

// Cart Types
export interface CartItem {
  productId: string
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

// Order Types
export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed'
  createdAt: Date
  updatedAt: Date
}

// Wishlist Types
export interface WishlistItem {
  productId: string
  product: Product
  addedAt: Date
}

// Slider/Banner Types
export interface Slider {
  id: string
  title: string
  subtitle: string
  image: string
  link: string
  badge?: string
  order: number
  active: boolean
}
