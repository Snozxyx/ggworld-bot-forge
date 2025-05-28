
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, Settings, Download, Upload, Eye, Code, Palette, Bell, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleConfig = () => {
  const [embedConfig, setEmbedConfig] = useState({
    title: 'Welcome to GGWorld',
    description: 'Configure your Discord bot modules with ease',
    color: '#10b981',
    author: 'GGWorld Bot',
    footer: 'Powered by GGWorld',
    thumbnail: '',
    image: '',
    timestamp: true
  });

  const [moduleSettings, setModuleSettings] = useState({
    moduleName: '',
    moduleType: 'command',
    enabled: true,
    permissions: [],
    triggers: [],
    responses: []
  });

  const [bannerSettings, setBannerSettings] = useState({
    showBanner: true,
    bannerText: 'Module Configuration',
    bannerColor: 'emerald'
  });

  const generateEmbedJSON = () => {
    return {
      embeds: [{
        title: embedConfig.title,
        description: embedConfig.description,
        color: parseInt(embedConfig.color.replace('#', ''), 16),
        author: {
          name: embedConfig.author
        },
        footer: {
          text: embedConfig.footer
        },
        timestamp: embedConfig.timestamp ? new Date().toISOString() : undefined,
        thumbnail: embedConfig.thumbnail ? { url: embedConfig.thumbnail } : undefined,
        image: embedConfig.image ? { url: embedConfig.image } : undefined
      }]
    };
  };

  const downloadJSON = () => {
    const json = generateEmbedJSON();
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'discord-embed.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePermissionChange = (permission: string, checked: boolean) => {
    setModuleSettings(prev => ({
      ...prev,
      permissions: checked 
        ? [...prev.permissions, permission]
        : prev.permissions.filter(p => p !== permission)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/bot-dashboard" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
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

      {/* Banner */}
      {bannerSettings.showBanner && (
        <div className={`bg-gradient-to-r from-${bannerSettings.bannerColor}-600/20 to-cyan-600/20 backdrop-blur-xl border-b border-white/10 p-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-6 h-6 text-emerald-400" />
              <h1 className="text-xl font-bold text-white">{bannerSettings.bannerText}</h1>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setBannerSettings(prev => ({ ...prev, showBanner: false }))}
              className="text-gray-400 hover:text-white"
            >
              ×
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Configuration */}
          <div className="space-y-6">
            {/* Module Basic Settings */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-emerald-400" />
                  <span>Module Configuration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="moduleName" className="text-gray-300">Module Name</Label>
                  <Input
                    id="moduleName"
                    value={moduleSettings.moduleName}
                    onChange={(e) => setModuleSettings(prev => ({ ...prev, moduleName: e.target.value }))}
                    placeholder="Enter module name"
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-gray-300">Module Type</Label>
                  <RadioGroup 
                    value={moduleSettings.moduleType} 
                    onValueChange={(value) => setModuleSettings(prev => ({ ...prev, moduleType: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="command" id="command" className="border-white/20 text-emerald-400" />
                      <Label htmlFor="command" className="text-gray-300">Slash Command</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="event" id="event" className="border-white/20 text-emerald-400" />
                      <Label htmlFor="event" className="text-gray-300">Event Handler</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="webhook" id="webhook" className="border-white/20 text-emerald-400" />
                      <Label htmlFor="webhook" className="text-gray-300">Webhook</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-gray-300">Permissions Required</Label>
                  <div className="space-y-2">
                    {['ADMINISTRATOR', 'MANAGE_MESSAGES', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS'].map((permission) => (
                      <div key={permission} className="flex items-center space-x-2">
                        <Checkbox
                          id={permission}
                          checked={moduleSettings.permissions.includes(permission)}
                          onCheckedChange={(checked) => handlePermissionChange(permission, checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                        />
                        <Label htmlFor={permission} className="text-gray-300">{permission}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="enabled"
                    checked={moduleSettings.enabled}
                    onCheckedChange={(checked) => setModuleSettings(prev => ({ ...prev, enabled: checked as boolean }))}
                    className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                  />
                  <Label htmlFor="enabled" className="text-gray-300">Enable Module</Label>
                </div>
              </CardContent>
            </Card>

            {/* Discord Embed Configuration */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Code className="w-5 h-5 text-emerald-400" />
                  <span>Discord Embed Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="embedTitle" className="text-gray-300">Title</Label>
                    <Input
                      id="embedTitle"
                      value={embedConfig.title}
                      onChange={(e) => setEmbedConfig(prev => ({ ...prev, title: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="embedColor" className="text-gray-300">Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="embedColor"
                        type="color"
                        value={embedConfig.color}
                        onChange={(e) => setEmbedConfig(prev => ({ ...prev, color: e.target.value }))}
                        className="w-16 h-10 bg-white/5 border-white/10"
                      />
                      <Input
                        value={embedConfig.color}
                        onChange={(e) => setEmbedConfig(prev => ({ ...prev, color: e.target.value }))}
                        className="flex-1 bg-white/5 border-white/10 text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="embedDescription" className="text-gray-300">Description</Label>
                  <Textarea
                    id="embedDescription"
                    value={embedConfig.description}
                    onChange={(e) => setEmbedConfig(prev => ({ ...prev, description: e.target.value }))}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="embedAuthor" className="text-gray-300">Author</Label>
                    <Input
                      id="embedAuthor"
                      value={embedConfig.author}
                      onChange={(e) => setEmbedConfig(prev => ({ ...prev, author: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="embedFooter" className="text-gray-300">Footer</Label>
                    <Input
                      id="embedFooter"
                      value={embedConfig.footer}
                      onChange={(e) => setEmbedConfig(prev => ({ ...prev, footer: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="timestamp"
                    checked={embedConfig.timestamp}
                    onCheckedChange={(checked) => setEmbedConfig(prev => ({ ...prev, timestamp: checked as boolean }))}
                    className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                  />
                  <Label htmlFor="timestamp" className="text-gray-300">Include Timestamp</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview & JSON */}
          <div className="space-y-6">
            {/* Live Preview */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-emerald-400" />
                  <span>Live Preview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#36393f] p-4 rounded-lg">
                  <div className="bg-[#2f3136] border-l-4 p-4 rounded" style={{ borderLeftColor: embedConfig.color }}>
                    {embedConfig.author && (
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-white text-sm font-medium">{embedConfig.author}</span>
                      </div>
                    )}
                    {embedConfig.title && (
                      <h3 className="text-white font-semibold mb-2">{embedConfig.title}</h3>
                    )}
                    {embedConfig.description && (
                      <p className="text-gray-300 text-sm mb-3">{embedConfig.description}</p>
                    )}
                    {embedConfig.footer && (
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-3 pt-2 border-t border-gray-600">
                        <span>{embedConfig.footer}</span>
                        {embedConfig.timestamp && (
                          <span>{new Date().toLocaleString()}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* JSON Output */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    <span>JSON Output</span>
                  </div>
                  <Button onClick={downloadJSON} size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg overflow-auto max-h-96">
                  <pre className="text-green-400 text-sm">
                    {JSON.stringify(generateEmbedJSON(), null, 2)}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                Save Configuration
              </Button>
              <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5">
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleConfig;
