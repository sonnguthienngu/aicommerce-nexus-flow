
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Users, ExternalLink, Search, Filter, SlidersHorizontal } from "lucide-react";

interface Automation {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  total_users: number;
  image_url: string;
  tags: string[];
  status: string;
  created_by: string;
  category_id: string;
  automation_categories: {
    name: string;
  } | null;
}

interface Category {
  id: string;
  name: string;
}

const Automations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [priceRange, setPriceRange] = useState("all");

  const { data: automations = [], isLoading } = useQuery({
    queryKey: ['automations', searchTerm, selectedCategory, sortBy],
    queryFn: async () => {
      let query = supabase
        .from('automations')
        .select(`
          *,
          automation_categories(name)
        `)
        .eq('status', 'published');

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);
      }

      if (selectedCategory !== 'all') {
        query = query.eq('category_id', selectedCategory);
      }

      if (sortBy === 'rating') {
        query = query.order('rating', { ascending: false });
      } else if (sortBy === 'price_low') {
        query = query.order('price', { ascending: true });
      } else if (sortBy === 'price_high') {
        query = query.order('price', { ascending: false });
      } else if (sortBy === 'users') {
        query = query.order('total_users', { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching automations:', error);
        throw error;
      }

      return data as Automation[];
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('automation_categories')
        .select('id, name')
        .order('name');

      if (error) throw error;
      return data as Category[];
    },
  });

  const filteredAutomations = automations.filter(automation => {
    if (priceRange === 'free') return automation.price === 0;
    if (priceRange === 'under25') return automation.price > 0 && automation.price <= 25;
    if (priceRange === 'under50') return automation.price > 25 && automation.price <= 50;
    if (priceRange === 'over50') return automation.price > 50;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover AI Automations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive library of AI-powered automations to streamline your business processes
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search automations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="under25">Under $25</SelectItem>
                <SelectItem value="under50">$25 - $50</SelectItem>
                <SelectItem value="over50">Over $50</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="users">Most Popular</SelectItem>
                <SelectItem value="price_low">Price: Low to High</SelectItem>
                <SelectItem value="price_high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredAutomations.length} automation{filteredAutomations.length !== 1 ? 's' : ''}
          </p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Automations Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAutomations.map((automation) => (
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
                    <span className="text-lg font-bold text-teal-600">
                      {automation.price === 0 ? 'Free' : `$${automation.price}/month`}
                    </span>
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

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Deploy Now
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredAutomations.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No automations found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
              className="mt-4"
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Automations;
