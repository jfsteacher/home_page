import React from 'react';

interface BubbleProps {
  url: string;
  title: string;
  description: string;
  index: number;
  color: string;
}

const Bubble: React.FC<BubbleProps> = ({ url, title, description, index, color }) => {
  const animationDelay = `${index * 0.2}s`;
  
  const getGradientClass = (baseColor: string) => {
    const gradientMap: Record<string, string> = {
      'bg-blue-600': 'bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800',
      'bg-purple-600': 'bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800',
      'bg-green-600': 'bg-gradient-to-br from-green-400 via-green-600 to-green-800',
      'bg-red-600': 'bg-gradient-to-br from-red-400 via-red-600 to-red-800',
      'bg-yellow-600': 'bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800',
      'bg-indigo-600': 'bg-gradient-to-br from-indigo-400 via-indigo-600 to-indigo-800',
      'bg-pink-600': 'bg-gradient-to-br from-pink-400 via-pink-600 to-pink-800',
      'bg-teal-600': 'bg-gradient-to-br from-teal-400 via-teal-600 to-teal-800'
    };
    return gradientMap[baseColor] || baseColor;
  };

  const gradientClass = getGradientClass(color);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full sm:w-64 md:w-72 lg:w-80 aspect-square rounded-full flex flex-col items-center justify-center p-6 
                ${gradientClass} shadow-[0_20px_50px_rgba(75,85,99,0.5)] text-white
                transition-all duration-500 hover:shadow-[0_30px_60px_rgba(75,85,99,0.7)] hover:scale-105 hover:-translate-y-2
                group relative overflow-hidden`}
      style={{ 
        animationDelay,
      }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tl ${gradientClass.replace('-br', '-tl')} brightness-125`}></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full border border-white/40 opacity-30"
            style={{
              width: `${70 + i * 20}%`,
              height: `${70 + i * 20}%`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animationName: 'ripple',
              animationDuration: `${4 + i}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">{title}</h2>
        <div className="w-12 h-0.5 bg-white/70 mx-auto mb-3 transition-all duration-300 group-hover:w-16 group-hover:bg-white"></div>
        <p className="text-sm md:text-base text-white transition-all duration-300 group-hover:text-white drop-shadow">{description}</p>
      </div>
    </a>
  );
};

export default Bubble;