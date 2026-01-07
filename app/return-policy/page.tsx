import { storeInfo } from '@/lib/data'

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Return & Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>Our Return Promise</h2>
          <p>
            At {storeInfo.name}, we want you to be completely satisfied with your purchase. If you&apos;re not happy with your order, we&apos;re here to help.
          </p>

          <h2>Return Eligibility</h2>
          <h3>You Can Return If:</h3>
          <ul>
            <li>Item is unused and in original packaging</li>
            <li>Return is initiated within 7 days of delivery</li>
            <li>All tags and labels are intact</li>
            <li>Item is not damaged by the customer</li>
          </ul>

          <h3>Non-Returnable Items:</h3>
          <ul>
            <li>Customized or personalized products</li>
            <li>Items marked as &quot;Final Sale&quot;</li>
            <li>Gift cards and vouchers</li>
            <li>Intimate items for hygiene reasons</li>
            <li>Products with broken seals (where applicable)</li>
            <li>Downloadable products</li>
          </ul>

          <h2>How to Initiate a Return</h2>
          <ol>
            <li>Log in to your account and go to &quot;My Orders&quot;</li>
            <li>Select the order containing the item you want to return</li>
            <li>Click &quot;Return Item&quot; and select the reason</li>
            <li>Choose refund method (original payment method or store credit)</li>
            <li>Pack the item securely in original packaging</li>
            <li>Our courier partner will pick up the item</li>
          </ol>

          <h2>Return Shipping</h2>
          <ul>
            <li><strong>Defective/Wrong Items:</strong> Free return pickup</li>
            <li><strong>Change of Mind:</strong> Return shipping charges of ₹49 apply</li>
            <li>We arrange pickup in most serviceable areas</li>
            <li>For non-serviceable areas, you may need to ship the item yourself</li>
          </ul>

          <h2>Refund Process</h2>
          <h3>Timeline:</h3>
          <ul>
            <li>Pickup: 1-3 business days after return request</li>
            <li>Quality Check: 2-3 business days after we receive the item</li>
            <li>Refund Processing: 3-5 business days after approval</li>
            <li>Bank Credit: Additional 3-7 days depending on your bank</li>
          </ul>

          <h3>Refund Methods:</h3>
          <ul>
            <li><strong>Original Payment Method:</strong> Credit/debit card, UPI, net banking</li>
            <li><strong>Store Credit:</strong> Instant credit to your account wallet</li>
            <li><strong>COD Orders:</strong> Refund via bank transfer (NEFT/IMPS)</li>
          </ul>

          <h2>Exchange Policy</h2>
          <p>
            We offer exchanges for size/variant within 7 days of delivery:
          </p>
          <ul>
            <li>Subject to availability of the replacement item</li>
            <li>No additional charges if exchanging for same price item</li>
            <li>Price difference will be charged/refunded for different price items</li>
          </ul>

          <h2>Damaged or Defective Items</h2>
          <p>
            If you receive a damaged or defective product:
          </p>
          <ul>
            <li>Report within 24 hours of delivery</li>
            <li>Take photos of the damaged item and packaging</li>
            <li>Contact our support team immediately</li>
            <li>We&apos;ll arrange free pickup and send a replacement</li>
          </ul>

          <h2>Wrong Item Received</h2>
          <p>
            If you received the wrong item:
          </p>
          <ul>
            <li>Do not open or use the item</li>
            <li>Report within 24 hours of delivery</li>
            <li>We&apos;ll ship the correct item and arrange pickup of the wrong one</li>
          </ul>

          <h2>Cancellation Policy</h2>
          <p>
            You can cancel your order before it&apos;s shipped:
          </p>
          <ul>
            <li>Full refund for prepaid orders</li>
            <li>COD orders can be cancelled without any charges</li>
            <li>Once shipped, cancellation is not possible (use return instead)</li>
          </ul>

          <h2>Special Cases</h2>
          <h3>Bulk Orders:</h3>
          <p>
            For bulk orders (10+ items), please contact us before ordering to discuss return terms.
          </p>

          <h3>Sale Items:</h3>
          <p>
            Items purchased during sales are eligible for return unless marked as &quot;Final Sale.&quot;
          </p>

          <h2>Contact for Returns</h2>
          <p>Need help with your return? Contact us:</p>
          <ul>
            <li>Email: {storeInfo.email}</li>
            <li>Phone: {storeInfo.phone}</li>
            <li>WhatsApp: Available on the website</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
