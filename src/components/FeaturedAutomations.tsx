import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, ExternalLink, ArrowRight } from "lucide-react";

const automations = [
  {
    id: 1,
    title: "Smart Email Responder",
    description: "AI-powered email automation that analyzes context and generates personalized responses",
    category: "Communication",
    rating: 4.9,
    users: 2843,
    price: "$29/month",
    tags: ["Email", "AI", "Productivity"],
    provider: "AutoFlow AI",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop"
  },
  {
    id: 2,
    title: "Document Intelligence",
    description: "Extract, analyze, and process documents with advanced OCR and NLP capabilities",
    category: "Data Processing",
    rating: 4.8,
    users: 1567,
    price: "$49/month",
    tags: ["OCR", "NLP", "Documents"],
    provider: "DataFlow Pro",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop"
  },
  {
    id: 3,
    title: "Social Media Manager",
    description: "Automate posting, engagement, and analytics across all major social platforms",
    category: "Marketing",
    rating: 4.7,
    users: 3921,
    price: "$39/month",
    tags: ["Social Media", "Marketing", "Analytics"],
    provider: "SocialBot Inc",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=240&fit=crop"
  },
  {
    id: 4,
    title: "Customer Support Bot",
    description: "Intelligent chatbot that handles 80% of customer inquiries with natural conversations",
    category: "Customer Service",
    rating: 4.9,
    users: 5234,
    price: "$79/month",
    tags: ["Chatbot", "Customer Service", "AI"],
    provider: "SupportAI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=240&fit=crop"
  },
  {
    id: 5,
    title: "Sales Pipeline Optimizer",
    description: "Automatically qualify leads, schedule meetings, and update CRM with AI insights",
    category: "Sales",
    rating: 4.8,
    users: 1892,
    price: "$99/month",
    tags: ["Sales", "CRM", "Lead Generation"],
    provider: "SalesFlow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop"
  },
  {
    id: 6,
    title: "Inventory Predictor",
    description: "Predict inventory needs and automate restocking using advanced ML algorithms",
    category: "Supply Chain",
    rating: 4.6,
    users: 743,
    price: "$149/month",
    tags: ["Inventory", "ML", "Predictions"],
    provider: "LogiTech AI",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=240&fit=crop"
  }
];

const FeaturedAutomations = () => {
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
                  src={automation.image} 
                  alt={automation.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-700 hover:bg-white">
                    {automation.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">
                    {automation.title}
                  </CardTitle>
                  <span className="text-lg font-bold text-teal-600">{automation.price}</span>
                </div>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {automation.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{automation.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{automation.users.toLocaleString()} users</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {automation.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">by {automation.provider}</span>
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
