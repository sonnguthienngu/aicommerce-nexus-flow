
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

const ForSellers = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Earn Passive Income",
      description: "Generate recurring revenue from your automations with our 70/30 revenue split model.",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access thousands of potential customers worldwide through our marketplace platform.",
      color: "text-blue-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Track your automation performance with detailed analytics and user feedback.",
      color: "text-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "We handle hosting, security, and scaling so you can focus on building great automations.",
      color: "text-teal-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Submit Your Automation",
      description: "Upload your automation code and provide documentation through our seller dashboard.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Review & Approval",
      description: "Our team reviews your automation for quality, security, and marketplace fit.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Go Live & Earn",
      description: "Once approved, your automation goes live and you start earning from every deployment.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "Average Monthly Revenue", value: "$2,400", subtext: "per active automation" },
    { label: "Top Seller Earnings", value: "$25K+", subtext: "monthly revenue" },
    { label: "Success Rate", value: "94%", subtext: "automation approval rate" },
    { label: "Time to Market", value: "3-5 days", subtext: "average review time" }
  ];

  const requirements = [
    "Original automation code with clear documentation",
    "Proper error handling and input validation",
    "Clean, maintainable code structure",
    "Comprehensive testing and examples",
    "Clear user instructions and setup guide"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
            💡 Join 500+ Automation Creators
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Monetize Your AI Automations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your automation skills into a thriving business. Join our marketplace and start earning from your creations today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-4 text-lg">
              Start Selling Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              View Seller Resources
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white border-gray-100">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-900 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.subtext}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sell on Our Platform?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a thriving ecosystem of automation creators and unlock the potential of your AI skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-100">
                <CardContent className="p-6">
                  <div className={`${benefit.color} mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Get your automation from idea to marketplace in just three simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Submission Requirements
              </CardTitle>
              <CardDescription>
                Ensure your automation meets our quality standards for the best chance of approval.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 text-teal-600 mr-2" />
                Success Tips
              </CardTitle>
              <CardDescription>
                Maximize your automation's success with these proven strategies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Focus on solving specific, common business problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Provide comprehensive documentation and examples</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Use clear, descriptive titles and tags</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Actively respond to user feedback and questions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators already earning from their automations. It's time to turn your skills into income.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expertise" className="text-white">Expertise Area</Label>
              <Input 
                id="expertise" 
                type="text" 
                placeholder="e.g., Data Analysis" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Get Started as a Seller
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForSellers;
