import Link from 'next/link'
import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

export const metadata: Metadata = {
  title: 'ErrorCodeHub - ${errorCodes.errorCodes.length.toLocaleString()} Error Codes | Appliances, Cars & EVs',
  description: 'Search ${errorCodes.errorCodes.length.toLocaleString()}+ error codes for washers, dryers, dishwashers, refrigerators, ovens, cars & EVs. Detailed causes, solutions & FAQs. Covers Whirlpool, LG, Samsung, Toyota, Ford, Tesla, BYD.',
  keywords: ['error codes', 'error code database', 'appliance repair codes', 'washer error codes', 'dryer error codes', 'dishwasher error codes', 'refrigerator error codes', 'OBD codes', 'car diagnostic codes', 'P0300', 'P0420', 'EV error codes', 'F21', 'troubleshooting', 'error code lookup'],
  authors: [{ name: 'ErrorCodeHub' }],
  openGraph: {
    title: 'ErrorCodeHub - Largest Error Code Database',
    description: '${errorCodes.errorCodes.length.toLocaleString()} error codes for appliances, automotive & electric vehicles with detailed solutions',
    type: 'website',
    locale: 'en_US',
    siteName: 'ErrorCodeHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ErrorCodeHub - ${errorCodes.errorCodes.length.toLocaleString()} Error Codes',
    description: 'Search error codes for appliances, cars & EVs. Detailed solutions.',
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
  }
}

export default function Home() {
  const displayCodes = errorCodes.errorCodes.slice(0, 12)
  const categories = [...new Set(errorCodes.errorCodes.map((item: any) => item.category))]
  const brands = [...new Set(errorCodes.errorCodes.map((item: any) => item.brand))]

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      <header style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '16px' }}>
          🔧 {errorCodes.errorCodes.length.toLocaleString()}+ Error Codes • Updated Daily
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
          Fix [Error Code]: Proven Repair Solutions
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.7' }}>
          Enter error code, get instant fix.<br/>
          <span style={{ color: '#6366f1' }}>Data from official manuals + certified technicians</span>
        </p>
        {/* Navigation Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
          <Link href="/faq" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>📖 FAQ</Link>
          <Link href="/about" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>ℹ️ About</Link>
          <Link href="/methodology" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>📋 Methodology</Link>
        </div>
        
        <form action="/search" method="GET" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input 
            type="text" 
            name="q"
            placeholder="Enter error code (e.g., F21, P0300, P0AA6)..." 
            aria-label="Search error codes"
            style={{
              width: '100%',
              padding: '16px 24px',
              fontSize: '1rem',
              borderRadius: '12px',
              border: '2px solid #334155',
              background: '#1e293b',
              color: 'white',
              outline: 'none'
            }}
          />
        </form>
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '16px' }}>
          📊 <strong>{errorCodes.errorCodes.length.toLocaleString()}</strong> error codes in database
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          <span style={{ background: '#059669', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', color: 'white' }}>✓ {errorCodes.brands.length}+ Brands</span>
          <span style={{ background: '#059669', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', color: 'white' }}>✓ {errorCodes.categories.length}+ Categories</span>
          <span style={{ background: '#059669', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', color: 'white' }}>✓ 5,000+ FAQs</span>
          <span style={{ background: '#059669', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', color: 'white' }}>✓ Source Verified</span>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: 'white' }}>
          🏭 Browse by Brand
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px', marginBottom: '50px' }}>
          {brands.slice(0, 20).map((brand: any) => {
            const count = errorCodes.errorCodes.filter((item: any) => item.brand === brand).length
            return (
              <Link 
                key={brand}
                href={`/brand/${brand.toLowerCase().replace(/ /g, '-')}`}
                style={{ 
                  padding: '16px', 
                  background: '#1e293b', 
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontWeight: '600' }}>{brand}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>{count} codes</div>
              </Link>
            )
          })}
        </div>

        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: 'white' }}>
          📂 Browse by Category
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '50px' }}>
          {categories.map((cat: any) => {
            const count = errorCodes.errorCodes.filter((item: any) => item.category === cat).length
            return (
              <Link 
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                style={{ 
                  padding: '12px 20px', 
                  background: '#1e293b', 
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                {cat} ({count})
              </Link>
            )
          })}
        </div>

        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: 'white' }}>
          📋 Latest Error Codes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {displayCodes.map((item: any) => (
            <Link 
              key={item.id}
              href={`/blog/${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`}
              style={{ 
                display: 'block', 
                padding: '20px', 
                background: '#1e293b', 
                borderRadius: '12px',
                border: '1px solid #334155',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '600' }}>
                  {item.brand} · {item.category}
                </span>
                <span style={{ 
                  background: '#dc2626', 
                  color: 'white', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  {item.code}
                </span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #1e293b', color: '#64748b' }}>
        <p>© 2026 ErrorCodeHub. Free error code database.</p>
        
        {/* External Links - SEO Network */}
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #1e293b' }}>
          <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>📌 Our SEO Network:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://getuscompliance.com" target="_blank" rel="noopener" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>getuscompliance.com - US City Data</a>
            <a href="https://uscompliance-team.com" target="_blank" rel="noopener" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>uscompliance-team.com - China Sourcing</a>
            <a href="https://stackmatrices.com" target="_blank" rel="noopener" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>stackmatrices.com - Medical GEO</a>
            <a href="https://jianfacv.com" target="_blank" rel="noopener" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>jianfacv.com - SaaS Reviews</a>
          </div>
        </div>
        
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link href="/privacy" style={{ color: '#6366f1', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/contact" style={{ color: '#6366f1', textDecoration: 'none' }}>Contact</Link>
        </div>
      </footer>
    </div>
  )
}
