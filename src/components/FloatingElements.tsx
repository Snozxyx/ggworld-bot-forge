
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated tech elements with enhanced motion */}
      <div className="absolute top-1/4 left-12 text-cyan-400 text-2xl font-mono opacity-60 animate-pulse neon-glow floating-tech">
        &lt;/&gt;
      </div>
      <div className="absolute top-1/3 right-16 text-emerald-400 text-xl font-mono opacity-40 animate-pulse delay-1000 neon-glow floating-tech-slow">
        {'{API}'}
      </div>
      <div className="absolute bottom-1/3 left-20 text-purple-400 text-lg font-mono opacity-50 animate-pulse delay-2000 neon-glow floating-tech-bounce">
        [BOT]
      </div>
      <div className="absolute bottom-1/4 right-12 text-cyan-400 text-2xl font-mono opacity-60 animate-pulse delay-500 neon-glow floating-tech-rotate">
        &lt;AI/&gt;
      </div>
      <div className="absolute top-1/2 left-1/4 text-pink-400 text-xl font-mono opacity-40 animate-pulse delay-1500 neon-glow floating-tech-drift">
        {'{JS}'}
      </div>
      <div className="absolute bottom-1/2 right-1/3 text-emerald-400 text-lg font-mono opacity-50 animate-pulse delay-700 neon-glow floating-tech-swing">
        [NODE]
      </div>
      <div className="absolute top-3/4 left-1/3 text-cyan-400 text-xl font-mono opacity-45 animate-pulse delay-300 neon-glow floating-tech-slide">
        {'{DISCORD}'}
      </div>
      <div className="absolute top-1/6 right-1/4 text-purple-400 text-sm font-mono opacity-30 animate-pulse delay-2500 neon-glow floating-tech-zoom">
        function()
      </div>
      <div className="absolute bottom-1/6 left-1/6 text-pink-400 text-sm font-mono opacity-35 animate-pulse delay-1800 neon-glow floating-tech-wave">
        async/await
      </div>

      {/* Enhanced floating neon particles with trails */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 neon-particle floating-particle-1"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-40 neon-particle floating-particle-2"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full opacity-30 neon-particle floating-particle-3"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 neon-particle floating-particle-4"></div>
      <div className="absolute top-1/5 left-3/4 w-2 h-2 bg-cyan-300 rounded-full opacity-45 neon-particle floating-particle-5"></div>
      
      {/* Animated connection lines */}
      <div className="absolute top-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-cyan-400/20 to-transparent neon-line animate-pulse"></div>
      <div className="absolute bottom-1/2 right-1/4 w-24 h-0.5 bg-gradient-to-l from-emerald-400/20 to-transparent neon-line animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-1/2 w-20 h-0.5 bg-gradient-to-r from-purple-400/20 to-transparent neon-line animate-pulse delay-500"></div>
    </div>
  );
};

export default FloatingElements;
