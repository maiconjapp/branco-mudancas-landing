
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-blue-50 pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Sua Mudança Segura e Sem Estresse em Petrópolis
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
              Cuidamos de tudo para você, com carinho e profissionalismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <WhatsAppButton text="Peça seu Orçamento Grátis" className="text-base md:text-lg px-6 py-4"/>
              <a 
                href="#contato" 
                className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white
                  font-semibold py-3 px-5 md:px-6 md:py-4 rounded-lg transition-all duration-300
                  text-center text-base md:text-lg"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="bg-brand-blue rounded-lg p-2 rotate-3 shadow-xl">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipOOHGswiLcRbq9OvVjuKIcpF6Cv_FqDyCwkKF0FRyxOuZmeDFEogblu0=s3056-w3056-h1476-rw"
                    alt="Caminhão de Mudança Branco Fretes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg p-4 shadow-custom animate-float">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className="ml-2 font-semibold text-gray-700">5,0/5,0 - 73 avaliações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

