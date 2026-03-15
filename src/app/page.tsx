import Link from 'next/link'
import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

export const metadata: Metadata = {
  title: 'ErrorCodeHub - Appliance & Industrial Error Code Database',
  description: 'Search 1000+ error codes for appliances, HVAC, PLC, CNC & robotics. Free troubleshooting guides, causes, solutions, and spare parts. Updated 2026.',
  keywords: [
    'error code', 'error codes database', 'appliance error codes', 'washer error codes',
    'dryer error codes', 'refrigerator error codes', 'HVAC error codes', 'PLC error codes',
    'CNC error codes', 'industrial error codes', 'troubleshooting', 'error code lookup',
    'Whirlpool error codes', 'LG error codes', 'Samsung error codes', 'Carrier error codes',
    'Siemens error codes'
  ].join(', '),
}

export default function Home() {
  const displayCodes = errorCodes.errorCodes.slice(0, 12)
  const categories = [...new Set(errorCodes.errorCodes.map((item: any) => item.category))]
  
  // JSON-LD Structured Data
  const jsonLd = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ minHeight: '100vh', background: '#0f172a' }}>
        {/* Hero */}
        <header style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            🔍 ErrorCodeHub
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 30px' }}>
            Search error codes for appliances, industrial equipment, HVAC, PLC, CNC & robotics.
            <br />Instant troubleshooting guides.
          </p>
        
        {/* 搜索框 */}
        <form action="/search" method="GET" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input 
            type="text" 
            name="q"
            placeholder="Search error codes (e.g., F21, E1, SF)..." 
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
          📊 {errorCodes.errorCodes.length} error codes in database
        </p>
      </header>

      {/* 分类 */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
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

        {/* 错误代码列表 */}
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

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #1e293b', color: '#64748b' }}>
        <p>© 2026 ErrorCodeHub. Free error code database.</p>
      </footer>
    </>
  )
}
