import { storeInfo } from '@/lib/data'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>1. Introduction</h2>
          <p>
            At {storeInfo.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information (processed securely through payment gateways)</li>
            <li>Account login credentials</li>
            <li>Order history and preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Provide customer support</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Shipping and logistics partners to deliver your orders</li>
            <li>Payment processors to handle transactions</li>
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>5. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Remember your preferences</li>
            <li>Keep items in your shopping cart</li>
            <li>Analyze website traffic and usage</li>
            <li>Personalize your experience</li>
          </ul>
          <p>You can manage cookie preferences through your browser settings.</p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information, including:
          </p>
          <ul>
            <li>SSL encryption for data transmission</li>
            <li>Secure payment processing</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2>8. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
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
