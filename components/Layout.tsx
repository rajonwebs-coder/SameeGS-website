import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Approach', path: '/approach' },
    { name: 'Why SAMEE', path: '/why-samee' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-corporate-light text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-corporate-blue shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
                <span className="text-white text-xl font-bold tracking-tight">
                  SAMEE <span className="text-corporate-teal">GLOBAL</span> SOLUTIONS
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-corporate-teal bg-slate-800'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-corporate-blue border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'text-corporate-teal bg-slate-800'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-corporate-dark text-white pt-12 pb-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">SAMEE GLOBAL SOLUTIONS – FZCO</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                We partner with enterprises in the UAE and GCC to modernize their IT landscape, improve resilience, enhance security, and drive digital transformation.
              </p>
              <div className="flex items-start space-x-2 text-gray-400 mb-2">
                <MapPin className="mt-1 flex-shrink-0 text-corporate-teal" size={16} />
                <span>IFZA Business Park, DDP, PO Box 342001, Dubai Silicon Oasis, Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="flex-shrink-0 text-corporate-teal" size={16} />
                <a href="mailto:info@sgsitech.com" className="hover:text-corporate-teal transition-colors">info@sgsitech.com</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-corporate-teal">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-corporate-teal">Explore</h4>
              <ul className="space-y-2">
                {navLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} SAMEE GLOBAL SOLUTIONS – FZCO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;