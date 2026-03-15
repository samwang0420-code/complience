#!/usr/bin/env node

/**
 * 每日内容扩展脚本
 * 每天运行以增加新内容
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

// 读取现有数据
let db = { errorCodes: [], brands: [], categories: [] }
try {
  db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
} catch (e) {}

// 新品牌/型号池
const NEW_BRANDS = {
  washer: [
    { name: 'Inglis', series: ['Superba'], features: ['Heavy Duty'] },
    { name: 'Estate', series: ['Old Style'], features: ['Large Capacity'] },
    { name: 'Roper', series: ['Standard'], features: ['Basic'] },
    { name: 'Crosley', series: ['Portable'], features: ['Compact'] },
    { name: 'Norge', series: ['Legacy'], features: ['Economy'] }
  ],
  hvac: [
    { name: 'Goodman', series: ['GMSS', 'GMVC'], features: ['Two-Stage'] },
    { name: 'York', series: ['Affinity', ' LX'], features: ['ClimateTalk'] },
    { name: 'American Standard', series: ['Gold', 'Platinum'], features: ['AccuLink'] },
    { name: ' Bryant', series: ['Evolution', 'Preferred'], features: ['Hybrid Heat'] },
    { name: ' Payne', series: ['Cool'], features: ['Basic'] }
  ],
  plc: [
    { name: 'Hitachi', series: ['EH-PCI'], features: ['High Speed'] },
    { name: 'Keyence', series: ['KV'], features: ['Ethernet'] },
    { name: ' IDEC', series: ['FC5A'], features: ['Micro PLC'] },
    { name: 'Cognex', series: ['In-Sight'], features: ['Vision'] },
    { name: ' Panasonic', series: ['FP'], features: ['Compact'] }
  ],
  cnc: [
    { name: 'Mazak', series: ['Integrex', 'Variaxis'], features: ['Multi-Tasking'] },
    { name: ' Haas', series: ['VF', 'VM'], features: ['5-Axis'] },
    { name: 'Okuma', series: ['MA', 'MB'], features: ['Thermo-Friendly'] },
    { name: 'DMG MORI', series: ['NLX, DMG'], features: ['Universal'] },
    { name: 'Hurco', series: ['VMX, VMU'], features: ['Control'] }
  ],
  robotics: [
    { name: 'Yaskawa', series: ['Motoman', 'GP'], features: ['High Speed'] },
    { name: 'Fanuc', series: ['M-20iA', 'CRX'], features: ['Cobot'] },
    { name: 'Universal Robots', series: ['UR3', 'UR5', 'UR10'], features: ['Cobot'] },
    { name: ' Epson', series: ['G', 'C'], features: ['SCARA'] },
    { name: 'Franka Emika', series: ['Panda'], features: ['Cobot'] }
  ]
}

// 新错误代码
const NEW_ERRORS = [
  { code: 'E01', name: 'Power Supply Fault' },
  { code: 'E02', name: 'Control Board Error' },
  { code: 'E03', name: 'Sensor Malfunction' },
  { code: 'E04', name: 'Motor Failure' },
  { code: 'E05', name: 'Communication Error' },
  { code: 'E06', name: 'Thermal Fault' },
  { code: 'E07', name: 'Pressure Fault' },
  { code: 'E08', name: 'Flow Error' },
  { code: 'E09', name: 'Level Sensor Fault' },
  { code: 'F01', name: 'Short Circuit' },
  { code: 'F02', name: 'Open Circuit' },
  { code: 'F03', name: 'Grounding Fault' },
  { code: 'F04', name: 'Overload' },
  { code: 'F05', name: 'Overheat' },
  { code: 'F06', name: 'Speed Error' },
  { code: 'F07', name: 'Position Error' },
  { code: 'F08', name: 'Encoder Fault' },
  { code: 'F09', name: 'Brake Fault' },
  { code: 'F10', name: 'Temperature High' },
  { code: 'F11', name: 'Temperature Low' },
  { code: 'L01', name: 'Lock Error' },
  { code: 'L02', name: 'Limit Switch' },
  { code: 'L03', name: 'Door Open' },
  { code: 'L04', name: 'Interlock Fault' },
  { code: 'P01', name: 'Pump Fault' },
  { code: 'P02', name: 'Valve Fault' },
  { code: 'P03', name: 'Compressor Fault' },
  { code: 'P04', name: 'Fan Fault' },
  { code: 'C01', name: 'Calibration Error' },
  { code: 'C02', name: 'Configuration Error' },
  { code: 'C03', name: 'Parameter Error' },
  { code: 'C04', name: 'Checksum Error' },
  { code: 'U01', name: 'User Error' },
  { code: 'U02', name: 'Setup Error' },
  { code: 'U03', name: 'Operation Error' }
]

function generateDailyContent() {
  const newCodes = []
  let id = db.errorCodes.length + 1

  const categories = {
    washer: 'Washer',
    hvac: 'HVAC',
    plc: 'PLC',
    cnc: 'CNC',
    robotics: 'Robotics'
  }

  // 每天生成 20-30 条新记录
  const todayBrands = []

  for (const [category, brands] of Object.entries(NEW_BRANDS)) {
    const brand = brands[Math.floor(Math.random() * brands.length)]
    if (!todayBrands.find(b => b.name === brand.name)) {
      todayBrands.push(brand)
      
      // 随机选择 5-8 个错误代码
      const selectedErrors = NEW_ERRORS
        .sort(() => 0.5 - Math.random())
        .slice(0, 5 + Math.floor(Math.random() * 4))

      for (const error of selectedErrors) {
        const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)]
        
        newCodes.push({
          id: id++,
          brand: brand.name,
          category: categories[category],
          model: `${brand.name} ${category.toUpperCase()}-${Math.floor(Math.random() * 9000 + 1000)}`,
          code: error.code,
          name: error.name,
          description: `${brand.name} ${error.name} - Technical issue in ${brand.name} ${category} systems`,
          causes: [
            `${brand.name} component failure`,
            'Electrical connection issue',
            'Environmental factors',
            'Component aging'
          ],
          solutions: [
            'Check connections',
            'Inspect components',
            'Replace faulty part',
            'Reset system'
          ],
          difficulty,
          estimatedTime: ['15 min', '30 min', '45 min', '1 hour', '2 hours'][Math.floor(Math.random() * 5)],
          productInfo: {
            manufacturer: `${brand.name} Corporation`,
            yearIntroduced: String(2015 + Math.floor(Math.random() * 10)),
            warranty: '1 year',
            series: brand.series[0],
            features: brand.features,
            commonIssues: [
              'Component wear',
              'Electrical issues',
              'Programming errors'
            ],
            voltage: category === 'plc' ? '24V DC' : '120V/240V'
          }
        })
      }
    }
  }

  return newCodes
}

// 执行
const newCodes = generateDailyContent()

if (newCodes.length > 0) {
  // 合并去重
  const allCodes = [...db.errorCodes, ...newCodes]
  const uniqueCodes = Array.from(
    new Map(allCodes.map(item => [item.brand + item.category + item.code, item])).values()
  )

  // 保存
  const output = {
    errorCodes: uniqueCodes,
    brands: [...new Set(uniqueCodes.map(c => c.brand))],
    categories: [...new Set(uniqueCodes.map(c => c.category))],
    metadata: {
      totalCodes: uniqueCodes.length,
      lastUpdated: new Date().toISOString().split('T')[0],
      version: '4.0',
      dailyGenerated: newCodes.length
    }
  }

  fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2))
  
  console.log(`✅ 今日更新: +${newCodes.length} 条错误代码`)
  console.log(`📊 总计: ${uniqueCodes.length} 条`)
  console.log(`📅 日期: ${output.metadata.lastUpdated}`)
} else {
  console.log('⚠️ 今日无需更新')
}
