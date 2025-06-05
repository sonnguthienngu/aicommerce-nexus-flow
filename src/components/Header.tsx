import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleGetStarted = () => {
    navigate('/auth/login');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">AutoMarket</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/automations" 
                className={`transition-colors ${isActive('/automations') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Automations
              </Link>
              <Link 
                to="/categories" 
                className={`transition-colors ${isActive('/categories') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Categories
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors ${isActive('/pricing') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Pricing
              </Link>
              <Link 
                to="/for-sellers" 
                className={`transition-colors ${isActive('/for-sellers') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                For Sellers
              </Link>
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
            <Link to="/auth/login">
              <Button variant="outline" className="text-gray-700">Sign In</Button>
            </Link>
            <Button 
              onClick={handleGetStarted}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Get Started
            </Button>
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
              <Link 
                to="/automations" 
                className={`transition-colors ${isActive('/automations') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Automations
              </Link>
              <Link 
                to="/categories" 
                className={`transition-colors ${isActive('/categories') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors ${isActive('/pricing') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/for-sellers" 
                className={`transition-colors ${isActive('/for-sellers') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Sellers
              </Link>
              
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleGetStarted();
                  }}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
