
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Search, Bell, User, Plus, Settings, ArrowLeft, Code, MessageSquare, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommandBuilder = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for command blocks
  const commandBlocks = {
    advanced: [
      { id: 1, name: "Send or Edit a Message", description: "Send or edit a message with advanced features and embed options", icon: MessageSquare },
      { id: 2, name: "Edit a Button or Select Menu", description: "Edit a button or select menu in a message", icon: Settings },
      { id: 3, name: "Send a Form", description: "Send a form to collect user input for a command", icon: Code },
      { id: 4, name: "Delete a Message", description: "Delete a message or reply", icon: Trash2 }
    ],
    variables: [
      { id: 5, name: "Set Variable", description: "Set the value of a custom variable", icon: Settings },
      { id: 6, name: "Run Equation on Variable", description: "Run an equation on a custom variable", icon: Code },
      { id: 7, name: "Delete Variable", description: "Delete the value of a custom variable", icon: Trash2 }
    ],
    api: [
      { id: 8, name: "Send an API Request", description: "Send HTTP requests to an external API", icon: Code },
      { id: 9, name: "Execute an IFTTT Trigger", description: "Run an IFTTT trigger for integrations", icon: Settings }
    ]
  };

  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'advanced': return 'Advanced Message';
      case 'variables': return 'Custom Variable Actions';
      case 'api': return 'API Actions';
      default: return 'Other';
    }
  };

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
            <div className="relative ml-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Save Command
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
        {/* Sidebar with blocks */}
        <aside className="w-80 bg-black/20 backdrop-blur-xl border-r border-white/10 min-h-[calc(100vh-73px)] overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Blocks</h2>
              <p className="text-gray-400 text-sm">Drag and drop blocks to build your command</p>
            </div>

            <div className="space-y-6">
              {Object.entries(commandBlocks).map(([category, blocks]) => (
                <div key={category}>
                  <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                    {getCategoryTitle(category)}
                  </h3>
                  <div className="space-y-2">
                    {blocks.map((block) => (
                      <Card key={block.id} className="bg-black/40 backdrop-blur-xl border-white/10 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-white/10 flex-shrink-0">
                              <block.icon className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white text-sm font-medium mb-1">{block.name}</h4>
                              <p className="text-gray-400 text-xs leading-relaxed">{block.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Canvas Area */}
        <main className="flex-1 p-6">
          <div className="h-full">
            {/* Canvas Header */}
            <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Command Builder</h1>
              <p className="text-gray-300">Create custom slash commands for your Discord bot</p>
            </div>

            {/* Canvas Area */}
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 h-[calc(100vh-250px)]">
              <CardContent className="p-8 h-full">
                <div className="border-2 border-dashed border-gray-600 rounded-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <Bot className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">Start Building Your Command</h3>
                    <p className="text-gray-500 mb-4">Drag blocks from the sidebar to create your custom command</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Block
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommandBuilder;
