import React, { useState } from 'react';
import { TrendingUp, Heart, Activity, AlertTriangle, Shield } from 'lucide-react';

const RiskAssessment: React.FC = () => {
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const riskFactors = [
    { id: 'smoking', label: 'Smoking', category: 'lifestyle' },
    { id: 'alcohol', label: 'Regular Alcohol Consumption', category: 'lifestyle' },
    { id: 'exercise', label: 'Sedentary Lifestyle', category: 'lifestyle' },
    { id: 'diet', label: 'Poor Diet', category: 'lifestyle' },
    { id: 'family_heart', label: 'Family History of Heart Disease', category: 'genetic' },
    { id: 'family_diabetes', label: 'Family History of Diabetes', category: 'genetic' },
    { id: 'high_bp', label: 'High Blood Pressure', category: 'medical' },
    { id: 'obesity', label: 'Obesity (BMI > 30)', category: 'medical' },
    { id: 'stress', label: 'High Stress Levels', category: 'lifestyle' },
    { id: 'age', label: 'Age > 45', category: 'demographic' }
  ];

  const riskResults = {
    diabetes: { risk: 68, trend: 'increasing', factors: ['family_diabetes', 'obesity', 'diet', 'exercise'] },
    heartDisease: { risk: 45, trend: 'moderate', factors: ['family_heart', 'high_bp', 'smoking', 'stress'] },
    stroke: { risk: 32, trend: 'low', factors: ['high_bp', 'smoking', 'age'] },
    cancer: { risk: 28, trend: 'low', factors: ['smoking', 'alcohol', 'family_heart'] },
    hypertension: { risk: 72, trend: 'high', factors: ['high_bp', 'stress', 'obesity', 'diet'] }
  };

  const handleFactorToggle = (factorId: string) => {
    setSelectedFactors(prev => 
      prev.includes(factorId) 
        ? prev.filter(id => id !== factorId)
        : [...prev, factorId]
    );
  };

  const calculateRisk = () => {
    setShowResults(true);
  };

  const getRiskColor = (risk: number) => {
    if (risk < 30) return 'text-green-600';
    if (risk < 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskBgColor = (risk: number) => {
    if (risk < 30) return 'from-green-500 to-green-600';
    if (risk < 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Disease Risk Prediction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI analyzes your lifestyle, medical history, and symptoms to assess risk levels for chronic illnesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Risk Factors Selection */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Select Your Risk Factors</h3>
            </div>

            <div className="space-y-6">
              {['lifestyle', 'genetic', 'medical', 'demographic'].map(category => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
                    {category === 'genetic' ? 'Family History' : category} Factors
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {riskFactors.filter(factor => factor.category === category).map(factor => (
                      <label key={factor.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={selectedFactors.includes(factor.id)}
                          onChange={() => handleFactorToggle(factor.id)}
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <span className="text-gray-700">{factor.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={calculateRisk}
              disabled={selectedFactors.length === 0}
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Calculate Risk Assessment
            </button>
          </div>

          {/* Doctor Image and Info */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Healthcare Professional" 
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Risk Assessment Specialist</h4>
                <p className="text-white/90">Personalized health predictions</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Why Risk Assessment Matters</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Early detection saves lives and reduces treatment costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Personalized prevention strategies for better health</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Activity className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Lifestyle modifications based on your unique profile</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Results */}
        {showResults && (
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Risk Assessment</h3>
              <p className="text-gray-600">Based on your selected risk factors, here's your health risk analysis</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(riskResults).map(([disease, data]) => {
                const matchingFactors = data.factors.filter(factor => selectedFactors.includes(factor)).length;
                const adjustedRisk = Math.min(95, data.risk + (matchingFactors * 8));
                
                return (
                  <div key={disease} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900 capitalize">
                        {disease.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <AlertTriangle className={`h-6 w-6 ${getRiskColor(adjustedRisk)}`} />
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Risk Level</span>
                        <span className={`text-2xl font-bold ${getRiskColor(adjustedRisk)}`}>
                          {adjustedRisk}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${getRiskBgColor(adjustedRisk)} transition-all duration-1000`}
                          style={{ width: `${adjustedRisk}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Matching Factors:</span>
                        <span className="font-semibold text-gray-900">{matchingFactors}/{data.factors.length}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Trend:</span>
                        <span className={`font-semibold capitalize ${
                          data.trend === 'increasing' || data.trend === 'high' ? 'text-red-600' :
                          data.trend === 'moderate' ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {data.trend}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="w-full text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors">
                        View Prevention Plan →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Personalized Recommendations</h4>
              <p className="text-gray-600 mb-6">
                Based on your risk assessment, we recommend focusing on lifestyle modifications and regular health screenings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Get Prevention Plan
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all">
                  Schedule Screening
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RiskAssessment;