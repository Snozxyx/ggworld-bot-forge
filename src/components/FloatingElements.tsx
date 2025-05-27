
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Mathematical expressions */}
      <div className="absolute top-1/4 left-12 text-gray-600 text-2xl font-mono opacity-60 animate-pulse">
        (12+12)
      </div>
      <div className="absolute top-1/3 right-16 text-gray-600 text-xl font-mono opacity-40 animate-pulse delay-1000">
        -15+6
      </div>
      <div className="absolute bottom-1/3 left-20 text-gray-600 text-lg font-mono opacity-50 animate-pulse delay-2000">
        3y
      </div>
      <div className="absolute bottom-1/4 right-12 text-gray-600 text-2xl font-mono opacity-60 animate-pulse delay-500">
        17+6-4
      </div>
      <div className="absolute top-1/2 left-1/4 text-gray-600 text-xl font-mono opacity-40 animate-pulse delay-1500">
        -8
      </div>
      <div className="absolute bottom-1/2 right-1/3 text-gray-600 text-lg font-mono opacity-50 animate-pulse delay-700">
        [24]
      </div>
      <div className="absolute top-3/4 left-1/3 text-gray-600 text-xl font-mono opacity-45 animate-pulse delay-300">
        [12]
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-40 animate-bounce delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-emerald-500 rounded-full opacity-30 animate-bounce delay-2000"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-50 animate-bounce delay-500"></div>
    </div>
  );
};

export default FloatingElements;
