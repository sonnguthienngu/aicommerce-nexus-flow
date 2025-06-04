
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">AutoMarket</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Automations</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">For Sellers</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search automations..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
              />
            </div>
            <Button variant="outline" className="text-gray-700">Sign In</Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Automations</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">For Sellers</a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
