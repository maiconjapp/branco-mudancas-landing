
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
                    <p>(24) 98807-7070</p>
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
            <div className="mt-8 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.788302164651!2d-43.182719924875315!3d-22.51212457953483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29ff1d90d372a80f%3A0x39cee2525577a295!2sBranco%20Fretes%20e%20Mudan%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1744926845325!5m2!1spt-BR!2sbr"
                className="w-full h-[450px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
