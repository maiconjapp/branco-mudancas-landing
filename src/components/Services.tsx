
import React from 'react';
import ServiceCard from './ServiceCard';
import { Home, Briefcase, Users, Package, Truck, MessageCircle, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Mudanças Residenciais",
      description: "Cuidamos de sua mudança com total atenção aos detalhes, garantindo que seus pertences cheguem em segurança ao novo lar.",
      imageSrc: "https://i.ibb.co/qwTfHtT/a-realistic-photo-of-a-residential-moving-team-wearing-orange-polo-shirts-and-blue-jeans-unloading-m.png"
    },
    {
      icon: Briefcase,
      title: "Mudanças Comerciais",
      description: "Movimentação de escritórios e empresas com planejamento para minimizar o tempo de inatividade do seu negócio.",
      imageSrc: "https://i.ibb.co/5XnRcBZw/enhanced-a87c40eb-17fe-4fe9-af39-3ccb882d6c00.png"
    },
    {
      icon: Users,
      title: "Equipe Treinada",
      description: "Nossa equipe é especializada, com toque feminino para cuidado extra na embalagem e proteção dos seus itens.",
      imageSrc: "https://i.ibb.co/GfzN07mZ/enhanced-b051e500-4ee2-4651-882b-ca6abbc7ffda.png"
    },
    {
      icon: Package,
      title: "Embalagem Completa",
      description: "Serviço completo de desmontagem, embalagem e montagem, garantindo que tudo chegue intacto ao destino.",
      imageSrc: "https://i.ibb.co/GfzN07mZ/enhanced-b051e500-4ee2-4651-882b-ca6abbc7ffda.png"
    },
    {
      icon: Truck,
      title: "Transporte Seguro",
      description: "Veículos adequados e seguros para transportar seus pertences, incluindo cobertura de seguro para toda a mudança."
    },
    {
      icon: MessageCircle,
      title: "Atendimento Rápido",
      description: "Orçamentos imediatos via WhatsApp e suporte completo antes, durante e após sua mudança."
    },
    {
      icon: CreditCard,
      title: "Pagamento Facilitado",
      description: "Diversas opções de pagamento incluindo cartão de crédito, para sua conveniência e tranquilidade."
    }
  ];
  
  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos soluções completas para tornar sua mudança tranquila e sem preocupações
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
