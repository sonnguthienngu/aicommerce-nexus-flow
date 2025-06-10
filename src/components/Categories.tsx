
import { Category } from '../types';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
        <p className="mt-4 text-lg text-gray-600">
          Find exactly what you're looking for
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            style={{ backgroundColor: category.color }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {category.count} items
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
