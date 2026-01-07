import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_6otaspe";
const EMAILJS_TEMPLATE_ID = "template_rvk99y8"; // For owner notification
const EMAILJS_PUBLIC_KEY = "mYgybAxQpjXS24j_j";

// Owner email addresses to receive notifications
const OWNER_EMAILS = [
  "4236.hasnain.11a@gmail.com",
  "digitaldeskofai@gmail.com"
];

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetails {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  items: OrderItem[];
  total: number;
  paymentMethod: string;
}

// Format items for email
const formatOrderItems = (items: OrderItem[]): string => {
  return items.map(item => 
    `• ${item.name} x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
  ).join('\n');
};

// Send ALL order emails (to owners + customer)
export const sendOrderNotificationEmail = async (orderDetails: OrderDetails): Promise<boolean> => {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const orderDate = new Date().toLocaleString('en-IN', { 
      dateStyle: 'full', 
      timeStyle: 'short' 
    });

    // 1. Send to OWNERS (you)
    const ownerParams = {
      to_email: OWNER_EMAILS.join(', '),
      order_id: orderDetails.orderId,
      customer_name: orderDetails.customerName,
      customer_email: orderDetails.customerEmail,
      customer_phone: orderDetails.customerPhone,
      shipping_address: orderDetails.shippingAddress,
      order_items: formatOrderItems(orderDetails.items),
      order_total: `₹${orderDetails.total.toLocaleString('en-IN')}`,
      payment_method: orderDetails.paymentMethod === 'cod' ? 'Cash on Delivery' : orderDetails.paymentMethod,
      order_date: orderDate,
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, ownerParams);
    console.log('Owner notification email sent!');

    // 2. Send to CUSTOMER (the person who ordered)
    if (orderDetails.customerEmail) {
      const customerParams = {
        to_email: orderDetails.customerEmail,
        order_id: orderDetails.orderId,
        customer_name: orderDetails.customerName,
        customer_email: orderDetails.customerEmail,
        customer_phone: orderDetails.customerPhone,
        shipping_address: orderDetails.shippingAddress,
        order_items: formatOrderItems(orderDetails.items),
        order_total: `₹${orderDetails.total.toLocaleString('en-IN')}`,
        payment_method: orderDetails.paymentMethod === 'cod' ? 'Cash on Delivery' : orderDetails.paymentMethod,
        order_date: orderDate,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, customerParams);
      console.log('Customer confirmation email sent!');
    }

    return true;
  } catch (error) {
    console.error('Failed to send order email:', error);
    return false;
  }
};
