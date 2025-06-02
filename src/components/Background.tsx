import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-sky-100">
      <div className="absolute inset-0">
        {/* Diagonal brush strokes */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={`stroke-${index}`}
            className="absolute"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 60 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${45 + Math.random() * 20}deg)`,
              background: `linear-gradient(45deg, 
                ${Math.random() > 0.5 ? 'rgb(239, 68, 68)' : 'rgb(59, 130, 246)'} 0%,
                ${Math.random() > 0.5 ? 'rgb(185, 28, 28)' : 'rgb(29, 78, 216)'} 100%)`,
              opacity: Math.random() * 0.4 + 0.1,
              filter: 'blur(8px)',
              mixBlendMode: 'multiply'
            }}
          />
        ))}
        
        {/* Sparkle effects */}
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={`sparkle-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'white',
              opacity: Math.random() * 0.3 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;