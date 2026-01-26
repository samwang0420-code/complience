export interface QuestionData {
  question: string;
  answer: string;
  risk: string;
  cost: string;
  riskSignals: string[];
  faqs: { q: string; a: string }[];
}

export const QUESTION_DATA: Record<string, QuestionData> = {
  'is-my-website-ada-compliant': {
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
  'ada-website-lawsuit-cost': {
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
  'do-websites-need-to-be-ada-compliant': {
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
  }
};
