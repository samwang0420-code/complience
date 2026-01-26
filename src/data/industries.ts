export interface IndustryData {
  title: string;
  description: string;
  risks: string[];
}

export const INDUSTRY_DATA: Record<string, IndustryData> = {
  'ecommerce': {
    title: "ADA Compliance for E-commerce",
    description: "Online stores are the #1 target for ADA lawsuits. If you sell online, you are a public accommodation.",
    risks: [
      "Inaccessible checkout flows",
      "Product images missing alt text",
      "Pop-ups trapping keyboard users",
      "Color contrast issues on 'Buy' buttons"
    ]
  },
  'law-firms': {
    title: "ADA Compliance for Law Firms",
    description: "Law firms are ironically becoming frequent targets. Protect your reputation and your practice.",
    risks: [
      "PDF documents not accessible",
      "Contact forms not labeled for screen readers",
      "Navigation menus not keyboard friendly",
      "Video content missing captions"
    ]
  },
  'saas': {
    title: "ADA Compliance for SaaS",
    description: "B2B and B2C SaaS platforms must ensure their dashboards and marketing sites are accessible.",
    risks: [
      "Dynamic content updates not announced to screen readers",
      "Complex form controls lacking labels",
      "Drag-and-drop interfaces not keyboard accessible",
      "Charts and graphs missing text alternatives"
    ]
  },
  'healthcare': {
    title: "ADA Compliance for Healthcare",
    description: "Medical practices and hospitals must ensure patient portals and appointment booking are accessible to all.",
    risks: [
      "Inaccessible patient forms (HIPAA & ADA risk)",
      "Appointment schedulers not keyboard friendly",
      "Color-coded test results unreadable to colorblind users",
      "PDF brochures not tagged for accessibility"
    ]
  },
  'real-estate': {
    title: "ADA Compliance for Real Estate",
    description: "Realtors and agencies face lawsuits for inaccessible property listings and virtual tours.",
    risks: [
      "Image galleries missing alt text descriptions",
      "Virtual tour players not keyboard accessible",
      "Search filters not labeled for screen readers",
      "Map integrations trapping focus"
    ]
  }
};
