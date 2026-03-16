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
    description: `${item.brand} ${item.category} error code ${item.code}: ${item.description}. Causes: ${item.causes?.slice(0, 2).join(', ')}. Solutions: ${item.solutions?.slice(0, 2).join(', ')}. Free troubleshooting guide.`,
    keywords: [
      `${item.brand} error code ${item.code}`,
      `${item.brand} ${item.category.toLowerCase()} error`,
      `${item.name}`,
      `${item.category} error codes`,
      `${item.brand} troubleshooting`,
      `${item.code} error meaning`,
      'error code lookup',
      'appliance repair',
      'troubleshooting guide'
    ].join(', '),
    openGraph: {
      title: `${item.brand} ${item.code} Error Code - ${item.name}`,
      description: item.description,
      type: 'article',
    }
  }
}

function findErrorCode(slug: string) {
  return errorCodes.errorCodes.find((item: any) => 
    `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}` === slug
  )
}

function getRelatedCodes(item: any, limit = 8) {
  const related: any[] = []
  const sameBrand = errorCodes.errorCodes.filter((c: any) => c.brand === item.brand && c.id !== item.id).slice(0, 4)
  related.push(...sameBrand)
  const sameCategory = errorCodes.errorCodes.filter((c: any) => c.category === item.category && c.id !== item.id && !related.find(r => r.id === c.id)).slice(0, 4)
  related.push(...sameCategory)
  return related.slice(0, limit)
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const item = findErrorCode(params.slug)

  if (!item) {
    return (
      <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '2rem' }}>404 - Error Code Not Found</h1>
        <Link href="/" style={{ color: '#6366f1', marginTop: '20px', display: 'block' }}>← Back to Home</Link>
      </div>
    )
  }

  const productInfo = item.productInfo || {}
  const relatedCodes = getRelatedCodes(item)
  const baseUrl = 'https://uscomplianceguard.com'

  // GEO 增强结构化数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${item.brand} ${item.code} Error Code - ${item.name}`,
    description: item.description,
    about: {
      '@type': 'Thing',
      name: `${item.brand} ${item.category}`,
      description: `${item.category} equipment by ${item.brand}`
    },
    articleSection: item.category,
    keywords: `${item.brand}, ${item.code}, ${item.category}, error code, troubleshooting`,
    difficultyLevel: item.difficulty,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      minValue: 0,
      maxValue: 500
    },
    // FAQ for AI
    mainEntity: {
      '@type': 'FAQPage',
      about: {
        '@type': 'Thing',
        name: `${item.brand} ${item.code}`
      },
      mainEntity: [
        {
          '@type': 'Question',
          name: `What does ${item.brand} error code ${item.code} mean?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.description
          }
        },
        ...item.causes.slice(0, 3).map((cause: string) => ({
          '@type': 'Question',
          name: `What causes ${item.brand} ${item.code} error?`,
          acceptedAnswer: { '@type': 'Answer', text: cause }
        })),
        ...item.solutions.slice(0, 3).map((solution: string) => ({
          '@type': 'Question',
          name: `How to fix ${item.brand} error code ${item.code}?`,
          acceptedAnswer: { '@type': 'Answer', text: solution }
        }))
      ]
    },
    // HowTo for AI
    step: {
      '@type': 'HowTo',
      name: `How to fix ${item.brand} ${item.code}`,
      step: item.solutions.map((s: string, i: number) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: `Step ${i + 1}`,
        text: s
      }))
    },
    // Product
    about: {
      '@type': 'Product',
      name: `${item.brand} ${item.category}`,
      brand: { '@type': 'Brand', name: item.brand },
      manufacturer: { '@type': 'Organization', name: productInfo.manufacturer || item.brand },
      category: item.category,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Error Code', value: item.code },
        { '@type': 'PropertyValue', name: 'Category', value: item.category },
        { '@type': 'PropertyValue', name: 'Difficulty', value: item.difficulty },
        { '@type': 'PropertyValue', name: 'Estimated Time', value: item.estimatedTime }
      ]
    },
    // Breadcrumb
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: item.brand, item: `${baseUrl}/brand/${item.brand.toLowerCase().replace(/ /g, '-')}` },
        { '@type': 'ListItem', position: 3, name: item.category, item: `${baseUrl}/category/${item.category.toLowerCase()}` },
        { '@type': 'ListItem', position: 4, name: item.code }
      ]
    },
    // SameAs - 外部链接
    sameAs: [
      `${baseUrl}/brand/${item.brand.toLowerCase().replace(/ /g, '-')}`,
      `${baseUrl}/category/${item.category.toLowerCase()}`
    ],
    // Q&A for AI
    question: item.causes.map((cause: string) => ({
      '@type': 'Question',
      name: cause,
      acceptedAnswer: { '@type': 'Answer', text: 'This is a common cause. Check the related components.' }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
        <nav style={{ maxWidth: '900px', margin: '0 auto 20px', fontSize: '0.85rem' }}>
          <Link href="/" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
          <Link href={`/brand/${item.brand.toLowerCase().replace(/ /g, '-')}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{item.brand}</Link>
          <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
          <Link href={`/category/${item.category.toLowerCase()}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{item.category}</Link>
          <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
          <span style={{ color: '#e2e8f0' }}>{item.code}</span>
        </nav>

        <header style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
          <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</Link>
        </header>

        <main style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '30px' }}>
            <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '600' }}>
              <Link href={`/brand/${item.brand.toLowerCase().replace(/ /g, '-')}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{item.brand}</Link> 
              {' · '}
              <Link href={`/category/${item.category.toLowerCase()}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{item.category}</Link>
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginTop: '10px' }}>{item.name}</h1>
            <span style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '16px' }}>{item.code}</span>
          </div>

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

          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>📝 Description</h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{item.description}</p>
          </div>

          {productInfo.manufacturer && (
            <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
              <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '16px' }}>🏭 Product Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {productInfo.manufacturer && <div><p style={{ color: '#64748b', fontSize: '0.8rem' }}>Manufacturer</p><p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.manufacturer}</p></div>}
                {productInfo.yearIntroduced && <div><p style={{ color: '#64748b', fontSize: '0.8rem' }}>Year</p><p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.yearIntroduced}</p></div>}
                {productInfo.warranty && <div><p style={{ color: '#64748b', fontSize: '0.8rem' }}>Warranty</p><p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.warranty}</p></div>}
                {productInfo.voltage && <div><p style={{ color: '#64748b', fontSize: '0.8rem' }}>Voltage</p><p style={{ color: 'white', fontSize: '0.95rem' }}>{productInfo.voltage}</p></div>}
              </div>
            </div>
          )}

          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>🔧 Common Causes</h2>
            <ul style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
              {item.causes.map((cause: string, idx: number) => <li key={idx}>{cause}</li>)}
            </ul>
          </div>

          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>✅ Solutions</h2>
            <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
              {item.solutions.map((solution: string, idx: number) => <li key={idx}>{solution}</li>)}
            </ol>
          </div>

          {relatedCodes.length > 0 && (
            <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
              <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '16px' }}>🔗 Related Error Codes</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                {relatedCodes.map((code: any) => (
                  <Link key={code.id} href={`/blog/${code.brand.toLowerCase()}-${code.category.toLowerCase()}-${code.code.toLowerCase()}`} style={{ display: 'block', padding: '12px', background: '#0f172a', borderRadius: '8px', textDecoration: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#6366f1', fontSize: '0.8rem' }}>{code.brand}</span>
                      <span style={{ background: '#dc2626', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>{code.code}</span>
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', marginTop: '8px' }}>{code.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '16px' }}>📚 Quick Links</h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href={`/brand/${item.brand.toLowerCase().replace(/ /g, '-')}`} style={{ padding: '8px 16px', background: '#334155', borderRadius: '6px', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem' }}>All {item.brand} Codes</Link>
              <Link href={`/category/${item.category.toLowerCase()}`} style={{ padding: '8px 16px', background: '#334155', borderRadius: '6px', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem' }}>All {item.category} Codes</Link>
              <Link href="/" style={{ padding: '8px 16px', background: '#334155', borderRadius: '6px', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem' }}>Browse All Codes</Link>
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #334155' }}>
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Related: {item.brand} error code {item.code}, {item.category} troubleshooting, {item.brand} {item.category} problems</p>
          </div>
        </main>
      </div>
    </>
  )
}
