import React, { useState } from 'react';
import { NumericInput } from './NumericInput';
import { ExternalLink } from 'lucide-react';

interface MaterialCalculation {
  hempHurd: number;
  limeBinder: number;
  water: number;
}

export const HempcreteCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(20);
  const [height, setHeight] = useState<number>(8);
  const [thickness, setThickness] = useState<number>(1);
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
  const [density, setDensity] = useState<'light' | 'medium' | 'heavy'>('medium');

  const calculateMaterials = (): MaterialCalculation => {
    // Convert all measurements to cubic meters
    const conversionFactor = unit === 'imperial' ? 0.0283168 : 1;
    const cubicVolume = (length * height * thickness) * conversionFactor;

    // Density factors affect the mix ratios
    const densityFactors = {
      light: { hempHurd: 4, limeBinder: 1, water: 1.5 },
      medium: { hempHurd: 4, limeBinder: 1.5, water: 1.75 },
      heavy: { hempHurd: 4, limeBinder: 2, water: 2 }
    };

    const factors = densityFactors[density];
    const totalParts = factors.hempHurd + factors.limeBinder + factors.water;

    // Calculate volumes in cubic meters
    const hempHurdVolume = (factors.hempHurd / totalParts) * cubicVolume;
    const limeBinderVolume = (factors.limeBinder / totalParts) * cubicVolume;
    const waterVolume = (factors.water / totalParts) * cubicVolume;

    // Convert to kg/liters (approximate densities)
    return {
      hempHurd: Math.round(hempHurdVolume * 110), // 110 kg/m³ for hemp hurd
      limeBinder: Math.round(limeBinderVolume * 1100), // 1100 kg/m³ for lime binder
      water: Math.round(waterVolume * 1000) // 1000 kg/m³ (or liters) for water
    };
  };

  const materials = calculateMaterials();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex gap-4 items-center">
            <label className="text-emerald-800 font-medium">Unit System</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as 'imperial' | 'metric')}
              className="rounded-lg border-emerald-200 border-2 p-2 focus:outline-none focus:border-emerald-400"
            >
              <option value="imperial">Imperial (ft)</option>
              <option value="metric">Metric (m)</option>
            </select>
          </div>

          <NumericInput
            label={`Wall Length (${unit === 'imperial' ? 'ft' : 'm'})`}
            value={length}
            onChange={setLength}
            min={1}
            max={1000}
          />

          <NumericInput
            label={`Wall Height (${unit === 'imperial' ? 'ft' : 'm'})`}
            value={height}
            onChange={setHeight}
            min={1}
            max={100}
          />

          <NumericInput
            label={`Wall Thickness (${unit === 'imperial' ? 'ft' : 'm'})`}
            value={thickness}
            onChange={setThickness}
            min={0.5}
            max={3}
          />

          <div className="flex gap-4 items-center">
            <label className="text-emerald-800 font-medium">Wall Density</label>
            <select
              value={density}
              onChange={(e) => setDensity(e.target.value as 'light' | 'medium' | 'heavy')}
              className="rounded-lg border-emerald-200 border-2 p-2 focus:outline-none focus:border-emerald-400"
            >
              <option value="light">Light (Insulation)</option>
              <option value="medium">Medium (Standard)</option>
              <option value="heavy">Heavy (Structural)</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Required Materials:</h3>
            <div className="space-y-4">
              <div>
                <p className="text-emerald-600">Hemp Hurd:</p>
                <p className="text-2xl font-bold text-emerald-700">{materials.hempHurd} kg</p>
              </div>
              <div>
                <p className="text-emerald-600">Lime Binder:</p>
                <p className="text-2xl font-bold text-emerald-700">{materials.limeBinder} kg</p>
              </div>
              <div>
                <p className="text-emerald-600">Water:</p>
                <p className="text-2xl font-bold text-emerald-700">{materials.water} L</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              Note: These calculations are estimates. Actual material requirements may vary based on
              specific conditions and application methods. Always consult with a professional builder
              for final quantities.
            </p>
          </div>

          <a
            href="https://bulkhempwarehouse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-colors"
          >
            <span>Purchase Hempcrete Materials</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};