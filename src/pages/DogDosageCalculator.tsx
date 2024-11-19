import React from 'react';
import { CBDCalculator } from '../components/Calculator';
import { PageLayout } from '../components/PageLayout';
import { FAQ } from '../components/FAQ';
import { ExternalLink } from 'lucide-react';

const faqItems = [
  {
    question: "How does CBD affect dogs differently than humans?",
    answer: "Dogs have a more sensitive endocannabinoid system than humans, requiring careful dosing. Their metabolism and body weight play crucial roles in determining appropriate CBD amounts."
  },
  {
    question: "What signs indicate the CBD dosage is working for my dog?",
    answer: "Look for improved mobility, reduced anxiety behaviors, better sleep patterns, and a calmer demeanor. Always monitor your dog's response to CBD carefully."
  },
  {
    question: "How long does it take to see effects in dogs?",
    answer: "Effects can be noticed within 30-60 minutes for acute issues, while chronic conditions may take 2-4 weeks of consistent dosing to show improvement."
  },
  {
    question: "Can I give my dog human CBD oil?",
    answer: "It's recommended to use pet-specific CBD products, as they're formulated with appropriate concentrations and carrier oils safe for dogs."
  }
];

const ProductRecommendations = () => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    <a
      href="https://bigbudzcbd.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors"
    >
      <span>Shop Premium CBD Products</span>
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

export const DogDosageCalculator = () => {
  return (
    <PageLayout
      title="Dog CBD Dosage Calculator"
      description="Calculate the perfect CBD dosage for your canine companion based on weight, age, and condition. Our veterinarian-informed calculator helps you determine safe and effective CBD serving sizes for dogs."
    >
      <CBDCalculator type="dogDosage" />
      <ProductRecommendations />
      <FAQ items={faqItems} />
    </PageLayout>
  );
};