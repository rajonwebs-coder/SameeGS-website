import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    areaOfInterest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Thank you for your message. We will respond within one business day.");
  //   // In a real app, this would submit to an API endpoint
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  fetch("https://formsubmit.co/info@sgsitech.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      area: formData.area,
      message: formData.message
    })
  })
  .then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong.");
  });
};

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact SAMEE GLOBAL SOLUTIONS – FZCO. Let's discuss your technology goals. Located in Dubai Silicon Oasis." 
      />

      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue">Contact Us</h1>
            <p className="mt-4 text-xl text-slate-600">Let’s discuss your technology goals. We respond within one business day.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                  />
                </div>
                <div>
                  <label htmlFor="areaOfInterest" className="block text-sm font-medium text-slate-700">Area of Interest</label>
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                  >
                    <option value="">Select an option</option>
                    <option value="AI">AI</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Network">Network</option>
                    <option value="Software Development">Software Development</option>
                    <option value="DevOps Automation">DevOps Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-corporate-teal focus:ring-corporate-teal sm:text-sm p-3 border"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-corporate-teal hover:bg-corporate-tealDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-teal transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Business Information */}
            <div className="flex flex-col justify-center">
              <div className="bg-corporate-blue text-white p-10 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Business Information</h3>
                
                <h4 className="text-xl font-semibold mb-2">SAMEE GLOBAL SOLUTIONS – FZCO</h4>
                
                <div className="flex items-start space-x-4 mb-6 text-gray-300">
                  <MapPin className="flex-shrink-0 mt-1 text-corporate-teal" />
                  <p>
                    IFZA Business Park, DDP<br />
                    PO Box 342001<br />
                    Dubai Silicon Oasis<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="flex-shrink-0 text-corporate-teal" />
                  <a href="mailto:info@sgsitech.com" className="hover:text-white transition-colors">
                    Email: info@sgsitech.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;