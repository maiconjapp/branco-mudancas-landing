
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text: string;
  className?: string;
  fixed?: boolean;
}

const WhatsAppButton = ({ text, className = "", fixed = false }: WhatsAppButtonProps) => {
  const phoneNumber = "5524988077070"; // Updated WhatsApp number
  const message = "Olá! Gostaria de solicitar um orçamento para mudança.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`
        flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-green-500 
        text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300 
        whatsapp-shadow ${className} ${fixed ? 'fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg' : ''}
      `}
    >
      <MessageCircle className={fixed ? 'w-6 h-6' : 'w-5 h-5'} />
      {!fixed && <span>{text}</span>}
    </a>
  );
};

export default WhatsAppButton;
