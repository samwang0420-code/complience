import Link from 'next/link'
import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

export async function generateStaticParams() {
  const brands = [...new Set(errorCodes.errorCodes.map((item: any) => item.brand))]
  return brands.map((brand: any) => ({
    brand: brand.toLowerCase().replace(/ /g, '-')
  }))
}

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const brand = params.brand.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const count = errorCodes.errorCodes.filter((item: any) => item.brand.toLowerCase() === brand.toLowerCase()).length
  
  return {
    title: `${brand} Error Codes - Complete List (${count} Codes) | ErrorCodeHub`,
    description: `Browse all ${count} ${brand} error codes for appliances and equipment. Find causes, solutions, and troubleshooting guides.`,
  }
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = params.brand.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const items = errorCodes.errorCodes.filter((item: any) => item.brand.toLowerCase() === brand.toLowerCase())
  
  // 按分类分组
  const byCategory: Record<string, any[]> = {}
  items.forEach((item: any) => {
    if (!byCategory[item.category]) byCategory[item.category] = []
    byCategory[item.category].push(item)
  })

  // 获取相关品牌
  const allBrands = [...new Set(errorCodes.errorCodes.map((item: any) => item.brand))]
  const relatedBrands = allBrands.filter((b: any) => b.toLowerCase() !== brand.toLowerCase()).slice(0, 5)

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      {/* Breadcrumb */}
      <nav style={{ maxWidth: '1000px', margin: '0 auto 20px', fontSize: '0.85rem' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
        <span style={{ color: '#e2e8f0' }}>{brand}</span>
      </nav>

      <header style={{ maxWidth: '1000px', margin: '0 auto 40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '20px', color: 'white' }}>
          {brand} Error Codes
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '10px', fontSize: '1.1rem' }}>
          Browse all {items.length} {brand} error codes and troubleshooting guides
        </p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {Object.entries(byCategory).map(([category, codes]) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '20px' }}>
              {category} ({codes.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
              {(codes as any[]).slice(0, 30).map((item: any) => (
                <Link 
                  key={item.id}
                  href={`/blog/${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`}
                  style={{ 
                    display: 'block', 
                    padding: '16px', 
                    background: '#1e293b', 
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6366f1' }}>{item.model}</span>
                    <span style={{ background: '#dc2626', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                      {item.code}
                    </span>
                  </div>
                  <p style={{ color: '#e2e8f0', marginTop: '8px', fontSize: '0.9rem' }}>{item.name}</p>
                </Link>
              ))}
            </div>
            {(codes as any[]).length > 30 && (
              <p style={{ color: '#64748b', marginTop: '12px' }}>+ {(codes as any[]).length - 30} more...</p>
            )}
          </div>
        ))}

        {/* Related Brands */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', marginTop: '40px' }}>
          <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px' }}>
            Other Brands
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {relatedBrands.map((b: any) => (
              <Link 
                key={b}
                href={`/brand/${b.toLowerCase().replace(/ /g, '-')}`}
                style={{ 
                  padding: '8px 16px', 
                  background: '#0f172a', 
                  borderRadius: '6px',
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                {b}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', marginTop: '40px' }}>
          <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px' }}>
            About {brand} Error Codes
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            {brand} is a leading manufacturer of appliances and industrial equipment. 
            When your {brand} appliance shows an error code, it indicates a specific issue that needs attention.
            Our comprehensive database includes error codes for all {brand} product categories including washers, dryers, 
            refrigerators, dishwashers, HVAC systems, and more.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', marginTop: '15px' }}>
            Each error code page provides detailed troubleshooting steps, common causes, and recommended solutions 
            to help you fix the issue quickly.
          </p>
        </div>
      </main>
    </div>
  )
}
