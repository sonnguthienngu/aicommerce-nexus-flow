import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: '/categories/electronics.jpg',
    count: 1250,
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    name: 'Fashion',
    image: '/categories/fashion.jpg',
    count: 3500,
    color: 'from-pink-500 to-red-500',
  },
  {
    id: 3,
    name: 'Home & Living',
    image: '/categories/home.jpg',
    count: 890,
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    name: 'Beauty',
    image: '/categories/beauty.jpg',
    count: 1200,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    name: 'Sports',
    image: '/categories/sports.jpg',
    count: 750,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 6,
    name: 'Books',
    image: '/categories/books.jpg',
    count: 2000,
    color: 'from-yellow-500 to-orange-500',
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={`/category/${category.id}`}
            className="group block relative h-64 rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            </div>

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
            />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-2xl font-bold text-white mb-2"
              >
                {category.name}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-white/80"
              >
                {category.count} Products
              </motion.p>

              {/* Explore Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="mt-4"
              >
                <span className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Category
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Categories;
