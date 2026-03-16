import Link from 'next/link'
import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

export async function generateStaticParams() {
  return errorCodes.errorCodes.map((item: any) => ({
    slug: `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = findErrorCode(params.slug)
  if (!item) {
    return { title: 'Error Code Not Found - ErrorCodeHub' }
  }
  
  return {
    title: `${item.brand} ${item.code} Error Code - ${item.name} | ErrorCodeHub`,
    description: `${item.brand} ${item.category} error code ${item.code}: ${item.description}. Causes: ${item.causes?.slice(0, 2).join(', ')}. Solutions: ${item.solutions?.slice(0, 2).join(', ')}. ${item.productInfo?.warranty ? `Warranty: ${item.productInfo.warranty}.` : ''}`,
    keywords: [
      `${item.brand} error code ${item.code}`,
      `${item.brand} ${item.category.toLowerCase()} error`,
      `${item.name}`,
      `${item.category} error codes`,
      `${item.brand} troubleshooting`,
      `${item.code} error`,
      `${item.brand} ${item.category} problems`,
      'error code lookup',
      'appliance repair',
      'troubleshooting guide'
    ].join(', '),
    openGraph: {
      title: `${item.brand} ${item.code} Error Code - ${item.name}`,
      description: `${item.description}. Causes and solutions for ${item.brand} ${item.category}.`,
      type: 'article',
      publishedTime: '2026-03-15',
      modifiedTime: '2026-03-15',
      authors: ['ErrorCodeHub'],
      section: item.category,
      tags: [item.brand, item.category, item.code, 'error code']
    }
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

  const productInfo = item.productInfo || {}
  
  // FAQ Schema for GEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What does ${item.brand} error code ${item.code} mean?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.description
        }
      },
      ...(item.causes || []).slice(0, 3).map((cause: string, idx: number) => ({
        '@type': 'Question',
        name: `What causes ${item.brand} error code ${item.code}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: cause
        }
      })),
      ...(item.solutions || []).slice(0, 3).map((solution: string, idx: number) => ({
        '@type': 'Question',
        name: `How to fix ${item.brand} error code ${item.code}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: solution
        }
      }))
    ]
  }

  // HowTo Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to fix ${item.brand} ${item.code} error`,
    description: `Step by step guide to fix ${item.brand} ${item.category} error code ${item.code}`,
    step: (item.solutions || []).map((solution: string, idx: number) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: `Step ${idx + 1}`,
      text: solution
    })),
    totalTime: item.estimatedTime || 'PT30M',
    tool: item.productInfo?.features ? item.productInfo.features.slice(0, 3) : []
  }

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${item.brand} ${item.category}`,
    brand: {
      '@type': 'Brand',
      name: item.brand
    },
    manufacturer: productInfo.manufacturer || item.brand,
    model: item.model,
    category: item.category,
    description: `${item.brand} ${item.category} - ${item.description}`,
    warranty: productInfo.warranty ? {
      '@type': 'WarrantyPromise',
      warrantyDuration: productInfo.warranty
    } : undefined,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Error Code', value: item.code },
      { '@type': 'PropertyValue', name: 'Category', value: item.category },
      { '@type': 'PropertyValue', name: 'Difficulty', value: item.difficulty }
    ].concat(productInfo.capacity ? [{ '@type': 'PropertyValue', name: 'Capacity', value: productInfo.capacity }] : [])
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
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
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>📝 Description</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{item.description}</p>
        </div>

        {/* Product Info */}
        {productInfo.manufacturer && (
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '16px' }}>🏭 Product Information</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {productInfo.manufacturer && (
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Manufacturer</p>
                  <p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.manufacturer}</p>
                </div>
              )}
              {productInfo.yearIntroduced && (
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Year Introduced</p>
                  <p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.yearIntroduced}</p>
                </div>
              )}
              {productInfo.warranty && (
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Warranty</p>
                  <p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.warranty}</p>
                </div>
              )}
              {productInfo.capacity && (
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Capacity</p>
                  <p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.capacity}</p>
                </div>
              )}
              {productInfo.dimensions && (
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Dimensions</p>
                  <p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.dimensions}</p>
                </div>
              )}
              {productInfo.voltage && (
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Voltage</p>
                  <p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.voltage}</p>
                </div>
              )}
            </div>

            {item.models && (
              <div style={{ marginTop: '16px' }}>
                <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '8px' }}>Compatible Models</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.models.slice(0, 10).map((model: string, idx: number) => (
                    <span key={idx} style={{ 
                      background: '#334155', 
                      color: '#e2e8f0', 
                      padding: '4px 10px', 
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {productInfo.features && (
              <div style={{ marginTop: '16px' }}>
                <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '8px' }}>Key Features</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {productInfo.features.map((feature: string, idx: number) => (
                    <span key={idx} style={{ 
                      background: '#22c55e20', 
                      color: '#22c55e', 
                      padding: '4px 10px', 
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      border: '1px solid #22c55e30'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Common Issues */}
        {productInfo.commonIssues && (
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>⚠️ Common Issues</h2>
            <ul style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
              {productInfo.commonIssues.map((issue: string, idx: number) => (
                <li key={idx}>{issue}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Spare Parts */}
        {productInfo.partNumbers && (
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>🔧 Spare Parts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {Object.entries(productInfo.partNumbers).map(([part, number]: [string, any], idx: number) => (
                <div key={idx} style={{ background: '#0f172a', padding: '12px', borderRadius: '8px' }}>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'capitalize' }}>{part.replace(/([A-Z])/g, ' $1')}</p>
                  <p style={{ color: '#fbbf24', fontSize: '0.9rem', fontFamily: 'monospace' }}>{number}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
    </>
  )
}
