#!/usr/bin/env node

/**
 * Google Indexing 状态检查
 * 检查哪些 URL 已经被 Google 索引
 */

const { google } = require('googleapis')
const fs = require('fs')

// 读取凭证
let credentials
try {
  credentials = require('../google-service-account.json')
} catch(e) {
  console.log('❌ 没有找到 Google 凭证')
  process.exit(1)
}

const SERVICE_ACCOUNT_EMAIL = credentials.client_email
const PRIVATE_KEY = credentials.private_key

// 读取数据库
const db = JSON.parse(fs.readFileSync('./src/data/error-codes/database.json', 'utf8'))

async function checkUrlStatus(url) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: SERVICE_ACCOUNT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/indexing']
    })

    const authClient = await auth.getClient()
    const indexing = google.indexing({ version: 'v3', auth: authClient })
    
    const response = await indexing.urlNotifications.getMetadata({
      url: url
    })
    
    return {
      url,
      indexed: true,
      latestUpdate: response.data.latestUpdate?.notifyTime,
      latestRemove: response.data.latestRemove?.notifyTime
    }
  } catch (error) {
    return {
      url,
      indexed: false,
      error: error.message
    }
  }
}

async function main() {
  console.log('🔍 检查 Google 索引状态...\n')
  
  const baseUrl = 'https://uscomplianceguard.com'
  
  // 检查基础页面
  const basePages = [
    '/',
    '/search',
    '/privacy',
    '/contact',
    '/category/washer'
  ]
  
  console.log('📄 基础页面:')
  for (const page of basePages) {
    const result = await checkUrlStatus(baseUrl + page)
    if (result.indexed) {
      console.log(`  ✅ ${page}`)
    } else if (result.error && result.error.includes('404')) {
      console.log(`  ❌ ${page} - 未找到`)
    } else {
      console.log(`  ⏳ ${page} - 未索引`)
    }
  }
  
  // 抽样检查错误代码页面
  console.log('\n📊 错误代码页面抽样 (10个):')
  const sampleCodes = db.errorCodes.slice(0, 10)
  
  let indexed = 0
  let notIndexed = 0
  
  for (const item of sampleCodes) {
    const slug = `${item.brand.toLowerCase()}-${item.category.toLowerCase()}-${item.code.toLowerCase()}`
    const url = `${baseUrl}/blog/${slug}`
    const result = await checkUrlStatus(url)
    
    if (result.indexed) {
      console.log(`  ✅ ${item.code}`)
      indexed++
    } else {
      console.log(`  ⏳ ${item.code}`)
      notIndexed++
    }
  }
  
  console.log('\n📈 统计:')
  console.log(`   已索引: ${indexed}/10`)
  console.log(`   未索引: ${notIndexed}/10`)
  console.log(`   总代码: ${db.errorCodes.length}`)
  
  console.log('\n💡 提示:')
  console.log('   - 新页面需要时间被 Google 爬取')
  console.log('   - 使用 Indexing API 可以加速索引')
  console.log('   - 搜索 "site:uscomplianceguard.com" 查看实际收录')
}

main().catch(console.error)
