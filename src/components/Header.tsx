
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GG</span>
            </div>
            <span className="text-white font-bold text-xl">GGWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
            <a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a>
            <a href="#partner" className="text-gray-300 hover:text-white transition-colors">Become a Partner</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-300">
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500">
              Login/Register
            </Button>
            <Link to="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6">
                Start a challenge
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500">
              Free trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3 mt-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a>
              <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
              <Link to="/dashboard" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
