import React, { useState, useEffect } from 'react';

// Inject keyframes into document head
const injectKeyframes = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(-100%); }
    }
    @keyframes slideDown {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);
};

interface Rectangle {
  id: number;
  direction: 'up' | 'down';
  delay: number;
  gradient: string;
}

const PageTransition: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [key, setKey] = useState(0);

  // Define 4 rectangles with cool wave-like delay pattern
  const rectangles: Rectangle[] = [
    { id: 1, direction: 'up', delay: 0, gradient: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { id: 2, direction: 'down', delay: 400, gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
    { id: 3, direction: 'up', delay: 200, gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
    { id: 4, direction: 'down', delay: 600, gradient: 'bg-gradient-to-br from-amber-500 to-orange-600' },
  ];

  const replayAnimation = () => {
    setKey(prev => prev + 1);
    setShowContent(false);
    setTimeout(() => setShowContent(true), 2200);
  };

  useEffect(() => {
    // Inject keyframes on component mount
    injectKeyframes();
    
    const timer = setTimeout(() => setShowContent(true), 2200);
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center flex-col text-white text-center p-8">
        <h1 
          className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: showContent ? '0ms' : '0ms' }}
        >
          Welcome to Your Website
        </h1>
        
        <p 
          className={`text-xl md:text-2xl max-w-2xl leading-relaxed transition-all duration-1000 ease-out ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: showContent ? '500ms' : '0ms' }}
        >
          Experience the smooth transition as the rectangles reveal your content with a beautiful animated entrance that captures attention and creates a memorable first impression.
        </p>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className={`absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-white bg-opacity-10 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: showContent ? '1500ms' : '0ms',
              animation: showContent ? 'float 6s ease-in-out infinite' : 'none'
            }}
          />
          <div 
            className={`absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white bg-opacity-10 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: showContent ? '2000ms' : '0ms',
              animation: showContent ? 'float 6s ease-in-out infinite 2s' : 'none'
            }}
          />
          <div 
            className={`absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-white bg-opacity-10 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: showContent ? '2500ms' : '0ms',
              animation: showContent ? 'float 6s ease-in-out infinite 4s' : 'none'
            }}
          />
        </div>
      </div>

      {/* Transition Rectangles */}
      <div key={key} className="fixed inset-0 z-50 pointer-events-none">
        {rectangles.map((rect) => (
          <div
            key={rect.id}
            className={`absolute h-full shadow-2xl ${rect.gradient} transform-gpu`}
            style={{
              left: `${(rect.id - 1) * 25}%`,
              width: '25%',
              animation: `${rect.direction === 'up' ? 'slideUp' : 'slideDown'} 1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) ${rect.delay}ms forwards`
            }}
          />
        ))}
      </div>

      {/* Replay Button */}
      <button
        onClick={replayAnimation}
        className={`fixed bottom-8 right-8 px-6 py-3 bg-white bg-opacity-20 border-2 border-white border-opacity-30 rounded-full text-white font-medium cursor-pointer backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:border-opacity-50 hover:-translate-y-1 z-50 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: showContent ? '3000ms' : '0ms' }}
      >
        ↻ Replay Animation
      </button>

    </div>
  );
};

export default PageTransition;