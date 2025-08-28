import React from 'react';
import { Stethoscope, Shield, Zap, Mic, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI-Powered Healthcare
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Don't just <span className="text-blue-600">guess</span> your health,
              <br />
              <span className="text-green-600 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">scan</span> it with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Revolutionary AI-powered health analysis with voice recognition that provides instant symptom checking, 
              risk prediction, and personalized medical guidance at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Start Health Scan</span>
              </button>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center space-x-2">
                <Mic className="h-5 w-5" />
                <span>Voice Analysis</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1M+</div>
                <div className="text-sm text-gray-600">Users Trust Us</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Doctor using AI technology" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-lg">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-2xl shadow-lg">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Instant Analysis</div>
                  <div className="text-sm text-gray-600">30 seconds</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">HIPAA Secure</div>
                  <div className="text-sm text-gray-600">100% Private</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl mb-4">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Analysis</h3>
            <p className="text-gray-600 text-center leading-relaxed">Advanced machine learning algorithms analyze symptoms with medical-grade accuracy using voice and text input</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-2xl mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-600 text-center leading-relaxed">HIPAA-compliant security ensures your health data remains completely confidential and protected</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Results</h3>
            <p className="text-gray-600 text-center leading-relaxed">Get comprehensive health insights and personalized recommendations in under 30 seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;