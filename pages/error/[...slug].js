import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'

const ERROR_SRC_DIR = path.join(process.cwd(), 'src/app/error')

// Brand/category display names
const BRAND_NAMES = {
  kitchenaid: 'KitchenAid', whirlpool: 'Whirlpool', lg: 'LG', samsung: 'Samsung',
  bosch: 'Bosch', ge: 'GE', maytag: 'Maytag', amana: 'Amana', frigidaire: 'Frigidaire',
  electrolux: 'Electrolux', siemens: 'Siemens', miele: 'Miele', haier: 'Haier',
  hisense: 'Hisense', hitachi: 'Hitachi', panasonic: 'Panasonic', sharp: 'Sharp',
  toshiba: 'Toshiba', aeg: 'AEG', zanussi: 'Zanussi', kenmore: 'Kenmore', daewoo: 'Daewoo',
}
const CATEGORY_NAMES = {
  dishwasher: 'Dishwasher', dryer: 'Dryer', microwave: 'Microwave',
  oven: 'Oven', refrigerator: 'Refrigerator', washer: 'Washer',
}

const titles = {
  b: 'brand',
  cat: 'category',
}

export default function ErrorCodePage({ brand, category, code }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  const brandName = BRAND_NAMES[brand] || brand
  const categoryName = CATEGORY_NAMES[category] || category
  const title = `${brandName} ${categoryName} Error Code ${code} - Fix Guide`
  const description = `Troubleshooting guide for ${brandName} ${categoryName} error code ${code}. Step-by-step causes, solutions, and FAQs.`

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://uscomplianceguard.com/error/${brand}/${category}/${code}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </head>

      <nav style={{ marginBottom: '16px', fontSize: '0.9rem' }}>
        <a href="/" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</a>
        <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
        <a href={`/brand/${brand}`} style={{ color: '#6366f1', textDecoration: 'none' }}>{brandName}</a>
        <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
        <span style={{ color: '#64748b' }}>{categoryName}</span>
        <span style={{ color: '#64748b', margin: '0 8px' }}>›</span>
        <span style={{ color: '#64748b' }}>{code}</span>
      </nav>

      <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#1e293b' }}>
        {brandName} {categoryName} Error Code {code}
      </h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        Error code {code} troubleshooting and repair guide
      </p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#334155' }}>What It Means</h2>
        <p>Error code {code} on your {brandName} {categoryName} indicates a fault in the appliance system. The exact meaning depends on your specific model year and configuration.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#334155' }}>How to Fix</h2>
        <ol style={{ paddingLeft: '24px', lineHeight: '2', color: '#334155' }}>
          <li>Unplug the appliance and wait 2 minutes</li>
          <li>Check water connections and inlet hoses (for dishwashers/washers)</li>
          <li>Clean filters and drainage areas</li>
          <li>Restart the appliance</li>
          <li>Call a professional if the error persists</li>
        </ol>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#334155' }}>Common Causes</h2>
        <ul style={{ paddingLeft: '24px', lineHeight: '2', color: '#334155' }}>
          <li>Clogged filters or drain pump</li>
          <li>Faulty sensors or wiring</li>
          <li>Water supply issues</li>
          <li>Control board malfunction</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#334155' }}>Need Professional Help?</h2>
        <p>If the error persists after following these steps, contact a certified {brandName} appliance technician.</p>
      </section>
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
  return {
    props: { brand, category, code },
  }
}
