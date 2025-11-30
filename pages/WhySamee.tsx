import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle } from 'lucide-react';

const WhySamee: React.FC = () => {
  const reasons = [
    {
      title: "End-to-End Expertise",
      text: "Cloud engineering, cybersecurity, AI, automation, and software development under one roof."
    },
    {
      title: "Vendor-Neutral Multi-Cloud Skills",
      text: "Our certified experts work across AWS, Azure, and Google Cloud to deliver unbiased, business-ready solutions."
    },
    {
      title: "Security at Every Layer",
      text: "Security is integrated into architecture, development, cloud operations, and automation."
    },
    {
      title: "Proven Software Engineering Excellence",
      text: "We build scalable, maintainable, and high-performance enterprise applications."
    },
    {
      title: "Transparent Communication",
      text: "We maintain clear workflows, documentation, and technical governance throughout every engagement."
    },
    {
      title: "Flexible Engagement Models",
      text: "Choose assessments, projects, co-managed delivery, or fully managed services."
    }
  ];

  return (
    <>
      <SEO 
        title="Why Choose SAMEE" 
        description="Reasons to choose SAMEE GLOBAL SOLUTIONS: End-to-End Expertise, Vendor-Neutral Skills, Integrated Security, and Software Excellence." 
      />

      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue">Why Choose SAMEE GLOBAL SOLUTIONS – FZCO</h1>
            <div className="w-24 h-1 bg-corporate-teal mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100 hover:border-corporate-teal transition-colors">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-corporate-teal mr-3" size={24} />
                  <h3 className="text-lg font-bold text-corporate-blue">{reason.title}</h3>
                </div>
                <p className="text-slate-600 pl-9">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySamee;