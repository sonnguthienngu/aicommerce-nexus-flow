
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-teal-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Automate your business with
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> AI-powered workflows</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover, deploy, and scale intelligent automations built by experts. 
            Transform repetitive tasks into seamless workflows in minutes, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/automations">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
                Explore Automations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/for-sellers">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8 py-4 text-lg">
                Become a Seller
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Deployment</h3>
              <p className="text-gray-600 text-center">Deploy automations in one click. No coding or complex setup required.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 90% Time</h3>
              <p className="text-gray-600 text-center">Automate hours of manual work with intelligent workflows that learn and adapt.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale Instantly</h3>
              <p className="text-gray-600 text-center">Handle thousands of tasks simultaneously with enterprise-grade infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
