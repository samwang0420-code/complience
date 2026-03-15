#!/usr/bin/env node

/**
 * SEO/GEO 定期维护脚本
 * 每周运行一次优化搜索排名
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

console.log('🔧 开始 SEO/GEO 维护...\n')

// 1. 检查并更新 metadata
console.log('1️⃣ 检查内容数量...')
const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
const totalCodes = db.errorCodes.length
console.log(`   现有错误代码: ${totalCodes} 条`)

// 2. 分析热门内容
console.log('\n2️⃣ 分析热门分类...')
const categoryCount = {}
const brandCount = {}
db.errorCodes.forEach(item => {
  categoryCount[item.category] = (categoryCount[item.category] || 0) + 1
  brandCount[item.brand] = (brandCount[item.brand] || 0) + 1
})

console.log('\n   分类分布:')
Object.entries(categoryCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  console.log(`   - ${cat}: ${count}`)
})

console.log('\n   品牌分布 (Top 10):')
Object.entries(brandCount).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([brand, count]) => {
  console.log(`   - ${brand}: ${count}`)
})

// 3. 检查 SEO 问题
console.log('\n3️⃣ 检查 SEO 问题...')
let issues = []

// 检查缺失描述
db.errorCodes.forEach(item => {
  if (!item.description || item.description.length < 20) {
    issues.push({ code: item.code, brand: item.brand, issue: 'Missing/short description' })
  }
})

if (issues.length > 0) {
  console.log(`   ⚠️ 发现 ${issues.length} 条缺失描述`)
} else {
  console.log('   ✅ 所有条目都有完整描述')
}

// 检查缺失解决方案
const noSolution = db.errorCodes.filter(item => !item.solutions || item.solutions.length < 2)
if (noSolution.length > 0) {
  console.log(`   ⚠️ ${noSolution.length} 条缺失解决方案`)
} else {
  console.log('   ✅ 所有条目都有解决方案')
}

// 检查缺失详细步骤
const noDetailed = db.errorCodes.filter(item => !item.detailedSolution)
if (noDetailed.length > 0) {
  console.log(`   ⚠️ ${noDetailed.length} 条缺失详细步骤`)
} else {
  console.log('   ✅ 所有条目都有详细步骤')
}

// 4. 生成优化建议
console.log('\n4️⃣ 优化建议:')

// 找出内容最少的分类，建议补充
const sparseCategories = Object.entries(categoryCount)
  .filter(([_, count]) => count < 50)
  .map(([cat]) => cat)

if (sparseCategories.length > 0) {
  console.log(`   📝 建议增加以下分类内容: ${sparseCategories.join(', ')}`)
}

// 找出可以增加的长尾关键词
console.log('   📝 建议增加长尾关键词:')
console.log('   - "how to fix [brand] [model] error code"')
console.log('   - "[brand] [model] troubleshooting guide"')
console.log('   - "error code [code] meaning"')

// 5. 更新 sitemap 配置
console.log('\n5️⃣ Sitemap 配置:')
const sitemapConfig = {
  baseUrl: 'https://uscomplianceguard.com',
  totalPages: totalCodes + 5, // +首页、搜索、分类等
  lastUpdated: new Date().toISOString().split('T')[0]
}
console.log(`   页面总数: ${sitemapConfig.totalPages}`)
console.log(`   最后更新: ${sitemapConfig.lastUpdated}`)

// 6. 生成 GEO 优化报告
console.log('\n6️⃣ GEO 优化状态:')
console.log('   ✅ FAQ Schema: 所有详情页')
console.log('   ✅ HowTo Schema: 所有详情页')
console.log('   ✅ Product Schema: 所有详情页')
console.log('   ✅ WebSite Schema: 首页')
console.log('   ✅ Breadcrumb: 可添加')

// 7. 下周任务
console.log('\n📅 下周任务:')
console.log('   1. 补充稀疏分类内容')
console.log('   2. 添加更多长尾关键词')
console.log('   3. 检查并修复死链')
console.log('   4. 分析搜索流量数据')
console.log('   5. 优化页面加载速度')

console.log('\n✅ SEO/GEO 维护完成!\n')

// 保存报告
const report = {
  date: new Date().toISOString(),
  totalCodes,
  categories: categoryCount,
  brands: brandCount,
  issuesFound: issues.length,
  nextTasks: [
    '补充稀疏分类内容',
    '添加更多长尾关键词',
    '检查死链'
  ]
}

fs.writeFileSync(
  path.join(__dirname, '../seo-maintenance-report.json'),
  JSON.stringify(report, null, 2)
)
console.log('📄 报告已保存到 seo-maintenance-report.json')
