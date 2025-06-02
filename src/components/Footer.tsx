import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-t from-gray-900 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://www.linkedin.com/in/jean-fabrice-stachowiak-17ab50178/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <div className="w-16 h-0.5 bg-white/40"></div>
          <p className="text-white/60 text-center text-sm">
            © {new Date().getFullYear()} jfsteacher
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer