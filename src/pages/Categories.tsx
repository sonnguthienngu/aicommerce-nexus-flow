
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  FileText, 
  Share2, 
  Headphones, 
  TrendingUp, 
  Package,
  Zap,
  Shield,
  ArrowRight
} from "lucide-react";

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
    queryKey: ['all-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('automation_categories')
        .select('*')
        .order('automation_count', { ascending: false });

      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }

      return data as Category[];
    },
  });

  const { data: stats } = useQuery({
    queryKey: ['category-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('automations')
        .select('category_id')
        .eq('status', 'published');

      if (error) throw error;

      const totalAutomations = data.length;
      const categoriesWithAutomations = new Set(data.map(a => a.category_id)).size;

      return {
        totalAutomations,
        categoriesWithAutomations,
        avgPerCategory: Math.round(totalAutomations / categoriesWithAutomations)
      };
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Automation Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore automations organized by business function to find exactly what you need
          </p>
          
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-3xl font-bold text-teal-600 mb-2">{stats.totalAutomations}</div>
                <div className="text-gray-600">Total Automations</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.categoriesWithAutomations}</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.avgPerCategory}</div>
                <div className="text-gray-600">Avg per Category</div>
              </div>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
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
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {categories.map((category) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Package;
                return (
                  <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200 hover:border-teal-200 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${category.color_class || 'bg-gray-100 text-gray-600'} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {category.automation_count} automations
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Featured Categories */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Popular Categories</h2>
                <p className="text-gray-600">Discover the categories with the highest adoption rates</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories
                  .filter(cat => cat.automation_count > 0)
                  .slice(0, 3)
                  .map((category, index) => {
                    const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Package;
                    const medals = ['🥇', '🥈', '🥉'];
                    return (
                      <div key={category.id} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="text-2xl">{medals[index]}</div>
                        <div className={`w-12 h-12 rounded-lg ${category.color_class || 'bg-gray-100 text-gray-600'} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{category.name}</h4>
                          <p className="text-sm text-gray-600">{category.automation_count} automations</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
