import React from 'react';
import { CBDCalculator } from '../components/Calculator';
import { PageLayout } from '../components/PageLayout';
import { FAQ } from '../components/FAQ';
import { ExternalLink } from 'lucide-react';

const faqItems = [
  {
    question: "What is CBD dilution and why is it important?",
    answer: "CBD dilution is the process of mixing CBD concentrate with carrier oils to achieve desired potency. Proper dilution ensures accurate dosing and optimal absorption."
  },
  {
    question: "Which carrier oils work best for CBD dilution?",
    answer: "Common carrier oils include MCT oil, hemp seed oil, and olive oil. MCT oil is popular due to its high bioavailability and neutral taste."
  },
  {
    question: "How do I ensure accurate CBD dilution?",
    answer: "Use our calculator to determine precise measurements, always start with lab-tested CBD concentrate, and use calibrated measuring tools."
  },
  {
    question: "What's the ideal CBD concentration for different uses?",
    answer: "Concentrations vary by use: 250-500mg/30ml for beginners, 500-1000mg/30ml for regular use, and 1000-3000mg/30ml for stronger effects."
  }
];

const HowItWorks = () => (
  <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
    <h2 className="text-2xl font-bold text-emerald-800 mb-4">How the Calculator Works</h2>
    <div className="prose prose-emerald max-w-none">
      <p>Our CBD dilution calculator helps you create precise CBD oil formulations by:</p>
      <ul>
        <li>Calculating the exact amount of carrier oil needed based on your desired final concentration</li>
        <li>Determining the proper ratio of CBD concentrate to carrier oil</li>
        <li>Providing measurements in both metric and imperial units</li>
      </ul>
      
      <h3>Example Calculation</h3>
      <p>If you want to create a 1000mg/30ml CBD oil:</p>
      <ol>
        <li>Enter 1000mg as your CBD content</li>
        <li>Select 30ml as your final volume</li>
        <li>The calculator will show you exactly how much carrier oil to add</li>
      </ol>
    </div>
  </div>
);

const ProductLink = () => (
  <div className="mt-8">
    <a
      href="https://bigbudzcbd.com/product-category/cbd-tinctures/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors"
    >
      <span>Shop CBD Tinctures</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

export const DilutionCalculator = () => {
  return (
    <PageLayout
      title="CBD Dilution Calculator"
      description="Master the art of CBD dilution with our precise calculator. Create perfectly balanced CBD oils and tinctures with accurate measurements and ratios."
    >
      <CBDCalculator type="dilution" />
      <HowItWorks />
      <ProductLink />
      <FAQ items={faqItems} />
    </PageLayout>
  );
};