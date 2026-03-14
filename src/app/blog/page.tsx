import Link from 'next/link'

export const metadata = {
  title: 'Appliance Error Codes',
  description: 'Error code database'
}

const posts = [
  { name: 'Whirlpool F21 - Drain Timeout', slug: 'whirlpool-front-load-washer-error-code-f21' },
  { name: 'LG PE - Pressure Sensor', slug: 'lg-front-load-washer-error-code-pe' },
  { name: 'Samsung 22E - Refrigerator', slug: 'samsung-refrigerator-error-code-22e' },
  { name: 'GE H20 - Water Valve', slug: 'ge-dishwasher-error-code-h20' },
]

export default function Blog() {
  return (
    <div style={{ padding: '40px', background: '#0f172a', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '24px' }}>Error Codes</h1>
      <div style={{ display: 'grid', gap: '16px' }}>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ padding: '20px', background: '#1e293b', borderRadius: '8px', textDecoration: 'none', color: 'white' }}>
            <h2>{post.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
