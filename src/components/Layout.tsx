import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Shield, Menu, X, ShieldCheck, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import UrgencyBanner from './UrgencyBanner';

const GUMROAD_LINK = import.meta.env.VITE_GUMROAD_PRODUCT_URL || "https://gumroad.com/l/complianceguard_lifetime";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight">ComplianceGuard<span className="text-blue-600">.ai</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/check" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Free Check</Link>
            <Link to="/#problem" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">The Risk</Link>
            <Link 
              to="/check"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              Free Compliance Check
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b px-4 pb-6 space-y-4 shadow-xl"
          >
            <Link to="/check" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Free Check</Link>
            <Link to="/#problem" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">The Risk</Link>
            <Link 
              to="/check"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Free Compliance Check
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold tracking-tight">ComplianceGuard<span className="text-blue-400">.ai</span></span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6">
            Protecting digital entrepreneurs from predatory litigation since 2023. Our mission is to make the web accessible for everyone without bankrupting small businesses.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Legal</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Contact</h4>
          <ul className="space-y-4 text-slate-400">
            <li>support@complianceguard.ai</li>
            <li>+1 (555) 902-1203</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">&copy; 2025 ComplianceGuard.ai. All rights reserved.</p>
        <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
          <ShieldCheck className="w-4 h-4" />
          SECURE & COMPLIANT
        </div>
      </div>
    </div>
  </footer>
);

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <UrgencyBanner />
      <Navbar />
      <main className="flex-grow -mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
