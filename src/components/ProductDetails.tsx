import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Star, Heart, Share2, Truck, Shield, RefreshCw } from 'lucide-react';

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    rating: number;
    reviews: number;
    category: string;
    stock: number;
  };
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const { addItem } = useCart();

  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
  }, [product.id]);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-600' : ''
                }`}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span>({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-2" aria-label={`Quantity: ${quantity}`}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-2 rounded-full ${
                  isWishlist ? 'text-red-600' : 'text-gray-600'
                } hover:bg-gray-100`}
                aria-label={isWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className="w-6 h-6" fill={isWishlist ? 'currentColor' : 'none'} />
              </button>

              <button
                className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
                aria-label="Share product"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Add to cart"
            >
              Add to Cart
            </button>
          </div>

          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center gap-2 text-gray-600">
              <Truck className="w-5 h-5" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span>2-year warranty</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <RefreshCw className="w-5 h-5" />
              <span>30-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 