import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { INDUSTRY_DATA } from '../data/industries';

const IndustryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Simple mapping to handle "ada-compliance-for-X" format
  const industryKey = slug?.replace('ada-compliance-for-', '');
  const data = industryKey ? INDUSTRY_DATA[industryKey] : null;

  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold">Industry not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  // JSON-LD Schema for Article/Service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "USComplianceGuard"
    },
    "areaServed": "US",
    "serviceType": "ADA Compliance Audit"
  };

  return (
    <>
      <Helmet>
        <title>{data.title} | USComplianceGuard</title>
        <meta name="description" content={`Protect your ${industryKey} business from ADA lawsuits. ${data.description}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              This page is for <span className="font-bold text-slate-900 capitalize">{industryKey?.replace('-', ' ')}</span> businesses concerned about ADA website lawsuits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Industry Specific Risks</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {data.description}
                </p>
                <ul className="space-y-4">
                  {data.risks.map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1">
                        <ShieldCheck className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-slate-700 font-medium">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-900 p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-xl font-bold mb-4">Don't Wait for a Demand Letter</h3>
                <p className="mb-6 text-blue-100">
                  Check your site now. It takes less than 30 seconds and could save you thousands.
                </p>
                <Link 
                  to="/check"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Run Free Compliance Check
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="sticky top-24">
               <LeadForm source={`industry-${slug}`} />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default IndustryPage;
