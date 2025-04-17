
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialProps) => {
  return (
    <div className="bg-white shadow-custom rounded-lg p-6 relative">
      <div className="flex text-yellow-400 mb-3">
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
      </div>
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          {role && <p className="text-gray-500 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
