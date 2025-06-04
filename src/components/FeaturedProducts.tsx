import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - replace with actual data from your API
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: '/products/headphones.jpg',
    rating: 4.8,
    reviews: 128,
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: '/products/watch.jpg',
    rating: 4.6,
    reviews: 89,
    category: 'Wearables',
  },
  {
    id: 3,
    name: 'Ultra HD Camera',
    price: 499.99,
    image: '/products/camera.jpg',
    rating: 4.9,
    reviews: 256,
    category: 'Photography',
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    price: 149.99,
    image: '/products/earbuds.jpg',
    rating: 4.7,
    reviews: 167,
    category: 'Audio',
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Product Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick View Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <Link
              to={`/product/${product.id}`}
              className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Quick View
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProducts; 