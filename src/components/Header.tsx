
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-emerald-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center neon-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">GG</span>
            </div>
            <span className="text-white font-bold text-xl">GGWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Home</Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">How It Works</Link>
            <Link to="/support" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Support</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Privacy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Terms</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 neon-button">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-emerald-400 transition-colors duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-emerald-500/20">
            <div className="flex flex-col space-y-3 mt-4">
              <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
              <Link to="/support" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Support</Link>
              <Link to="/login" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
