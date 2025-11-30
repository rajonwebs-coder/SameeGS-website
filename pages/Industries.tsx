import React from 'react';
import SEO from '../components/SEO';

const Industries: React.FC = () => {
  const industries = [
    {
      title: "Financial Services & Fintech",
      description: "We help banks and fintechs build secure, compliant, and high-performance digital ecosystems. Our cloud, cybersecurity, automation, and software engineering expertise supports transaction systems, compliance automation, and resilient digital banking."
    },
    {
      title: "Government & Public Sector",
      description: "We deliver secure, compliant, and citizen-centric technologies aligned with UAE digital governance frameworks. We support cloud modernization, AI-driven automation, and secure digital transformation for government entities."
    },
    {
      title: "Healthcare & Life Sciences",
      description: "We help healthcare organizations adopt cloud, AI, and automation while meeting strict data privacy and security regulations. Our solutions enhance clinical systems, healthcare analytics, and operational efficiency."
    },
    {
      title: "Retail & E-Commerce",
      description: "We build scalable e-commerce platforms, cloud infrastructures, and API-based integrations that enhance customer experience, logistics, and digital engagement."
    },
    {
      title: "Manufacturing & Logistics",
      description: "We support industry 4.0 adoption, IoT platforms, workflow automation, and supply-chain visibility through cloud and software engineering solutions."
    },
    {
      title: "Startups & Digital-Native Businesses",
      description: "We help startups launch quickly and scale confidently with modern cloud architectures, DevOps automation, and secure-by-design software development."
    }
  ];

  return (
    <>
      <SEO 
        title="Industries We Serve" 
        description="We serve Financial Services, Government, Healthcare, Retail, Manufacturing, and Startups with secure cloud and AI solutions." 
      />

      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue">Industries We Serve</h1>
            <div className="w-24 h-1 bg-corporate-teal mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-corporate-light p-8 rounded-lg border-t-4 border-corporate-teal hover:bg-slate-50 transition-colors">
                <h3 className="text-xl font-bold text-corporate-blue mb-4">{industry.title}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;