import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { ExternalLink } from 'lucide-react';

interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

const ResourceSection: React.FC<{
  title: string;
  resources: ResourceLink[];
}> = ({ title, resources }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-emerald-800 mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((resource, index) => (
        <a
          key={index}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:bg-emerald-50 group"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-emerald-700 group-hover:text-emerald-800">
              {resource.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
          </div>
          <p className="mt-2 text-emerald-600">{resource.description}</p>
        </a>
      ))}
    </div>
  </div>
);

const legalResources: ResourceLink[] = [
  {
    title: "Vote Hemp",
    url: "https://votehemp.com",
    description: "Leading non-profit organization working to remove barriers to industrial hemp farming in the U.S."
  },
  {
    title: "Hemp Industries Association",
    url: "https://thehia.org",
    description: "Non-profit trade association representing hemp companies, researchers, and supporters."
  },
  {
    title: "USDA Hemp Program",
    url: "https://www.ams.usda.gov/rules-regulations/hemp",
    description: "Official federal regulations and guidelines for hemp cultivation."
  },
  {
    title: "National Hemp Association",
    url: "https://nationalhempassociation.org",
    description: "Organization dedicated to the development of the hemp industry."
  },
  {
    title: "Hemp Legal Resource Center",
    url: "https://www.cannabisbusinesslaw.com/hemp-law",
    description: "Comprehensive resource for hemp laws and regulations."
  },
  {
    title: "Hemp Policy Research",
    url: "https://www.brookings.edu/hemp-policy",
    description: "Research and analysis on hemp policy and legislation."
  },
  {
    title: "State Hemp Programs",
    url: "https://www.ncsl.org/agriculture-and-rural-development/state-industrial-hemp-statutes",
    description: "Overview of state-level hemp programs and regulations."
  },
  {
    title: "Hemp Regulatory Guidelines",
    url: "https://hemp.ca.gov",
    description: "California's hemp program guidelines and requirements."
  },
  {
    title: "Hemp Testing Requirements",
    url: "https://www.ams.usda.gov/rules-regulations/hemp/dea-laboratories",
    description: "DEA-registered laboratory testing requirements for hemp."
  },
  {
    title: "Hemp Transportation Laws",
    url: "https://hempsupporter.com/resources",
    description: "Guidelines for legal hemp transportation across state lines."
  }
];

const educationalResources: ResourceLink[] = [
  {
    title: "Big Budz CBD",
    url: "https://bigbudzcbd.com",
    description: "Comprehensive guide to CBD products and their benefits."
  },
  {
    title: "Boston Hemp Inc",
    url: "https://bostonhempinc.com",
    description: "Educational resources and premium hemp products."
  },
  {
    title: "Hemp Foundation",
    url: "https://hempfoundation.net",
    description: "Non-profit organization dedicated to hemp education and research."
  },
  {
    title: "Hemp University",
    url: "https://hempuniversity.com",
    description: "Online learning platform for hemp cultivation and processing."
  },
  {
    title: "Project CBD",
    url: "https://www.projectcbd.org",
    description: "Non-profit dedicated to promoting research into CBD and cannabis."
  },
  {
    title: "Hemp History Week",
    url: "https://hemphistoryweek.com",
    description: "Educational initiative about hemp's historical significance."
  },
  {
    title: "Hemp Research Center",
    url: "https://agsci.oregonstate.edu/hemp",
    description: "Oregon State University's hemp research and education center."
  },
  {
    title: "Hemp Education Alliance",
    url: "https://hempeducationalliance.com",
    description: "Resources for hemp education and industry development."
  },
  {
    title: "Hemp Farming Guide",
    url: "https://www.hempfarming.org",
    description: "Comprehensive guide to hemp farming practices."
  },
  {
    title: "Hemp Technology Education",
    url: "https://hemptechindustries.com",
    description: "Information about hemp processing and manufacturing."
  }
];

const businessResources: ResourceLink[] = [
  {
    title: "HempAware Marketing",
    url: "https://hempaware.com",
    description: "Platform connecting hemp businesses and consumers."
  },
  {
    title: "Hemp Marketplace",
    url: "https://hempexchange.com",
    description: "B2B platform for hemp and CBD businesses."
  },
  {
    title: "Hemp Industry Daily",
    url: "https://hempindustrydaily.com",
    description: "News and analysis for the hemp industry."
  },
  {
    title: "Hemp Benchmarks",
    url: "https://www.hempbenchmarks.com",
    description: "Hemp commodity price reporting and analysis."
  },
  {
    title: "Hemp Business Journal",
    url: "https://hempbizjournal.com",
    description: "Business news and market research for the hemp industry."
  },
  {
    title: "Hemp Entrepreneurs",
    url: "https://thehempentrepreneurs.com",
    description: "Resources and networking for hemp business owners."
  },
  {
    title: "Hemp Trade Association",
    url: "https://hemptrade.ca",
    description: "Canadian Hemp Trade Alliance business resources."
  },
  {
    title: "Hemp Business Directory",
    url: "https://hempbizdir.com",
    description: "Comprehensive directory of hemp businesses."
  },
  {
    title: "Hemp Investment Network",
    url: "https://hempinvestornetwork.com",
    description: "Platform connecting investors with hemp businesses."
  },
  {
    title: "Hemp Business Solutions",
    url: "https://hempbizsolutions.com",
    description: "Consulting and services for hemp businesses."
  }
];

export const HempResources = () => {
  return (
    <PageLayout
      title="Hemp Resources"
      description="Comprehensive collection of legal, educational, and business resources for the hemp industry. Find valuable information and connections to help you navigate the hemp sector."
    >
      <div className="space-y-12">
        <ResourceSection title="Hemp Legal Resources" resources={legalResources} />
        <ResourceSection title="Hemp Educational Resources" resources={educationalResources} />
        <ResourceSection title="Hemp Business Resources" resources={businessResources} />
      </div>
    </PageLayout>
  );
};