
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Search, Bell, User, ArrowLeft, Settings, Save, Upload, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BotSettings = () => {
  const [botName, setBotName] = useState('My Discord Bot');
  const [botDescription, setBotDescription] = useState('A powerful Discord bot created with GGWorld');
  const [botStatus, setBotStatus] = useState('online');
  const [botPrefix, setBotPrefix] = useState('!');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/bot-dashboard" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <span className="text-white font-bold text-lg">Bot Settings</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
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
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Bot Configuration</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-emerald-400 bg-emerald-500/10">
                    <Settings className="w-4 h-4 mr-3" />
                    General
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Bot className="w-4 h-4 mr-3" />
                    Permissions
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Upload className="w-4 h-4 mr-3" />
                    Deployment
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6 max-w-4xl">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h1 className="text-3xl font-bold text-white mb-2">Bot Settings</h1>
              <p className="text-gray-300">Configure your Discord bot settings and preferences</p>
            </div>

            {/* General Settings */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Bot Name</label>
                    <input
                      type="text"
                      value={botName}
                      onChange={(e) => setBotName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Command Prefix</label>
                    <input
                      type="text"
                      value={botPrefix}
                      onChange={(e) => setBotPrefix(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Bot Description</label>
                  <textarea
                    value={botDescription}
                    onChange={(e) => setBotDescription(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Bot Status</label>
                  <select
                    value={botStatus}
                    onChange={(e) => setBotStatus(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  >
                    <option value="online">Online</option>
                    <option value="idle">Idle</option>
                    <option value="dnd">Do Not Disturb</option>
                    <option value="invisible">Invisible</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Avatar & Branding */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Avatar & Branding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Avatar
                    </Button>
                    <p className="text-gray-400 text-sm">Recommended: 512x512px, PNG or JPG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="bg-black/40 backdrop-blur-xl border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Reset Bot Configuration</h4>
                    <p className="text-gray-400 text-sm">This will reset all bot settings to default values.</p>
                  </div>
                  <Button variant="destructive">
                    Reset Bot
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Delete Bot</h4>
                    <p className="text-gray-400 text-sm">Permanently delete this bot and all its data.</p>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Bot
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BotSettings;
