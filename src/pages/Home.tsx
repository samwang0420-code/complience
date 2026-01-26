import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Gavel, 
  AlertCircle, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
} from 'lucide-react';

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
              <Link 
                to="/check"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 group active:scale-[0.98]"
              >
                Check My Website Risk
                <motion.div
                  variants={{
                    initial: { x: 0, scale: 1, rotate: 0 },
                    hover: { x: 4, scale: 1.2, rotate: 10 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck className="w-6 h-6" />
                </motion.div>
              </Link>
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
      title: "Free Scan",
      desc: "Instant automated analysis of your website's accessibility compliance status.",
      icon: <Search className="w-6 h-6 text-white" />
    },
    {
      title: "Get Report",
      desc: "Receive a detailed breakdown of risks and specific violation points.",
      icon: <AlertCircle className="w-6 h-6 text-white" />
    },
    {
      title: "Fix Issues",
      desc: "Use our automated tools or developer guide to remediate violations.",
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
              Identify Risks Before <br />Lawyers Do.
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

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FAQ />
    </>
  );
};

export default Home;
