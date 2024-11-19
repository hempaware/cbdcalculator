import React, { useState } from 'react';
import { CalculationType } from '../types/calculator';
import { NumericInput } from './NumericInput';
import { Select } from './Select';

interface CalculatorProps {
  type: CalculationType;
}

type Unit = 'metric' | 'imperial';
type Gender = 'male' | 'female' | 'other';
type Condition = 'anxiety' | 'pain' | 'sleep' | 'general' | 'inflammation' | 'stress';
type DogCondition = 'anxiety' | 'pain' | 'seizures' | 'general' | 'inflammation' | 'mobility';
type DogSize = 'small' | 'medium' | 'large' | 'giant';

const CONDITIONS: Record<Condition, { min: number; max: number }> = {
  anxiety: { min: 15, max: 25 },
  pain: { min: 20, max: 35 },
  sleep: { min: 25, max: 40 },
  general: { min: 10, max: 20 },
  inflammation: { min: 20, max: 30 },
  stress: { min: 15, max: 25 }
};

const DOG_CONDITIONS: Record<DogCondition, { factor: number }> = {
  anxiety: { factor: 1 },
  pain: { factor: 1.5 },
  seizures: { factor: 2 },
  general: { factor: 0.8 },
  inflammation: { factor: 1.2 },
  mobility: { factor: 1.3 }
};

export const CBDCalculator: React.FC<CalculatorProps> = ({ type }) => {
  const [weight, setWeight] = useState<number>(70);
  const [unit, setUnit] = useState<Unit>('metric');
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<Gender>('other');
  const [condition, setCondition] = useState<Condition>('general');
  const [dogCondition, setDogCondition] = useState<DogCondition>('general');
  const [dogSize, setDogSize] = useState<DogSize>('medium');
  const [dogAge, setDogAge] = useState<number>(5);
  const [strength, setStrength] = useState<number>(5);
  const [measureUnit, setMeasureUnit] = useState<'mg' | 'ml'>('mg');
  const [cbdContent, setCbdContent] = useState<number>(15);
  const [thcContent, setThcContent] = useState<number>(1);

  const calculateDogDosage = () => {
    // Convert weight to kg if imperial
    const weightInKg = unit === 'imperial' ? weight * 0.453592 : weight;
    
    // Base dosage calculation (1mg per kg)
    let baseDosage = weightInKg * 1;
    
    // Age adjustment
    if (dogAge < 1) baseDosage *= 0.7;
    if (dogAge > 10) baseDosage *= 0.9;
    
    // Size adjustment
    const sizeFactors = {
      small: 1.2,
      medium: 1,
      large: 0.8,
      giant: 0.7
    };
    baseDosage *= sizeFactors[dogSize];
    
    // Condition adjustment
    baseDosage *= DOG_CONDITIONS[dogCondition].factor;
    
    // Calculate range (±20% from base)
    return {
      min: Math.round(baseDosage * 0.8 * 10) / 10,
      max: Math.round(baseDosage * 1.2 * 10) / 10
    };
  };

  const calculateDosage = () => {
    // Convert weight to kg if imperial
    const weightInKg = unit === 'imperial' ? weight * 0.453592 : weight;
    
    // Base dosage calculation based on weight (0.5mg per kg)
    let baseDosage = weightInKg * 0.5;
    
    // Age adjustment
    if (age < 18) baseDosage *= 0.8;
    if (age > 65) baseDosage *= 0.9;
    
    // Gender adjustment (slight variations based on average body composition)
    if (gender === 'female') baseDosage *= 0.95;
    
    // Condition adjustment
    const conditionFactor = CONDITIONS[condition];
    const minDosage = (baseDosage * conditionFactor.min) / 20;
    const maxDosage = (baseDosage * conditionFactor.max) / 20;
    
    return {
      min: Math.round(minDosage * 10) / 10,
      max: Math.round(maxDosage * 10) / 10
    };
  };

  const calculateResult = () => {
    switch (type) {
      case 'dosage': {
        const dosage = calculateDosage();
        return {
          value: `${dosage.min} - ${dosage.max}`,
          unit: 'mg/day'
        };
      }
      case 'dogDosage': {
        const dosage = calculateDogDosage();
        return {
          value: `${dosage.min} - ${dosage.max}`,
          unit: 'mg/day'
        };
      }
      case 'dilution':
        return {
          value: ((strength * weight) / 100).toFixed(2),
          unit: 'mg'
        };
      case 'conversion':
        return {
          value: (weight * (measureUnit === 'mg' ? 1 : 0.05)).toFixed(2),
          unit: measureUnit === 'mg' ? 'ml' : 'mg'
        };
      case 'ratio':
        const ratio = cbdContent / thcContent;
        return {
          value: `${ratio.toFixed(1)}:1`,
          unit: 'CBD:THC'
        };
      default:
        return { value: '0', unit: 'mg' };
    }
  };

  const result = calculateResult();

  if (type === 'dogDosage') {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Select
                label="Unit System"
                value={unit}
                onChange={(value) => setUnit(value as Unit)}
                options={[
                  { value: 'metric', label: 'Metric (kg)' },
                  { value: 'imperial', label: 'Imperial (lbs)' }
                ]}
              />
            </div>
            
            <NumericInput
              label={`Dog's Weight (${unit === 'metric' ? 'kg' : 'lbs'})`}
              value={weight}
              onChange={setWeight}
              min={1}
              max={unit === 'metric' ? 100 : 220}
            />
            
            <NumericInput
              label="Dog's Age (years)"
              value={dogAge}
              onChange={setDogAge}
              min={0.5}
              max={20}
            />
            
            <div className="flex gap-4 items-center">
              <Select
                label="Dog's Size"
                value={dogSize}
                onChange={(value) => setDogSize(value as DogSize)}
                options={[
                  { value: 'small', label: 'Small (up to 20 lbs)' },
                  { value: 'medium', label: 'Medium (21-50 lbs)' },
                  { value: 'large', label: 'Large (51-90 lbs)' },
                  { value: 'giant', label: 'Giant (90+ lbs)' }
                ]}
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <Select
                label="Condition"
                value={dogCondition}
                onChange={(value) => setDogCondition(value as DogCondition)}
                options={[
                  { value: 'general', label: 'General Wellness' },
                  { value: 'anxiety', label: 'Anxiety' },
                  { value: 'pain', label: 'Pain' },
                  { value: 'seizures', label: 'Seizures' },
                  { value: 'inflammation', label: 'Inflammation' },
                  { value: 'mobility', label: 'Mobility Issues' }
                ]}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Recommended Daily CBD Dosage:</h3>
              <p className="text-3xl font-bold text-emerald-600">
                {result.value} {result.unit}
              </p>
              <p className="mt-4 text-sm text-emerald-700">
                Divide this amount into 2-3 doses throughout the day.
              </p>
              <div className="mt-4 text-sm text-emerald-600">
                <p className="font-medium">Important Notes:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Start with the lower dosage and observe your dog's response</li>
                  <li>Adjust gradually based on your dog's needs</li>
                  <li>Consult with your veterinarian before starting CBD</li>
                  <li>Use pet-specific CBD products for safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dosage') {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Select
                label="Unit System"
                value={unit}
                onChange={(value) => setUnit(value as Unit)}
                options={[
                  { value: 'metric', label: 'Metric (kg)' },
                  { value: 'imperial', label: 'Imperial (lbs)' }
                ]}
              />
            </div>
            
            <NumericInput
              label={`Weight (${unit === 'metric' ? 'kg' : 'lbs'})`}
              value={weight}
              onChange={setWeight}
              min={1}
              max={unit === 'metric' ? 200 : 440}
            />
            
            <NumericInput
              label="Age"
              value={age}
              onChange={setAge}
              min={18}
              max={100}
            />
            
            <div className="flex gap-4 items-center">
              <Select
                label="Gender"
                value={gender}
                onChange={(value) => setGender(value as Gender)}
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' }
                ]}
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <Select
                label="Condition"
                value={condition}
                onChange={(value) => setCondition(value as Condition)}
                options={[
                  { value: 'general', label: 'General Wellness' },
                  { value: 'anxiety', label: 'Anxiety' },
                  { value: 'pain', label: 'Pain' },
                  { value: 'sleep', label: 'Sleep' },
                  { value: 'inflammation', label: 'Inflammation' },
                  { value: 'stress', label: 'Stress' }
                ]}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Recommended Daily Dosage:</h3>
              <p className="text-3xl font-bold text-emerald-600">
                {result.value} {result.unit}
              </p>
              <p className="mt-4 text-sm text-emerald-700">
                Take this amount spread across 2-3 doses throughout the day.
              </p>
              <div className="mt-4 text-sm text-emerald-600">
                <p className="font-medium">Important Notes:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Start with the lower dosage and gradually increase if needed</li>
                  <li>Monitor your body's response and adjust accordingly</li>
                  <li>Consult with a healthcare professional before starting CBD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Return original calculator for other types
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="space-y-4">
        {type === 'ratio' ? (
          <>
            <NumericInput
              label="CBD Content (%)"
              value={cbdContent}
              onChange={setCbdContent}
              min={0}
              max={100}
            />
            <NumericInput
              label="THC Content (%)"
              value={thcContent}
              onChange={setThcContent}
              min={0.1}
              max={100}
            />
          </>
        ) : (
          <>
            <NumericInput
              label="Amount"
              value={weight}
              onChange={setWeight}
            />
            {type !== 'conversion' && (
              <NumericInput
                label="Strength (%)"
                value={strength}
                onChange={setStrength}
                min={0}
                max={100}
              />
            )}
            {type === 'conversion' && (
              <div className="flex gap-4 items-center">
                <label className="text-emerald-800 font-medium">Convert from</label>
                <select
                  value={measureUnit}
                  onChange={(e) => setMeasureUnit(e.target.value as 'mg' | 'ml')}
                  className="rounded-lg border-emerald-200 border-2 p-2 focus:outline-none focus:border-emerald-400"
                >
                  <option value="mg">mg</option>
                  <option value="ml">ml</option>
                </select>
              </div>
            )}
          </>
        )}

        <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
          <p className="text-emerald-800 font-medium">Result:</p>
          <p className="text-2xl font-bold text-emerald-600">
            {result.value} {result.unit}
          </p>
        </div>
      </div>
    </div>
  );
};