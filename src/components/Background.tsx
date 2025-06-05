import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fond principal avec animation de couleur */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" />
      
      {/* Couche de superposition avec effet de flou */}
      <div className="absolute inset-0 backdrop-blur-[100px]">
        {/* Formes animées */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`shape-${index}`}
            className="absolute rounded-full animate-float mix-blend-multiply filter blur-3xl"
            style={{
              width: `${Math.random() * 40 + 20}%`,
              height: `${Math.random() * 40 + 20}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(${Math.random() * 360}deg, 
                rgba(59, 130, 246, 0.5), 
                rgba(147, 51, 234, 0.5), 
                rgba(236, 72, 153, 0.5))`,
              animationDelay: `${index * -3}s`,
              animationDuration: '15s',
            }}
          />
        ))}
      </div>
      
      {/* Effet de grain subtil */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay">
        <div className="absolute inset-0 bg-noise" />
      </div>
    </div>
  );
};

export default Background;