import Link from 'next/link'
import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

export async function generateStaticParams() {
  return errorCodes.categories.map((cat: string) => ({
    category: cat.toLowerCase()
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const count = errorCodes.errorCodes.filter((item: any) => item.category.toLowerCase() === params.category.toLowerCase()).length
  
  return {
    title: `${category} Error Codes - Complete List (${count} Codes) | ErrorCodeHub`,
    description: `Browse all ${count} ${category} error codes. Find causes, solutions, and troubleshooting guides for ${category} appliances and equipment.`,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const items = errorCodes.errorCodes.filter((item: any) => 
    item.category.toLowerCase() === params.category.toLowerCase()
  )

  // 按品牌分组
  const byBrand: Record<string, any[]> = {}
  items.forEach((item: any) => {
    if (!byBrand[item.brand]) byBrand[item.brand] = []
    byBrand[item.brand].push(item)
  })

  // 获取相关分类
  const relatedCategories = errorCodes.categories
    .filter((c: string) => c.toLowerCase() !== params.category.toLowerCase())
    .slice(0, 5)

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      {/* Breadcrumb */}
      <nav style={{ maxWidth: '1000px', margin: '0 auto 20px', fontSize: '0.85rem' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
        <span style={{ color: '#e2e8f0' }}>{categoryName}</span>
      </nav>

      <header style={{ maxWidth: '1000px', margin: '0 auto 40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '20px', color: 'white' }}>
          {categoryName} Error Codes
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '10px', fontSize: '1.1rem' }}>
          Browse all {items.length} {categoryName} error codes and troubleshooting guides
        </p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {Object.entries(byBrand).map(([brand, codes]) => (
          <div key={brand} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '20px' }}>
              <Link href={`/brand/${brand.toLowerCase().replace(/ /g, '-')}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{brand}</Link> 
              {' '}({(codes as any[]).length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
              {(codes as any[]).slice(0, 20).map((item: any) => (
                <Link 
                  key={item.id}
                  href={`/blog/${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`}
                  style={{ 
                    display: 'block', 
                    padding: '14px', 
                    background: '#1e293b', 
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.model}</span>
                    <span style={{ background: '#dc2626', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem' }}>
                      {item.code}
                    </span>
                  </div>
                  <p style={{ color: '#e2e8f0', marginTop: '8px', fontSize: '0.85rem' }}>{item.name}</p>
                </Link>
              ))}
            </div>
            {(codes as any[]).length > 20 && (
              <p style={{ color: '#64748b', marginTop: '12px' }}>
                <Link href={`/brand/${brand.toLowerCase().replace(/ /g, '-')}`} style={{ color: '#6366f1' }}>View all {(codes as any[]).length} {brand} codes →</Link>
              </p>
            )}
          </div>
        ))}

        {/* Related Categories */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', marginTop: '40px' }}>
          <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px' }}>
            Other Categories
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {relatedCategories.map((cat: string) => (
              <Link 
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                style={{ 
                  padding: '8px 16px', 
                  background: '#0f172a', 
                  borderRadius: '6px',
                  color: '#e2e8f0', 
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', marginTop: '40px' }}>
          <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px' }}>
            About {categoryName} Error Codes
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            {categoryName} error codes provide diagnostic information when appliances or equipment malfunction. 
            Each error code indicates a specific issue that requires attention. Our comprehensive database includes 
            error codes from all major manufacturers for {categoryName.toLowerCase()} products.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', marginTop: '15px' }}>
            Browse our complete list of {categoryName.toLowerCase()} error codes to find the cause and solution 
            for your equipment issues.
          </p>
        </div>
      </main>
    </div>
  )
}
