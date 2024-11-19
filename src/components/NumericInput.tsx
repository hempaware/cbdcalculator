import React from 'react';

interface NumericInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const NumericInput: React.FC<NumericInputProps> = ({
  label,
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <label className="text-emerald-800 font-medium">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        className="rounded-lg border-emerald-200 border-2 p-2 w-24 focus:outline-none focus:border-emerald-400"
      />
    </div>
  );
};