export async function generateStaticParams() {
  return [
    { slug: 'whirlpool-front-load-washer-error-code-f21' },
    { slug: 'lg-front-load-washer-error-code-pe' },
    { slug: 'samsung-refrigerator-error-code-22e' },
    { slug: 'ge-dishwasher-error-code-h20' },
  ]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: '40px', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      <h1>Error Code Guide</h1>
      <p>Code: {params.slug}</p>
    </div>
  )
}
