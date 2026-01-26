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
    painPoint: "Dental websites often fail screen-reader and contrast tests.",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Law Firm",
    slug: "law-firm",
    painPoint: "Client intake forms and legal PDF resources are frequently inaccessible to screen readers.",
    lawsuitRisk: "$20,000 - $50,000"
  },
  {
    name: "Restaurant",
    slug: "restaurant",
    painPoint: "Online menus (often PDFs) and reservation widgets are notoriously difficult for visually impaired users to navigate.",
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
