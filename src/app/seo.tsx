import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

// 动态生成首页 SEO
export const metadata: Metadata = {
  title: 'ErrorCodeHub - Appliance & Industrial Error Code Database',
  description: 'Search 1000+ error codes for appliances, HVAC, PLC, CNC & robotics. Free troubleshooting guides, causes, solutions, and spare parts. Updated 2026.',
  keywords: [
    'error code',
    'error codes database',
    'appliance error codes',
    'washer error codes',
    'dryer error codes',
    'refrigerator error codes',
    'HVAC error codes',
    'PLC error codes',
    'CNC error codes',
    'industrial error codes',
    'troubleshooting',
    'error code lookup',
    'appliance repair',
    'error code search',
    'Whirlpool error codes',
    'LG error codes',
    'Samsung error codes',
    'Carrier error codes',
    'Siemens error codes',
    'error code meaning'
  ].join(', '),
  authors: [{ name: 'ErrorCodeHub' }],
  creator: 'ErrorCodeHub',
  publisher: 'ErrorCodeHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uscomplianceguard.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uscomplianceguard.com',
    siteName: 'ErrorCodeHub',
    title: 'ErrorCodeHub - Appliance & Industrial Error Code Database',
    description: 'Search 1000+ error codes for appliances, HVAC, PLC, CNC & robotics. Free troubleshooting guides, causes, solutions, and spare parts.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ErrorCodeHub - Error Code Database'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ErrorCodeHub - Appliance & Industrial Error Code Database',
    description: 'Search 1000+ error codes for appliances, HVAC, PLC, CNC & robotics. Free troubleshooting guides.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://uscomplianceguard.com',
    languages: {
      'en-US': 'https://uscomplianceguard.com',
    },
  },
}

// 面包屑 Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://uscomplianceguard.com/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Error Codes',
      item: 'https://uscomplianceguard.com/'
    }
  ]
}

// 网站信息 Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ErrorCodeHub',
  url: 'https://uscomplianceguard.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://uscomplianceguard.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  description: 'Free error code database for appliances, HVAC, PLC, CNC & robotics'
}

// 组织 Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ErrorCodeHub',
  url: 'https://uscomplianceguard.com',
  description: 'Free error code database for troubleshooting appliances and industrial equipment',
  sameAs: []
}

export default function Home() {
  return null
}
