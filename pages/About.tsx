import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about SAMEE GLOBAL SOLUTIONS – FZCO, a Dubai-based IT consulting firm specializing in cybersecurity, cloud engineering, and software development." 
      />

      <div className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-8">About SAMEE GLOBAL SOLUTIONS – FZCO</h1>
          
          <div className="prose prose-lg text-slate-700 mb-12">
            <p className="mb-6">
              SAMEE GLOBAL SOLUTIONS – FZCO is an IT consulting, cybersecurity, cloud engineering, and software development company headquartered in IFZA Business Park, Dubai Silicon Oasis. We deliver end-to-end technology solutions designed for security, innovation, and operational excellence. As a Free Zone Company operating in Dubai, we support organizations across the UAE, the GCC, and global markets.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-corporate-blue mb-4">Our Story</h2>
            <p className="text-slate-700 leading-relaxed">
              Founded with the vision to empower businesses through modern technology, SAMEE GLOBAL SOLUTIONS combines deep technical expertise with a commitment to high-quality delivery. Our team consists of experienced cloud architects, AI consultants, software engineers, cybersecurity specialists, and automation experts who have delivered solutions across banking, government, healthcare, retail, logistics, and digital-native sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-corporate-light p-8 rounded-lg border-l-4 border-corporate-teal">
              <h2 className="text-2xl font-bold text-corporate-blue mb-4">Mission</h2>
              <p className="text-slate-700">
                To deliver secure, innovative, and scalable technology solutions that accelerate business transformation and long-term growth.
              </p>
            </div>
            <div className="bg-corporate-light p-8 rounded-lg border-l-4 border-corporate-teal">
              <h2 className="text-2xl font-bold text-corporate-blue mb-4">Vision</h2>
              <p className="text-slate-700">
                To be a leading regional technology consulting partner recognized for cloud leadership, engineering excellence, AI innovation, and uncompromising cybersecurity.
              </p>
            </div>
          </div>

          <div className="bg-corporate-blue text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Key Facts</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-corporate-teal mr-3">•</span>
                <span>Registered at IFZA Business Park, Dubai Silicon Oasis</span>
              </li>
              <li className="flex items-start">
                <span className="text-corporate-teal mr-3">•</span>
                <span>Licensed as a Free Zone Company (FZCO)</span>
              </li>
              <li className="flex items-start">
                <span className="text-corporate-teal mr-3">•</span>
                <span>Serving clients across UAE, GCC, and global markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-corporate-teal mr-3">•</span>
                <span>Expertise across Cloud, Cybersecurity, AI, Networks, DevOps & Software Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;