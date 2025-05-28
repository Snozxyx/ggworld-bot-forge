import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Users, Zap, Globe, Play, Pause, Settings, MoreVertical, Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for bots
  const bots = [
    {
      id: 1,
      name: "Moderation Bot",
      status: "running",
      runtime: "24h 15m",
      performance: 98,
      commands: 1247,
      servers: 156
    },
    {
      id: 2,
      name: "Music Bot",
      status: "running", 
      runtime: "18h 32m",
      performance: 95,
      commands: 892,
      servers: 89
    },
    {
      id: 3,
      name: "Welcome Bot",
      status: "stopped",
      runtime: "0h 0m",
      performance: 87,
      commands: 234,
      servers: 45
    }
  ];

  const stats = {
    totalBots: 12,
    activeBots: 8,
    totalRuntime: "2,847h",
    commandsExecuted: 45832,
    successRate: 96.8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
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
              <input
                type="text"
                placeholder="Search bots..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64"
              />
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
                  <Button variant="ghost" className="w-full justify-start text-emerald-400 bg-emerald-500/10">
                    <Bot className="w-4 h-4 mr-3" />
                    Dashboard
                  </Button>
                  <Link to="/bot-dashboard">
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                      <Zap className="w-4 h-4 mr-3" />
                      Bot Modules
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Users className="w-4 h-4 mr-3" />
                    Analytics
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Management</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </Button>
                  <Link to="/support">
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                      <Globe className="w-4 h-4 mr-3" />
                      Support
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
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
              <p className="text-gray-300">Manage your Discord bots and monitor their performance</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/40 backdrop-blur-xl border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Bots</p>
                      <p className="text-2xl font-bold text-white">{stats.totalBots}</p>
                    </div>
                    <Bot className="w-8 h-8 text-emerald-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Bots</p>
                      <p className="text-2xl font-bold text-white">{stats.activeBots}</p>
                    </div>
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Runtime</p>
                      <p className="text-2xl font-bold text-white">{stats.totalRuntime}</p>
                    </div>
                    <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-pink-500/20 hover:border-pink-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Commands Executed</p>
                      <p className="text-2xl font-bold text-white">{stats.commandsExecuted.toLocaleString()}</p>
                    </div>
                    <Users className="w-8 h-8 text-pink-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Bots Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">My Bots</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Bot className="w-4 h-4 mr-2" />
                  Create New Bot
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {bots.map((bot) => (
                  <Card key={bot.id} className="bg-black/40 backdrop-blur-xl border-white/10 hover:border-emerald-400/50 transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-lg">{bot.name}</CardTitle>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${bot.status === 'running' ? 'bg-green-400' : 'bg-red-400'}`} />
                        <span className={`text-sm ${bot.status === 'running' ? 'text-green-400' : 'text-red-400'}`}>
                          {bot.status === 'running' ? 'Running' : 'Stopped'}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Runtime</p>
                          <p className="text-white font-medium">{bot.runtime}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Performance</p>
                          <p className="text-white font-medium">{bot.performance}%</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Commands</p>
                          <p className="text-white font-medium">{bot.commands}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Servers</p>
                          <p className="text-white font-medium">{bot.servers}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant={bot.status === 'running' ? 'destructive' : 'default'}
                          className="flex-1"
                        >
                          {bot.status === 'running' ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Stop
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Start
                            </>
                          )}
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/10 text-gray-300 hover:text-white">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Success Rate</span>
                      <span className="text-green-400 font-medium">{stats.successRate}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${stats.successRate}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white">99.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white">45ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Servers</span>
                      <span className="text-white">290</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
