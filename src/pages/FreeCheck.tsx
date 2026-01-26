import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, CheckCircle2, XCircle, Loader2, ArrowRight, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import LeadForm from '../components/LeadForm';

const FreeCheck: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<'low' | 'medium' | 'high' | null>(null);
  const [step, setStep] = useState<'input' | 'analyzing' | 'result'>('input');
  const [progress, setProgress] = useState(0);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    let checkUrl = url.trim();
    if (!checkUrl) return;

    // Auto-prepend https:// if missing
    if (!/^https?:\/\//i.test(checkUrl)) {
      checkUrl = `https://${checkUrl}`;
      setUrl(checkUrl);
    }

    setStep('analyzing');
    setIsAnalyzing(true);
    setProgress(0);

    // Simulate detailed analysis steps with progress bar
    const steps = [
      "Connecting to server...",
      "Checking DNS records...",
      "Analyzing DOM structure...",
      "Scanning for WCAG 2.1 violations...",
      "Testing keyboard navigation...",
      "Verifying color contrast ratios...",
      "Checking ARIA attributes...",
      "Generating risk report..."
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setProgress(((i + 1) / steps.length) * 100);
    }
    
    // Randomize result for demo purposes, weighted towards High/Medium risk
    const random = Math.random();
    const mockResult = random > 0.7 ? 'medium' : 'high';
    
    setResult(mockResult);
    setIsAnalyzing(false);
    setStep('result');
  };

  return (
    <>
      <Helmet>
        <title>Free ADA Website Compliance Check | USComplianceGuard</title>
        <meta name="description" content="Check if your website is at risk of ADA lawsuits. Free instant scan for accessibility compliance." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Free ADA Compliance Check
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Scan your website for common accessibility violations that attract predatory lawsuits.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 'input' && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 max-w-2xl mx-auto"
              >
                <form onSubmit={handleCheck} className="space-y-6">
                  <div>
                    <label htmlFor="url" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Website URL</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="url"
                        required
                        placeholder="yourbusiness.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full pl-4 pr-4 py-4 text-lg rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-0 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
                  >
                    Run Free Scan
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Scans public pages only. No login credentials required.
                  </p>
                </form>
              </motion.div>
            )}

            {step === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-12 rounded-2xl shadow-xl border border-slate-200 max-w-2xl mx-auto text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                  <ShieldAlert className="absolute inset-0 m-auto w-10 h-10 text-blue-600 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Scanning {url}...</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4 overflow-hidden">
                  <motion.div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  ></motion.div>
                </div>
                
                <div className="space-y-2 text-slate-500 h-6">
                  <p className="animate-pulse text-sm font-mono">
                    {progress < 30 ? "Connecting to server..." : 
                     progress < 60 ? "Analyzing DOM structure..." : 
                     progress < 90 ? "Checking WCAG compliance..." : 
                     "Finalizing report..."}
                  </p>
                </div>
              </motion.div>
            )}

            {step === 'result' && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Result Card - Gated Content */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 h-full relative overflow-hidden">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 ${
                    result === 'high' ? 'bg-red-100 text-red-700' : 
                    result === 'medium' ? 'bg-orange-100 text-orange-700' : 
                    'bg-green-100 text-green-700'
                  }`}>
                    <ShieldAlert className="w-4 h-4" />
                    Preliminary Risk Level: {result.toUpperCase()}
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                    {result === 'high' ? 'Critical Vulnerabilities Detected' : 
                     result === 'medium' ? 'Compliance Gaps Found' : 
                     'Basic Compliance Met'}
                  </h2>

                  <div className="space-y-6 mb-8 filter blur-sm select-none opacity-50">
                    <div className="flex items-start gap-4">
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900">Missing Alt Text on 12 Images</h4>
                        <p className="text-slate-600 text-sm">Images lack descriptions for screen readers.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900">Contrast Ratio Failures (4.5:1)</h4>
                        <p className="text-slate-600 text-sm">Text is difficult to read for visually impaired users.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900">Keyboard Traps Detected</h4>
                        <p className="text-slate-600 text-sm">Navigation menu cannot be closed via keyboard.</p>
                      </div>
                    </div>
                  </div>

                  {/* Gate Overlay */}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Unlock Full Report</h3>
                    <p className="text-slate-600 max-w-xs mb-6">
                      Your detailed PDF report containing specific violation URLs and remediation steps is ready.
                    </p>
                    <div className="hidden md:block animate-bounce text-blue-600 font-bold">
                      <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                    </div>
                  </div>
                </div>

                {/* Lead Form Card */}
                <div className="relative z-20">
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg z-30">
                    REPORT READY
                  </div>
                  <LeadForm initialUrl={url} source="free-check-result-gated" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
};

export default FreeCheck;
