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
    title: `How to Fix ${item.brand} ${item.code} Error - ${item.name} | ErrorCodeHub`,
    description: `Step-by-step guide to fix ${item.brand} ${item.category} error code ${item.code}. ${item.description} Includes causes, symptoms, and detailed solutions.`,
    keywords: [
      `how to fix ${item.brand} ${item.code}`,
      `${item.brand} error code ${item.code}`,
      `${item.code} error fix`,
      `${item.brand} ${item.category.toLowerCase()} troubleshooting`,
      `${item.code} meaning`,
      `${item.brand} ${item.category.toLowerCase()} error`,
      'how to fix appliance error',
      'error code troubleshooting',
      'appliance repair guide'
    ].join(', '),
    openGraph: {
      title: `How to Fix ${item.brand} ${item.code} Error`,
      description: `Complete troubleshooting guide for ${item.brand} ${item.code}. ${item.description}`,
      type: 'article',
      article: {
        publishedTime: '2026-03-16',
        modifiedTime: new Date().toISOString(),
        section: item.category,
        tag: [item.brand, item.code, item.category, 'error code', 'troubleshooting']
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Fix ${item.brand} ${item.code}`,
      description: item.description
    }
  }
}

function findErrorCode(slug: string) {
  return errorCodes.errorCodes.find((item: any) => 
    `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}` === slug
  )
}

function getRelatedCodes(item: any, limit = 6) {
  const related: any[] = []
  const sameBrand = errorCodes.errorCodes.filter((c: any) => c.brand === item.brand && c.id !== item.id).slice(0, 3)
  related.push(...sameBrand)
  const sameCategory = errorCodes.errorCodes.filter((c: any) => c.category === item.category && c.id !== item.id && !related.find(r => r.id === c.id)).slice(0, 3)
  related.push(...sameCategory)
  return related.slice(0, limit)
}

function getDetailedSteps(item: any) {
  const baseSteps = item.solutions || []
  const detailedSteps = []
  
  const explanations: Record<string, { title: string; content: string }> = {
    'Check component connections': {
      title: 'Inspect All Electrical Connections',
      content: `Locate the main control board and check all wire harnesses connected to ${item.brand} ${item.category}. Pull each connector gently to ensure it's fully seated. Look for any signs of corrosion, burn marks, or loose pins. Use a flashlight to examine each connection point carefully.`
    },
    'Inspect wiring harness': {
      title: 'Examine Wiring Harness',
      content: `Trace the wiring harness from the control panel to the ${item.category.toLowerCase()} components. Check for frayed wires, exposed copper, or melted insulation. Pay special attention to areas near heat sources or moving parts.`
    },
    'Test sensors with multimeter': {
      title: 'Test Sensors Using Multimeter',
      content: `Set your multimeter to continuity or resistance mode. Disconnect the sensor and test its resistance. Compare readings to manufacturer specifications. For temperature sensors, resistance should change predictably with temperature.`
    },
    'Replace faulty component': {
      title: 'Replace the Faulty Component',
      content: `After identifying the bad component, order the correct replacement part for your ${item.brand} ${item.model || item.category}. Install carefully, ensuring all connectors are secure. Reconnect power and test the ${item.category.toLowerCase()}.`
    },
    'Reset system to factory defaults': {
      title: 'Perform Factory Reset',
      content: `Unplug the ${item.category.toLowerCase()} for 5-10 minutes to discharge capacitors. This forces the control board to reboot. Some models may require holding a specific button while plugging back in. Check your ${item.brand} manual for model-specific reset procedures.`
    },
    'Update firmware if available': {
      title: 'Check for Firmware Updates',
      content: `Visit the ${item.brand} website and check if firmware updates are available for your ${item.category.toLowerCase()} model. Some modern appliances support USB or Wi-Fi updates that can fix known error codes.`
    }
  }
  
  baseSteps.forEach((step: string, idx: number) => {
    const key = Object.keys(explanations).find(k => step.toLowerCase().includes(k.toLowerCase()))
    const exp = key ? explanations[key] : {
      title: `Step ${idx + 1}: ${step}`,
      content: `${step}. For ${item.brand} ${item.category}, this is a common troubleshooting step. Follow manufacturer guidelines and ensure proper safety precautions.`
    }
    detailedSteps.push({ step: idx + 1, ...exp })
  })
  
  detailedSteps.push({
    step: baseSteps.length + 1,
    title: 'Safety First',
    content: 'Always disconnect power before working on any appliance. If you\'re unsure, consult a professional technician.',
    warning: true
  })
  
  return detailedSteps
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
  const detailedSteps = getDetailedSteps(item)
  const baseUrl = 'https://uscomplianceguard.com'

  // 增强的 GEO Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `How to Fix ${item.brand} ${item.code} Error - Complete Step by Step Guide`,
    description: `Learn how to fix ${item.brand} ${item.category} error code ${item.code}. ${item.description}`,
    image: '/og-image.png',
    datePublished: '2026-03-16',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'ErrorCodeHub',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'ErrorCodeHub',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png'
      }
    },
    about: {
      '@type': 'Thing',
      name: `${item.brand} ${item.category} Error Code ${item.code}`,
      description: item.description
    },
    articleSection: item.category,
    keywords: `${item.brand}, ${item.code}, ${item.category}, error code, troubleshooting, fix, repair`,
    wordCount: 1500,
    timeRequired: item.estimatedTime,
    difficultyLevel: item.difficulty,
    // HowTo for Google SGE
    hasPart: {
      '@type': 'HowTo',
      name: `How to fix ${item.brand} ${item.code} error`,
      description: item.description,
      step: detailedSteps.map((s: any) => ({
        '@type': 'HowToStep',
        position: s.step,
        name: s.title,
        text: s.content,
        url: `${baseUrl}/blog/${params.slug}#step-${s.step}`
      })),
      supply: ['Multimeter', 'Screwdriver', 'Flashlight', 'Replacement parts'],
      tool: ['Multimeter', 'Screwdriver set', 'Flashlight']
    },
    // FAQ for AI Search
    mainEntity: {
      '@type': 'FAQPage',
      about: {
        '@type': 'Thing',
        name: `${item.brand} ${item.code} Error`
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
        ...item.causes.map((cause: string) => ({
          '@type': 'Question',
          name: `What causes ${item.brand} ${item.code} error?`,
          acceptedAnswer: { '@type': 'Answer', text: cause }
        })),
        ...detailedSteps.slice(0, 5).map((s: any) => ({
          '@type': 'Question',
          name: `How to fix ${item.brand} ${item.code} - ${s.title}?`,
          acceptedAnswer: { '@type': 'Answer', text: s.content }
        }))
      ]
    },
    // Breadcrumb
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: `${item.brand} Error Codes`, item: `${baseUrl}/brand/${item.brand.toLowerCase().replace(/ /g, '-')}` },
        { '@type': 'ListItem', position: 3, name: `${item.category} Error Codes`, item: `${baseUrl}/category/${item.category.toLowerCase()}` },
        { '@type': 'ListItem', position: 4, name: `${item.brand} ${item.code}` }
      ]
    }
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

        <main style={{ maxWidth: '900px', margin: '0 auto' }}>
          <header style={{ marginBottom: '30px' }}>
            <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '600' }}>
              <Link href={`/brand/${item.brand.toLowerCase().replace(/ /g, '-')}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{item.brand}</Link> 
              {' · '}
              <Link href={`/category/${item.category.toLowerCase()}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{item.category}</Link>
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginTop: '10px' }}>How to Fix {item.brand} {item.code} Error</h1>
            <span style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '16px' }}>{item.code}</span>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '30px' }}>
            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px' }}>Difficulty</p>
              <p style={{ color: 'white', fontWeight: '600' }}>{item.difficulty}</p>
            </div>
            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px' }}>Est. Time</p>
              <p style={{ color: 'white', fontWeight: '600' }}>{item.estimatedTime}</p>
            </div>
            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px' }}>Cost</p>
              <p style={{ color: 'white', fontWeight: '600' }}>$0 - $200</p>
            </div>
          </div>

          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '12px' }}>🔍 The Problem</h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>{item.description}</p>
            <div style={{ marginTop: '16px', padding: '16px', background: '#0f172a', borderRadius: '8px' }}>
              <p style={{ color: '#fbbf24', fontWeight: '600', marginBottom: '8px' }}>⚠️ Common Symptoms:</p>
              <ul style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                {item.causes.slice(0, 4).map((cause: string, idx: number) => (
                  <li key={idx}>{cause}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '2px solid #6366f1' }}>
            <h2 style={{ color: '#6366f1', fontSize: '1.5rem', marginBottom: '20px' }}>🔧 How to Fix {item.brand} {item.code} - Step by Step</h2>
            
            {detailedSteps.map((s: any, idx: number) => (
              <div key={idx} style={{ 
                marginBottom: '24px', 
                padding: '20px', 
                background: s.warning ? '#fbbf2420' : '#0f172a', 
                borderRadius: '12px',
                borderLeft: s.warning ? '4px solid #fbbf24' : '4px solid #6366f1'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ 
                    background: s.warning ? '#fbbf24' : '#6366f1', 
                    color: s.warning ? '#000' : 'white',
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '12px'
                  }}>
                    {s.warning ? '!' : s.step}
                  </span>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>{s.title}</h3>
                </div>
                <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem' }}>{s.content}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            {productInfo.manufacturer && (
              <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '12px' }}>🏭 Manufacturer</h3>
                <p style={{ color: '#94a3b8' }}>{productInfo.manufacturer}</p>
              </div>
            )}
            {productInfo.warranty && (
              <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '12px' }}>📜 Warranty</h3>
                <p style={{ color: '#94a3b8' }}>{productInfo.warranty}</p>
              </div>
            )}
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
        </main>
      </div>
    </>
  )
}
