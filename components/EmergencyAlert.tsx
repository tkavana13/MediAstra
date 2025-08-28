import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Clock, Heart, Brain } from 'lucide-react';

const EmergencyAlert: React.FC = () => {
  const [emergencyType, setEmergencyType] = useState<string>('');
  const [showAlert, setShowAlert] = useState(false);

  const emergencyConditions = [
    {
      id: 'chest_pain',
      title: 'Chest Pain',
      icon: '💔',
      symptoms: ['Crushing chest pain', 'Pain radiating to arm/jaw', 'Shortness of breath', 'Sweating'],
      urgency: 'CRITICAL',
      action: 'Call 911 immediately - Possible heart attack'
    },
    {
      id: 'stroke',
      title: 'Stroke Signs (FAST)',
      icon: '🧠',
      symptoms: ['Face drooping', 'Arm weakness', 'Speech difficulty', 'Time to call 911'],
      urgency: 'CRITICAL',
      action: 'Call 911 immediately - Every minute counts'
    },
    {
      id: 'breathing',
      title: 'Severe Breathing Problems',
      icon: '🫁',
      symptoms: ['Cannot speak in full sentences', 'Blue lips/fingernails', 'Gasping for air', 'Wheezing severely'],
      urgency: 'CRITICAL',
      action: 'Call 911 immediately - Respiratory emergency'
    },
    {
      id: 'allergic',
      title: 'Severe Allergic Reaction',
      icon: '🚨',
      symptoms: ['Swelling of face/throat', 'Difficulty swallowing', 'Rapid pulse', 'Widespread rash'],
      urgency: 'CRITICAL',
      action: 'Call 911 and use EpiPen if available'
    },
    {
      id: 'bleeding',
      title: 'Severe Bleeding',
      icon: '🩸',
      symptoms: ['Bleeding that won\'t stop', 'Spurting blood', 'Large amount of blood loss', 'Weakness/dizziness'],
      urgency: 'HIGH',
      action: 'Apply pressure and call 911'
    },
    {
      id: 'unconscious',
      title: 'Loss of Consciousness',
      icon: '😵',
      symptoms: ['Unresponsive to voice/touch', 'Not breathing normally', 'No pulse', 'Seizure activity'],
      urgency: 'CRITICAL',
      action: 'Call 911 and start CPR if trained'
    }
  ];

  const handleEmergencyCheck = (conditionId: string) => {
    setEmergencyType(conditionId);
    setShowAlert(true);
  };

  const selectedCondition = emergencyConditions.find(c => c.id === emergencyType);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="h-12 w-12 text-red-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Emergency Alert System
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered emergency symptom detection for immediate medical situations
          </p>
        </div>

        {!showAlert ? (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Emergency Conditions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Critical Emergency Signs</h3>
                {emergencyConditions.map((condition) => (
                  <div key={condition.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-red-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{condition.icon}</span>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{condition.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            condition.urgency === 'CRITICAL' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {condition.urgency}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleEmergencyCheck(condition.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                      >
                        Check Now
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {condition.symptoms.map((symptom, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Resources */}
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Emergency Medical Team" 
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Emergency Response Team</h4>
                    <p className="text-white/90">Ready 24/7 for critical situations</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">🚨 Emergency Actions</h4>
                  <div className="space-y-4">
                    <div className="bg-red-600 text-white p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-6 w-6" />
                        <div>
                          <div className="font-bold text-lg">Call 911 Immediately</div>
                          <div className="text-red-100">For life-threatening emergencies</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-600 text-white p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-6 w-6" />
                        <div>
                          <div className="font-bold">Find Nearest Hospital</div>
                          <div className="text-blue-100">Emergency room locations</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-600 text-white p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Heart className="h-6 w-6" />
                        <div>
                          <div className="font-bold">First Aid Instructions</div>
                          <div className="text-green-100">Immediate care steps</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">Golden Hour Principle</h5>
                      <p className="text-gray-700 text-sm">
                        The first hour after a medical emergency is critical. Quick action can save lives and prevent permanent damage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-600 text-white rounded-t-3xl p-8 text-center">
              <AlertTriangle className="h-16 w-16 mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-bold mb-2">🚨 EMERGENCY DETECTED 🚨</h3>
              <p className="text-xl text-red-100">Immediate medical attention required</p>
            </div>
            
            <div className="bg-white rounded-b-3xl p-8 shadow-2xl">
              {selectedCondition && (
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <span className="text-6xl">{selectedCondition.icon}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{selectedCondition.title}</h4>
                      <p className="text-lg text-red-600 font-semibold">{selectedCondition.action}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-2xl text-center">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h5 className="font-bold text-gray-900 mb-2">Call 911 NOW</h5>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                    📞 CALL 911
                  </button>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h5 className="font-bold text-gray-900 mb-2">Nearest Hospital</h5>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                    🏥 FIND HOSPITAL
                  </button>
                </div>
                
                <div className="bg-green-50 p-6 rounded-2xl text-center">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h5 className="font-bold text-gray-900 mb-2">First Aid</h5>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors">
                    🩹 FIRST AID
                  </button>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">Important Reminders</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Stay calm and speak clearly to emergency operators</li>
                      <li>• Provide your exact location and describe the emergency</li>
                      <li>• Follow the operator's instructions carefully</li>
                      <li>• Don't hang up until told to do so</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAlert(false)}
                  className="text-gray-600 hover:text-gray-800 font-semibold"
                >
                  ← Back to Emergency Checker
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmergencyAlert;