import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex gap-4 items-center flex-1">
      <label className="text-emerald-800 font-medium whitespace-nowrap">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border-emerald-200 border-2 p-2 focus:outline-none focus:border-emerald-400 flex-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};