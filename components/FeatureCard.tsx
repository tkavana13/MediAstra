import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color, bgColor }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className={`mt-6 ${color} hover:underline font-semibold flex items-center space-x-2 group`}>
        <span>Learn more</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
};

export default FeatureCard;