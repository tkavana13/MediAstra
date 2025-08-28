import React, { useState } from 'react';
import { Heart, Activity, Apple, Moon, Droplets, Shield, TrendingUp, Users } from 'lucide-react';

const HealthTips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const healthTips = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      tip: "30 minutes of moderate exercise daily reduces heart disease risk by 35%",
      category: "exercise",
      color: "text-red-500",
      bgColor: "bg-red-50",
      personalizedTip: "Based on your age group, try brisk walking or swimming",
      scientificBasis: "American Heart Association Study, 2024"
    },
    {
      icon: Apple,
      title: "Nutrition Balance",
      tip: "Eat 5-9 servings of fruits and vegetables daily for optimal nutrient intake",
      category: "diet",
      color: "text-green-500",
      bgColor: "bg-green-50",
      personalizedTip: "Focus on colorful vegetables and seasonal fruits",
      scientificBasis: "Harvard School of Public Health Research"
    },
    {
      icon: Moon,
      title: "Sleep Quality",
      tip: "7-9 hours of quality sleep boosts immune function and cognitive performance",
      category: "rest",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      personalizedTip: "Create a bedtime routine and avoid screens 1 hour before sleep",
      scientificBasis: "National Sleep Foundation Guidelines"
    },
    {
      icon: Droplets,
      title: "Hydration",
      tip: "Drink at least 8 glasses of water daily to maintain optimal body functions",
      category: "wellness",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      personalizedTip: "Add lemon or cucumber for flavor and extra nutrients",
      scientificBasis: "Mayo Clinic Hydration Guidelines"
    },
    {
      icon: Activity,
      title: "Mental Health",
      tip: "Practice mindfulness or meditation for 10 minutes daily to reduce stress",
      category: "mental",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      personalizedTip: "Try guided meditation apps or deep breathing exercises",
      scientificBasis: "Journal of Clinical Psychology, 2024"
    },
    {
      icon: Shield,
      title: "Prevention",
      tip: "Regular health screenings can detect issues early when they're most treatable",
      category: "screening",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      personalizedTip: "Schedule annual check-ups and age-appropriate screenings",
      scientificBasis: "Preventive Medicine Task Force"
    },
    {
      icon: TrendingUp,
      title: "Stress Management",
      tip: "Chronic stress increases disease risk by 40% - manage it with healthy coping strategies",
      category: "mental",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      personalizedTip: "Try yoga, journaling, or talking to friends and family",
      scientificBasis: "Stress and Health Research Institute"
    },
    {
      icon: Users,
      title: "Social Connection",
      tip: "Strong social relationships can increase longevity by 50%",
      category: "wellness",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      personalizedTip: "Schedule regular time with friends and family",
      scientificBasis: "Longevity and Social Health Study"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Tips', icon: '🌟' },
    { id: 'exercise', label: 'Exercise', icon: '💪' },
    { id: 'diet', label: 'Nutrition', icon: '🥗' },
    { id: 'rest', label: 'Sleep', icon: '😴' },
    { id: 'mental', label: 'Mental Health', icon: '🧠' },
    { id: 'wellness', label: 'Wellness', icon: '✨' },
    { id: 'screening', label: 'Prevention', icon: '🛡️' }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? healthTips 
    : healthTips.filter(tip => tip.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Personalized Health Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-curated preventive health recommendations tailored to your lifestyle and risk factors
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Health Professional Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Health Professional" 
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Dr. Wellness AI</h4>
                <p className="text-white/90">Your Personal Health Coach</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">🎯 Personalization Features</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600">•</span>
                  <span>Age-specific recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600">•</span>
                  <span>Lifestyle-based suggestions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600">•</span>
                  <span>Evidence-based guidance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600">•</span>
                  <span>Progress tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className={`${tip.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      <tip.icon className={`h-6 w-6 ${tip.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{tip.tip}</p>
                      
                      <div className="space-y-2">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                          <p className="text-xs font-semibold text-purple-700 mb-1">💡 Personalized for you:</p>
                          <p className="text-xs text-gray-700">{tip.personalizedTip}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{tip.scientificBasis}</span>
                          <button className={`text-xs ${tip.color} hover:underline font-semibold`}>
                            Learn more →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Personalized Health Journey?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a comprehensive health plan tailored specifically to your needs, goals, and lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all">
              🎯 Get My Health Plan
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              📊 Track My Progress
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-purple-400">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-purple-100">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-purple-100">Lives Improved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;