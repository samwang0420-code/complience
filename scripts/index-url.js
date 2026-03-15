/**
 * Google Indexing API Integration
 * 用于主动通知 Google 抓取新页面，加快索引速度
 * 
 * 用法:
 * node scripts/index-url.js <url>
 * node scripts/index-url.js batch <file-with-urls.txt>
 */

const { google } = require('googleapis')
const fs = require('fs')
const path = require('path')

// 读取 Service Account 凭证
const credentials = require('../google-service-account.json')

const SERVICE_ACCOUNT_EMAIL = credentials.client_email
const PRIVATE_KEY = credentials.private_key

// 初始化 Indexing API
async function getIndexingClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/indexing'],
  })

  const authClient = await auth.getClient()
  return google.indexing({ version: 'v3', auth: authClient })
}

// 单个 URL 索引
async function publishUrl(url) {
  try {
    const indexing = await getIndexingClient()
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        type: 'URL_UPDATED',
        url: url,
      },
    })
    console.log(`✅ Indexed: ${url}`)
    return response.data
  } catch (error) {
    console.error(`❌ Failed: ${url}`, error.message)
    return null
  }
}

// 批量索引
async function batchPublish(urls) {
  console.log(`📦 Starting batch indexing of ${urls.length} URLs...\n`)
  
  const results = await Promise.allSettled(
    urls.map(url => publishUrl(url))
  )
  
  const success = results.filter(r => r.status === 'fulfilled').length
  const failed = results.filter(r => r.status === 'rejected').length
  
  console.log(`\n📊 Results: ${success} success, ${failed} failed`)
  return results
}

// 从文件读取 URL 列表
function loadUrlsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  return content.split('\n').filter(line => line.trim() && !line.startsWith('#'))
}

// 生成所有页面的 URL 列表
function generateSiteUrls(baseUrl = 'https://uscomplianceguard.com') {
  const urls = []
  
  // 主页
  urls.push(`${baseUrl}/`)
  
  // 搜索页
  urls.push(`${baseUrl}/search`)
  
  // 分类页（需要从数据库读取）
  try {
    const db = require('../src/data/error-codes/database.json')
    const categories = [...new Set(db.errorCodes.map((item) => item.category))]
    
    categories.forEach(cat => {
      urls.push(`${baseUrl}/category/${cat.toLowerCase()}`)
    })
    
    // 生成部分错误代码页（太多会导致超时）
    db.errorCodes.slice(0, 500).forEach((item) => {
      const slug = `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`
      urls.push(`${baseUrl}/blog/${slug}`)
    })
    
    console.log(`📊 Generated ${urls.length} URLs from database`)
  } catch (e) {
    console.log('Using default URLs')
  }
  
  return urls
}

// 主函数
async function main() {
  const args = process.argv.slice(2)
  
  if (args.length === 0) {
    console.log(`
🔧 Google Indexing API Tool

Usage:
  node scripts/index-url.js <url>              Index single URL
  node scripts/index-url.js batch <file>       Index URLs from file
  node scripts/index-url.js generate           Generate & index all site URLs
  
Example:
  node scripts/index-url.js https://example.com/page
  node scripts/index-url.js generate
`)
    return
  }
  
  const command = args[0]
  
  if (command === 'generate') {
    const urls = generateSiteUrls()
    await batchPublish(urls)
  } else if (command === 'batch' && args[1]) {
    const urls = loadUrlsFromFile(args[1])
    await batchPublish(urls)
  } else {
    // 单个 URL
    await publishUrl(command)
  }
}

main().catch(console.error)
