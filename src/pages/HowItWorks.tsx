
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MousePointer, Code, Bot, Zap, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MousePointer,
      title: "1. Drag & Drop Builder",
      description: "Use our visual block system to create bot logic without writing code. Simply drag blocks like 'Send Message', 'Give Role', or 'Ban User' to build your workflow.",
      features: ["Visual workflow builder", "Pre-built action blocks", "No coding required"]
    },
    {
      icon: Code,
      title: "2. Custom Code (Optional)",
      description: "Switch to code mode for advanced functionality. Write JavaScript or Python to create complex bot behaviors with full Discord.js or discord.py support.",
      features: ["JavaScript & Python support", "Syntax highlighting", "Code completion"]
    },
    {
      icon: Zap,
      title: "3. AI Assistant",
      description: "Describe what you want your bot to do, and our AI will generate the blocks or code for you. 'Make a verification command' becomes reality in seconds.",
      features: ["Natural language processing", "Code generation", "Smart suggestions"]
    },
    {
      icon: Settings,
      title: "4. Configure & Test",
      description: "Set up your bot's permissions, customize responses, and test commands in real-time. Preview how your bot will behave before deploying.",
      features: ["Real-time testing", "Permission management", "Live preview"]
    },
    {
      icon: Bot,
      title: "5. Deploy & Manage",
      description: "Deploy your bot to Discord servers with one click. Monitor performance, update commands, and manage multiple bots from a unified dashboard.",
      features: ["One-click deployment", "Multi-server management", "Performance analytics"]
    },
    {
      icon: Rocket,
      title: "6. Scale & Share",
      description: "Publish your bot templates to our marketplace, collaborate with others, and scale your bots across multiple servers with enterprise features.",
      features: ["Marketplace integration", "Team collaboration", "Enterprise scaling"]
    }
  ];

  const features = [
    {
      title: "Modular System",
      description: "Choose from modules like verification, auto-moderation, ticket systems, and more. Each module is a complete feature set you can customize.",
      icon: "🧩"
    },
    {
      title: "AI-Powered",
      description: "Our AI understands your intent and generates the exact blocks or code needed. No more searching through documentation.",
      icon: "🤖"
    },
    {
      title: "Multi-Language",
      description: "Support for JavaScript (Discord.js) and Python (discord.py). Choose the language you're most comfortable with.",
      icon: "💻"
    },
    {
      title: "Cloud Hosting",
      description: "Your bots run on our reliable cloud infrastructure. No need to keep your computer running 24/7.",
      icon: "☁️"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">How GGWorld Works</h1>
            <p className="text-gray-400 text-xl mb-8">
              Build powerful Discord bots in minutes, not hours
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300">
                GGWorld combines the simplicity of visual programming with the power of custom code, 
                enhanced by AI assistance to help you create any Discord bot you can imagine.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-12 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="bg-gray-900/50 border-gray-800 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300 text-base">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <step.icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Interactive Demo Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-emerald-600/20 to-blue-600/20 p-8 rounded-lg border border-emerald-500/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your First Bot?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers who are already building amazing Discord bots with GGWorld
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/dashboard">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Start Building Now
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="outline" className="border-gray-600 text-gray-300">
                  Get Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
