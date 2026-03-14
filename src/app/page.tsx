import Link from 'next/link'

export const metadata = {
  title: 'US Compliance Guard - Appliance Error Codes',
  description: 'Complete guide to appliance error codes and troubleshooting'
}

export default function Home() {
  const errorCodes = [
    { brand: 'Whirlpool', code: 'F21', name: 'Drain Timeout Error', slug: 'whirlpool-front-load-washer-error-code-f21' },
    { brand: 'LG', code: 'PE', name: 'Pressure Sensor Error', slug: 'lg-front-load-washer-error-code-pe' },
    { brand: 'Samsung', code: '22E', name: 'Refrigerator Error', slug: 'samsung-refrigerator-error-code-22e' },
    { brand: 'GE', code: 'H20', name: 'Water Valve Error', slug: 'ge-dishwasher-error-code-h20' },
  ]

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', background: '#0f172a' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
          US Compliance Guard
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8' }}>
          Appliance Error Code Database
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '24px', color: 'white' }}>
          Error Codes by Brand
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {errorCodes.map((item) => (
            <Link 
              key={item.slug}
              href={`/blog/${item.slug}`}
              style={{ 
                display: 'block', 
                padding: '24px', 
                background: '#1e293b', 
                borderRadius: '12px',
                border: '1px solid #334155',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.875rem', color: '#6366f1', fontWeight: '600' }}>
                  {item.brand}
                </span>
                <span style={{ 
                  background: '#dc2626', 
                  color: 'white', 
                  padding: '4px 12px', 
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}>
                  {item.code}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white' }}>
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
