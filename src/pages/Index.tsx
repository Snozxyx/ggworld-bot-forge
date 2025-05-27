import Header from '@/components/Header';
import FloatingElements from '@/components/FloatingElements';
import Typewriter from '@/components/Typewriter';
import StatsSection from '@/components/StatsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, Clock, Users, ArrowRight, Check, Star, Code, Layers, Settings, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  const typewriterWords = ["Without Code", "Visually", "With AI", "Instantly", "Effortlessly"];
  return <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <FloatingElements />
      
      {/* Hero Section with Typewriter and Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-cyan-900/5 to-purple-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center max-w-5xl mx-auto relative z-10 fade-in-up">
          <div className="mb-8">
            <Badge className="bg-emerald-600/20 backdrop-blur-md text-emerald-400 border border-emerald-600/30 px-6 py-3 text-base font-semibold neon-border hover:scale-105 transition-transform duration-300">
              🚀 Zero Code • Maximum Power • AI Assisted
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Build Discord Bots{' '}
            <br />
            <Typewriter words={typewriterWords} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500" />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Create powerful Discord bots using our visual drag-and-drop builder with AI assistance. 
            From simple commands to complex workflows - no programming required.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm stagger-children">
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-colors duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Visual Block Builder</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
              <span className="text-gray-300">AI-Powered Generation</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-600"></div>
              <span className="text-gray-300">One-Click Deploy</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-pink-500/30 hover:border-pink-500/50 transition-colors duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-900"></div>
              <span className="text-gray-300">Pro Code Support</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Link to="/login">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-xl font-semibold flex items-center space-x-3 neon-button rounded-lg px-[62px] py-[31px] group">
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start Building Free</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-10 text-xl font-semibold rounded-xl neon-border py-[27px] hover:scale-105 transition-all duration-300 bg-black/40 backdrop-blur-md hover:bg-black/60">
                Watch Demo
              </Button>
            </Link>
          </div>
          
          <div className="text-gray-400 text-lg fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            Join 50,000+ Discord server owners
            <span className="block mt-3 text-3xl animate-bounce">↓</span>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Getting Started Section */}
      <section className="py-24 px-6 relative border-t border-emerald-500/20 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              Get Started in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              From idea to deployed Discord bot in minutes, not hours. No coding experience needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-children">
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border group-hover:shadow-emerald-500/50 group-hover:shadow-2xl border border-emerald-500/30">
                <span className="text-4xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-300">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Choose Your Bot Type</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Select from moderation, welcome, roles, tickets, or start from scratch with our AI assistant.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border group-hover:shadow-cyan-500/50 group-hover:shadow-2xl border border-cyan-500/30">
                <span className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Build with Blocks or Code</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Drag and drop visual blocks, or write custom JavaScript. Switch between modes anytime.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border group-hover:shadow-purple-500/50 group-hover:shadow-2xl border border-purple-500/30">
                <span className="text-4xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Deploy & Manage</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                One-click deployment to our cloud or export to your own hosting. Monitor and update anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Glassmorphism */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-gray-900/20 to-black bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              Everything You Need to Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">
                Professional Bots
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              From simple commands to complex automation workflows, GGWorld provides all the tools 
              you need to create Discord bots that your community will love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            <Card className="bg-black/40 backdrop-blur-md border-emerald-500/20 hover:border-emerald-600/50 transition-all duration-500 group neon-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30">
                  <Layers className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100">Visual Block Builder</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Drag-and-drop interface to build complex Discord bot workflows. No coding knowledge required.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-50">Slash commands & interactions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-50">Event-driven automation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-50">Custom embeds & buttons</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/20 hover:border-cyan-600/50 transition-all duration-500 group neon-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100">AI-Powered Assistant</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Generate commands automatically, convert between blocks and code, get intelligent suggestions.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-50">Natural language to bot commands</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-50">Smart code explanations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-50">Automated bug detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-purple-600/50 transition-all duration-500 group neon-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Pro Code Editor</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Toggle to code mode for custom JavaScript or Python with full IDE features and AI assistance.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-50">JavaScript (Discord.js)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-50">Python (discord.py)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">IntelliSense & debugging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-pink-500/20 hover:border-pink-600/50 transition-all duration-500 group neon-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-pink-500/30">
                  <Shield className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100">Modular System</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Pre-built modules for verification, moderation, tickets, logging, and more. Mix and match as needed.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Auto moderation suite</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Advanced ticket system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Comprehensive audit logs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-yellow-500/20 hover:border-yellow-600/50 transition-all duration-500 group neon-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/30">
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100">Instant Deployment</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Deploy your bots instantly to our cloud infrastructure or export for self-hosting.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Global cloud hosting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Self-hosting export</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Automatic updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-emerald-500/20 hover:border-emerald-600/50 transition-all duration-500 group neon-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30">
                  <Users className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100">Community Marketplace</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Share and discover bot templates, commands, and modules created by our community.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Thousands of templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Command library</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-100">Premium assets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-900/30 via-cyan-900/20 to-purple-900/30 border-y border-emerald-600/20">
        <div className="max-w-5xl mx-auto text-center fade-in-up">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Build Your Discord Bot?
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers and server owners who are already building 
            amazing Discord bots with GGWorld's no-code platform. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center stagger-children">
            <Link to="/login">
              <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white text-xl font-semibold rounded-xl neon-button mx-[20px] px-[60px] py-[42px] group">
                <span className="group-hover:scale-110 transition-transform duration-300">Start Building Now</span>
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button variant="outline" className="border-2 border-emerald-600/50 text-emerald-400 hover:bg-emerald-600/10 hover:border-emerald-400 text-xl font-semibold rounded-xl neon-border my-0 px-[25px] py-[39px] hover:scale-105 transition-all duration-300 bg-black/40 backdrop-blur-md">
                Explore Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-emerald-500/20 bg-zinc-900">
        <div className="max-w-7xl mx-auto fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0 group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center neon-glow group-hover:shadow-emerald-500/50 group-hover:shadow-2xl transition-all duration-300">
                <span className="text-white font-bold text-xl">GG</span>
              </div>
              <div>
                <span className="text-white font-bold text-2xl">GGWorld</span>
                <p className="text-gray-400 text-sm">Discord Bot Builder</p>
              </div>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors duration-300 hover:scale-110">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400 transition-colors duration-300 hover:scale-110">Terms of Service</Link>
              <Link to="/support" className="hover:text-emerald-400 transition-colors duration-300 hover:scale-110">Support Center</Link>
              <Link to="/how-it-works" className="hover:text-emerald-400 transition-colors duration-300 hover:scale-110">Documentation</Link>
            </div>
          </div>
          <div className="pt-8 border-t border-emerald-500/20 text-center text-gray-400">
            <p>&copy; 2024 GGWorld. All rights reserved. Build Discord bots without limits.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;