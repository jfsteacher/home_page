import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fond principal avec texture de papier grunge */}
      <div 
        className="absolute inset-0 bg-amber-50"
        style={{
          backgroundImage: `url('https://img.freepik.com/photos-gratuite/fond-papier-grunge_1048-10849.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Couche d'overlay pour ajuster la luminosité et le contraste */}
      <div className="absolute inset-0 bg-amber-50/30 mix-blend-soft-light" />
      
      {/* Effet de grain subtil */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
        <div className="absolute inset-0 bg-noise" />
      </div>
      
      {/* Vignette pour donner un effet vieilli aux bords */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
};

export default Background;