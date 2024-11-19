import React from 'react';
import { Calculator, BeakerIcon, Scale, ExternalLink } from 'lucide-react';
import { CalculatorHempIcon } from './icons/CalculatorHempIcon';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hemp & CBD Calculators
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            Professional-grade calculators for precise CBD dosing, hemp measurements, and product formulations
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a
              href="#calculators"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Calculators
            </a>
            <a
              href="/documentation"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-emerald-800/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://bigbudzcbd.com/product-category/cbd-vape-pens/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition-colors group"
            >
              <span className="font-medium">Shop CBD Vape Pens</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://bigbudzcbd.com/product-category/cbd-gummies/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition-colors group"
            >
              <span className="font-medium">Explore CBD Gummies</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://bigbudzcbd.com/product-category/cbd-tinctures/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition-colors group"
            >
              <span className="font-medium">Discover CBD Tinctures</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};