import React from 'react';
import { LucideIcon } from 'lucide-react';
import { CalculationType } from '../types/calculator';

interface CalculatorButtonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  type: CalculationType;
  active: boolean;
  onClick: () => void;
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  icon: Icon,
  title,
  description,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl transition-all ${
        active
          ? 'bg-emerald-600 text-white'
          : 'bg-white/80 text-emerald-800 hover:bg-emerald-50'
      }`}
    >
      <Icon className="w-6 h-6 mb-2 mx-auto" />
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm mt-2 opacity-80">{description}</p>
    </button>
  );
};