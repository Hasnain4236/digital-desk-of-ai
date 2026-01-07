import { storeInfo } from '@/lib/data'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>1. Introduction</h2>
          <p>
            Welcome to {storeInfo.name}. These Terms and Conditions govern your use of our website and the purchase of products from our online store. By accessing or using our website, you agree to be bound by these terms.
          </p>

          <h2>2. Definitions</h2>
          <ul>
            <li><strong>&quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;</strong> refers to {storeInfo.name}</li>
            <li><strong>&quot;You&quot;, &quot;Your&quot;</strong> refers to the user or customer</li>
            <li><strong>&quot;Website&quot;</strong> refers to our online store</li>
            <li><strong>&quot;Products&quot;</strong> refers to items available for purchase</li>
          </ul>

          <h2>3. Account Registration</h2>
          <p>
            To make purchases, you may need to create an account. You are responsible for:
          </p>
          <ul>
            <li>Providing accurate and complete information</li>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
          </ul>

          <h2>4. Products and Pricing</h2>
          <p>
            We strive to display accurate product information and pricing. However:
          </p>
          <ul>
            <li>Colors may vary slightly due to display settings</li>
            <li>Prices are subject to change without notice</li>
            <li>We reserve the right to limit quantities</li>
            <li>We reserve the right to refuse or cancel any order</li>
          </ul>

          <h2>5. Orders and Payment</h2>
          <p>
            By placing an order, you agree to:
          </p>
          <ul>
            <li>Provide valid payment information</li>
            <li>Pay the total amount including applicable taxes and shipping</li>
            <li>Ensure the delivery address is accurate</li>
          </ul>

          <h2>6. Shipping and Delivery</h2>
          <p>
            Shipping policies include:
          </p>
          <ul>
            <li>Free shipping on orders above ₹999</li>
            <li>Standard delivery within 3-7 business days</li>
            <li>Delivery times may vary based on location</li>
            <li>Risk of loss transfers upon delivery to the carrier</li>
          </ul>

          <h2>7. Returns and Refunds</h2>
          <p>
            Our return policy allows returns within 7 days of delivery for:
          </p>
          <ul>
            <li>Unused products in original packaging</li>
            <li>Products with manufacturing defects</li>
            <li>Damaged items (reported within 24 hours)</li>
          </ul>
          <p>
            Non-returnable items include:
          </p>
          <ul>
            <li>Customized or personalized products</li>
            <li>Perishable goods</li>
            <li>Items marked as &quot;Final Sale&quot;</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including images, text, logos, and designs, is our property or licensed to us. You may not reproduce, distribute, or use any content without prior written consent.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use constitutes acceptance of the modified terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions about these terms, please contact us at:
          </p>
          <ul>
            <li>Email: {storeInfo.email}</li>
            <li>Phone: {storeInfo.phone}</li>
            <li>Address: {storeInfo.address}</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
