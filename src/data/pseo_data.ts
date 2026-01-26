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
    city: "New York",
    state: "NY",
    slug: "new-york-ny"
  },
  {
    city: "Los Angeles",
    state: "CA",
    slug: "los-angeles-ca"
  },
  {
    city: "Chicago",
    state: "IL",
    slug: "chicago-il"
  },
  {
    city: "Houston",
    state: "TX",
    slug: "houston-tx"
  },
  {
    city: "Phoenix",
    state: "AZ",
    slug: "phoenix-az"
  },
  {
    city: "Philadelphia",
    state: "PA",
    slug: "philadelphia-pa"
  },
  {
    city: "San Antonio",
    state: "TX",
    slug: "san-antonio-tx"
  },
  {
    city: "San Diego",
    state: "CA",
    slug: "san-diego-ca"
  },
  {
    city: "Dallas",
    state: "TX",
    slug: "dallas-tx"
  },
  {
    city: "San Jose",
    state: "CA",
    slug: "san-jose-ca"
  },
  {
    city: "Austin",
    state: "TX",
    slug: "austin-tx"
  },
  {
    city: "Seattle",
    state: "WA",
    slug: "seattle-wa"
  },
  {
    city: "San Francisco",
    state: "CA",
    slug: "san-francisco-ca"
  },
  {
    city: "Denver",
    state: "CO",
    slug: "denver-co"
  },
  {
    city: "Boston",
    state: "MA",
    slug: "boston-ma"
  },
  {
    city: "Miami",
    state: "FL",
    slug: "miami-fl"
  },
  {
    city: "Orlando",
    state: "FL",
    slug: "orlando-fl"
  },
  {
    city: "Tampa",
    state: "FL",
    slug: "tampa-fl"
  },
  {
    city: "Atlanta",
    state: "GA",
    slug: "atlanta-ga"
  },
  {
    city: "Charlotte",
    state: "NC",
    slug: "charlotte-nc"
  },
  {
    city: "Raleigh",
    state: "NC",
    slug: "raleigh-nc"
  },
  {
    city: "Durham",
    state: "NC",
    slug: "durham-nc"
  },
  {
    city: "Nashville",
    state: "TN",
    slug: "nashville-tn"
  },
  {
    city: "Memphis",
    state: "TN",
    slug: "memphis-tn"
  },
  {
    city: "Las Vegas",
    state: "NV",
    slug: "las-vegas-nv"
  },
  {
    city: "Reno",
    state: "NV",
    slug: "reno-nv"
  },
  {
    city: "Portland",
    state: "OR",
    slug: "portland-or"
  },
  {
    city: "Eugene",
    state: "OR",
    slug: "eugene-or"
  },
  {
    city: "Salem",
    state: "OR",
    slug: "salem-or"
  },
  {
    city: "Boise",
    state: "ID",
    slug: "boise-id"
  },
  {
    city: "Salt Lake City",
    state: "UT",
    slug: "salt-lake-city-ut"
  },
  {
    city: "Provo",
    state: "UT",
    slug: "provo-ut"
  },
  {
    city: "Orem",
    state: "UT",
    slug: "orem-ut"
  },
  {
    city: "Scottsdale",
    state: "AZ",
    slug: "scottsdale-az"
  },
  {
    city: "Tempe",
    state: "AZ",
    slug: "tempe-az"
  },
  {
    city: "Mesa",
    state: "AZ",
    slug: "mesa-az"
  },
  {
    city: "Irvine",
    state: "CA",
    slug: "irvine-ca"
  },
  {
    city: "Anaheim",
    state: "CA",
    slug: "anaheim-ca"
  },
  {
    city: "Santa Ana",
    state: "CA",
    slug: "santa-ana-ca"
  },
  {
    city: "Pasadena",
    state: "CA",
    slug: "pasadena-ca"
  },
  {
    city: "Glendale",
    state: "CA",
    slug: "glendale-ca"
  },
  {
    city: "Burbank",
    state: "CA",
    slug: "burbank-ca"
  },
  {
    city: "Berkeley",
    state: "CA",
    slug: "berkeley-ca"
  },
  {
    city: "Oakland",
    state: "CA",
    slug: "oakland-ca"
  },
  {
    city: "Palo Alto",
    state: "CA",
    slug: "palo-alto-ca"
  },
  {
    city: "Mountain View",
    state: "CA",
    slug: "mountain-view-ca"
  },
  {
    city: "Sunnyvale",
    state: "CA",
    slug: "sunnyvale-ca"
  },
  {
    city: "Cupertino",
    state: "CA",
    slug: "cupertino-ca"
  }
];
