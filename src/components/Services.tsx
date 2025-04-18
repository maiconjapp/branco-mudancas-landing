
import React from 'react';
import ServiceCard from './ServiceCard';
import { Home, Briefcase, Users, Package, Truck, MessageCircle, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Mudanças Residenciais",
      description: "Cuidamos de sua mudança com total atenção aos detalhes, garantindo que seus pertences cheguem em segurança ao novo lar em Copacabana, Ipanema, Leblon ou qualquer região do Rio de Janeiro.",
      imageSrc: "https://i.ibb.co/9mV7MMQc/a-realistic-photo-of-a-professional-moving-team-unloading-boxes-from-a-moving-truck-the-movers-are-6.png",
      imageAlt: "Equipe de mudança residencial descarregando caixas de um caminhão em Copacabana, Rio de Janeiro"
    },
    {
      icon: Briefcase,
      title: "Mudanças Comerciais",
      description: "Movimentação de escritórios e empresas na Zona Sul e Zona Norte do Rio de Janeiro com planejamento para minimizar o tempo de inatividade do seu negócio.",
      imageSrc: "https://i.ibb.co/F4PxmXjS/enhanced-a87c40eb-17fe-4fe9-af39-3ccb882d6c00.png",
      imageAlt: "Profissionais realizando mudança comercial de escritório no Rio de Janeiro"
    },
    {
      icon: Users,
      title: "Equipe Treinada",
      description: "Nossa equipe especializada em mudanças para Tijuca, Méier, Madureira e toda Zona Norte oferece um toque de cuidado extra na embalagem e proteção dos seus itens.",
      imageSrc: "https://i.ibb.co/V0hnLjzV/enhanced-fe9a8d32-720e-4198-9129-46a0b7b473ed.png",
      imageAlt: "Equipe profissional treinada para realizar mudanças residenciais no Rio de Janeiro"
    },
    {
      icon: Package,
      title: "Embalagem Completa",
      description: "Serviço completo de desmontagem, embalagem e montagem para mudanças em Botafogo, Flamengo e Laranjeiras, garantindo que tudo chegue intacto ao destino.",
      imageSrc: "https://i.ibb.co/F4PxmXjS/enhanced-a87c40eb-17fe-4fe9-af39-3ccb882d6c00.png",
      imageAlt: "Serviço de embalagem profissional para mudanças na Zona Sul do Rio de Janeiro"
    },
    {
      icon: Truck,
      title: "Transporte Seguro",
      description: "Caminhões de mudança adequados e seguros para transportar seus móveis e pertences em todo o Rio de Janeiro, incluindo cobertura de seguro para toda a mudança.",
      imageSrc: "https://i.ibb.co/57kJMQx/enhanced-9165c89e-0c1b-4a7d-85c6-f5315203d75e.png",
      imageAlt: "Caminhão de mudança da empresa Branco Fretes realizando transporte seguro no Rio de Janeiro"
    },
    {
      icon: MessageCircle,
      title: "Atendimento Rápido",
      description: "Orçamentos imediatos via WhatsApp para mudanças em Vila Isabel, Engenho de Dentro e toda Zona Norte, com suporte completo antes, durante e após sua mudança."
    },
    {
      icon: CreditCard,
      title: "Pagamento Facilitado",
      description: "Diversas opções de pagamento para seu frete barato no RJ, incluindo cartão de crédito, para sua conveniência em qualquer região da cidade."
    }
  ];
  
  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Nossos Serviços de Mudança no Rio de Janeiro</h2>
        <p className="section-subtitle">
          Oferecemos soluções completas de fretes e mudanças para tornar sua mudança tranquila e sem preocupações em qualquer bairro do RJ
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
