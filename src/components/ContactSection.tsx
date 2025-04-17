
import React from 'react';
import ContactForm from './ContactForm';
import WhatsAppButton from './WhatsAppButton';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Solicite um orçamento grátis ou tire suas dúvidas sobre nossos serviços de mudança
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-lg p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Como podemos ajudar você?</h3>
              
              <p className="mb-8">
                Estamos prontos para tornar sua mudança uma experiência tranquila e livre de estresse. 
                Clique no botão do WhatsApp para obter um orçamento rápido e sem compromisso.
              </p>
              
              <div className="mb-10">
                <WhatsAppButton text="Orçamento Grátis pelo WhatsApp" className="w-full justify-center"/>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p>(24) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p>contato@brancofretes.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p>Petrópolis, RJ</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p>Segunda a Sábado, 8h às 21h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
