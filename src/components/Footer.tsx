
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Branco Fretes e Mudanças</h3>
            <p className="max-w-xs text-gray-400">
              Sua mudança segura e tranquila em Petrópolis e região, com mais de 10 anos de experiência.
            </p>
            <div className="mt-6">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-2">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <p className="text-sm">5,0/5,0 - 73 avaliações no Google</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contato Rápido</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(24) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@brancofretes.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Petrópolis, RJ</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Segunda a Sábado, 8h às 21h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Branco Fretes e Mudanças. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
