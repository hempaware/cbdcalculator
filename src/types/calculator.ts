export type CalculationType = 'dosage' | 'dilution' | 'conversion' | 'ratio' | 'dogDosage';

export interface CalculationResult {
  value: string;
  unit: string;
}