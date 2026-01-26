export interface QuestionData {
  question: string;
  answer: string;
  risk: string;
  cost: string;
  riskSignals: string[];
  faqs: { q: string; a: string }[];
}

// Key format: "category/slug"
// This allows us to have the same slug in different categories if needed, 
// and efficiently lookup based on URL params.
export const QUESTION_DATA: Record<string, QuestionData> = {
  // --- ADA Category ---
  'ada/is-my-website-ada-compliant': {
    question: "Is My Website ADA Compliant?",
    answer: "Most likely NO. 98% of websites fail WCAG 2.1 compliance standards.",
    risk: "High Risk. Non-compliance violates Title III of the ADA.",
    cost: "$15,000 - $50,000 in settlements and legal fees.",
    riskSignals: [
      "Missing alt text on images",
      "Poor color contrast ratios",
      "Inaccessible via keyboard navigation",
      "Missing ARIA labels for screen readers"
    ],
    faqs: [
      {
        q: "Can I be sued if I'm a small business?",
        a: "Yes. There is no 'small business exemption' for ADA website compliance. Businesses of all sizes are targeted."
      },
      {
        q: "How do I fix it quickly?",
        a: "You can use an automated accessibility widget or hire a developer for manual remediation. Automated solutions are faster and cheaper."
      }
    ]
  },
  'ada/ada-website-lawsuit-cost': {
    question: "ADA Website Lawsuit Cost",
    answer: "Average settlement is $20,000 - $35,000.",
    risk: "Financial Risk. Plus your own legal defense fees.",
    cost: "Total cost often exceeds $50,000 per lawsuit.",
    riskSignals: [
      "Demand letters often demand $25k+ immediately",
      "Settlements do not prevent future lawsuits",
      "Department of Justice fines can be up to $75,000",
      "Reputation damage to your brand"
    ],
    faqs: [
      {
        q: "Does insurance cover ADA lawsuits?",
        a: "Most general liability policies EXCLUDE ADA discrimination claims. You likely have to pay out of pocket."
      },
      {
        q: "Is it cheaper to settle or fight?",
        a: "It is almost always cheaper to settle, which is why predatory law firms file thousands of these cases."
      }
    ]
  },
  'ada/do-websites-need-to-be-ada-compliant': {
    question: "Do Websites Need to Be ADA Compliant?",
    answer: "Yes. Courts have repeatedly ruled websites are 'public accommodations'.",
    risk: "Legal Risk. Ignoring this is not a defense in court.",
    cost: "Potential lawsuits, fines, and forced remediation costs.",
    riskSignals: [
      "Ignorance of the law is not a valid defense",
      "Competitors may use compliance as a marketing advantage",
      "You are excluding 20% of the population (people with disabilities)",
      "Google ranks accessible sites higher (SEO impact)"
    ],
    faqs: [
      {
        q: "Which law requires this?",
        a: "Title III of the Americans with Disabilities Act (ADA) prohibits discrimination in 'places of public accommodation', which includes websites."
      },
      {
        q: "What standard should I follow?",
        a: "The generally accepted standard is WCAG 2.1 Level AA. This is what courts and the DOJ reference."
      }
    ]
  },
  // --- New High Value Questions (From Requirements) ---
  'ada/ada-website-demand-letter': {
    question: "Received an ADA Website Demand Letter?",
    answer: "Do NOT ignore it. It is a precursor to a federal lawsuit.",
    risk: "Immediate Legal Action. Time is critical.",
    cost: "$2,000 - $10,000 just to respond via a lawyer.",
    riskSignals: [
      "Letter cites specific WCAG violations",
      "Usually demands a settlement amount (e.g., $15,000)",
      "Threatens filing in federal court within 14-30 days",
      "Sent by known predatory law firms"
    ],
    faqs: [
      {
        q: "Should I pay the demand?",
        a: "Consult a lawyer immediately. However, fixing your website is the first step to showing 'good faith' and mitigating damages."
      },
      {
        q: "Can I fix the site and ignore the letter?",
        a: "No. Fixing the site stops future lawsuits, but you still need to address the current claim. Ignoring it usually leads to a default judgment."
      }
    ]
  },
  'ada/sued-for-ada-website-compliance': {
    question: "Sued for ADA Website Compliance?",
    answer: "You are not alone. Over 4,000 lawsuits are filed annually.",
    risk: "Federal Court Record. Public PR damage.",
    cost: "$25,000+ average settlement plus defense costs.",
    riskSignals: [
      "Served with a complaint in federal or state court",
      "Plaintiff is often a 'serial filer'",
      "Allegations focus on screen reader failures",
      "Requires formal legal response within 21 days"
    ],
    faqs: [
      {
        q: "Is this a scam?",
        a: "While they feel predatory, these are real federal lawsuits based on real civil rights laws. Treat them seriously."
      },
      {
        q: "What is the fastest way out?",
        a: "Settlement + Remediation. You must fix the website to prevent the next lawsuit, then negotiate the current one."
      }
    ]
  },
  'ada/how-much-does-ada-website-compliance-cost': {
    question: "How Much Does ADA Website Compliance Cost?",
    answer: "Automated AI tools cost ~$200/year. Manual audits cost $5,000+.",
    risk: "Budget Risk. Manual fixes are slow and expensive.",
    cost: "Doing nothing costs 100x more (lawsuits).",
    riskSignals: [
      "Manual coding requires specialized developers ($150/hr)",
      "Audits expire as soon as you update your site",
      "AI Widgets offer real-time protection",
      "Hybrid solutions offer the best balance"
    ],
    faqs: [
      {
        q: "Are free plugins enough?",
        a: "Usually no. Free plugins often lack the AI capability to fix complex backend code issues required for screen readers."
      },
      {
        q: "Is it a one-time cost?",
        a: "Websites change constantly. Compliance requires ongoing monitoring, so a subscription or automated tool is recommended."
      }
    ]
  },
  'ada/can-i-be-sued-for-ada-website': {
    question: "Can I Be Sued for My Website?",
    answer: "Yes. If you serve the public, your website must be accessible.",
    risk: "Universal Risk. Applies to almost all industries.",
    cost: "Unlimited liability for discrimination claims.",
    riskSignals: [
      "Nexus to a physical location increases risk (in some circuits)",
      "Pure online businesses are also targeted (e.g., Netflix case)",
      "Small revenue is not a shield",
      "Ignorance is not a defense"
    ],
    faqs: [
      {
        q: "Does the ADA apply to websites?",
        a: "The DOJ and courts interpret the ADA's 'places of public accommodation' to include websites that offer goods or services to the public."
      },
      {
        q: "I have no physical store, am I safe?",
        a: "No. Many courts (like the 9th Circuit) rule that web-only businesses must also comply with the ADA."
      }
    ]
  },
  // --- OSHA Category (Expansion Example) ---
  'osha/workplace-safety-compliance': {
    question: "OSHA Workplace Safety Compliance",
    answer: "Mandatory for all US employers. Fines are increasing in 2025.",
    risk: "Federal Audit Risk. Surprise inspections.",
    cost: "$16,131 per violation (maximum penalty).",
    riskSignals: [
      "Missing safety posters",
      "Lack of written safety plans",
      "Failure to report injuries",
      "Inadequate training records"
    ],
    faqs: [
      {
        q: "Do small offices need OSHA compliance?",
        a: "Yes. Almost all employers are covered by the OSH Act."
      },
      {
        q: "What is the most common fine?",
        a: "Fall protection and hazard communication are consistently top violations."
      }
    ]
  }
};
