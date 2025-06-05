import { Product, Category, User, Order, Review, WishlistItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Products
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  return handleResponse(response);
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return handleResponse(response);
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products/featured`);
  return handleResponse(response);
};

// Categories
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL}/categories`);
  return handleResponse(response);
};

// Cart
export const getCart = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/cart`, {
    credentials: 'include',
  });
  return handleResponse(response);
};

export const addToCart = async (productId: number, quantity: number): Promise<void> => {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ productId, quantity }),
  });
  return handleResponse(response);
};

export const updateCartItem = async (productId: number, quantity: number): Promise<void> => {
  const response = await fetch(`${API_URL}/cart/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ quantity }),
  });
  return handleResponse(response);
};

export const removeFromCart = async (productId: number): Promise<void> => {
  const response = await fetch(`${API_URL}/cart/${productId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return handleResponse(response);
};

// Authentication
export const login = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const register = async (name: string, email: string, password: string): Promise<User> => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  });
  return handleResponse(response);
};

export const logout = async (): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  return handleResponse(response);
};

// Orders
export const createOrder = async (items: Product[], shippingAddress: any): Promise<Order> => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ items, shippingAddress }),
  });
  return handleResponse(response);
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${API_URL}/orders`, {
    credentials: 'include',
  });
  return handleResponse(response);
};

// Reviews
export const getProductReviews = async (productId: number): Promise<Review[]> => {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`);
  return handleResponse(response);
};

export const createReview = async (productId: number, rating: number, comment: string): Promise<Review> => {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ rating, comment }),
  });
  return handleResponse(response);
};

// Wishlist
export const getWishlist = async (): Promise<WishlistItem[]> => {
  const response = await fetch(`${API_URL}/wishlist`, {
    credentials: 'include',
  });
  return handleResponse(response);
};

export const addToWishlist = async (productId: number): Promise<void> => {
  const response = await fetch(`${API_URL}/wishlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ productId }),
  });
  return handleResponse(response);
};

export const removeFromWishlist = async (productId: number): Promise<void> => {
  const response = await fetch(`${API_URL}/wishlist/${productId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return handleResponse(response);
}; 