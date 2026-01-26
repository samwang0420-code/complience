import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Simulate conversion tracking pixel
    console.log('Conversion Pixel Fired: Lead Generated');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
            Analysis Request Received
          </h1>
          
          <p className="text-slate-600 mb-8 text-lg">
            We are generating your comprehensive compliance report. It will be sent to your email shortly.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 text-left">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              While you wait...
            </h3>
            <p className="text-blue-800 text-sm">
              Did you know 98% of websites fail ADA compliance? Our automated solution can fix this instantly.
            </p>
          </div>

          <div className="space-y-4">
            <Link 
              to="/"
              className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
            >
              Return to Homepage
            </Link>
            
            <Link 
              to="/check"
              className="flex items-center justify-center gap-2 text-slate-500 font-medium hover:text-blue-600 transition-colors"
            >
              Check another website
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
