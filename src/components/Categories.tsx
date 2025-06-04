
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

const categories = [
  {
    name: "Communication",
    icon: MessageSquare,
    count: 127,
    description: "Email, chat, and messaging automations",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Data Processing",
    icon: FileText,
    count: 89,
    description: "Document analysis and data extraction",
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Marketing",
    icon: Share2,
    count: 156,
    description: "Social media, campaigns, and analytics",
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Customer Service",
    icon: Headphones,
    count: 73,
    description: "Support bots and ticket management",
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Sales",
    icon: TrendingUp,
    count: 94,
    description: "Lead generation and CRM automation",
    color: "bg-red-100 text-red-600"
  },
  {
    name: "Supply Chain",
    icon: Package,
    count: 45,
    description: "Inventory and logistics optimization",
    color: "bg-teal-100 text-teal-600"
  },
  {
    name: "Workflow",
    icon: Zap,
    count: 112,
    description: "Process automation and task management",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    name: "Security",
    icon: Shield,
    count: 38,
    description: "Threat detection and compliance monitoring",
    color: "bg-indigo-100 text-indigo-600"
  }
];

const Categories = () => {
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
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-gray-200 hover:border-teal-200">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <span className="text-sm font-medium text-teal-600">
                    {category.count} automations
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
