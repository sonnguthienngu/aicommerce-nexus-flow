
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover our most popular items
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={product.images[0] || '/placeholder.svg'}
                alt={product.name}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
