
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';
import { getCart, addToCart, updateCartItem, removeFromCart } from '../services/api';

interface CartContextType {
  items: CartItem[];
  loading: boolean;
  error: string | null;
  addItem: (product: Product, quantity: number) => Promise<void>;
  updateItem: (productId: number, quantity: number) => Promise<void>;
  removeItem: (productId: number) => Promise<void>;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load cart items on mount
    const loadCart = async () => {
      try {
        const cartItems = await getCart();
        setItems(cartItems as CartItem[]);
      } catch (err) {
        console.error('Failed to load cart:', err);
        setError(err instanceof Error ? err.message : 'Failed to load cart');
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  const addItem = async (product: Product, quantity: number) => {
    try {
      setError(null);
      await addToCart(product.id, quantity);
      const cartItems = await getCart();
      setItems(cartItems as CartItem[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to cart');
      throw err;
    }
  };

  const updateItem = async (productId: number, quantity: number) => {
    try {
      setError(null);
      await updateCartItem(productId, quantity);
      const cartItems = await getCart();
      setItems(cartItems as CartItem[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update cart item');
      throw err;
    }
  };

  const removeItem = async (productId: number) => {
    try {
      setError(null);
      await removeFromCart(productId);
      const cartItems = await getCart();
      setItems(cartItems as CartItem[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item from cart');
      throw err;
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const value = {
    items,
    loading,
    error,
    addItem,
    updateItem,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
