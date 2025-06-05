import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-16 overflow-hidden z-50 bg-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50 to-white opacity-80"></div>
      <div className="absolute inset-0 z-0 opacity-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-gray-400"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight">
          {'jfsteacher'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-letter bg-gradient-to-r from-sky-400 via-emerald-300 to-orange-300 text-transparent bg-clip-text"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: 'translateY(0)',
                opacity: 1,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-sky-400 via-emerald-300 to-orange-300 mx-auto mt-6 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;