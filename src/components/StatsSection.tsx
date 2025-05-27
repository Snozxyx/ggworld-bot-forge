
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Users, Zap, Globe } from 'lucide-react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    totalBots: 0,
    activeUsers: 0,
    serversHosted: 0,
    commandsExecuted: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = {
        totalBots: 12847,
        activeUsers: 89342,
        serversHosted: 156789,
        commandsExecuted: 2847392
      };

      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          totalBots: Math.floor(targets.totalBots * progress),
          activeUsers: Math.floor(targets.activeUsers * progress),
          serversHosted: Math.floor(targets.serversHosted * progress),
          commandsExecuted: Math.floor(targets.commandsExecuted * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(targets);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Powering Discord Communities{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Worldwide
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Join thousands of developers and communities already using GGWorld to create amazing Discord experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
          <Card className="bg-black/40 backdrop-blur-md border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 group neon-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border">
                <Bot className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{formatNumber(stats.totalBots)}</div>
              <div className="text-gray-400">Bots Created</div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 group neon-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{formatNumber(stats.activeUsers)}</div>
              <div className="text-gray-400">Active Users</div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 group neon-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{formatNumber(stats.serversHosted)}</div>
              <div className="text-gray-400">Servers Hosted</div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-pink-500/20 hover:border-pink-400/50 transition-all duration-500 group neon-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 neon-border">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{formatNumber(stats.commandsExecuted)}</div>
              <div className="text-gray-400">Commands Executed</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
