import React from 'react';
import Bubble from './Bubble';

const BubbleContainer: React.FC = () => {
  const sites = [
    {
      url: 'http://ascp3.jfsteacher.fr',
      title: 'ASCP3',
      description: 'Application de Suivi des Certifications Pix pour les élèves 3ème',
      color: 'bg-blue-600'
    },
    {
      url: 'https://ascp6.jfsteacher.fr/',
      title: 'ASCP6',
      description: 'Application de Suivi des Parcours PIX Pour les élèves de 6ème',
      color: 'bg-purple-600'
    },
    {
      url: 'https://enthdf.jfsteacher.fr/',
      title: 'ENT HDF',
      description: 'Les statistiques de l\'ENT',
      color: 'bg-green-600'
    },
    {
      url: 'http://score.jfsteacher.fr',
      title: 'Scores',
      description: 'Calculs de scores',
      color: 'bg-red-600'
    },
    {
      url: 'http://jfs62223.free.fr/apps',
      title: 'Apps Edu',
      description: 'Sélection d\'applications',
      color: 'bg-yellow-600'
    },
    {
      url: 'http://jfs62223.free.fr/archi/',
      title: 'Espace Scolaire',
      description: 'Réflexion sur les espaces scolaires',
      color: 'bg-indigo-600'
    },
    {
      url: 'http://ia.jfsteacher.fr',
      title: 'IA',
      description: 'Référencement d\'applications IA',
      color: 'bg-pink-600'
    },
    {
      url: 'http://jfs62223.free.fr/carte2D/Etab_2D.html',
      title: 'Carte 2D Ac Lille',
      description: 'Carte des établissements de l\'académie de Lille',
      color: 'bg-teal-600'
    }, {
      url: 'http://jfs62223.free.fr/acc',
      title: 'Accessibilité numérique',
      description: 'L\'accessibilité numérique des documents textuels',
      color: 'bg-teal-600'
    }
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {sites.map((site, index) => (
            <div key={index} className="bubble-animation" style={{ animationDelay: `${index * 0.2}s` }}>
              <Bubble 
                url={site.url} 
                title={site.title} 
                description={site.description} 
                index={index}
                color={site.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BubbleContainer;