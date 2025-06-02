import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-t from-gray-50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://www.linkedin.com/in/jean-fabrice-stachowiak-17ab50178/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <div className="w-16 h-0.5 bg-gray-200"></div>
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} jfsteacher
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;