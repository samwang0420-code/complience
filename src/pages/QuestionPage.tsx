import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { QUESTION_DATA } from '../data/questions';

const QuestionPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  
  // Construct the lookup key
  const lookupKey = category && slug ? `${category}/${slug}` : '';
  const data = QUESTION_DATA[lookupKey];

  // Fallback for unknown slugs (in a real app, 404)
  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold">Topic not found</h1>
        <p className="text-slate-500 mt-2">We couldn't find an answer for {lookupKey}</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  // JSON-LD Schema for FAQPage
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{data.question} | USComplianceGuard</title>
        <meta name="description" content={`${data.answer} ${data.risk} ${data.cost}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              {data.question}
            </h1>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-blue-600">
              <div className="space-y-4 text-lg">
                <p className="font-bold text-slate-900 flex items-center gap-3">
                  <span className="bg-slate-100 p-1 rounded text-2xl">👉</span> 
                  {data.answer}
                </p>
                <p className="font-bold text-red-600 flex items-center gap-3">
                  <span className="bg-red-50 p-1 rounded text-2xl">⚠️</span> 
                  {data.risk}
                </p>
                <p className="font-bold text-slate-900 flex items-center gap-3">
                  <span className="bg-green-50 p-1 rounded text-2xl">💰</span> 
                  {data.cost}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              
              {/* Risk Signals */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-amber-500" />
                  Common Compliance Failures
                </h2>
                <ul className="space-y-4">
                  {data.riskSignals.map((signal, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA 1: Free Check */}
              <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Is Your Website At Risk?</h3>
                <p className="mb-6 opacity-90">Run a free, instant scan to find out if you are compliant.</p>
                <Link 
                  to="/check"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95 w-full sm:w-auto"
                >
                  Free ADA Website Check (30 seconds)
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {data.faqs.map((faq, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar: Lead Form */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <LeadForm source={`question-${category}-${slug}`} />
                <div className="mt-6 p-4 bg-slate-100 rounded-xl text-xs text-slate-500 text-center">
                  <p>Not legal advice. Informational purpose only.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default QuestionPage;
