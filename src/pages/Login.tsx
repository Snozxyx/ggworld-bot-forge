
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { LogIn, Shield, Zap, Bot } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GG</span>
            </div>
            <span className="text-white font-bold text-2xl">GGWorld</span>
          </Link>
          <p className="text-gray-400">Build powerful Discord bots with ease</p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to access your Discord bot dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Discord Login Button */}
            <Button 
              className="w-full h-12 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium transition-all duration-200 transform hover:scale-105"
              size="lg"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Continue with Discord
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400">Why Discord?</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Secure OAuth2 authentication</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span>Instant access to your servers</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Bot className="w-4 h-4 text-emerald-500" />
                <span>Manage bots across all guilds</span>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our{' '}
              <Link to="/terms" className="text-emerald-400 hover:text-emerald-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300">
                Privacy Policy
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
