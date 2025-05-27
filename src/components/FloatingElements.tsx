
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Neon tech elements */}
      <div className="absolute top-1/4 left-12 text-cyan-400 text-2xl font-mono opacity-60 animate-pulse neon-glow">
        &lt;/&gt;
      </div>
      <div className="absolute top-1/3 right-16 text-emerald-400 text-xl font-mono opacity-40 animate-pulse delay-1000 neon-glow">
        {'{API}'}
      </div>
      <div className="absolute bottom-1/3 left-20 text-purple-400 text-lg font-mono opacity-50 animate-pulse delay-2000 neon-glow">
        [BOT]
      </div>
      <div className="absolute bottom-1/4 right-12 text-cyan-400 text-2xl font-mono opacity-60 animate-pulse delay-500 neon-glow">
        &lt;AI/&gt;
      </div>
      <div className="absolute top-1/2 left-1/4 text-pink-400 text-xl font-mono opacity-40 animate-pulse delay-1500 neon-glow">
        {'{JS}'}
      </div>
      <div className="absolute bottom-1/2 right-1/3 text-emerald-400 text-lg font-mono opacity-50 animate-pulse delay-700 neon-glow">
        [NODE]
      </div>
      <div className="absolute top-3/4 left-1/3 text-cyan-400 text-xl font-mono opacity-45 animate-pulse delay-300 neon-glow">
        {'{DISCORD}'}
      </div>
      <div className="absolute top-1/6 right-1/4 text-purple-400 text-sm font-mono opacity-30 animate-pulse delay-2500 neon-glow">
        function()
      </div>
      <div className="absolute bottom-1/6 left-1/6 text-pink-400 text-sm font-mono opacity-35 animate-pulse delay-1800 neon-glow">
        async/await
      </div>

      {/* Floating neon particles */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-bounce neon-particle"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-40 animate-bounce delay-1000 neon-particle"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full opacity-30 animate-bounce delay-2000 neon-particle"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 animate-bounce delay-500 neon-particle"></div>
      <div className="absolute top-1/5 left-3/4 w-2 h-2 bg-cyan-300 rounded-full opacity-45 animate-bounce delay-1200 neon-particle"></div>
    </div>
  );
};

export default FloatingElements;
