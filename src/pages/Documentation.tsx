import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Calculator, Scale, Beaker, Building2 } from 'lucide-react';

const DocumentationSection: React.FC<{
  title: string;
  icon: React.FC<any>;
  children: React.ReactNode;
}> = ({ title, icon: Icon, children }) => (
  <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-emerald-600" />
      <h2 className="text-2xl font-bold text-emerald-800">{title}</h2>
    </div>
    <div className="prose prose-emerald max-w-none">
      {children}
    </div>
  </div>
);

export const Documentation = () => {
  return (
    <PageLayout
      title="Calculator Documentation"
      description="Detailed documentation about our calculation methods, standards, and scientific basis for each calculator tool."
    >
      <DocumentationSection title="CBD Dosage Calculator" icon={Scale}>
        <h3>Methodology</h3>
        <p>Our CBD dosage calculator uses a weight-based approach combined with condition-specific factors, based on several clinical studies and medical guidelines:</p>
        <ul>
          <li>Base calculation: 0.5mg CBD per kg of body weight (Bergamaschi et al., 2011)</li>
          <li>Condition-specific adjustments based on clinical trials:
            <ul>
              <li>Anxiety: 15-25mg/day (Shannon et al., 2019)</li>
              <li>Pain: 20-35mg/day (Xu et al., 2020)</li>
              <li>Sleep: 25-40mg/day (Suraev et al., 2020)</li>
              <li>General wellness: 10-20mg/day (WHO report, 2018)</li>
            </ul>
          </li>
        </ul>
        <p>Age and gender modifications are based on pharmacokinetic studies showing variations in CBD metabolism.</p>
      </DocumentationSection>

      <DocumentationSection title="CBD Dilution Calculator" icon={Beaker}>
        <h3>Standards</h3>
        <p>Our dilution calculations follow industry standards for CBD product manufacturing:</p>
        <ul>
          <li>Based on USP (United States Pharmacopeia) guidelines for liquid preparations</li>
          <li>Incorporates FDA guidelines for product consistency</li>
          <li>Uses standard volumetric calculations: C₁V₁ = C₂V₂</li>
        </ul>
        <h3>Carrier Oil Considerations</h3>
        <p>Calculations account for different carrier oil densities:</p>
        <ul>
          <li>MCT Oil: 0.95 g/ml</li>
          <li>Hemp Seed Oil: 0.92 g/ml</li>
          <li>Olive Oil: 0.91 g/ml</li>
        </ul>
      </DocumentationSection>

      <DocumentationSection title="CBD:THC Ratio Calculator" icon={Calculator}>
        <h3>Methodology</h3>
        <p>Ratio calculations are based on analytical chemistry principles and industry standards:</p>
        <ul>
          <li>Uses percentage-based calculations for accuracy</li>
          <li>Based on AOAC International's standard method for cannabinoid analysis</li>
          <li>Incorporates uncertainty calculations from laboratory testing standards</li>
        </ul>
        <h3>Common Therapeutic Ratios</h3>
        <ul>
          <li>18:1 - High CBD (anxiety, inflammation)</li>
          <li>4:1 - Balanced therapeutic (pain)</li>
          <li>1:1 - Equal ratio (severe pain)</li>
        </ul>
      </DocumentationSection>

      <DocumentationSection title="Hempcrete Calculator" icon={Building2}>
        <h3>Standards and Sources</h3>
        <p>Our hempcrete calculations are based on established building standards:</p>
        <ul>
          <li>Ratios from the "Building with Hemp" technical manual by Steve Allin</li>
          <li>Guidelines from the International Hemp Building Association (IHBA)</li>
          <li>Research from the BRE Centre for Innovative Construction Materials</li>
        </ul>
        <h3>Mix Ratios</h3>
        <p>Standard volumetric mix ratios:</p>
        <ul>
          <li>Hemp Hurd: 4 parts (based on IHBA guidelines)</li>
          <li>Lime Binder: 1 part (hydraulic lime specifications)</li>
          <li>Water: 1.5 parts (optimal workability studies)</li>
        </ul>
        <h3>Density Calculations</h3>
        <p>Material density assumptions:</p>
        <ul>
          <li>Hemp Hurd: 110 kg/m³ (loose fill)</li>
          <li>Lime Binder: 1100 kg/m³</li>
          <li>Final Wall Density: 330-440 kg/m³</li>
        </ul>
      </DocumentationSection>

      <div className="bg-yellow-50 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Notes</h3>
        <ul className="list-disc ml-6 space-y-2 text-yellow-700">
          <li>All calculations are for reference purposes only and should be verified by qualified professionals.</li>
          <li>CBD dosage calculations should be confirmed with healthcare providers.</li>
          <li>Building calculations should be verified by structural engineers.</li>
          <li>Regular updates are made to maintain accuracy with current research and standards.</li>
        </ul>
      </div>
    </PageLayout>
  );
};