import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ShieldCheck, Cloud, BrainCircuit, Cog } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Secure. Cloud-Ready. Intelligent. SAMEE GLOBAL SOLUTIONS – FZCO is a Dubai-based technology consulting and engineering firm delivering advanced Cloud Services, Cybersecurity Solutions, and AI Consulting." 
      />
      
      {/* Hero Section */}
      <section className="bg-corporate-blue text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure. Cloud-Ready. <br />
              <span className="text-corporate-teal">Intelligent.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              SAMEE GLOBAL SOLUTIONS – FZCO is a Dubai-based technology consulting and engineering firm delivering advanced Cloud Services, Cybersecurity Solutions, Artificial Intelligence Consulting, Software Development, and IT/DevOps Automation across GCP, Microsoft Azure, and AWS. We partner with enterprises in the UAE and GCC to modernize their IT landscape, improve resilience, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-corporate-teal hover:bg-corporate-tealDark transition-colors shadow-lg">
                Book a Consultation
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-corporate-blue transition-colors">
                Download Company Profile (PDF)
              </button>
            </div>
            <p className="mt-6 text-sm text-corporate-teal">Email: info@sgsitech.com</p>
          </div>
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-blue sm:text-4xl">Our Core Value Pillars</h2>
            <div className="w-24 h-1 bg-corporate-teal mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-corporate-teal">
              <div className="mb-4 text-corporate-blue">
                <ShieldCheck size={48} />
              </div>
              <h3 className="text-xl font-bold text-corporate-blue mb-3">Security by Design</h3>
              <p className="text-slate-600">
                We integrate robust cybersecurity controls into every solution from day one.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-corporate-teal">
              <div className="mb-4 text-corporate-blue">
                <Cloud size={48} />
              </div>
              <h3 className="text-xl font-bold text-corporate-blue mb-3">Cloud-Ready Architectures</h3>
              <p className="text-slate-600">
                We design scalable, reliable, high-performing cloud ecosystems across Azure, AWS, and GCP.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-corporate-teal">
              <div className="mb-4 text-corporate-blue">
                <BrainCircuit size={48} />
              </div>
              <h3 className="text-xl font-bold text-corporate-blue mb-3">AI-Driven Innovation</h3>
              <p className="text-slate-600">
                We help organizations adopt AI and automation to improve efficiency, accuracy, and decision-making.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-corporate-teal">
              <div className="mb-4 text-corporate-blue">
                <Cog size={48} />
              </div>
              <h3 className="text-xl font-bold text-corporate-blue mb-3">Reliable Software Engineering & Maintenance</h3>
              <p className="text-slate-600">
                We build and maintain mission-critical applications tailored to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Statement */}
      <section className="py-20 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-corporate-blue rounded-2xl p-10 md:p-16 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Transforming Organizations Across the UAE & GCC</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From startups to large enterprises, we deliver secure and scalable cloud, automation, and AI-driven solutions built to accelerate business growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;