import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-sky-100">
      <div className="absolute inset-0">
        {/* Coups de pinceau principaux */}
        {Array.from({ length: 25 }).map((_, index) => (
          <div 
            key={`stroke-${index}`}
            className="absolute"
            style={{
              width: `${Math.random() * 400 + 300}px`,
              height: `${Math.random() * 80 + 60}px`,
              left: `${Math.random() * 120 - 10}%`,
              top: `${Math.random() * 120 - 10}%`,
              transform: `rotate(${35 + Math.random() * 25}deg)`,
              background: `linear-gradient(45deg, 
                ${Math.random() > 0.6 ? 'rgb(239, 68, 68)' : 'rgb(59, 130, 246)'} 0%,
                ${Math.random() > 0.4 ? 'rgb(185, 28, 28)' : 'rgb(29, 78, 216)'} 100%)`,
              opacity: Math.random() * 0.5 + 0.2,
              filter: 'blur(12px)',
              mixBlendMode: 'multiply',
              borderRadius: '40% 60% 55% 45% / 40% 45% 55% 60%'
            }}
          />
        ))}
        
        {/* Coups de pinceau secondaires */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={`secondary-stroke-${index}`}
            className="absolute"
            style={{
              width: `${Math.random() * 200 + 150}px`,
              height: `${Math.random() * 40 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${-20 + Math.random() * 40}deg)`,
              background: `linear-gradient(45deg, 
                rgba(239, 68, 68, 0.6),
                rgba(59, 130, 246, 0.6))`,
              opacity: Math.random() * 0.3 + 0.1,
              filter: 'blur(8px)',
              mixBlendMode: 'multiply',
              borderRadius: '30% 70% 45% 55% / 50% 45% 55% 50%'
            }}
          />
        ))}
        
        {/* Effets de brillance */}
        {Array.from({ length: 40 }).map((_, index) => (
          <div 
            key={`sparkle-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'white',
              opacity: Math.random() * 0.4 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;