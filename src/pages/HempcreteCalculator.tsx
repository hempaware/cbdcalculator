import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { HempcreteCalculator as Calculator } from '../components/HempcreteCalculator';
import { FAQ } from '../components/FAQ';

const faqItems = [
  {
    question: "What is hempcrete and what are its benefits?",
    answer: "Hempcrete is a biocomposite building material made from hemp hurds, lime binder, and water. It's sustainable, carbon-negative, provides excellent insulation, and regulates humidity naturally."
  },
  {
    question: "How long does hempcrete take to cure?",
    answer: "Hempcrete requires a minimum of 28 days to cure initially, but continues to carbonate and strengthen over several years. Proper ventilation during curing is essential."
  },
  {
    question: "What's the R-value of hempcrete?",
    answer: "Hempcrete typically has an R-value of 2.4-4.8 per inch, depending on the mix design. A 12-inch thick wall provides excellent thermal performance."
  },
  {
    question: "Is hempcrete suitable for all climate zones?",
    answer: "Yes, hempcrete performs well in various climates due to its moisture-regulating properties. However, mix ratios may need adjustment based on local conditions."
  }
];

export const HempcreteCalculator = () => {
  return (
    <PageLayout
      title="Hempcrete Calculator"
      description="Plan your sustainable building project with our hempcrete calculator. Get precise measurements for hemp hurd, lime binder, and water ratios based on your wall dimensions. Essential for eco-friendly construction and renovation projects."
    >
      <Calculator />
      <FAQ items={faqItems} />
    </PageLayout>
  );
};