
import Header from '@/components/Header';
import FloatingElements from '@/components/FloatingElements';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, Clock, Users, ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-6">
            <Badge className="bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 px-4 py-2 text-sm">
              Our Capital, Your Success
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            No Time Limit Prop{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Firm
            </span>
            <br />
            Conquer the market
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-300">The Lab™ native platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-300">Fast progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-300">No time Limit Prop Firm</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-300">Unique programs</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium rounded-lg flex items-center space-x-2">
                <span>Start a challenge</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 text-lg">
              Free trial
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm">
            Scroll to explore
            <span className="block mt-2">↓</span>
          </p>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Build Discord Bots with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Zero Code
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Create powerful Discord bots using our visual drag-and-drop builder, 
              or dive into custom code with AI assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 transition-colors">
                  <Bot className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Codeless Builder</h3>
                <p className="text-gray-400 mb-4">
                  Visual drag-and-drop system to build complex Discord bot workflows without writing a single line of code.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Slash commands</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Event-based flows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Button & dropdown roles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-gray-400 mb-4">
                  Generate commands automatically using AI, convert between blocks and code, and get intelligent suggestions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Auto command generation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Code explanations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Smart debugging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modular System</h3>
                <p className="text-gray-400 mb-4">
                  Pre-built modules for verification, moderation, tickets, logging, and more. Mix and match as needed.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Auto moderation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Ticket system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Audit logging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Deploy</h3>
                <p className="text-gray-400 mb-4">
                  Deploy your bots instantly to the cloud or export to your own hosting solution.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Cloud hosting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Self-hosting option</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>One-click updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community & Marketplace</h3>
                <p className="text-gray-400 mb-4">
                  Share and discover bot templates, commands, and modules created by the community.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Bot templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Command library</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Premium assets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Low-Code Support</h3>
                <p className="text-gray-400 mb-4">
                  Toggle to code editor mode for custom JavaScript or Python with syntax highlighting and AI assistance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>JavaScript (Discord.js)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Python (discord.py)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Code snippets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border-y border-emerald-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Discord Bot?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers and server owners who are already building 
            amazing Discord bots with GGWorld's no-code platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium rounded-lg">
                Start Building Now
              </Button>
            </Link>
            <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/10 px-8 py-3 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GG</span>
              </div>
              <span className="text-white font-bold text-xl">GGWorld</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 GGWorld. All rights reserved. Build Discord bots without limits.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <div className="fixed bottom-6 left-6 right-6 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 z-50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <p className="text-sm text-gray-300 flex-1">
            We use cookies and other technology to provide you with our services and for functional, 
            analytical and advertising purposes. Please, read our Privacy Policy for more information.
          </p>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500">
              Decline
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
