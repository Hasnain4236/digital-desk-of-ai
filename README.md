# Digital Desk of AI - E-Commerce Store

A modern e-commerce website for gifts, stationery, photo frames, and decorations built with Next.js 14, Shadcn UI, and Firebase.

## Features

- 🛍️ **Product Catalog** - Browse products by category with filtering and sorting
- 🛒 **Shopping Cart** - Add/remove items, update quantities, apply coupons
- ❤️ **Wishlist** - Save favorite products for later
- 👤 **Customer Accounts** - Register, login, manage profile
- 🏪 **Seller Dashboard** - Add, edit, delete products with stock management
- 📱 **Responsive Design** - Works beautifully on all devices
- 🎨 **Modern UI** - Built with Shadcn UI components and Tailwind CSS
- 🔥 **Firebase Integration** - Authentication, Firestore database, Storage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **State Management**: Zustand
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Hosting**: Firebase Hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digital_desk_of_ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Enable Storage

4. Configure environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Update `.firebaserc`:
   - Replace `your-firebase-project-id` with your actual project ID

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
digital_desk_of_ai/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── login/             # Customer login
│   ├── product/[id]/      # Product detail page
│   ├── privacy-policy/    # Privacy policy
│   ├── register/          # Customer registration
│   ├── return-policy/     # Return policy
│   ├── seller/            # Seller pages
│   │   ├── login/         # Seller login
│   │   └── dashboard/     # Seller dashboard
│   ├── shipping-policy/   # Shipping policy
│   ├── shop/              # Product listing
│   ├── terms-and-conditions/
│   ├── wishlist/          # Wishlist page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer
│   ├── product/           # ProductCard, ProductDetail
│   └── ui/                # Shadcn UI components
├── lib/
│   ├── data.ts           # Sample data (categories, products)
│   ├── firebase.ts       # Firebase initialization
│   ├── store.ts          # Zustand stores
│   ├── types.ts          # TypeScript interfaces
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── firebase.json         # Firebase hosting config
├── firestore.rules       # Firestore security rules
├── storage.rules         # Storage security rules
└── ...
```

## Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
firebase deploy
```

### Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

### Deploy Storage Rules

```bash
firebase deploy --only storage:rules
```

## Seller Dashboard

Access the seller dashboard at `/seller/login` to:
- Add new products with photos, prices, and stock status
- Edit existing products
- Toggle product availability (in stock/out of stock)
- Mark products as featured
- View and manage orders

## Customization

### Adding Categories

Edit `lib/data.ts` to add or modify categories:

```typescript
export const categories: Category[] = [
  {
    id: '1',
    name: 'Photo Frames',
    slug: 'photo-frames',
    image: '/images/categories/frames.jpg',
    subcategories: ['Wall Frames', 'Table Frames', 'Collage Frames']
  },
  // Add more...
]
```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors are defined as CSS variables in `globals.css`

### Adding Images

1. Place product images in Firebase Storage
2. Use the Storage URL in product data
3. Or place static images in `/public/images/`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Support

For questions or support, please contact:
- Email: contact@digitaldeskofai.com

## License

This project is private and proprietary.
