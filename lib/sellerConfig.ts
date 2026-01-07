// Seller credentials configuration
// In production, this should be stored securely in Firebase
export const SELLER_CREDENTIALS = {
  email: "Hasnain@rashid.com",
  password: "Hasnain@4236"
};

export const isSellerEmail = (email: string): boolean => {
  return email.toLowerCase() === SELLER_CREDENTIALS.email.toLowerCase();
};
