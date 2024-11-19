import React from 'react';
import { CBDCalculator } from '../components/Calculator';
import { PageLayout } from '../components/PageLayout';
import { FAQ } from '../components/FAQ';
import { ExternalLink } from 'lucide-react';

const faqItems = [
  {
    question: "How do I determine the right CBD dosage for my needs?",
    answer: "CBD dosage depends on factors like body weight, condition severity, and individual body chemistry. Our calculator provides personalized recommendations based on these factors."
  },
  {
    question: "What's the best time of day to take CBD?",
    answer: "CBD can be taken any time, but consistency is key. For sleep, take it before bedtime. For anxiety or pain, spreading doses throughout the day may be more effective."
  },
  {
    question: "How long does it take for CBD to work?",
    answer: "Effects can be felt within 15-60 minutes for sublingual oils, 30-90 minutes for edibles. Full benefits may take 2-4 weeks of consistent use."
  },
  {
    question: "Should I take CBD with food?",
    answer: "Taking CBD with fatty foods can increase absorption by up to 4x. However, it can be taken on an empty stomach if preferred."
  },
  {
    question: "Can I take too much CBD?",
    answer: "While CBD is generally well-tolerated, start with a lower dose and gradually increase. Our calculator provides safe dosage ranges based on current research."
  }
];

const ProductRecommendations = () => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    <a
      href="https://bigbudzcbd.com/product-category/cbd-tinctures/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors"
    >
      <span>Shop CBD Tinctures</span>
      <ExternalLink className="w-4 h-4" />
    </a>
    <a
      href="https://bigbudzcbd.com/product-category/cbd-gummies/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors"
    >
      <span>Browse CBD Gummies</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

export const DosageCalculator = () => {
  return (
    <PageLayout
      title="Daily CBD Dosage Calculator"
      description="Calculate your personalized daily CBD dosage based on your body weight, age, gender, and condition. Our advanced calculator provides accurate, science-based recommendations tailored to your specific needs."
    >
      <CBDCalculator type="dosage" />
      <ProductRecommendations />
      <FAQ items={faqItems} />
    </PageLayout>
  );
};