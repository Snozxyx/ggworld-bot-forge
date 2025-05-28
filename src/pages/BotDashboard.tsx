import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Settings, Plus, Search, Bell, User, Zap, Globe, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
const BotDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for bot modules
  const botModules = [{
    id: 1,
    name: "Command Builder",
    description: "Create custom slash commands for your bot",
    icon: Bot,
    status: "active",
    premium: false,
    category: "builders"
  }, {
    id: 2,
    name: "Event Builder",
    description: "Set up custom event handling for server events",
    icon: Zap,
    status: "active",
    premium: false,
    category: "builders"
  }, {
    id: 3,
    name: "Custom Commands",
    description: "Create member slash commands for your server",
    icon: Settings,
    status: "inactive",
    premium: false,
    category: "featured"
  }, {
    id: 4,
    name: "Custom Events",
    description: "Create custom events for your server",
    icon: Activity,
    status: "active",
    premium: false,
    category: "featured"
  }, {
    id: 5,
    name: "Timed Events",
    description: "Schedule custom events for specific times",
    icon: Globe,
    status: "inactive",
    premium: true,
    category: "featured"
  }, {
    id: 6,
    name: "Data Storage",
    description: "Store custom variables for your bot",
    icon: Users,
    status: "active",
    premium: false,
    category: "featured"
  }, {
    id: 7,
    name: "Webhooks",
    description: "Handle webhook events through webhooks",
    icon: Bot,
    status: "inactive",
    premium: false,
    category: "server"
  }, {
    id: 8,
    name: "IFTTT",
    description: "Connect your bot to thousands of other apps",
    icon: Zap,
    status: "inactive",
    premium: true,
    category: "server"
  }];
  const stats = {
    totalModules: 15,
    activeModules: 8,
    totalCommands: 45,
    serverMembers: 1250
  };
  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-emerald-500' : 'bg-gray-500';
  };
  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'builders':
        return 'Builders';
      case 'featured':
        return 'Featured & Favourited';
      case 'server':
        return 'Server Management';
      default:
        return 'Other';
    }
  };
  const groupedModules = botModules.reduce((acc, module) => {
    if (!acc[module.category]) {
      acc[module.category] = [];
    }
    acc[module.category].push(module);
    return acc;
  }, {} as Record<string, typeof botModules>);
  return <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GG</span>
              </div>
              <span className="text-white font-bold text-lg">GGWorld</span>
            </Link>
            <div className="relative ml-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search modules..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 min-h-[calc(100vh-73px)]">
          <nav className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Main</h3>
                <div className="space-y-2">
                  <Link to="/dashboard">
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                      <Bot className="w-4 h-4 mr-3" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start text-emerald-400 bg-emerald-500/10">
                    <Zap className="w-4 h-4 mr-3" />
                    Bot Modules
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Users className="w-4 h-4 mr-3" />
                    Analytics
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Management</h3>
                <div className="space-y-2">
                  <Link to="/bot-settings">
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                      <Settings className="w-4 h-4 mr-3" />
                      Bot Settings
                    </Button>
                  </Link>
                  <Link to="/global-settings">
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                      <Globe className="w-4 h-4 mr-3" />
                      Global Settings
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h1 className="text-3xl font-bold text-white mb-2">Bot Dashboard</h1>
              <p className="text-gray-300">Manage your Discord bot modules and configurations</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/40 backdrop-blur-xl border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Modules</p>
                      <p className="text-2xl font-bold text-white">{stats.totalModules}</p>
                    </div>
                    <Bot className="w-8 h-8 text-emerald-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Modules</p>
                      <p className="text-2xl font-bold text-white">{stats.activeModules}</p>
                    </div>
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Commands</p>
                      <p className="text-2xl font-bold text-white">{stats.totalCommands}</p>
                    </div>
                    <Settings className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-pink-500/20 hover:border-pink-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Server Members</p>
                      <p className="text-2xl font-bold text-white">{stats.serverMembers.toLocaleString()}</p>
                    </div>
                    <Users className="w-8 h-8 text-pink-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Module Sections */}
            {Object.entries(groupedModules).map(([category, modules]) => <div key={category} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">{getCategoryTitle(category)}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {modules.map(module => <Card key={module.id} className="bg-black/40 backdrop-blur-xl border-white/10 hover:border-emerald-400/50 transition-all duration-300 group relative overflow-hidden">
                      {/* Gradient blur background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      <CardHeader className="pb-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-white/10">
                            <module.icon className="w-6 h-6 text-emerald-400" />
                          </div>
                          {module.premium && <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              PRO
                            </span>}
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(module.status)}`} />
                          <CardTitle className="text-white text-lg">{module.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 relative z-10">
                        <p className="text-gray-400 text-sm">{module.description}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                            Configure
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/10 text-slate-950">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </div>)}
          </div>
        </main>
      </div>
    </div>;
};
export default BotDashboard;