import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Bell, Rocket, Zap, Bot, Users } from 'lucide-react';
const ComingSoon = () => {
  const upcomingFeatures = [{
    icon: Bot,
    title: "Advanced AI Assistant",
    description: "Natural language bot creation with even smarter AI suggestions",
    eta: "Q2 2024"
  }, {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team to build and manage bots",
    eta: "Q2 2024"
  }, {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Detailed insights into your bot's performance and usage",
    eta: "Q3 2024"
  }, {
    icon: Rocket,
    title: "Enterprise Features",
    description: "Advanced security, compliance, and scaling features",
    eta: "Q3 2024"
  }];
  return <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-1/4 left-1/4 text-emerald-500/30 animate-float">
          <Bot className="w-8 h-8" />
        </div>
        <div className="absolute top-3/4 right-1/4 text-blue-500/30 animate-float delay-1000">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-purple-500/30 animate-float delay-500">
          <Rocket className="w-10 h-10" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">GG</span>
            </div>
            <span className="text-white font-bold text-3xl">GGWorld</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 text-emerald-500 mr-4" />
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Coming Soon
            </h1>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're putting the finishing touches on something amazing. 
            Get ready for the most powerful Discord bot builder ever created.
          </p>

          {/* Countdown or Progress */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 text-emerald-500 mr-3" />
              <span className="text-lg font-semibold">Launch Progress</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full transition-all duration-1000" style={{
              width: '78%'
            }}></div>
            </div>
            <p className="text-sm text-gray-400">78% Complete - Almost there!</p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-12">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-center gap-2">
                <Bell className="w-5 h-5 text-emerald-500" />
                Get Notified
              </CardTitle>
              <CardDescription>
                Be the first to know when we launch
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Notify Me
              </Button>
              <p className="text-xs text-gray-500">
                No spam, just updates about our launch
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">What's Coming</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-8 h-8 text-emerald-500" />
                    <div className="text-left">
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-emerald-400 text-sm">{feature.eta}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-left">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button variant="outline" className="border-gray-600 text-slate-950">
              Back to Home
            </Button>
          </Link>
          <Link to="/support">
            <Button variant="outline" className="border-gray-600 text-slate-950">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>;
};
export default ComingSoon;