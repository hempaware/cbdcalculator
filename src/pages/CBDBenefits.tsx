import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { ExternalLink } from 'lucide-react';

export const CBDBenefits = () => {
  return (
    <PageLayout
      title="CBD Benefits & Research"
      description="Explore the scientifically-proven benefits of CBD, backed by peer-reviewed research and clinical studies. Learn how CBD may help with various conditions including anxiety, pain, epilepsy, and sleep disorders."
    >
      <div className="space-y-8">
        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Anxiety and Stress</h2>
          <div className="prose prose-emerald max-w-none">
            <p>Research has shown CBD's potential in managing anxiety and stress:</p>
            <ul>
              <li>A 2015 review in Neurotherapeutics found CBD showed promise in treating various anxiety disorders</li>
              <li>A 2019 study in The Permanente Journal reported improved sleep and anxiety scores in 79.2% of patients</li>
              <li>Clinical research published in the Journal of Clinical Psychology demonstrated CBD's anxiolytic effects</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Pain Management</h2>
          <div className="prose prose-emerald max-w-none">
            <p>Studies indicate CBD's effectiveness in pain management:</p>
            <ul>
              <li>The European Journal of Pain published research showing CBD's ability to reduce arthritis-related inflammation</li>
              <li>A 2020 study in the Journal of Pain Research demonstrated CBD's potential in managing chronic pain</li>
              <li>Research in Pain Medicine revealed CBD's impact on neuropathic pain reduction</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Sleep and Insomnia</h2>
          <div className="prose prose-emerald max-w-none">
            <p>Clinical research supports CBD's role in improving sleep:</p>
            <ul>
              <li>A large case series in the Permanente Journal found 66.7% of patients experienced better sleep with CBD</li>
              <li>Research in the Journal of Clinical Medicine showed CBD's potential in treating REM sleep behavior disorder</li>
              <li>A 2021 study published in Sleep Medicine Reviews indicated CBD's promise for sleep disorders</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Epilepsy and Seizures</h2>
          <div className="prose prose-emerald max-w-none">
            <p>FDA-approved research demonstrates CBD's efficacy in treating epilepsy:</p>
            <ul>
              <li>Clinical trials led to FDA approval of Epidiolex, a CBD-based medication for severe forms of epilepsy</li>
              <li>The New England Journal of Medicine published breakthrough research on CBD's effect on Dravet syndrome</li>
              <li>Studies in the Journal of Epilepsy Research showed significant seizure reduction in patients using CBD</li>
            </ul>
          </div>
        </section>

        <div className="mt-8">
          <a
            href="https://bigbudzcbd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-lg hover:bg-emerald-200 transition-colors"
          >
            <span>Shop Premium CBD Products</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};