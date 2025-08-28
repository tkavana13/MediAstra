import React from 'react';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SymptoScan AI</h3>
                <p className="text-gray-400">Intelligent Health Analysis</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Revolutionary AI-powered healthcare platform providing instant symptom analysis, 
              risk assessment, and personalized health guidance. Always consult with healthcare 
              professionals for medical decisions.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Symptom Checker</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Alerts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medication Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SymptoScan AI. All rights reserved. This platform provides health information and should not replace professional medical advice.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;