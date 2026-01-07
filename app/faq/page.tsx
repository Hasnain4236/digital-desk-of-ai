"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can use this number to track your order on our website or the courier's website."
      },
      {
        question: "What are the shipping charges?",
        answer: "We offer free shipping on orders above ₹999. For orders below ₹999, a flat shipping fee of ₹49 is applicable."
      },
      {
        question: "How long does delivery take?",
        answer: "Standard delivery takes 3-7 business days depending on your location. Express delivery (additional charges apply) delivers within 1-3 business days."
      },
      {
        question: "Do you deliver to all locations?",
        answer: "Yes, we deliver across India. However, delivery times may vary based on your location."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We accept returns within 7 days of delivery for unused products in original packaging. Custom-made items and certain product categories are non-returnable."
      },
      {
        question: "How do I initiate a return?",
        answer: "You can initiate a return by going to 'My Orders' in your account, selecting the item, and clicking 'Return Item'. Our team will guide you through the process."
      },
      {
        question: "When will I receive my refund?",
        answer: "Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method."
      },
      {
        question: "Can I exchange an item?",
        answer: "Yes, exchanges are available for most items. You can request an exchange for a different size or variant within 7 days of delivery."
      }
    ]
  },
  {
    category: "Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards (Visa, Mastercard, RuPay), UPI, net banking, wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery."
      },
      {
        question: "Is Cash on Delivery available?",
        answer: "Yes, Cash on Delivery is available for orders up to ₹5,000. A small COD fee may apply."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, all transactions are encrypted and processed through secure payment gateways. We never store your card details on our servers."
      },
      {
        question: "Can I pay in installments?",
        answer: "Yes, EMI options are available on select cards for orders above ₹3,000. You can check available EMI plans during checkout."
      }
    ]
  },
  {
    category: "Products",
    questions: [
      {
        question: "Are all products original?",
        answer: "Yes, we source all our products directly from manufacturers and authorized distributors. Every product is 100% authentic."
      },
      {
        question: "Do you offer gift wrapping?",
        answer: "Yes, we offer premium gift wrapping service for an additional ₹49. You can select this option during checkout."
      },
      {
        question: "Can I customize products?",
        answer: "Many of our products can be customized with names, photos, or messages. Look for the 'Customize' option on product pages."
      },
      {
        question: "What if I receive a damaged product?",
        answer: "If you receive a damaged or defective product, please contact us within 24 hours with photos. We'll arrange for a free replacement or refund."
      }
    ]
  },
  {
    category: "Account",
    questions: [
      {
        question: "How do I create an account?",
        answer: "Click on 'Sign Up' at the top of the page and fill in your details. You can also sign up using your Google account."
      },
      {
        question: "I forgot my password. What should I do?",
        answer: "Click on 'Forgot Password' on the login page and enter your email. We'll send you a link to reset your password."
      },
      {
        question: "Can I order without creating an account?",
        answer: "Yes, you can checkout as a guest. However, creating an account lets you track orders, save addresses, and earn rewards."
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, orders, and services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-10">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const itemId = `${catIndex}-${index}`
                  const isOpen = openItems.includes(itemId)
                  
                  return (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium pr-4">{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 flex-shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200",
                          isOpen ? "max-h-96" : "max-h-0"
                        )}
                      >
                        <p className="p-4 pt-0 text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  )
}
