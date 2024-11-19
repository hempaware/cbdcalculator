import React, { useState } from 'react';
import { Menu, X, ChevronDown, Scale, Beaker, Calculator, Dog } from 'lucide-react';
import { CalculatorHempIcon } from './icons/CalculatorHempIcon';

interface NavbarProps {
  isMobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);

  const calculatorLinks = [
    { href: '/dosage', label: 'CBD Dosage Calculator', icon: Scale },
    { href: '/dog-dosage', label: 'Dog CBD Calculator', icon: Dog },
    { href: '/dilution', label: 'Dilution Calculator', icon: Beaker },
    { href: '/conversion', label: 'Unit Converter', icon: Calculator },
    { href: '/ratio', label: 'CBD:THC Ratio', icon: Scale }
  ];

  return (
    <nav className="bg-emerald-800/95 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <CalculatorHempIcon className="w-6 h-6 text-emerald-300" />
            <span className="text-white font-semibold text-lg group-hover:text-emerald-200 transition-colors">CBD Calculator Tools</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsCalculatorsOpen(!isCalculatorsOpen)}
                className="text-emerald-100 hover:text-white transition-colors flex items-center gap-1 py-2"
              >
                CBD Calculators
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full -left-2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-56 py-1">
                  {calculatorLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-emerald-800 hover:bg-emerald-50 transition-colors flex items-center gap-2"
                      >
                        <Icon className="w-4 h-4 text-emerald-600" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <a href="/documentation" className="text-emerald-100 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="/benefits" className="text-emerald-100 hover:text-white transition-colors">
              CBD Benefits
            </a>
            <a href="/resources" className="text-emerald-100 hover:text-white transition-colors">
              Resources
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-emerald-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-emerald-800 border-t border-emerald-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              <div className="space-y-2">
                <p className="text-emerald-200 font-medium px-4">CBD Calculators</p>
                {calculatorLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 px-4 py-2 text-emerald-100 hover:bg-emerald-700/50 rounded"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <a href="/documentation" className="block px-4 py-2 text-emerald-100 hover:bg-emerald-700/50 rounded">
                Documentation
              </a>
              <a href="/benefits" className="block px-4 py-2 text-emerald-100 hover:bg-emerald-700/50 rounded">
                CBD Benefits
              </a>
              <a href="/resources" className="block px-4 py-2 text-emerald-100 hover:bg-emerald-700/50 rounded">
                Resources
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};