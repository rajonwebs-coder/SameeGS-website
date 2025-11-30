import React from 'react';
import SEO from '../components/SEO';
import { Search, PenTool, Rocket, Shield } from 'lucide-react';

const Approach: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Discover",
      text: "We begin with assessments, stakeholder workshops, and architecture analysis to understand business priorities and challenges.",
      icon: <Search className="w-10 h-10 text-white" />
    },
    {
      num: "2",
      title: "Design",
      text: "We create detailed architectures, roadmaps, UX/UI plans, and cloud strategies aligned with compliance and performance requirements.",
      icon: <PenTool className="w-10 h-10 text-white" />
    },
    {
      num: "3",
      title: "Deliver",
      text: "Our team executes development, deployment, configuration, automation, and testing with strong documentation and communication.",
      icon: <Rocket className="w-10 h-10 text-white" />
    },
    {
      num: "4",
      title: "Defend & Evolve",
      text: "We provide monitoring, maintenance, security hardening, optimization, and long-term support to keep systems secure and efficient.",
      icon: <Shield className="w-10 h-10 text-white" />
    }
  ];

  return (
    <>
      <SEO 
        title="Our Approach" 
        description="Our 4-step methodology: Discover, Design, Deliver, Defend & Evolve. Ensuring successful technology transformation." 
      />

      <div className="bg-corporate-light py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue">Our Approach</h1>
            <div className="w-24 h-1 bg-corporate-teal mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Connecting line for large screens */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-300 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-corporate-blue rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-corporate-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-corporate-blue mb-3">{step.title}</h3>
                  <p className="text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;