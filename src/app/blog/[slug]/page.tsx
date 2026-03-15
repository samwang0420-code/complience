import Link from 'next/link'
import errorCodes from '@/data/error-codes/database.json'

export async function generateStaticParams() {
  return errorCodes.errorCodes.map((item: any) => ({
    slug: `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = findErrorCode(params.slug)
  if (!item) {
    return { title: 'Error Code Not Found - ErrorCodeHub' }
  }
  return {
    title: `${item.brand} ${item.code} - ${item.name} - ErrorCodeHub`,
    description: item.description
  }
}

function findErrorCode(slug: string) {
  return errorCodes.errorCodes.find((item: any) => 
    `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}` === slug
  )
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const item = findErrorCode(params.slug)

  if (!item) {
    return (
      <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '2rem' }}>404 - Error Code Not Found</h1>
        <Link href="/" style={{ color: '#6366f1', marginTop: '20px', display: 'block' }}>
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      <header style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '30px' }}>
          <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '600' }}>
            {item.brand} · {item.category}
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginTop: '10px' }}>
            {item.name}
          </h1>
          <span style={{ 
            display: 'inline-block',
            background: '#dc2626', 
            color: 'white', 
            padding: '8px 20px', 
            borderRadius: '8px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: '16px'
          }}>
            {item.code}
          </span>
        </div>

        {/* Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '30px' }}>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px' }}>Difficulty</p>
            <p style={{ color: 'white', fontWeight: '600' }}>{item.difficulty}</p>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px' }}>Est. Time</p>
            <p style={{ color: 'white', fontWeight: '600' }}>{item.estimatedTime}</p>
          </div>
        </div>

        {/* Description */}
        <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>Description</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{item.description}</p>
        </div>

        {/* Causes */}
        <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>🔧 Common Causes</h2>
          <ul style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
            {item.causes.map((cause: string, idx: number) => (
              <li key={idx}>{cause}</li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>✅ Solutions</h2>
          <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
            {item.solutions.map((solution: string, idx: number) => (
              <li key={idx}>{solution}</li>
            ))}
          </ol>
        </div>

        {/* SEO Keywords */}
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #334155' }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
            Related: {item.brand} error code {item.code}, {item.category} troubleshooting, {item.brand} {item.category} problems
          </p>
        </div>
      </main>
    </div>
  )
}
