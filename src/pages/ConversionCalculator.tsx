import React from 'react';
import { CBDCalculator } from '../components/Calculator';
import { PageLayout } from '../components/PageLayout';
import { FAQ } from '../components/FAQ';

const faqItems = [
  {
    question: "Why do I need to convert CBD measurements?",
    answer: "Different CBD products use various measurement units. Converting between units helps ensure accurate dosing and product comparison."
  },
  {
    question: "What's the difference between mg and ml for CBD?",
    answer: "Milligrams (mg) measure the amount of CBD content, while milliliters (ml) measure liquid volume. The relationship between them depends on the concentration."
  },
  {
    question: "How do I convert CBD percentage to mg/ml?",
    answer: "Multiply the CBD percentage by 10 to get mg/ml. For example, 5% CBD equals 50mg/ml."
  },
  {
    question: "What's the standard concentration for CBD oil?",
    answer: "CBD oil concentrations typically range from 250mg to 5000mg per 30ml bottle. Common strengths are 500mg, 1000mg, and 2500mg per bottle."
  }
];

export const ConversionCalculator = () => {
  return (
    <PageLayout
      title="CBD Unit Converter"
      description="Simplify CBD measurements with our comprehensive unit converter. Easily convert between different CBD measurement units including mg, ml, and percentages. Essential for accurate dosing and product comparison."
    >
      <CBDCalculator type="conversion" />
      <FAQ items={faqItems} />
    </PageLayout>
  );
};