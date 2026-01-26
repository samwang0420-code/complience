export interface NicheData {
  name: string;
  slug: string;
  painPoint: string;
  lawsuitRisk: string;
}

export interface LocationData {
  city: string;
  state: string;
  slug: string;
}

export const NICHES: NicheData[] = [
  {
    name: "Dentist",
    slug: "dentist",
    painPoint: "Online appointment and patient forms are often inaccessible to screen readers",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Law Firm",
    slug: "law-firm",
    painPoint: "Law firm websites are frequently targeted due to high settlement expectations",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Real Estate Agent",
    slug: "real-estate-agent",
    painPoint: "Property listings and image-heavy pages often lack proper alt text",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Restaurant",
    slug: "restaurant",
    painPoint: "Online menus and reservation systems commonly fail accessibility standards",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Hotel",
    slug: "hotel",
    painPoint: "Booking engines and room selectors are frequent ADA lawsuit triggers",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Ecommerce Store",
    slug: "ecommerce-store",
    painPoint: "Checkout flows and product images are often non-compliant",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Shopify Store",
    slug: "shopify-store",
    painPoint: "Default themes frequently miss ADA and WCAG requirements",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "SaaS Company",
    slug: "saas-company",
    painPoint: "Dashboards and web apps often lack keyboard navigation",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Medical Clinic",
    slug: "medical-clinic",
    painPoint: "Patient portals and intake forms are high-risk ADA targets",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Chiropractor",
    slug: "chiropractor",
    painPoint: "Online booking tools often fail accessibility audits",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Dental Clinic",
    slug: "dental-clinic",
    painPoint: "Insurance and appointment forms are commonly inaccessible",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Fitness Gym",
    slug: "fitness-gym",
    painPoint: "Class schedules and membership signups lack accessibility support",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Nonprofit Organization",
    slug: "nonprofit-organization",
    painPoint: "Donation forms frequently violate accessibility rules",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Educational Institution",
    slug: "educational-institution",
    painPoint: "Online course platforms often lack screen reader support",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Online Course Creator",
    slug: "online-course-creator",
    painPoint: "Video players and lesson navigation are often non-compliant",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Marketing Agency",
    slug: "marketing-agency",
    painPoint: "Portfolio-heavy sites frequently ignore ADA requirements",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Accounting Firm",
    slug: "accounting-firm",
    painPoint: "Client portals often lack accessibility compliance",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Insurance Agency",
    slug: "insurance-agency",
    painPoint: "Quote forms and policy documents are common lawsuit triggers",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Car Dealership",
    slug: "car-dealership",
    painPoint: "Vehicle listings and financing forms often fail WCAG checks",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Property Management Company",
    slug: "property-management-company",
    painPoint: "Tenant portals and application forms are frequent ADA risks",
    lawsuitRisk: "$20,000 - $50,000"
  }
];

export const LOCATIONS: LocationData[] = [
  {
    city: "Los Angeles",
    state: "CA",
    slug: "los-angeles-ca"
  },
  {
    city: "New York",
    state: "NY",
    slug: "new-york-ny"
  },
  {
    city: "Miami",
    state: "FL",
    slug: "miami-fl"
  }
];
