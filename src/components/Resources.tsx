import React from 'react';
import { BookOpen, Link as LinkIcon, FileText } from 'lucide-react';

export const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">
          Educational Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ResourceCard
            icon={BookOpen}
            title="CBD Guide"
            description="Learn about CBD, its benefits, and how to use it effectively"
            link="https://bigbudzcbd.com/cbd-101"
            newWindow={true}
          />
          <ResourceCard
            icon={LinkIcon}
            title="Hemp Resources"
            description="Explore our curated collection of hemp-related resources"
            link="/resources"
          />
          <ResourceCard
            icon={FileText}
            title="Documentation"
            description="Detailed documentation about our calculation methods"
            link="/documentation"
          />
        </div>
      </div>
    </section>
  );
};

const ResourceCard: React.FC<{
  icon: React.FC<any>;
  title: string;
  description: string;
  link: string;
  newWindow?: boolean;
}> = ({ icon: Icon, title, description, link, newWindow }) => (
  <a
    href={link}
    className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    {...(newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    <Icon className="w-8 h-8 text-emerald-600 mb-4" />
    <h3 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
    <p className="text-emerald-600">{description}</p>
  </a>
);