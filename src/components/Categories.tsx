
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  FileText, 
  Share2, 
  Headphones, 
  TrendingUp, 
  Package,
  Zap,
  Shield
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color_class: string;
  automation_count: number;
}

const iconMap = {
  MessageSquare,
  FileText,
  Share2,
  Headphones,
  TrendingUp,
  Package,
  Zap,
  Shield,
};

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['automation-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('automation_categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }

      return data as Category[];
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect automation for your specific needs across various business functions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect automation for your specific needs across various business functions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Package;
            return (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-gray-200 hover:border-teal-200">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${category.color_class || 'bg-gray-100 text-gray-600'} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <span className="text-sm font-medium text-teal-600">
                    {category.automation_count} automations
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
