
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWishlist, removeFromWishlist } from '../services/api';
import { useCart } from '../contexts/CartContext';
import { WishlistItem } from '../types';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        setLoading(true);
        const items = await getWishlist();
        setWishlistItems(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load wishlist');
        console.error('Error loading wishlist:', err);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, []);

  const handleRemoveFromWishlist = async (productId: number) => {
    try {
      await removeFromWishlist(productId);
      setWishlistItems((prev) =>
        prev.filter((item) => item.product.id !== productId)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item');
    }
  };

  const handleAddToCart = async (productId: number) => {
    try {
      const item = wishlistItems.find((item) => item.product.id === productId);
      if (item) {
        await addItem(item.product, 1);
        await handleRemoveFromWishlist(productId);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to cart');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>
            <p className="mt-2 text-sm text-gray-600">
              Your saved items and favorites
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-sm font-medium text-gray-900">
              {wishlistItems.length} items
            </span>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="mt-8 text-center">
            <p className="text-gray-500">Your wishlist is empty.</p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
                  <img
                    src={item.product.images?.[0] || '/placeholder.svg'}
                    alt={item.product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link to={`/product/${item.product.id}`}>
                      {item.product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.product.category}
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(item.product.id)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item.product.id)}
                      className="inline-flex items-center justify-center p-2 border border-transparent text-sm font-medium rounded-md text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
} 
