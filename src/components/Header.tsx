
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-brand-blue">
            Branco <span className="text-gray-700">Fretes e Mudanças</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#servicos" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Serviços</a>
          <a href="#depoimentos" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Depoimentos</a>
          <a href="#sobre" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Sobre Nós</a>
          <a href="#contato" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <a 
              href="#servicos" 
              className="font-medium text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#depoimentos" 
              className="font-medium text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#sobre" 
              className="font-medium text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#contato" 
              className="font-medium text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
