import Link from 'next/link'
import errorCodes from '@/data/error-codes/database.json'

export function generateStaticParams() {
  return errorCodes.categories.map((cat: string) => ({
    category: cat.toLowerCase()
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  return {
    title: `${category} Error Codes - ErrorCodeHub`,
    description: `Browse error codes for ${category} appliances and equipment.`
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const items = errorCodes.errorCodes.filter((item: any) => 
    item.category.toLowerCase() === params.category.toLowerCase()
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '20px', color: 'white' }}>
          📂 {categoryName} Error Codes
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '10px' }}>
          {items.length} error codes found
        </p>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {items.map((item: any) => (
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
                  {item.brand}
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
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', background: '#334155', padding: '4px 8px', borderRadius: '4px', color: '#94a3b8' }}>
                  {item.difficulty}
                </span>
                <span style={{ fontSize: '0.75rem', background: '#334155', padding: '4px 8px', borderRadius: '4px', color: '#94a3b8' }}>
                  {item.estimatedTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
