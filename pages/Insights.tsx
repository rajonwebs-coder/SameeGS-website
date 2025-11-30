import React from 'react';
import SEO from '../components/SEO';

const Insights: React.FC = () => {
  const insights = [
    {
      title: "1. Why UAE Businesses Must Invest in Secure Software Development",
      text: "With rising cyber threats, secure development ensures data protection, compliance, and business continuity for UAE organizations."
    },
    {
      title: "2. Building a Modern Multi-Cloud Strategy (GCP, Azure, AWS)",
      text: "Multi-cloud adoption enhances reliability, flexibility, and scalability. We guide organizations in designing effective landing zones and automation pipelines."
    },
    {
      title: "3. How Generative AI Transforms GCC Enterprises",
      text: "GenAI improves workflows, accelerates innovation, and enhances customer engagement across GCC industries."
    },
    {
      title: "4. Cybersecurity Essentials for Dubai-Based Organizations",
      text: "Identity security, threat detection, and proactive defense strategies are essential to protect modern digital infrastructures."
    }
  ];

  return (
    <>
      <SEO 
        title="Insights & Thought Leadership" 
        description="Latest insights on Secure Software Development, Multi-Cloud Strategy, Generative AI, and Cybersecurity for UAE and GCC businesses." 
      />

      <div className="bg-corporate-light py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue">Insights & Thought Leadership</h1>
            <div className="w-24 h-1 bg-corporate-teal mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-8 border-corporate-blue hover:translate-y-[-4px] transition-transform duration-300">
                <h3 className="text-xl font-bold text-corporate-blue mb-4">{insight.title}</h3>
                <p className="text-slate-600">
                  {insight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;