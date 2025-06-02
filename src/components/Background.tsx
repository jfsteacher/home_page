import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-white">
      {/* Artistic elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Diagonal lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={`line-${index}`}
            className="absolute bg-gray-400"
            style={{
              height: '1px',
              width: `${Math.random() * 100 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
        ))}
        
        {/* Circles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={`circle-${index}`}
            className="absolute border border-gray-300 rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          ></div>
        ))}
        
        {/* Dots */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={`dot-${index}`}
            className="absolute bg-gray-300 rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Background;