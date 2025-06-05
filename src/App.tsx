import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Categories } from './components/Categories';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { ProductDetails } from './components/ProductDetails';

// Mock product data for demonstration
const mockProduct = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 299.99,
  description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800"
  ],
  rating: 4.5,
  reviews: 128,
  category: "Electronics",
  stock: 15
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedProducts />
                <Categories />
                <Newsletter />
              </>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails product={mockProduct} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
