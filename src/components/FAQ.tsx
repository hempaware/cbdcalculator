import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <section className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-emerald-100 last:border-0 pb-6 last:pb-0">
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">{item.question}</h3>
            <p className="text-emerald-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};