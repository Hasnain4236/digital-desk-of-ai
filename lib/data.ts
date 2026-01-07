import { Category, Product, Slider } from './types'

// Categories Data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Batteries & Chargers',
    slug: 'batteries-chargers',
    image: '/images/categories/batteries.jpg',
    order: 1
  },
  {
    id: '2',
    name: 'Camera & Accessories',
    slug: 'camera-accessories',
    image: '/images/categories/camera.jpg',
    order: 2
  },
  {
    id: '3',
    name: 'Corporate Gifting',
    slug: 'corporate-gifting',
    image: '/images/categories/corporate.jpg',
    order: 3
  },
  {
    id: '4',
    name: 'Customisation',
    slug: 'customisation',
    image: '/images/categories/customisation.jpg',
    order: 4,
    subcategories: [
      { id: '4-1', name: 'Digital Printing', slug: 'digital-printing', parentId: '4' },
      { id: '4-2', name: 'LED Frames', slug: 'led-frames', parentId: '4' },
      { id: '4-3', name: 'Mahraaz Cards', slug: 'mahraaz-cards', parentId: '4' },
      { id: '4-4', name: 'Mugs', slug: 'mugs', parentId: '4' },
      { id: '4-5', name: 'Collage Frames', slug: 'collage-frames', parentId: '4' },
      { id: '4-6', name: 'Cushions', slug: 'cushions', parentId: '4' },
      { id: '4-7', name: 'Key Rings', slug: 'key-rings', parentId: '4' },
      { id: '4-8', name: 'Sublimation Products', slug: 'sublimation-products', parentId: '4' },
      { id: '4-9', name: 'Fancy Frames', slug: 'fancy-frames', parentId: '4' }
    ]
  },
  {
    id: '5',
    name: 'Digital Storage',
    slug: 'digital-storage',
    image: '/images/categories/storage.jpg',
    order: 5
  },
  {
    id: '6',
    name: 'Home Decor',
    slug: 'home-decor',
    image: '/images/categories/homedecor.jpg',
    order: 6
  },
  {
    id: '7',
    name: 'Ink & Toner',
    slug: 'ink-toner',
    image: '/images/categories/ink.jpg',
    order: 7
  },
  {
    id: '8',
    name: 'Invitation Cards',
    slug: 'invitation-cards',
    image: '/images/categories/invitation.jpg',
    order: 8,
    subcategories: [
      { id: '8-1', name: 'Wedding Cards', slug: 'wedding-cards', parentId: '8' },
      { id: '8-2', name: 'Birthday Cards', slug: 'birthday-cards', parentId: '8' },
      { id: '8-3', name: 'Event Cards', slug: 'event-cards', parentId: '8' }
    ]
  },
  {
    id: '9',
    name: 'Machines',
    slug: 'machines',
    image: '/images/categories/machines.jpg',
    order: 9
  },
  {
    id: '10',
    name: 'Mementos',
    slug: 'mementos',
    image: '/images/categories/mementos.jpg',
    order: 10
  },
  {
    id: '11',
    name: 'Packaging',
    slug: 'packaging',
    image: '/images/categories/packaging.jpg',
    order: 11
  },
  {
    id: '12',
    name: 'Photo Albums',
    slug: 'photo-albums',
    image: '/images/categories/albums.jpg',
    order: 12
  },
  {
    id: '13',
    name: 'Photo Frames',
    slug: 'photo-frames',
    image: '/images/categories/frames.jpg',
    order: 13,
    subcategories: [
      { id: '13-1', name: 'Wooden Frames', slug: 'wooden-frames', parentId: '13' },
      { id: '13-2', name: 'Metal Frames', slug: 'metal-frames', parentId: '13' },
      { id: '13-3', name: 'Acrylic Frames', slug: 'acrylic-frames', parentId: '13' },
      { id: '13-4', name: 'Collage Frames', slug: 'collage-frames', parentId: '13' },
      { id: '13-5', name: 'LED Photo Frames', slug: 'led-photo-frames', parentId: '13' }
    ]
  },
  {
    id: '14',
    name: 'Printing',
    slug: 'printing',
    image: '/images/categories/printing.jpg',
    order: 14,
    subcategories: [
      { id: '14-1', name: 'Silver Halide Printing', slug: 'silver-halide-printing', parentId: '14' },
      { id: '14-2', name: 'Digital Printing', slug: 'digital-printing', parentId: '14' },
      { id: '14-3', name: 'Canvas Printing', slug: 'canvas-printing', parentId: '14' }
    ]
  },
  {
    id: '15',
    name: 'Resin Art',
    slug: 'resin-art',
    image: '/images/categories/resin.jpg',
    order: 15
  },
  {
    id: '16',
    name: 'Stationery',
    slug: 'stationery',
    image: '/images/categories/stationery.jpg',
    order: 16
  },
  {
    id: '17',
    name: 'Calligraphy Frames',
    slug: 'calligraphy-frames',
    image: '/images/categories/calligraphy.jpg',
    order: 17
  }
]

// Sample Products Data
export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Digiplus Smart LCD Cell Charger',
    description: 'High-quality smart LCD cell charger with multiple charging modes and overcharge protection.',
    price: 1299,
    comparePrice: 1599,
    images: ['/images/products/charger1.jpg'],
    category: 'batteries-chargers',
    sku: 'SKU-1757965983-428',
    inStock: true,
    stockQuantity: 50,
    tags: ['charger', 'lcd', 'smart'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'DSLR Battery C EN-EL 3e',
    description: 'Compatible replacement battery for Nikon DSLR cameras. Long-lasting performance.',
    price: 899,
    comparePrice: 1199,
    images: ['/images/products/battery1.jpg'],
    category: 'batteries-chargers',
    sku: 'SKU-1757965984-485',
    inStock: true,
    stockQuantity: 30,
    tags: ['battery', 'nikon', 'dslr'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Feather-themed Wall Decor Frame',
    description: 'Beautiful feather-themed wall decor frame perfect for home decoration.',
    price: 1599,
    comparePrice: 1999,
    images: ['/images/products/frame1.jpg'],
    category: 'home-decor',
    sku: 'SKU-1757965991-864',
    inStock: true,
    stockQuantity: 25,
    tags: ['frame', 'wall decor', 'feather'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: '2032 Dura Cell',
    description: 'High-quality Duracell 2032 lithium coin battery. Long-lasting power.',
    price: 199,
    images: ['/images/products/cell1.jpg'],
    category: 'batteries-chargers',
    sku: 'SKU-1757965983-420',
    inStock: true,
    stockQuantity: 100,
    tags: ['battery', 'coin', 'duracell'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'Sublimation Ink Epson T49P3 BC',
    description: 'Premium sublimation ink compatible with Epson printers. Vibrant colors.',
    price: 799,
    comparePrice: 999,
    images: ['/images/products/ink1.jpg'],
    category: 'ink-toner',
    sku: 'SKU-1757965982-330',
    inStock: true,
    stockQuantity: 45,
    tags: ['ink', 'sublimation', 'epson'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    name: 'Epson Ink 057 L8050 Colour BC',
    description: 'Original Epson 057 ink for L8050 printer. Premium quality colors.',
    price: 1299,
    images: ['/images/products/ink2.jpg'],
    category: 'ink-toner',
    sku: 'SKU-1757965982-320',
    inStock: true,
    stockQuantity: 35,
    tags: ['ink', 'epson', 'color'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '7',
    name: '20 L AS Album',
    description: 'Premium 20-page photo album with beautiful leather cover.',
    price: 1899,
    comparePrice: 2299,
    images: ['/images/products/album1.jpg'],
    category: 'photo-albums',
    sku: 'SKU-1757965982-346',
    inStock: true,
    stockQuantity: 20,
    tags: ['album', 'photo', 'leather'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8',
    name: 'Epson Ink 003 L3110 Colour BC',
    description: 'Genuine Epson 003 ink for L3110 series printers.',
    price: 449,
    images: ['/images/products/ink3.jpg'],
    category: 'ink-toner',
    sku: 'SKU-1757965982-316',
    inStock: true,
    stockQuantity: 60,
    tags: ['ink', 'epson', 'l3110'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '9',
    name: 'DSLR Battery Charger BC',
    description: 'Universal DSLR battery charger compatible with multiple camera brands.',
    price: 699,
    comparePrice: 899,
    images: ['/images/products/charger2.jpg'],
    category: 'batteries-chargers',
    sku: 'SKU-1757965983-429',
    inStock: true,
    stockQuantity: 40,
    tags: ['charger', 'dslr', 'universal'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '10',
    name: 'Custom Photo Mug',
    description: 'Personalized ceramic mug with your favorite photo. Perfect gift.',
    price: 349,
    comparePrice: 449,
    images: ['/images/products/mug1.jpg'],
    category: 'customisation',
    subcategory: 'mugs',
    sku: 'SKU-1757965990-101',
    inStock: true,
    stockQuantity: 100,
    tags: ['mug', 'custom', 'gift', 'photo'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '11',
    name: 'LED Photo Frame 8x10',
    description: 'Elegant LED backlit photo frame. Perfect for displaying memories.',
    price: 999,
    comparePrice: 1299,
    images: ['/images/products/ledframe1.jpg'],
    category: 'photo-frames',
    subcategory: 'led-photo-frames',
    sku: 'SKU-1757965991-201',
    inStock: true,
    stockQuantity: 30,
    tags: ['frame', 'led', 'photo'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '12',
    name: 'Custom Photo Cushion',
    description: 'Soft cushion with your custom photo printed. Great for home decor.',
    price: 599,
    comparePrice: 799,
    images: ['/images/products/cushion1.jpg'],
    category: 'customisation',
    subcategory: 'cushions',
    sku: 'SKU-1757965990-102',
    inStock: true,
    stockQuantity: 50,
    tags: ['cushion', 'custom', 'photo', 'gift'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '13',
    name: 'Wedding Invitation Card Set',
    description: 'Elegant wedding invitation card set with envelopes. Customizable design.',
    price: 2999,
    comparePrice: 3999,
    images: ['/images/products/wedding1.jpg'],
    category: 'invitation-cards',
    subcategory: 'wedding-cards',
    sku: 'SKU-1757965992-301',
    inStock: true,
    stockQuantity: 25,
    tags: ['wedding', 'invitation', 'card'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '14',
    name: 'Wooden Photo Frame Collage',
    description: 'Beautiful wooden collage frame for multiple photos. Wall mountable.',
    price: 1499,
    comparePrice: 1899,
    images: ['/images/products/collage1.jpg'],
    category: 'photo-frames',
    subcategory: 'collage-frames',
    sku: 'SKU-1757965991-202',
    inStock: true,
    stockQuantity: 20,
    tags: ['frame', 'wooden', 'collage'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '15',
    name: 'Photo Keyring Set',
    description: 'Custom photo keyring set of 3. Perfect personalized gift.',
    price: 299,
    comparePrice: 399,
    images: ['/images/products/keyring1.jpg'],
    category: 'customisation',
    subcategory: 'key-rings',
    sku: 'SKU-1757965990-103',
    inStock: true,
    stockQuantity: 80,
    tags: ['keyring', 'custom', 'photo', 'gift'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '16',
    name: 'Resin Art Wall Clock',
    description: 'Handcrafted resin art wall clock. Unique piece for home decor.',
    price: 2499,
    comparePrice: 2999,
    images: ['/images/products/resin1.jpg'],
    category: 'resin-art',
    sku: 'SKU-1757965993-401',
    inStock: true,
    stockQuantity: 10,
    tags: ['resin', 'clock', 'art', 'decor'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

// Sliders Data
export const sliders: Slider[] = [
  {
    id: '1',
    title: 'Customize Products',
    subtitle: 'Customize Now - 100% Satisfaction Guaranteed',
    image: '/images/sliders/slider1.jpg',
    link: '/shop?category=customisation',
    badge: 'Hot',
    order: 1,
    active: true
  },
  {
    id: '2',
    title: 'Quality Gifts',
    subtitle: 'Fully Customizable Products for Every Occasion',
    image: '/images/sliders/slider2.jpg',
    link: '/shop',
    badge: '20% OFF',
    order: 2,
    active: true
  },
  {
    id: '3',
    title: 'Wedding Special',
    subtitle: 'Couple Special - Wedding Specials for Couples',
    image: '/images/sliders/slider3.jpg',
    link: '/shop?category=invitation-cards',
    badge: 'New Arrival',
    order: 3,
    active: true
  }
]

// Store Info
export const storeInfo = {
  name: 'Digital Desk of AI',
  tagline: 'Your One-Stop Gift & Stationery Shop',
  address: 'Near CISF Quarters, Gingal Uri, Baramulla, J&K',
  phone: '+91 7051627831',
  phones: ['+91 7051627831', '+91 9103434955', '+91 6006688437', '+91 6006343803'],
  email: 'digitaldeskofai@gmail.com',
  hours: 'Mon - Sun: 8AM - 10PM',
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1LAPE5DEpy/',
    instagram: 'https://www.instagram.com/digital_desk_of_ai?igsh=Y2w5bHZhMjIxYjhx'
  },
  mapUrl: 'https://goo.gl/maps/kpAutKq9qRnF12y99?g_st=aw'
}
