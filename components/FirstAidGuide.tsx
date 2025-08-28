import React, { useState } from 'react';
import { Heart, Thermometer, Droplets, Pill, Clock, AlertCircle } from 'lucide-react';

const FirstAidGuide: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<string>('headache');

  const firstAidGuides = {
    headache: {
      icon: '🤕',
      title: 'Headache Relief',
      severity: 'Low',
      immediateSteps: [
        'Find a quiet, dark room to rest',
        'Apply cold compress to forehead for 15 minutes',
        'Drink plenty of water to stay hydrated',
        'Gently massage temples and neck muscles'
      ],
      homeRemedies: [
        'Peppermint oil: Apply diluted oil to temples',
        'Ginger tea: Steep fresh ginger in hot water',
        'Lavender aromatherapy: Inhale lavender essential oil',
        'Magnesium supplement: 400mg daily (consult doctor first)'
      ],
      medications: [
        'Ibuprofen: 200-400mg every 4-6 hours',
        'Acetaminophen: 500-1000mg every 4-6 hours',
        'Aspirin: 325-650mg every 4 hours'
      ],
      whenToSeekHelp: [
        'Sudden, severe headache unlike any before',
        'Headache with fever, stiff neck, or rash',
        'Headache after head injury',
        'Progressive worsening over days'
      ]
    },
    fever: {
      icon: '🌡️',
      title: 'Fever Management',
      severity: 'Medium',
      immediateSteps: [
        'Rest in bed and avoid strenuous activity',
        'Drink plenty of fluids (water, herbal tea, broth)',
        'Wear light, breathable clothing',
        'Use cool, damp cloth on forehead'
      ],
      homeRemedies: [
        'Elderberry syrup: Natural immune booster',
        'Willow bark tea: Natural fever reducer',
        'Cool bath or shower to lower body temperature',
        'Honey and lemon in warm water for comfort'
      ],
      medications: [
        'Acetaminophen: 500-1000mg every 4-6 hours',
        'Ibuprofen: 200-400mg every 6-8 hours',
        'Aspirin: 325-650mg every 4 hours (adults only)'
      ],
      whenToSeekHelp: [
        'Fever above 103°F (39.4°C)',
        'Fever lasting more than 3 days',
        'Difficulty breathing or chest pain',
        'Severe dehydration or persistent vomiting'
      ]
    },
    nausea: {
      icon: '🤢',
      title: 'Nausea & Vomiting',
      severity: 'Medium',
      immediateSteps: [
        'Sit upright and breathe slowly and deeply',
        'Sip small amounts of clear fluids',
        'Avoid solid foods until nausea subsides',
        'Rest in a comfortable position'
      ],
      homeRemedies: [
        'Ginger: Fresh ginger tea or ginger candies',
        'Peppermint: Peppermint tea or aromatherapy',
        'BRAT diet: Bananas, rice, applesauce, toast',
        'Acupressure: Press P6 point on wrist'
      ],
      medications: [
        'Dramamine: 50-100mg every 4-6 hours',
        'Pepto-Bismol: Follow package directions',
        'Ginger supplements: 250mg 3-4 times daily'
      ],
      whenToSeekHelp: [
        'Persistent vomiting for more than 24 hours',
        'Signs of severe dehydration',
        'Blood in vomit or severe abdominal pain',
        'High fever with vomiting'
      ]
    },
    cough: {
      icon: '😷',
      title: 'Cough Relief',
      severity: 'Low',
      immediateSteps: [
        'Stay hydrated with warm liquids',
        'Use a humidifier or breathe steam',
        'Elevate your head while sleeping',
        'Avoid irritants like smoke or strong odors'
      ],
      homeRemedies: [
        'Honey: 1-2 teaspoons before bed (not for infants)',
        'Salt water gargle: 1/2 tsp salt in warm water',
        'Thyme tea: Natural cough suppressant',
        'Marshmallow root tea: Soothes throat irritation'
      ],
      medications: [
        'Dextromethorphan: Follow package directions',
        'Guaifenesin: 200-400mg every 4 hours',
        'Throat lozenges: As needed for comfort'
      ],
      whenToSeekHelp: [
        'Cough lasting more than 3 weeks',
        'Coughing up blood or thick, colored mucus',
        'Difficulty breathing or wheezing',
        'High fever with persistent cough'
      ]
    }
  };

  const currentGuide = firstAidGuides[selectedCondition as keyof typeof firstAidGuides];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            First Aid Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-curated self-care steps and home remedies for common health conditions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Condition Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Select Condition</h3>
              <div className="space-y-3">
                {Object.entries(firstAidGuides).map(([key, guide]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCondition(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedCondition === key 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{guide.icon}</span>
                      <div>
                        <div className="font-semibold">{guide.title}</div>
                        <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                          selectedCondition === key 
                            ? 'bg-white/20 text-white' 
                            : getSeverityColor(guide.severity)
                        }`}>
                          {guide.severity} Priority
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Disclaimer:</strong> This guide provides general information only. Always consult healthcare professionals for serious conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guide Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{currentGuide.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentGuide.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(currentGuide.severity)}`}>
                      {currentGuide.severity} Priority
                    </span>
                  </div>
                </div>
                <img 
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Healthcare Professional" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                />
              </div>
            </div>

            {/* Immediate Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-red-600" />
                <h4 className="text-xl font-bold text-gray-900">Immediate Steps</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentGuide.immediateSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-xl">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Remedies */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-6 w-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">Natural Home Remedies</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentGuide.homeRemedies.map((remedy, index) => (
                  <div key={index} className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold text-lg">🌿</span>
                      <span className="text-gray-700">{remedy}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Pill className="h-6 w-6 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-900">Over-the-Counter Medications</h4>
              </div>
              <div className="space-y-3">
                {currentGuide.medications.map((medication, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                    <Pill className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{medication}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-xl">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Always read labels and consult a pharmacist or doctor before taking any medication, especially if you have allergies or take other medications.
                </p>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <h4 className="text-xl font-bold text-gray-900">When to Seek Medical Help</h4>
              </div>
              <div className="space-y-3">
                {currentGuide.whenToSeekHelp.map((warning, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white/70 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{warning}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                  🚨 Call Emergency Services: 911
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstAidGuide;