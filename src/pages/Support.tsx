import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Mail, Book, Search, HelpCircle, Zap, Bot, Settings } from 'lucide-react';
const Support = () => {
  const faqs = [{
    question: "How do I create my first Discord bot?",
    answer: "Start by logging in with Discord, then use our block-based builder to create commands and responses. Our AI assistant can help guide you through the process."
  }, {
    question: "Can I use custom code with GGWorld?",
    answer: "Yes! You can switch between our visual block builder and a full code editor supporting JavaScript and Python for Discord bots."
  }, {
    question: "How many bots can I create?",
    answer: "Free users can create up to 3 bots. Premium users get unlimited bots with advanced features and priority hosting."
  }, {
    question: "Is my bot data secure?",
    answer: "Absolutely. All data is encrypted and we follow Discord's security guidelines. We never access your server content without permission."
  }];
  return <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-gray-400 text-xl mb-8">
              Get help with GGWorld and Discord bot creation
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search for help articles..." className="pl-10 bg-gray-900 border-gray-700 text-white" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-colors">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-emerald-500 mb-2" />
                <CardTitle className="text-white">Live Chat</CardTitle>
                <CardDescription>Get instant help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <Mail className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">Email Support</CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gray-600 text-slate-950">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Book className="w-8 h-8 text-purple-500 mb-2" />
                <CardTitle className="text-white">Documentation</CardTitle>
                <CardDescription>Browse our comprehensive guides</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/how-it-works">
                  <Button variant="outline" className="w-full border-gray-600 text-slate-950">
                    View Docs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <Bot className="w-12 h-12 text-emerald-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white text-lg">Getting Started</CardTitle>
                  <CardDescription>Basic bot setup and creation</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white text-lg">Advanced Features</CardTitle>
                  <CardDescription>Custom code and AI tools</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <Settings className="w-12 h-12 text-purple-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white text-lg">Account & Billing</CardTitle>
                  <CardDescription>Subscription and payment help</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <HelpCircle className="w-12 h-12 text-yellow-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white text-lg">Troubleshooting</CardTitle>
                  <CardDescription>Common issues and fixes</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Still need help?</h3>
            <p className="text-gray-400 mb-6">
              Our support team is available 24/7 to help you build amazing Discord bots
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Contact Support
              </Button>
              <Link to="/">
                <Button variant="outline" className="border-gray-600 text-slate-950">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Support;