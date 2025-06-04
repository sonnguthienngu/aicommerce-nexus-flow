
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-semibold">AutoMarket</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The world's largest marketplace for AI automations. Build, deploy, and scale intelligent workflows that transform your business.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Browse Automations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seller Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integration Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest automation trends and product updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AutoMarket. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
