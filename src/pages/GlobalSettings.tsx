
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Search, Bell, User, ArrowLeft, Settings, Save, Moon, Sun, Shield, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalSettings = () => {
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [developerMode, setDeveloperMode] = useState(false);

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
            <span className="text-white font-bold text-lg">Global Settings</span>
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
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Global Settings</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-emerald-400 bg-emerald-500/10">
                    <Settings className="w-4 h-4 mr-3" />
                    General
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Shield className="w-4 h-4 mr-3" />
                    Security
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Key className="w-4 h-4 mr-3" />
                    API Keys
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
              <h1 className="text-3xl font-bold text-white mb-2">Global Settings</h1>
              <p className="text-gray-300">Manage your account preferences and global configurations</p>
            </div>

            {/* Appearance Settings */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-white font-medium">Theme</h4>
                    <p className="text-gray-400 text-sm">Choose your preferred theme</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('dark')}
                      className={theme === 'dark' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-white/10 text-gray-300'}
                    >
                      <Moon className="w-4 h-4 mr-2" />
                      Dark
                    </Button>
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('light')}
                      className={theme === 'light' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-white/10 text-gray-300'}
                    >
                      <Sun className="w-4 h-4 mr-2" />
                      Light
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-white font-medium">Notifications</h4>
                    <p className="text-gray-400 text-sm">Receive notifications about bot status and updates</p>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications ? 'bg-emerald-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-white font-medium">Auto-save</h4>
                    <p className="text-gray-400 text-sm">Automatically save changes as you work</p>
                  </div>
                  <button
                    onClick={() => setAutoSave(!autoSave)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      autoSave ? 'bg-emerald-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        autoSave ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-white font-medium">Developer Mode</h4>
                    <p className="text-gray-400 text-sm">Enable advanced developer features and debugging</p>
                  </div>
                  <button
                    onClick={() => setDeveloperMode(!developerMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      developerMode ? 'bg-emerald-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        developerMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Display Name</label>
                    <input
                      type="text"
                      defaultValue="GGWorld User"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      defaultValue="user@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Data Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Export Data</h4>
                    <p className="text-gray-400 text-sm">Download a copy of your bot configurations and data</p>
                  </div>
                  <Button variant="outline" className="border-white/10 text-gray-300 hover:text-white">
                    Export
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Clear Cache</h4>
                    <p className="text-gray-400 text-sm">Clear cached data to improve performance</p>
                  </div>
                  <Button variant="outline" className="border-white/10 text-gray-300 hover:text-white">
                    Clear Cache
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

export default GlobalSettings;
