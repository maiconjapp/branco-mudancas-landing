
import React from 'react';
import TestimonialCard from './TestimonialCard';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Serviço excepcional! A equipe cuidou dos meus móveis com muita atenção. O cuidado das meninas ao embalar tudo foi incrível.",
      author: "Maria Silva",
      role: "Mudança residencial"
    },
    {
      quote: "Pontualidade e organização impecáveis. Fizeram minha mudança em tempo recorde e sem nenhum dano aos meus pertences.",
      author: "Carlos Oliveira",
      role: "Mudança comercial"
    },
    {
      quote: "Equipe muito profissional e atenciosa. A desmontagem e montagem dos móveis foi perfeita, recomendo muito!",
      author: "Ana Luiza Mendes",
      role: "Mudança residencial"
    }
  ];
  
  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Clientes que Confiam em Nosso Trabalho</h2>
        <p className="section-subtitle">
          Veja o que nossos clientes têm a dizer sobre nossas mudanças
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-16">
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm w-full max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
              </div>
              <p className="ml-2 font-bold text-gray-700 text-lg">5,0/5,0 - 73 avaliações no Google</p>
            </div>
            <p className="text-center text-gray-600">
              Empresa com 100% de satisfação dos clientes em Petrópolis e região
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
