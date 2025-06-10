
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  stock: number;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
  color: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface CartItem {
  id: number;
  productId: number;
  userId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Review {
  id: number;
  productId: number;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: User;
}

export interface WishlistItem {
  id: number;
  productId: number;
  userId: string;
  addedAt: string;
  product: Product;
}
