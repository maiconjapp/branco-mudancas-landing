
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom border border-gray-100 hover:border-brand-blue transition-all duration-300 group">
      <div className="bg-blue-50 p-3 rounded-full inline-block mb-4 group-hover:bg-brand-blue transition-colors duration-300">
        <Icon className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
