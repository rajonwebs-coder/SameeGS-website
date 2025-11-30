import React from 'react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const services = [
    {
      title: "1. Innovation & AI Research & Consultancy",
      items: [
        "AI strategy development and enterprise adoption planning",
        "Data readiness assessments and use-case identification",
        "Machine learning and predictive analytics solutions",
        "Generative AI proof-of-concepts",
        "AI governance, risk management, and compliance frameworks",
        "Workflow automation using AI and ML"
      ]
    },
    {
      title: "2. Cyber Security Consultancy",
      items: [
        "Security posture assessments and maturity gap analysis",
        "Cloud and network security architecture design",
        "Identity and access management (IAM)",
        "Zero-trust strategy and implementation",
        "Incident response plans and SOC readiness",
        "Security governance, risk, and compliance",
        "Threat modelling and vulnerability management"
      ]
    },
    {
      title: "3. Information Technology Network Services",
      items: [
        "Enterprise network architecture & design",
        "Multi-site, hybrid, and SD-WAN connectivity solutions",
        "Cloud & data center network deployments",
        "Network performance monitoring & optimization",
        "High-availability network design",
        "Network operations support and documentation"
      ]
    },
    {
      title: "4. Cloud Services & IT/DevOps Automation (GCP, Microsoft Azure, AWS)",
      items: [
        "Cloud adoption strategy & transformation roadmaps",
        "Landing zones & scalable multi-cloud architectures",
        "Cloud migration (apps, data, workloads)",
        "Infrastructure as Code (Terraform, Bicep, Deployment Manager)",
        "CI/CD pipeline automation and DevOps orchestration",
        "Observability, logging, monitoring & FinOps optimization",
        "Hardening, backup, and disaster recovery automation"
      ]
    },
    {
      title: "5. Software Development & Maintenance",
      items: [
        "Custom software development (web, mobile, enterprise apps)",
        "API and microservices development",
        "Legacy system modernization",
        "Full SDLC: design → development → testing → deployment",
        "Automated testing & CI/CD integration",
        "Ongoing maintenance, updates, bug fixing & performance enhancements",
        "Secure coding practices and code audits"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore our services: AI Research, Cyber Security Consultancy, Network Services, Cloud Services & DevOps Automation, and Software Development." 
      />

      <div className="bg-corporate-light py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue">Our Services</h1>
            <div className="w-24 h-1 bg-corporate-teal mx-auto mt-4"></div>
          </div>

          <div className="grid gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-corporate-blue mb-6">{service.title}</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-corporate-teal mr-2 mt-1">•</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;