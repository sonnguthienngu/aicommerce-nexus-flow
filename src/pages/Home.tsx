import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Categories } from '../components/Categories';
import { Newsletter } from '../components/Newsletter';
import { AIAutomation } from '../components/AIAutomation';
import { getFeaturedProducts, getCategories } from '../services/api';
import { Product, Category } from '../types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [products, categoriesData] = await Promise.all([
          getFeaturedProducts(),
          getCategories(),
        ]);
        setFeaturedProducts(products);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
        console.error('Error loading home page data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

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
    <div className="space-y-16">
      <Hero />
      <AIAutomation />
      <FeaturedProducts products={featuredProducts} />
      <Categories categories={categories} />
      <Newsletter />
    </div>
  );
} 