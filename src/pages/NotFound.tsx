
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home, Search, Bot, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Error Elements */}
        <div className="absolute top-1/4 left-1/4 text-red-500/30 animate-float">
          <Search className="w-8 h-8" />
        </div>
        <div className="absolute top-3/4 right-1/4 text-purple-500/30 animate-float delay-1000">
          <Bot className="w-6 h-6" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GG</span>
            </div>
            <span className="text-white font-bold text-2xl">GGWorld</span>
          </Link>
        </div>

        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 text-sm">
            Path: <code className="bg-gray-800 px-2 py-1 rounded">{location.pathname}</code>
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">What you can do:</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Check the URL for typos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Go back to the previous page</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Visit our homepage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Contact support if you think this is an error</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:border-gray-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          
          <Link to="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
          
          <Link to="/support">
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:border-gray-500 w-full sm:w-auto"
            >
              <Search className="w-4 h-4 mr-2" />
              Get Help
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Visit our{' '}
            <Link to="/support" className="text-emerald-400 hover:text-emerald-300">
              Support Center
            </Link>{' '}
            or check out{' '}
            <Link to="/how-it-works" className="text-emerald-400 hover:text-emerald-300">
              How It Works
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
