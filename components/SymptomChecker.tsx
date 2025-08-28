import React, { useState } from 'react';
import { Search, Brain, Clock, CheckCircle, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        conditions: [
          { name: "Common Cold", probability: 78, severity: "Low", description: "Viral upper respiratory infection" },
          { name: "Seasonal Allergies", probability: 65, severity: "Low", description: "Allergic rhinitis reaction" },
          { name: "Upper Respiratory Infection", probability: 45, severity: "Medium", description: "Bacterial or viral infection" }
        ],
        recommendations: [
          "Rest and stay hydrated with plenty of fluids",
          "Consider over-the-counter decongestants or antihistamines",
          "Monitor symptoms for 3-5 days and seek care if worsening",
          "Use a humidifier to ease breathing",
          "Gargle with warm salt water for throat relief"
        ],
        homeRemedies: [
          "Honey and ginger tea for throat soothing",
          "Steam inhalation with eucalyptus oil",
          "Warm compress on forehead for sinus pressure",
          "Chicken soup for hydration and comfort"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setSymptoms("I have been experiencing headache, runny nose, and fatigue for the past 2 days. I also have a slight fever and sore throat.");
        setIsListening(false);
      }, 3000);
    }
  };

  const handleSpeakResults = () => {
    setIsSpeaking(!isSpeaking);
    // Simulate text-to-speech
    setTimeout(() => {
      setIsSpeaking(false);
    }, 5000);
  };

  return (
    <section id="checker" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Symptom Checker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe your symptoms using text or voice and get instant AI-powered health insights with personalized recommendations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Brain className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Tell AI about your symptoms</h3>
              </div>
              <img 
                src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="AI Healthcare Assistant" 
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
              />
            </div>
            
            <div className="relative">
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe your symptoms in detail... (e.g., 'I have been experiencing headache, runny nose, and fatigue for the past 2 days')"
                className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700"
              />
              {isListening && (
                <div className="absolute inset-0 bg-blue-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse bg-red-500 w-4 h-4 rounded-full mx-auto mb-2"></div>
                    <p className="text-blue-600 font-semibold">Listening...</p>
                    <p className="text-sm text-gray-600">Speak clearly about your symptoms</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleVoiceInput}
                className={`flex-1 ${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2`}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                <span>{isListening ? 'Stop Listening' : 'Voice Input'}</span>
              </button>
              
              <button
                onClick={handleAnalyze}
                disabled={!symptoms.trim() || isAnalyzing}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span>Analyze Symptoms</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Professional Doctor" 
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Dr. AI Assistant</h4>
              <p className="text-white/90">Your 24/7 Health Companion</p>
            </div>
          </div>
        </div>
        
        {results && (
          <div className="mt-12 space-y-8">
            {/* Results Header */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Analysis Complete</h3>
                <button
                  onClick={handleSpeakResults}
                  className={`${isSpeaking ? 'bg-red-600' : 'bg-blue-600'} text-white p-2 rounded-lg hover:shadow-lg transition-all`}
                >
                  {isSpeaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>
              {isSpeaking && (
                <p className="text-blue-600 font-semibold animate-pulse">🔊 Speaking results...</p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Possible Conditions */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  Possible Conditions
                </h4>
                <div className="space-y-4">
                  {results.conditions.map((condition: any, index: number) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{condition.name}</span>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          condition.severity === 'Low' ? 'bg-green-100 text-green-800' :
                          condition.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {condition.severity} Risk
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{condition.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600">{condition.probability}% match</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000" 
                            style={{ width: `${condition.probability}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recommendations */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="h-6 w-6 text-blue-600 mr-3" />
                    Recommended Actions
                  </h4>
                  <ul className="space-y-3">
                    {results.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    🏠 Home Remedies
                  </h4>
                  <ul className="space-y-3">
                    {results.homeRemedies.map((remedy: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 p-3 bg-white/70 rounded-lg">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-gray-700 text-sm">{remedy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SymptomChecker;