import React from 'react';
import { DosageCalculator } from './pages/DosageCalculator';
import { DilutionCalculator } from './pages/DilutionCalculator';
import { ConversionCalculator } from './pages/ConversionCalculator';
import { RatioCalculator } from './pages/RatioCalculator';
import { Documentation } from './pages/Documentation';
import { HempResources } from './pages/HempResources';
import { DogDosageCalculator } from './pages/DogDosageCalculator';
import { CBDBenefits } from './pages/CBDBenefits';
import { Hero } from './components/Hero';
import { Resources } from './components/Resources';
import { Navbar } from './components/Navbar';

function App() {
  const getContent = () => {
    const path = window.location.pathname;
    
    // Update document title based on current page
    React.useEffect(() => {
      const titles: { [key: string]: string } = {
        '/': 'CBD Daily Dosage Calculator | Hemp & CBD Calculators',
        '/dosage': 'CBD Dosage Calculator | Calculate Your Daily CBD Dose',
        '/dilution': 'CBD Dilution Calculator | Calculate CBD Oil Ratios',
        '/conversion': 'CBD Unit Converter | Convert CBD Measurements',
        '/ratio': 'CBD:THC Ratio Calculator | Find Your Ideal Ratio',
        '/dog-dosage': 'Dog CBD Dosage Calculator | Pet CBD Dosing Guide',
        '/documentation': 'CBD Calculator Documentation | Usage Guidelines',
        '/benefits': 'CBD Benefits & Research | Scientific Studies',
        '/resources': 'Hemp & CBD Resources | Educational Materials'
      };
      
      document.title = titles[path] || titles['/'];
    }, [path]);
    
    switch (path) {
      case '/dosage':
        return <DosageCalculator />;
      case '/dilution':
        return <DilutionCalculator />;
      case '/conversion':
        return <ConversionCalculator />;
      case '/ratio':
        return <RatioCalculator />;
      case '/dog-dosage':
        return <DogDosageCalculator />;
      case '/documentation':
        return <Documentation />;
      case '/benefits':
        return <CBDBenefits />;
      case '/resources':
        return <HempResources />;
      default:
        return (
          <>
            <Hero />
            <section id="calculators" className="py-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">
                  Choose Your Calculator
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CalculatorCard
                    href="/dog-dosage"
                    title="Dog CBD Calculator"
                    description="Calculate CBD dosage for your canine companion"
                  />
                  <CalculatorCard
                    href="/dosage"
                    title="Dosage Calculator"
                    description="Calculate optimal CBD dosage based on body weight"
                  />
                  <CalculatorCard
                    href="/dilution"
                    title="Dilution Calculator"
                    description="Calculate CBD concentration for oils and tinctures"
                  />
                  <CalculatorCard
                    href="/conversion"
                    title="Unit Converter"
                    description="Convert between different CBD measurement units"
                  />
                  <CalculatorCard
                    href="/ratio"
                    title="CBD:THC Ratio"
                    description="Calculate the ratio between CBD and THC content"
                  />
                </div>
              </div>
            </section>
            <Resources />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {getContent()}
      <footer className="bg-emerald-900 text-emerald-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm leading-relaxed opacity-90 mb-6">
              <p className="mb-4">
                The statements and calculations provided on cbddailydosagecalculator.com have not been evaluated by the Food and Drug Administration. The calculators and information provided are for educational purposes only and are not intended to diagnose, treat, cure, or prevent any disease. Results from CBD products may vary by individual.
              </p>
              <p className="mb-4">
                The 2018 Farm Bill, signed into law in December 2018, effectively legalized hemp at the federal level by removing it from the federal list of controlled substances and classifying it as an agricultural commodity. All CBD products referenced or linked from cbddailydosagecalculator.com are recommended for adult use only and contain less than 0.3% THC on a dry weight basis.
              </p>
              <p className="mb-4">
                The calculators provided are tools to assist in determining suggested serving sizes and dilution ratios. Always consult with a healthcare professional before starting any new supplement regimen. For pet-related calculations, consult with a veterinarian before administering CBD products to animals.
              </p>
            </div>
            <p className="text-center opacity-75">
              © {new Date().getFullYear()} cbddailydosagecalculator.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const CalculatorCard: React.FC<{
  href: string;
  title: string;
  description: string;
}> = ({ href, title, description }) => (
  <a
    href={href}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:bg-emerald-50"
  >
    <h3 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
    <p className="text-emerald-600">{description}</p>
  </a>
);

export default App;