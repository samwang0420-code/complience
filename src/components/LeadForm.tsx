import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LeadFormProps {
  initialUrl?: string;
  source?: string;
  onSuccess?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ initialUrl = '', source = 'generic', onSuccess }) => {
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState(initialUrl);
  const [businessType, setBusinessType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let submitUrl = url.trim();
    // Auto-prepend https:// if missing
    if (submitUrl && !/^https?:\/\//i.test(submitUrl)) {
      submitUrl = `https://${submitUrl}`;
      setUrl(submitUrl);
    }

    const payload = {
      email,
      url: submitUrl,
      businessType,
      source,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    // Log for debugging
    console.log('Lead submitted:', payload);

    // Attempt to send to Webhook if configured
    const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'no-cors' // Often needed for simple webhooks to avoid CORS errors, though response is opaque
        });
      } catch (error) {
        console.error('Webhook failed:', error);
        // Continue anyway to show success to user
      }
    } else {
      // Simulate delay if no webhook
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    
    if (onSuccess) {
      onSuccess();
    } else {
      navigate('/thank-you');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Your Full Risk Report</h3>
        <p className="text-slate-600">Enter your details to receive a comprehensive ADA compliance analysis for your industry.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
          <input
            type="text"
            id="url"
            required
            placeholder="yourbusiness.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
          <select
            id="businessType"
            required
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
          >
            <option value="">Select your industry...</option>
            <option value="ecommerce">E-commerce / Retail</option>
            <option value="saas">SaaS / Software</option>
            <option value="legal">Law Firm</option>
            <option value="medical">Healthcare / Medical</option>
            <option value="real_estate">Real Estate</option>
            <option value="restaurant">Restaurant / Food Service</option>
            <option value="nonprofit">Non-profit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Get Free Report
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
        
        <p className="text-xs text-slate-400 text-center mt-4">
          By clicking above, you agree to receive your report and related compliance updates. 
          <br />This is not legal advice.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
