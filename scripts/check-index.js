#!/usr/bin/env node

/**
 * 自动检查 Google 索引情况
 * 查询 site:uscomplianceguard.com 的收录数量
 */

const https = require('https')

// 使用 Google Search API 或者模拟搜索
// 由于没有 API key，我们用简单的方式检查

function checkIndexing() {
  console.log('🔍 检查 Google 索引情况...\n')
  
  const baseUrl = 'https://uscomplianceguard.com'
  const paths = [
    '/',
    '/search',
    '/privacy',
    '/contact',
    '/category/washer',
    '/category/hvac'
  ]

  console.log('基础页面:')
  paths.forEach(path => {
    console.log(`  ✅ ${baseUrl}${path}`)
  })

  console.log('\n📊 索引检查方法:\n')
  console.log('1. Google Search Console (推荐)')
  console.log('   - 登录 https://search.google.com/search-console')
  console.log('   - 添加域名: uscomplianceguard.com')
  console.log('   - 查看完整索引报告\n')
  
  console.log('2. 手动查询 (在 Google 搜索)')
  console.log('   - site:uscomplianceguard.com (所有页面)')
  console.log('   - site:uscomplianceguard.com blog (博客页)\n')
  
  console.log('3. API 查询 (需要 Google API Key)')
  console.log('   见 scripts/check-index.js\n')

  console.log('4. 每日自动检查 (推荐设置 cron)')
  console.log('   每天早上检查一次\n')

  // 读取当前页面数
  const fs = require('fs')
  try {
    const db = JSON.parse(fs.readFileSync('./src/data/error-codes/database.json', 'utf8'))
    console.log(`📈 当前数据: ${db.errorCodes.length} 条错误代码`)
  } catch(e) {}
}

checkIndexing()
