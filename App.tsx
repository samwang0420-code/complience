
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Gavel, 
  AlertCircle, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink,
  Code,
  ShieldCheck,
  ShoppingBag,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// --- Constants ---
const GUMROAD_LINK = "https://gumroad.com/l/complianceguard_lifetime";

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight">ComplianceGuard<span className="text-blue-600">.ai</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">The Risk</a>
            <a href="#installation" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Installation Guide</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a 
              href={GUMROAD_LINK}
              data-gumroad-overlay-checkout="true"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              Get Protected
            </a>
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
            <a href="#problem" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">The Risk</a>
            <a href="#installation" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Installation</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Pricing</a>
            <a 
              href={GUMROAD_LINK}
              data-gumroad-overlay-checkout="true"
              className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Get Protected Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero: React.FC = () => {
  const logos = [
    { name: 'WordPress', src: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-ar21.svg' },
    { name: 'Shopify', src: 'https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg' },
    { name: 'Wix', src: 'https://www.vectorlogo.zone/logos/wix/wix-ar21.svg' },
    { name: 'Squarespace', src: 'https://www.vectorlogo.zone/logos/squarespace/squarespace-ar21.svg' }
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Live for 2025 Compliance Standards
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Is Your Website a <br />
              <span className="text-blue-600 underline decoration-blue-200">Lawsuit Magnet?</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Predatory ADA lawsuits against small businesses rose by 300% in 2025. Protect your business with one line of code. No complexity, just compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.a 
                href={GUMROAD_LINK}
                data-gumroad-overlay-checkout="true"
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 group active:scale-[0.98]"
              >
                Secure My Website Now
                <motion.div
                  variants={{
                    initial: { x: 0, scale: 1, rotate: 0 },
                    hover: { x: 4, scale: 1.2, rotate: 10 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck className="w-6 h-6" />
                </motion.div>
              </motion.a>
              <a href="#installation" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all active:scale-[0.98] group">
                View Installation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="space-y-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by 2,000+ businesses on:</p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                {logos.map((logo) => (
                  <img 
                    key={logo.name}
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-8 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex items-center gap-2 text-sm text-slate-500 font-medium italic pt-2"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Join 2,000+ businesses already protected by ComplianceGuard.ai</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mockup UI */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
               <div className="h-8 bg-slate-50 border-b flex items-center gap-1.5 px-4">
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
               </div>
               <div className="p-8 aspect-[4/3] bg-slate-50 relative">
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="h-24 bg-white rounded shadow-sm border border-slate-100"></div>
                      <div className="h-24 bg-white rounded shadow-sm border border-slate-100"></div>
                    </div>
                  </div>

                  {/* Accessibility Menu Mockup overlay */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-6 right-6 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
                  >
                    <div className="bg-blue-600 p-3 flex items-center justify-between">
                      <span className="text-white text-xs font-bold uppercase">Accessibility Options</span>
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-700 bg-slate-50 p-2 rounded">
                        <span>HIGH CONTRAST</span>
                        <div className="w-8 h-4 bg-blue-600 rounded-full flex items-center justify-end px-0.5">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-700 border p-2 rounded">
                        <span>SCREEN READER</span>
                        <div className="w-8 h-4 bg-slate-200 rounded-full flex items-center justify-start px-0.5">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-700 border p-2 rounded">
                        <span>TEXT SCALING</span>
                        <div className="w-8 h-4 bg-slate-200 rounded-full flex items-center justify-start px-0.5">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Main Widget Icon */}
                  <div className="absolute bottom-8 right-8 animate-bounce">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>
               </div>
            </div>
            {/* Backdrops */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Gavel className="w-8 h-8 text-amber-600" />,
      stat: "$25,000 Average Settlement",
      desc: "Legal settlements for ADA digital accessibility lawsuits often start at $5k and rapidly scale to $25k+ plus legal fees."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-amber-600" />,
      stat: "No Prior Warning Given",
      desc: "Most businesses receive a demand letter or lawsuit before they even know they are violating ADA standards."
    },
    {
      icon: <Search className="w-8 h-8 text-amber-600" />,
      stat: "Automated Bot Scans",
      desc: "Predatory law firms use automated bots to find websites without accessibility features in seconds."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Danger</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">Doing nothing is your biggest expense.</p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every day your website remains unprotected, you risk becoming a statistic. 
            Accessibility is no longer "nice to have"—it's a legal mandate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-8 border border-amber-100">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.stat}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection: React.FC = () => {
  const steps = [
    {
      title: "Purchase License",
      desc: "Secure your lifetime license with a one-time payment. No hidden monthly fees.",
      icon: <ShoppingBag className="w-6 h-6 text-white" />
    },
    {
      title: "Copy 'Smart-Snippet'",
      desc: "Access your dashboard to generate your custom AI accessibility snippet.",
      icon: <Code className="w-6 h-6 text-white" />
    },
    {
      title: "Instant Protection",
      desc: "Paste the snippet into your website's header. You're now fully compliant.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="installation" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Solution</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              One line of code. <br />Infinite Peace of Mind.
            </h3>
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-800 p-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-slate-400 font-mono">index.html</span>
              </div>
              <div className="p-8 font-mono text-sm leading-loose">
                <p className="text-slate-500">&lt;head&gt;</p>
                <p className="text-slate-400 pl-4">&lt;meta charset="UTF-8"&gt;</p>
                <p className="text-slate-400 pl-4">&lt;title&gt;My Awesome Website&lt;/title&gt;</p>
                <div className="my-4 p-4 bg-blue-600/10 border-l-2 border-blue-500 rounded-r">
                   <p className="text-blue-400">
                     &lt;!-- ComplianceGuard.ai Widget --&gt;<br />
                     &lt;script src="https://cdn.complianceguard.ai/v1/widget.js" <br />
                     &nbsp;&nbsp;data-key="CG_92k8a1j_LIFETIME"&gt;<br />
                     &lt;/script&gt;
                   </p>
                </div>
                <p className="text-slate-500">&lt;/head&gt;</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-sm font-medium text-blue-800 italic">
                "It literally took me 45 seconds to secure my Shopify store. Easiest decision I've made this year." - Sarah J, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => (
  <section id="pricing" className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Investment, Not Expense.</h2>
        <p className="text-lg text-slate-600">Secure lifetime protection for less than the cost of a single hour with a corporate lawyer.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Competitor 1 */}
        <div className="bg-white p-10 rounded-2xl border border-slate-200 flex flex-col opacity-75">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Law Firm Audit</h3>
            <p className="text-slate-500 text-sm">Full manual certification</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-slate-300 line-through">$5,000+</span>
            <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-bold">One-time audit</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-slate-400">
              <X className="w-4 h-4" /> Slow turnaround (2 weeks)
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <X className="w-4 h-4" /> Outdated in 3 months
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <X className="w-4 h-4" /> No live support
            </li>
          </ul>
        </div>

        {/* Hero Card */}
        <div className="glowing-border flex flex-col">
          <div className="bg-white p-10 rounded-2xl flex flex-col h-full relative z-10 border shadow-2xl">
            <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
              Best Value
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Lifetime Protection</h3>
              <p className="text-blue-600 font-semibold text-sm">Our 2025 Flagship Offer</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 font-medium">One-time</span>
              </div>
              <p className="text-green-600 text-xs mt-2 font-bold uppercase tracking-wider">Save 80% vs Enterprise competitors</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Unlimited Pageviews
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Accessibility Statement Incl.
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Automatic AI Updates
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Priority Compliance Concierge
              </li>
            </ul>
            <a 
              href={GUMROAD_LINK}
              data-gumroad-overlay-checkout="true"
              className="w-full py-5 bg-blue-600 text-white rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/40 text-center active:scale-[0.98]"
            >
              Get Lifetime Access
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">Limited to next 100 licenses</p>
          </div>
        </div>

        {/* Competitor 2 */}
        <div className="bg-white p-10 rounded-2xl border border-slate-200 flex flex-col opacity-75">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise SaaS</h3>
            <p className="text-slate-500 text-sm">Standard monthly subscription</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-slate-300 line-through">$490</span>
            <span className="text-slate-300 font-medium">/yr</span>
            <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-bold">Recurring Subscription</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-slate-400">
              <X className="w-4 h-4" /> Cancel = Protection Lost
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <X className="w-4 h-4" /> Price increases over time
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <X className="w-4 h-4" /> Basic Support Tier
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need coding skills to install this?",
      a: "Absolutely not. If you can copy and paste text, you can install ComplianceGuard. We provide specific guides for WordPress, Shopify, Wix, Squarespace, and custom builds."
    },
    {
      q: "Does this guarantee I won't be sued?",
      a: "No software can 100% stop someone from filing a lawsuit, but ComplianceGuard puts you in 'Good Faith' compliance immediately, which is the most common defense used to dismiss these predatory cases instantly."
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes. We offer a 30-day no-questions-asked refund policy. If you aren't satisfied, we'll refund your license immediately."
    },
    {
      q: "Will this slow down my website?",
      a: "Our AI engine is served via high-speed Edge CDN and loads asynchronously, meaning it never interferes with your page speed or SEO performance."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-slate-900 mb-12">Common Concerns</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
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
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GDPR Compliance</a></li>
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
          SSL SECURED PAYMENT VIA STRIPE & GUMROAD
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Pricing />
      <FAQ />
      
      {/* Final CTA Bar */}
      <section className="bg-blue-600 py-12 sticky bottom-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <p className="text-2xl font-bold">Ready to stop worrying about lawsuits?</p>
            <p className="opacity-80">Join 2,000+ protected businesses today.</p>
          </div>
          <a 
            href={GUMROAD_LINK}
            data-gumroad-overlay-checkout="true"
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-50 shadow-2xl transition-all active:scale-95"
          >
            Get Lifetime Access $199
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
