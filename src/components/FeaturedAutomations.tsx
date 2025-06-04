
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, ExternalLink, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Automation {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  total_users: number;
  image_url: string;
  tags: string[];
  is_featured: boolean;
  status: string;
  profiles: {
    full_name: string;
  } | null;
  automation_categories: {
    name: string;
  } | null;
}

const FeaturedAutomations = () => {
  const { data: automations = [], isLoading } = useQuery({
    queryKey: ['featured-automations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('automations')
        .select(`
          *,
          profiles!created_by(full_name),
          automation_categories(name)
        `)
        .eq('is_featured', true)
        .eq('status', 'published')
        .order('rating', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching automations:', error);
        throw error;
      }

      return data as Automation[];
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Automations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most popular AI automations trusted by thousands of businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Automations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular AI automations trusted by thousands of businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((automation) => (
            <Card key={automation.id} className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-teal-200">
              <div className="relative overflow-hidden">
                <img 
                  src={automation.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop"} 
                  alt={automation.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-700 hover:bg-white">
                    {automation.automation_categories?.name || 'General'}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">
                    {automation.title}
                  </CardTitle>
                  <span className="text-lg font-bold text-teal-600">${automation.price}/month</span>
                </div>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {automation.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{automation.rating?.toFixed(1) || '0.0'}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{automation.total_users?.toLocaleString() || '0'} users</span>
                  </div>
                </div>

                {automation.tags && automation.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {automation.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    by {automation.profiles?.full_name || 'Unknown'}
                  </span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Deploy Now
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
            View All Automations
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAutomations;
