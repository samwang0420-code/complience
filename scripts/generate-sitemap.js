#!/usr/bin/env node

/**
 * 生成完整Sitemap - 包含所有错误代码页面
 */

const fs = require('fs')
const path = require('path')

const db = JSON.parse(fs.readFileSync('./src/data/error-codes/database.json', 'utf8'))

const BASE_URL = 'https://uscomplianceguard.com'

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

// 首页
xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>2026-03-17</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`

// 搜索页
xml += `  <url>
    <loc>${BASE_URL}/search</loc>
    <lastmod>2026-03-17</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`

// 分类页
const categories = [...new Set(db.errorCodes.map(c => c.category))]
categories.forEach(cat => {
  xml += `  <url>
    <loc>${BASE_URL}/category/${cat.toLowerCase().replace(/ /g, '-')}</loc>
    <lastmod>2026-03-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`
})

// 品牌页
const brands = [...new Set(db.errorCodes.map(c => c.brand))]
brands.forEach(brand => {
  xml += `  <url>
    <loc>${BASE_URL}/brand/${brand.toLowerCase().replace(/ /g, '-')}</loc>
    <lastmod>2026-03-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
})

// 代码页 - 按代码去重,限制数量
const uniqueCodes = [...new Set(db.errorCodes.map(c => c.code))].slice(0, 1000)
uniqueCodes.forEach(code => {
  xml += `  <url>
    <loc>${BASE_URL}/code/${encodeURIComponent(code)}</loc>
    <lastmod>2026-03-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`
})

// 品牌+代码组合 (热门)
const popularCombos = [
  { brand: 'Whirlpool', code: 'F21' },
  { brand: 'LG', code: 'dE' },
  { brand: 'Samsung', code: 'nd' },
  { brand: 'Toyota', code: 'P0300' },
  { brand: 'Honda', code: 'P0420' },
  { brand: 'Ford', code: 'P0171' },
  { brand: 'Tesla', code: 'P0AA6' },
  { brand: 'BYD', code: 'P0A90' }
]

popularCombos.forEach(({ brand, code }) => {
  xml += `  <url>
    <loc>${BASE_URL}/search?brand=${brand}&amp;code=${code}</loc>
    <lastmod>2026-03-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
})

xml += `</urlset>`

fs.writeFileSync('./public/sitemap.xml', xml)

console.log(`✅ Sitemap generated`)
console.log(`   - ${categories.length} categories`)
console.log(`   - ${brands.length} brands`)
console.log(`   - ${uniqueCodes.length} error codes`)
console.log(`   - ${popularCombos.length} popular combos`)
