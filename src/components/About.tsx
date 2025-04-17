
import React from 'react';
import { Award, Check, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre a Branco Fretes e Mudanças</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Há mais de 10 anos atuando em Petrópolis e região, nos especializamos em tornar o momento da 
              mudança uma experiência tranquila e sem estresse para nossos clientes.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
              Nossa equipe inclui profissionais mulheres dedicadas ao processo de embalagem, garantindo um
              toque especial de capricho e cuidado com seus pertences mais delicados.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                  <Award className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">10+ Anos de Experiência</h3>
                  <p className="text-gray-600">Atendendo com excelência em Petrópolis e toda região.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Toque Feminino</h3>
                  <p className="text-gray-600">Embalagem cuidadosa feita por mulheres da nossa equipe.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Compromisso com Prazos</h3>
                  <p className="text-gray-600">Pontualidade e respeito com o seu tempo.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="bg-white rounded-lg p-3 shadow-xl -rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1610526588123-d7e8f506d3f7?auto=format&fit=crop&w=600&h=500" 
                  alt="Equipe Branco Fretes e Mudanças" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-blue text-white rounded-lg px-6 py-4 shadow-lg rotate-3">
                <p className="font-semibold text-lg">Tudo feito com carinho e profissionalismo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
