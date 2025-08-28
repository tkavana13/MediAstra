import React from 'react';
import { Search, TrendingUp, Pill, AlertTriangle, Heart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Symptom Checker",
      description: "Enter your symptoms and get AI-powered analysis with possible conditions based on comprehensive medical databases. Our intelligent system considers symptom combinations and severity levels.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: TrendingUp,
      title: "Disease Risk Prediction",
      description: "Advanced AI analyzes your lifestyle, medical history, and current symptoms to assess risk levels for chronic conditions like diabetes, heart disease, and more.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Pill,
      title: "Medication & First Aid Guide",
      description: "Receive safe, AI-curated self-care recommendations and over-the-counter medicine suggestions when appropriate, with detailed guidance for home treatment.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Alerts",
      description: "Our AI immediately detects severe red-flag symptoms and provides urgent care recommendations, including when to seek emergency medical attention.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Heart,
      title: "Preventive Health Tips",
      description: "Get personalized lifestyle and nutrition advice designed to reduce your risk of future illnesses based on your unique health profile and risk factors.",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Health Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our advanced AI-powered tools designed to 
            keep you healthy, informed, and prepared for any health situation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;