
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    origin: '',
    destination: '',
    type: 'residential',
    observations: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*Nova Solicitação de Orçamento*
*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Origem:* ${formData.origin}
*Destino:* ${formData.destination}
*Tipo:* ${formData.type === 'residential' ? 'Residencial' : 'Comercial'}
${formData.observations ? `*Observações:* ${formData.observations}` : ''}`;

    // Create WhatsApp link with formatted message
    const whatsappLink = `https://wa.me/5524988077070?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Continue o envio da mensagem no WhatsApp.",
    });
    
    // Reset form
    setFormData({
      name: '',
      whatsapp: '',
      origin: '',
      destination: '',
      type: 'residential',
      observations: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-custom p-6">
      <div className="space-y-6">
        {/* Personal Data Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
        </div>

        {/* Moving Details Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Dados da Mudança</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="origin">Origem</Label>
              <input
                type="text"
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Endereço de origem"
              />
            </div>
            
            <div>
              <Label htmlFor="destination">Destino</Label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Endereço de destino"
              />
            </div>

            <div>
              <Label>Tipo de Mudança</Label>
              <RadioGroup
                value={formData.type}
                onValueChange={handleTypeChange}
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="residential" id="residential" />
                  <Label htmlFor="residential">Residencial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commercial" id="commercial" />
                  <Label htmlFor="commercial">Comercial</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="observations">Observações (Opcional)</Label>
              <textarea
                id="observations"
                name="observations"
                value={formData.observations}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Detalhes adicionais sobre sua mudança..."
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mt-6"
      >
        Solicitar Orçamento via WhatsApp
      </button>
    </form>
  );
};

export default ContactForm;
