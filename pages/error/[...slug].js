import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'

const ERROR_SRC_DIR = path.join(process.cwd(), 'src/app/error')

export default function ErrorCodePage({ brand, category, code, content }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ marginBottom: '8px', color: '#6366f1', fontSize: '0.9rem' }}>
        {brand} › {category}
      </div>
      <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#1e293b' }}>
        {brand} {category} Error Code {code}
      </h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        Error code {code} troubleshooting and repair guide
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export async function getStaticPaths() {
  const brands = fs.readdirSync(ERROR_SRC_DIR).filter(f =>
    fs.statSync(path.join(ERROR_SRC_DIR, f)).isDirectory()
  )

  const categories = ['dishwasher', 'dryer', 'microwave', 'oven', 'refrigerator', 'washer']
  const paths = []

  brands.forEach(brand => {
    categories.forEach(category => {
      const catDir = path.join(ERROR_SRC_DIR, brand, category)
      if (!fs.existsSync(catDir)) return

      const codes = fs.readdirSync(catDir).filter(f =>
        fs.statSync(path.join(catDir, f)).isDirectory()
      )

      codes.forEach(code => {
        paths.push({ params: { slug: [brand, category, code] } })
      })
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const [brand, category, code] = params.slug
  const filePath = path.join(ERROR_SRC_DIR, brand, category, code, 'page.tsx')

  let content = '<p>Content not available.</p>'

  if (fs.existsSync(filePath)) {
    const rawContent = fs.readFileSync(filePath, 'utf8')

    // Extract JSX between return( and final )
    const returnMatch = rawContent.match(/return\s*\(\s*([\s\S]*?)\s*\)(?:\s*)\)/)
    if (returnMatch) {
      let html = returnMatch[1]
      // Strip JSX interpolations and template literal garbage like "+ titles[x] +"
      html = html.replace(/\{\+\s*[^}]*\}?/g, ' ')
      html = html.replace(/\{\s*[^}]+\}/g, '')
      html = html.replace(/\+\s*"[^"]*"\s*\+/g, ' ')
      // Convert basic JSX elements
      html = html.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '<h1>$1</h1>')
      html = html.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '<h2>$1</h2>')
      html = html.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '<p>$1</p>')
      html = html.replace(/<li>([\s\S]*?)<\/li>/gi, '<li>$1</li>')
      html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, '<ul>$1</ul>')
      html = html.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, '<ol>$1</ol>')
      html = html.replace(/<section[^>]*>([\s\S]*?)<\/section>/gi, '<section>$1</section>')
      // Decode HTML entities that may have been double-encoded
      html = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
      content = html
    }
  }

  return {
    props: {
      brand,
      category,
      code,
      content,
    },
  }
}
