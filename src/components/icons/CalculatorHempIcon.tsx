import React from 'react';

interface CalculatorHempIconProps {
  className?: string;
}

export const CalculatorHempIcon: React.FC<CalculatorHempIconProps> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Calculator base */}
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    
    {/* Hemp leaf overlay */}
    <g transform="scale(0.5) translate(12 14)">
      <path d="M12 2C7.5 2 4 5.5 4 10c0 2.3 1 4.3 2.5 5.7C8 17.2 12 22 12 22s4-4.8 5.5-6.3C19 14.3 20 12.3 20 10c0-4.5-3.5-8-8-8z" />
      <path d="M12 2v20" />
      <path d="M12 15.5c1.5-2 3-4.5 3-5.5 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1 1.5 3.5 3 5.5z" />
    </g>
  </svg>
);