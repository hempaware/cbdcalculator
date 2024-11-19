import React from 'react';
import { CBDCalculator } from '../components/Calculator';
import { PageLayout } from '../components/PageLayout';
import { FAQ } from '../components/FAQ';
import { ExternalLink } from 'lucide-react';

const faqItems = [
  {
    question: "What is a CBD:THC ratio and why is it important?",
    answer: "The CBD:THC ratio indicates the relative amounts of these cannabinoids in a product. Higher CBD ratios typically provide therapeutic benefits with minimal psychoactive effects, while balanced ratios offer different therapeutic properties."
  },
  {
    question: "Which ratio is best for beginners?",
    answer: "Beginners should start with high-CBD ratios (like 18:1 or 8:1) to minimize psychoactive effects while experiencing CBD's therapeutic benefits. This allows users to gauge their sensitivity to cannabinoids."
  },
  {
    question: "How do different ratios affect therapeutic benefits?",
    answer: "Different ratios target specific conditions: High CBD ratios (16:1, 8:1) are often used for anxiety and inflammation, balanced ratios (4:1, 2:1) may help with pain and muscle spasms, while 1:1 ratios could benefit severe conditions."
  },
  {
    question: "Can the ratio affect potential side effects?",
    answer: "Yes, ratios with higher THC content may increase the likelihood of psychoactive effects. Higher CBD ratios typically have fewer side effects and can help mitigate THC's psychoactive properties."
  }
];

const ProductRecommendations = () => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    <a
      href="https://bigbudzcbd.com/product-category/cbd-vape-pens/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors"
    >
      <span>Shop CBD Vape Pens</span>
      <ExternalLink className="w-4 h-4" />
    </a>
    <a
      href="https://bigbudzcbd.com/product-category/cbd-tinctures/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors"
    >
      <span>Browse CBD Tinctures</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

const RatioGuide = () => (
  <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
    <h2 className="text-2xl font-bold text-emerald-800 mb-4">Understanding CBD:THC Ratios</h2>
    <div className="prose prose-emerald max-w-none">
      <p>Common therapeutic ratios and their typical uses:</p>
      <ul>
        <li><strong>18:1 or Higher</strong> - Minimal psychoactive effects, ideal for anxiety and daily wellness</li>
        <li><strong>8:1</strong> - Balanced therapeutic effects with very mild psychoactive properties</li>
        <li><strong>4:1</strong> - Enhanced therapeutic benefits for pain and inflammation</li>
        <li><strong>2:1</strong> - Stronger effects while maintaining CBD dominance</li>
        <li><strong>1:1</strong> - Equal parts CBD and THC for maximum therapeutic potential</li>
      </ul>
    </div>
  </div>
);

export const RatioCalculator = () => {
  return (
    <PageLayout
      title="CBD:THC Ratio Calculator"
      description="Calculate and understand CBD to THC ratios for optimal therapeutic benefits. Our calculator helps you determine the perfect cannabinoid ratio for your specific needs."
    >
      <CBDCalculator type="ratio" />
      <RatioGuide />
      <ProductRecommendations />
      <FAQ items={faqItems} />
    </PageLayout>
  );
};