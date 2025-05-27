
import { useState } from 'react';
import { 
  Bot, 
  Settings, 
  Users, 
  Shield, 
  Star, 
  MessageSquare, 
  BarChart3, 
  Plus,
  Search,
  Bell,
  LogOut,
  ChevronDown,
  Home,
  Zap,
  Crown,
  Palette,
  Code,
  Cpu,
  Database,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('Button Roles');
  const [selectedBot, setSelectedBot] = useState('Blue Shark');

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Bot, label: 'Servers', active: false },
    { icon: MessageSquare, label: 'Support', active: false },
    { icon: Crown, label: 'Premium', active: false },
    { icon: Settings, label: 'Bot Settings', active: false },
    { icon: Palette, label: 'Button Roles', active: true },
    { icon: Shield, label: 'Verification/Greetings', active: false },
    { icon: Zap, label: 'Utilities', active: false },
    { icon: Code, label: 'Custom Commands', active: false },
    { icon: MessageSquare, label: 'Timed Messages', active: false },
    { icon: Database, label: 'Command Moderation', active: false },
    { icon: Activity, label: 'Auto Moderation', active: false },
    { icon: BarChart3, label: 'Audit Logging', active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Phantom</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-purple-600 border-purple-500 text-white hover:bg-purple-700">
              Discord
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">D</span>
              </div>
              <span className="text-sm">DARKIE_</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900/30 backdrop-blur-sm border-r border-gray-700 min-h-screen">
          <div className="p-4">
            {/* Bot Selector */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Blue Shark</p>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModule(item.label)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    item.active || activeModule === item.label
                      ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                  {item.active && <div className="w-2 h-2 bg-purple-400 rounded-full ml-auto"></div>}
                </button>
              ))}
            </nav>

            {/* Upgrade Banner */}
            <div className="mt-8 p-4 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-sm font-bold">Upgrade Now</span>
              </div>
              <p className="text-xs text-emerald-100 mb-3">
                Get access to premium features and unlimited bots.
              </p>
              <Button size="sm" className="w-full bg-white text-emerald-600 hover:bg-gray-100">
                Upgrade
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Button Roles</h1>
              <p className="text-gray-400">Distribute roles within your server using awesome buttons</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Settings Panel */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message name</label>
                    <div className="text-gray-400 text-sm">Main content of the message</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Channel</label>
                      <select className="w-full bg-gray-700 border-gray-600 rounded px-3 py-2 text-white">
                        <option>General</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Role type</label>
                      <select className="w-full bg-gray-700 border-gray-600 rounded px-3 py-2 text-white">
                        <option>Verify</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Allowed roles</label>
                    <div className="text-gray-400 text-sm">Choose role</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Banned roles</label>
                    <div className="text-gray-400 text-sm">Choose role</div>
                  </div>
                </CardContent>
              </Card>

              {/* Button Builder */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span>Button</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Button #1</label>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <Button variant="outline" size="sm" className="text-red-400 border-red-400 hover:bg-red-400/10">
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Button color</label>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Purple</Button>
                      <Button size="sm" variant="outline" className="border-gray-600">Gray</Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">green</Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">Red</Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Button text</label>
                    <div className="text-gray-400 text-sm">Enter button text</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Choose to role</label>
                    <div className="text-gray-400 text-sm">Choose button role</div>
                  </div>
                </CardContent>
              </Card>

              {/* Preview & Stats */}
              <div className="space-y-6">
                {/* Embed Builder */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Embed Builder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-300">Message contents</div>
                      <div className="text-sm text-gray-400">Main content of the message</div>
                      <div className="bg-gray-900/50 p-3 rounded border-l-4 border-purple-500">
                        <div className="text-sm text-gray-300">Embed title</div>
                        <div className="text-xs text-gray-400">DARKIE_</div>
                        <div className="text-xs text-gray-500 mt-2">It is a long established fact that a reader</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* User Stats */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Illustration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">D</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Phantom</div>
                            <Badge className="bg-emerald-600 text-white text-xs">BOT</Badge>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">Today at 5:20pm</div>
                      </div>

                      <div className="bg-gray-900/50 p-3 rounded">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                          <span className="text-sm">DARKIE_</span>
                        </div>
                        <div className="text-sm text-gray-300 mb-3">Get your roles!</div>
                        <div className="text-xs text-gray-400 mb-3">Below with the click of a button!</div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            Hover Chat
                          </Button>
                          <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                            Fortnite
                          </Button>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            Hangout
                          </Button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <Button size="sm" variant="outline" className="border-gray-600">
                            Upvote
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-600">
                            downvote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Fields */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      Field
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Fields
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-white mb-1">Field #1</div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Inline</span>
                          <Button size="sm" variant="outline" className="text-red-400 border-red-400">
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 mb-1">Name</div>
                        <div className="text-xs text-gray-400">Name of your embed field</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 mb-1">Value</div>
                        <div className="text-xs text-gray-400">Value to of the embed field</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
