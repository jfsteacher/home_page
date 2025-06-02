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
      'bg-sky-300': 'bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400',
      'bg-pink-200': 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300',
      'bg-emerald-200': 'bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-300',
      'bg-orange-200': 'bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300'
    };
    return gradientMap[baseColor] || baseColor;
  };

  const gradientClass = getGradientClass(color);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full sm:w-64 md:w-72 lg:w-80 aspect-square rounded-2xl flex flex-col items-center justify-center p-6 
                ${gradientClass} shadow-lg hover:shadow-xl text-gray-700
                transition-all duration-500 hover:scale-105 hover:-translate-y-2
                group relative overflow-hidden`}
      style={{ 
        animationDelay,
      }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tl ${gradientClass.replace('-br', '-tl')} brightness-105`}></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full border border-gray-700/10 opacity-30"
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">{title}</h2>
        <div className="w-12 h-0.5 bg-gray-700/30 mx-auto mb-3 transition-all duration-300 group-hover:w-16 group-hover:bg-gray-700/50"></div>
        <p className="text-sm md:text-base text-gray-600 transition-all duration-300 group-hover:text-gray-800">{description}</p>
      </div>
    </a>
  );
};

export default Bubble;