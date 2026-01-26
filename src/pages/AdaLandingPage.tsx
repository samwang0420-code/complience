import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, ShieldAlert, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { NICHES, LOCATIONS } from '../data/pseo_data';

const AdaLandingPage: React.FC = () => {
  const { industry, location } = useParams<{ industry: string; location?: string }>();

  // Find data
  const nicheData = NICHES.find(n => n.slug === industry);
  const locationData = location ? LOCATIONS.find(l => l.slug === location) : null;

  // 404 handling (basic)
  if (!nicheData) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold">Industry not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  // Variables for templates
  const Niche = nicheData.name;
  const City = locationData ? locationData.city : "the US";
  const State = locationData ? locationData.state : "";
  const LocationString = locationData ? `in ${City}, ${State}` : "Nationwide";
  const LocationStringTitle = locationData ? `in ${City}, ${State}` : "";

  // Formula 1: Title
  // ADA Compliance for {Niche} in {City}, {State} | Avoid Lawsuits
  // Adjusted for National: ADA Compliance for {Niche} | Avoid Lawsuits
  const metaTitle = locationData 
    ? `ADA Compliance for ${Niche} in ${City}, ${State} | Avoid Lawsuits`
    : `ADA Compliance for ${Niche} | Avoid Lawsuits`;

  // Formula 2: H1
  // Is Your {Niche} Website ADA Compliant in {City}?
  const h1Text = locationData
    ? `Is Your ${Niche} Website ADA Compliant in ${City}?`
    : `Is Your ${Niche} Website ADA Compliant?`;

  // Formula 3: Meta Description
  // Many {Niche} businesses in {City} face ADA lawsuits due to inaccessible websites. Check your risk and get a free ADA compliance scan.
  const metaDesc = locationData
    ? `Many ${Niche} businesses in ${City} face ADA lawsuits due to inaccessible websites. Check your risk and get a free ADA compliance scan.`
    : `Many ${Niche} businesses face ADA lawsuits due to inaccessible websites. Check your risk and get a free ADA compliance scan.`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4 px-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-800 font-bold text-sm uppercase tracking-wide">Urgent Compliance Alert</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {h1Text}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't let a lawsuit destroy your hard-earned reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-10">
              
              {/* Section 1: Risk Hook */}
              <section className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <ShieldAlert className="w-6 h-6 text-red-500 mr-2" />
                  Legal Risk Warning
                </h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    <strong>ADA Lawsuit Risk:</strong> High
                  </p>
                  <p>
                    <strong>Average Settlement:</strong> <span className="bg-yellow-100 px-1 font-bold text-slate-900">{nicheData.lawsuitRisk}</span>
                  </p>
                  <p className="italic text-slate-600 border-t pt-4 mt-4">
                    "{nicheData.painPoint}"
                  </p>
                </div>
              </section>

              {/* Section 2: Why Niche is Targeted */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why {Niche} Websites Are Targets
                </h2>
                <p className="text-slate-600 mb-4">
                  Your industry relies heavily on digital interaction. Common accessibility failures include:
                </p>
                <ul className="space-y-3">
                  {[
                    "Images missing alt text descriptions",
                    "Online forms not compatible with screen readers",
                    "Booking/Reservation widgets trapping keyboard focus",
                    "Map integrations that are impossible to navigate blindly",
                    "Payment gateways lacking proper labels"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 3: Local Risk */}
              <section className="bg-slate-100 p-6 rounded-xl">
                 <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  Risk in {locationData ? `${City}, ${State}` : "Your Area"}
                </h2>
                <div className="text-slate-700 space-y-3">
                  <p>
                    {locationData 
                      ? `${City} has a high density of businesses and an active legal environment regarding ADA compliance.`
                      : "Across the US, small businesses are increasingly being targeted by serial plaintiffs."}
                  </p>
                  <p>
                    Predatory law firms are using automated bots to scan thousands of {Niche} websites {locationData ? `in ${State}` : ""} looking for violations.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Small businesses are often the easiest targets because they lack in-house legal teams.
                  </p>
                </div>
              </section>

            </div>

            {/* Section 4: CTA & Form */}
            <div className="sticky top-24">
              <div className="bg-blue-900 p-6 rounded-t-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Free ADA Website Scan</h3>
                <p className="text-blue-100 mb-0">Check Your Risk in 60 Seconds</p>
              </div>
              <div className="bg-white p-6 rounded-b-2xl shadow-xl border border-t-0 border-slate-200">
                <div className="mb-6 text-center">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">
                    No Credit Card Required
                  </span>
                  <p className="text-sm text-slate-500">
                    We only scan for errors. We do not sell your data.
                  </p>
                </div>
                
                <LeadForm source={`pseo-${industry}${location ? `-${location}` : ''}`} />
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">
                    100% Confidential. Results sent immediately.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default AdaLandingPage;
