import Link from 'next/link'
import errorCodes from '@/data/error-codes/database.json'

export const metadata = {
  title: 'Search Error Codes - ErrorCodeHub',
  description: 'Search our database of appliance and industrial error codes.'
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q?.toLowerCase() || ''
  
  const results = query 
    ? errorCodes.errorCodes.filter((item: any) => 
        item.code.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query)
      )
    : []

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '20px', color: 'white' }}>
          🔍 Search Results
        </h1>
        {query && (
          <p style={{ color: '#94a3b8', marginTop: '10px' }}>
            Found {results.length} results for "{searchParams.q}"
          </p>
        )}
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* 搜索框 */}
        <form action="/search" method="GET" style={{ marginBottom: '40px' }}>
          <input 
            type="text" 
            name="q"
            defaultValue={searchParams.q || ''}
            placeholder="Search error codes..."
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

        {/* 结果 */}
        {results.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {results.map((item: any) => (
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '600' }}>
                      {item.brand} · {item.category}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white', marginTop: '8px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '6px' }}>
                      {item.description}
                    </p>
                  </div>
                  <span style={{ 
                    background: '#dc2626', 
                    color: 'white', 
                    padding: '8px 16px', 
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    marginLeft: '16px'
                  }}>
                    {item.code}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : query ? (
          <p style={{ textAlign: 'center', color: '#64748b' }}>
            No results found. Try a different search term.
          </p>
        ) : null}
      </main>
    </div>
  )
}
