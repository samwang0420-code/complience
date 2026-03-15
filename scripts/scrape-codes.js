#!/usr/bin/env node

/**
 * AI 批量抓取错误代码
 * 目标：几万条冷门工业设备、家电错误代码
 * 
 * 数据源策略：
 * 1. Reddit (r/ApplianceRepair, r/HVAC, r/PLC, r/CNC)
 * 2. 厂家手册 PDF (公开下载)
 * 3. 论坛 (ApplianceTalk, HVAC-Talk)
 * 4. 错误代码数据库 (开放 API)
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

// 加载现有数据
const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))

// 行业分类配置
const INDUSTRIES = {
  appliances: {
    brands: ['Whirlpool', 'Samsung', 'LG', 'GE', 'Maytag', 'Electrolux', 'Bosch', 'AEG', 'KitchenAid', 'Frigidaire', 'Amana', 'Kenmore', 'Hotpoint'],
    categories: ['Washer', 'Dryer', 'Dishwasher', 'Refrigerator', 'Oven', 'Range', 'Microwave', 'Air Conditioner'],
    searchTerms: ['error code', 'fault code', 'troubleshooting', 'diagnostic']
  },
  hvac: {
    brands: ['Carrier', 'Daikin', 'Trane', 'Lennox', 'Rheem', 'York', 'Goodman', 'Honeywell', 'Johnson Controls', 'Mitsubishi Electric'],
    categories: ['Central AC', 'Heat Pump', 'Furnace', 'Boiler', 'Mini Split', 'VRF', 'Package Unit'],
    searchTerms: ['error code', 'fault code', 'troubleshooting', 'alarm code']
  },
  industrial: {
    brands: ['Siemens', 'Schneider', 'Allen-Bradley', 'Omron', 'Mitsubishi', 'Fanuc', 'ABB', 'Kuka', 'Yaskawa', 'Universal Robots'],
    categories: ['PLC', 'CNC', 'Robotics', 'VFD', 'Servo Drive', 'HMI', 'Industrial PC'],
    searchTerms: ['error code', 'alarm', 'fault', 'troubleshooting', 'diagnostic']
  },
  automotive: {
    brands: ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Volkswagen'],
    categories: ['Engine', 'Transmission', 'ABS', 'Airbag', 'Body Control'],
    searchTerms: ['DTC', 'error code', 'fault code', 'diagnostic']
  }
}

// 模拟 AI 抓取（实际需要接入 Apify 或自定义爬虫）
async function scrapeFromAI(query) {
  // 这里可以接入 Apify 的爬虫或 AI 分析
  // 返回格式化的错误代码数据
  
  const mockResults = [
    {
      brand: 'Sample',
      category: 'Sample',
      code: 'XXX',
      name: 'Sample Error',
      description: 'Generated from AI query',
      causes: ['Cause 1'],
      solutions: ['Solution 1'],
      difficulty: 'Medium',
      estimatedTime: '30 min'
    }
  ]
  
  return mockResults
}

// 主函数：扩展数据
async function expandDatabase() {
  console.log('🚀 开始扩展错误代码数据库...\n')
  
  let totalAdded = 0
  
  for (const [industry, config] of Object.entries(INDUSTRIES)) {
    console.log(`📦 处理行业: ${industry}`)
    
    for (const brand of config.brands) {
      for (const category of config.categories) {
        for (const term of config.searchTerms) {
          const query = `${brand} ${category} ${term} list`
          
          // 这里调用 AI 抓取
          // const results = await scrapeFromAI(query)
          
          console.log(`  - ${brand} ${category}: ${query}`)
          totalAdded++
        }
      }
    }
  }
  
  console.log(`\n✅ 完成！处理了 ${totalAdded} 个查询组合`)
  console.log(`📊 当前数据库: ${db.errorCodes.length} 条记录`)
  
  // 统计
  const stats = {
    byBrand: {},
    byCategory: {}
  }
  
  db.errorCodes.forEach(item => {
    stats.byBrand[item.brand] = (stats.byBrand[item.brand] || 0) + 1
    stats.byCategory[item.category] = (stats.byCategory[item.category] || 0) + 1
  })
  
  console.log('\n📈 统计:')
  console.log('- 品牌数量:', Object.keys(stats.byBrand).length)
  console.log('- 分类数量:', Object.keys(stats.byCategory).length)
  
  return db
}

// 运行
expandDatabase().catch(console.error)
