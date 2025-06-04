
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out automations",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gray-100 text-gray-600",
      buttonStyle: "bg-gray-900 hover:bg-gray-800",
      popular: false,
      features: [
        "3 automation executions per month",
        "Access to free automations",
        "Basic support",
        "Community access",
        "Standard execution speed"
      ],
      limitations: [
        "Limited to basic automations",
        "No priority support",
        "No custom integrations"
      ]
    },
    {
      name: "Professional",
      price: "$29",
      description: "Best for growing businesses",
      icon: <Star className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600",
      buttonStyle: "bg-teal-600 hover:bg-teal-700",
      popular: true,
      features: [
        "100 automation executions per month",
        "Access to all automations",
        "Priority support",
        "Advanced analytics",
        "Fast execution speed",
        "Custom integrations",
        "Team collaboration"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large-scale operations",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      buttonStyle: "bg-purple-600 hover:bg-purple-700",
      popular: false,
      features: [
        "Unlimited automation executions",
        "Access to all automations",
        "24/7 dedicated support",
        "Advanced analytics & reporting",
        "Ultra-fast execution speed",
        "Custom integrations & APIs",
        "Advanced team management",
        "White-label options",
        "SLA guarantee"
      ],
      limitations: []
    }
  ];

  const features = [
    {
      title: "Lightning Fast Execution",
      description: "All automations run on enterprise-grade infrastructure with sub-second response times.",
      icon: <Rocket className="w-8 h-8 text-teal-600" />
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "Reliable automation execution with industry-leading uptime and redundancy.",
      icon: <Check className="w-8 h-8 text-green-600" />
    },
    {
      title: "Scalable Infrastructure",
      description: "From hundreds to millions of executions, our platform scales with your needs.",
      icon: <Star className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your automation needs. All plans include access to our marketplace and core features.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              ✨ No setup fees
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              🔒 Cancel anytime
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              💳 14-day free trial
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-teal-500 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-teal-600 text-white px-6 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 rounded-2xl ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-600">/month</span>}
                </div>
                <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button className={`w-full mb-6 ${plan.buttonStyle}`}>
                  {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                </Button>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for performance, reliability, and scale. Our platform delivers enterprise-grade automation capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What counts as an execution?</h3>
              <p className="text-gray-600 text-sm">Each time an automation runs and processes data, it counts as one execution. Simple automations typically use 1 execution, while complex workflows may use multiple.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-gray-600 text-sm">Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades apply at your next billing cycle.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600 text-sm">Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What happens if I exceed my limit?</h3>
              <p className="text-gray-600 text-sm">We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional executions as needed.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
