import { storeInfo } from '@/lib/data'

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>Shipping Methods & Delivery Times</h2>
          
          <h3>Standard Shipping</h3>
          <ul>
            <li><strong>Delivery Time:</strong> 3-7 business days</li>
            <li><strong>Cost:</strong> ₹49 for orders under ₹999</li>
            <li><strong>Free:</strong> On orders above ₹999</li>
          </ul>

          <h3>Express Shipping</h3>
          <ul>
            <li><strong>Delivery Time:</strong> 1-3 business days</li>
            <li><strong>Cost:</strong> ₹149</li>
            <li>Available in select cities only</li>
          </ul>

          <h2>Shipping Coverage</h2>
          <p>
            We deliver to all pin codes across India. However, delivery times may vary based on:
          </p>
          <ul>
            <li>Metro cities: Fastest delivery</li>
            <li>Tier 2 cities: 4-5 business days</li>
            <li>Remote areas: 5-7 business days</li>
            <li>Northeast & island territories: May take additional time</li>
          </ul>

          <h2>Order Processing</h2>
          <p>
            Orders are processed within 1-2 business days after payment confirmation:
          </p>
          <ul>
            <li>Orders placed before 2 PM IST are shipped the same day</li>
            <li>Orders placed after 2 PM IST are shipped the next business day</li>
            <li>Weekends and holidays may affect processing times</li>
            <li>Custom/personalized orders may require additional processing time</li>
          </ul>

          <h2>Order Tracking</h2>
          <p>Once your order is shipped:</p>
          <ul>
            <li>You&apos;ll receive a confirmation email with tracking details</li>
            <li>SMS notifications will be sent to your registered mobile number</li>
            <li>Track your order in &quot;My Orders&quot; section of your account</li>
            <li>You can also track directly on the courier partner&apos;s website</li>
          </ul>

          <h2>Shipping Partners</h2>
          <p>
            We work with reliable courier partners to ensure safe and timely delivery:
          </p>
          <ul>
            <li>Delhivery</li>
            <li>BlueDart</li>
            <li>DTDC</li>
            <li>India Post (for remote areas)</li>
          </ul>

          <h2>Packaging</h2>
          <p>
            All products are carefully packed to ensure they reach you in perfect condition:
          </p>
          <ul>
            <li>Fragile items are packed with extra protection</li>
            <li>Photo frames include corner protectors</li>
            <li>Gift wrapping available for ₹49 extra</li>
            <li>Eco-friendly packaging materials used where possible</li>
          </ul>

          <h2>Delivery Instructions</h2>
          <p>To ensure smooth delivery:</p>
          <ul>
            <li>Provide accurate and complete address including landmark</li>
            <li>Include an alternate phone number if possible</li>
            <li>Ensure someone is available to receive the package</li>
            <li>Check the package for damage before signing</li>
          </ul>

          <h2>Failed Delivery Attempts</h2>
          <p>If delivery cannot be completed:</p>
          <ul>
            <li>The courier will make up to 3 delivery attempts</li>
            <li>You&apos;ll be contacted before each attempt</li>
            <li>After 3 failed attempts, the package will be returned to us</li>
            <li>Re-shipping charges may apply for returned packages</li>
          </ul>

          <h2>Shipping Restrictions</h2>
          <p>Some items may have shipping restrictions:</p>
          <ul>
            <li>Hazardous materials cannot be shipped</li>
            <li>Some items may not be available for Cash on Delivery</li>
            <li>International shipping is currently not available</li>
          </ul>

          <h2>Contact Us</h2>
          <p>For shipping-related queries:</p>
          <ul>
            <li>Email: {storeInfo.email}</li>
            <li>Phone: {storeInfo.phone}</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
