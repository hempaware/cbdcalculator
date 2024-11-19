import React from 'react';
import { Navbar } from './Navbar';

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">{title}</h1>
            <p className="text-emerald-600 mb-8">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};