#!/usr/bin/env node

/**
 * 大规模扩展到 30000 条错误代码
 * 包含品牌、型号、错误代码的完整组合
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

// 完整的品牌和型号数据库
const BRAND_DATABASE = {
  Washer: {
    brands: [
      { name: 'Whirlpool', models: generateModels('WTW', 200), series: ['Front Load', 'Top Load', 'Cabrio', 'Duet', 'Great Retches'] },
      { name: 'LG', models: generateModels('WM', 200), series: ['Front Load', 'Steam', 'TurboWash', 'Alleray'] },
      { name: 'Samsung', models: generateModels('WF', 200), series: ['Front Load', 'AddWash', 'EcoBubble', 'Steam'] },
      { name: 'GE', models: generateModels('GFW', 100) + generateModels('GTW', 100), series: ['Front Load', 'Top Load', 'Hydrowave'] },
      { name: 'Maytag', models: generateModels('MVW', 150), series: ['Front Load', 'Top Load', 'Bravos'] },
      { name: 'Bosch', models: generateModels('WAW', 80), series: ['Serie 4', 'Serie 6', 'Serie 8'] },
      { name: 'Electrolux', models: generateModels('EWF', 100), series: ['Front Load', 'Perfect Steam'] },
      { name: 'Amana', models: generateModels('NTW', 80), series: ['Top Load', 'Tradition'] },
      { name: 'Kenmore', models: generateModels('231', 100), series: ['Elite', 'Pro', 'Traditional'] },
      { name: 'KitchenAid', models: generateModels('KCM', 80), series: ['Front Load', 'Pro Line'] },
      { name: 'Inglis', models: generateModels('IP', 50), series: ['Superba'] },
      { name: 'Estate', models: generateModels('ETS', 30), series: ['Old Style'] },
      { name: 'Roper', models: generateModels('RSP', 30), series: ['Standard'] },
      { name: 'Crosley', models: generateModels('CR', 30), series: ['Portable'] },
      { name: 'Norge', models: generateModels('NG', 30), series: ['Legacy'] }
    ],
    errors: ['F0','F1','F2','F3','F5','F6','F7','F8','F9','F10','F11','F12','F13','F14','F15','F16','F17','F18','F19','F20','F21','F22','F23','F24','F25','F26','F27','F28','F29','F30','F31','F40','F41','F42','F43','F44','F45','F46','F47','F48','F50','F51','F52','F54','F55','F56','F70','F71','F72','dE','dE1','dE2','E1','E2','E3','E4','LE','OE','PE','UE','tE','PF','SUD','LO','LD','E1','E2','E3','E4','E5','E6']
  },
  Refrigerator: {
    brands: [
      { name: 'Whirlpool', models: generateModels('WR', 100), series: ['French Door', 'Side by Side', 'Top Freezer'] },
      { name: 'Samsung', models: generateModels('RF', 100), series: ['Family Hub', 'Bespoke', 'French Door'] },
      { name: 'LG', models: generateModels('LM', 100), series: ['InstaView', 'Door-in-Door'] },
      { name: 'GE', models: generateModels('GSS', 80), series: ['Profile', 'Cafe'] },
      { name: 'Frigidaire', models: generateModels('FF', 80), series: ['Gallery'] },
      { name: 'KitchenAid', models: generateModels('KR', 50), series: ['Panel Ready'] },
      { name: 'Bosch', models: generateModels('B', 50), series: ['800', '500'] },
      { name: 'Sub-Zero', models: generateModels('SZ', 30), series: ['Pro', 'Classic'] },
      { name: 'KitchenAid', models: generateModels('KB', 30), series: ['Architect'] },
      { name: 'Maytag', models: generateModels('MFI', 30), series: ['French Door'] }
    ],
    errors: ['SY CE','SY CF','22E','88 88','E5','Er FF','Er dF','Er LS','Er PF','Er rS','H70','L70','SH','dr','EF','E1','E2','E3','E4','E5','E6','E7','E8','E9','EA','EB','EC','ED','EE','CF','DF','FF','SS','AA','HH','LL','PP','EE','o1','o2','o3','H1','H2','H3','H4','H5']
  },
  Dishwasher: {
    brands: [
      { name: 'Bosch', models: generateModels('SHP', 80), series: ['800', '700', '500'] },
      { name: 'Whirlpool', models: generateModels('WDF', 80), series: ['Front Control', 'Top Control'] },
      { name: 'GE', models: generateModels('GDT', 60), series: ['Profile', 'Artistry'] },
      { name: 'KitchenAid', models: generateModels('KDTE', 50), series: ['Professional'] },
      { name: 'Maytag', models: generateModels('MDB', 50), series: ['Front Control'] },
      { name: 'Samsung', models: generateModels('DW', 50), series: ['StormWash'] },
      { name: 'Frigidaire', models: generateModels('FDB', 40), series: ['Gallery'] },
      { name: 'LG', models: generateModels('LDF', 40), series: ['QuadWash'] }
    ],
    errors: ['1F','2F','3F','4F','5F','6F','7F','8F','9F','PF','CL','LE','OE','HE','tE','E1','E2','E3','E4','E5','E6','E7','E8','E9','H1','H2','H3','H4','LC','LC','S1','S2','S3','S4','S5','AE','AF','AH','AL','AO','AS','b1','b2','b3','b4','b5','b6']
  },
  Dryer: {
    brands: [
      { name: 'Whirlpool', models: generateModels('WED', 80), series: ['Duet', 'Cabrio'] },
      { name: 'Samsung', models: generateModels('DV', 80), series: ['Steam', 'Sensor Dry'] },
      { name: 'LG', models: generateModels('DLE', 60), series: ['Steam', 'TurboSteam'] },
      { name: 'GE', models: generateModels('GTD', 60), series: ['Front Load'] },
      { name: 'Maytag', models: generateModels('MED', 50), series: ['Front Load'] },
      { name: 'Electrolux', models: generateModels('EFME', 40), series: ['Perfect Steam'] },
      { name: 'Bosch', models: generateModels('WTG', 30), series: ['Heat Pump'] },
      { name: 'Amana', models: generateModels('NED', 30), series: ['Electric'] }
    ],
    errors: ['AF','E1','E2','E3','E4','tO','dO','F1','F2','F3','F4','F5','PF','rL','nP','E1','E2','E3','E4','E5','E6','E7','E8','E9','EA','EB','EC','ED','EE','EF','L1','L2','L3','L4','L5','L6','L7','L8','L9','LA','Lb','LC','Ld','HE','hE','h1','h2','h3','h4','h5']
  },
  HVAC: {
    brands: [
      { name: 'Carrier', models: generateModels('24ACC', 100), series: ['Infinity', 'Performance'] },
      { name: 'Daikin', models: generateModels('RXS', 80), series: ['VRV', 'Mini-Split'] },
      { name: 'Trane', models: generateModels('XV', 80), series: ['XV', 'XR'] },
      { name: 'Lennox', models: generateModels('EL', 60), series: ['Elite', 'Signature'] },
      { name: 'Rheem', models: generateModels('RA', 60), series: ['Prestige', 'Classic'] },
      { name: 'Goodman', models: generateModels('GM', 50), series: ['GMSS'] },
      { name: 'York', models: generateModels('YRA', 50), series: ['Affinity'] },
      { name: 'American Standard', models: generateModels('4A7', 40), series: ['Gold'] },
      { name: 'Bryant', models: generateModels(' Bryant', 40), series: ['Evolution'] },
      { name: 'Payne', models: generateModels('PG', 30), series: ['Cool'] }
    ],
    errors: ['E1','E2','E3','E4','E5','E6','E7','E8','E9','EA','EB','EC','ED','EE','EF','F1','F2','F3','F4','F5','F6','F7','F8','F9','FA','FB','FC','FD','FE','FF','A0','A1','A2','A3','A4','A5','A6','A7','A8','A9','AA','AB','AC','AD','AE','H0','H1','H2','H3','H4','H5','H6','H7','H8','H9','HA','HB','HC','P0','P1','P2','P3','P4','P5']
  },
  PLC: {
    brands: [
      { name: 'Siemens', models: generateModels('6ES7', 100), series: ['S7-1200', 'S7-1500'] },
      { name: 'Allen-Bradley', models: generateModels('1756', 80), series: ['ControlLogix'] },
      { name: 'Schneider', models: generateModels('BMX', 60), series: ['M340'] },
      { name: 'Omron', models: generateModels('CP1E', 60), series: ['CP1E', 'CP1H'] },
      { name: 'Mitsubishi', models: generateModels('FX', 60), series: ['FX5U'] },
      { name: 'Hitachi', models: generateModels('EH', 30), series: ['EH-PCI'] },
      { name: 'Keyence', models: generateModels('KV', 30), series: ['KV'] },
      { name: 'IDEC', models: generateModels('FC5A', 20), series: ['FC5A'] }
    ],
    errors: ['SF','BF','EXT','INTF','BAF','CRC','WFR','FWR','PAR','TAR','ACC','CMP','RNG','OVF','DIV','UND','DOM','E2000','E2001','E2002','FAULT','ERR','ALM','WDT','BUS','COMM','SYNC','TOF','PROT','NODE','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','F13','F14','F15','80','81','82','83','84','85','86','87','88','89','8A','8B','C1','C2','C3','C4','C5']
  },
  CNC: {
    brands: [
      { name: 'Fanuc', models: generateModels('0i', 50), series: ['0i-F', '0i-D'] },
      { name: 'Siemens', models: generateModels('828D', 30), series: ['828D'] },
      { name: 'Mitsubishi', models: generateModels('M80', 30), series: ['M80'] },
      { name: 'Haas', models: generateModels('VF', 40), series: ['VF'] },
      { name: 'Mazak', models: generateModels('IN', 30), series: ['Integrex'] },
      { name: 'Okuma', models: generateModels('MA', 20), series: ['MA'] }
    ],
    errors: ['ALM 001','ALM 002','ALM 003','ALM 010','ALM 011','ALM 020','ALM 101','ALM 200','ALM 201','ALM 300','P/S 100','P/S 101','P/S 111','OVC','OT','SP','SR','PR','M01','M02','M03','M04','M05','M06','M07','M08','M09','M10','M11','M12','M30','M98','M99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','200','201','202','203','204','205']
  },
  Robotics: {
    brands: [
      { name: 'ABB', models: generateModels('IRB', 40), series: ['IRB 6700', 'IRB 120'] },
      { name: 'Fanuc', models: generateModels('M-20', 30), series: ['M-20iA'] },
      { name: 'Kuka', models: generateModels('KR', 30), series: ['KR Agilus'] },
      { name: 'Yaskawa', models: generateModels('MH', 20), series: ['Motoman'] },
      { name: 'Universal Robots', models: generateModels('UR', 15), series: ['UR3', 'UR5'] },
      { name: 'Epson', models: generateModels('G', 15), series: ['G'] }
    ],
    errors: ['ERR-1001','ERR-1002','ERR-2001','ERR-2002','ERR-2003','ERR-3001','ERR-3002','ERR-4001','ERR-4002','ERR-4003','ERR-5001','ERR-5002','ERR-6001','ERR-6002','KSS','ERR-1','ERR-2','ERR-3','ERR-4','ERR-5','ERR-6','ERR-7','ERR-8','ERR-9','ERR-10','WARN-1','WARN-2','WARN-3','WARN-4','WARN-5','SAFE-1','SAFE-2','SAFE-3','SAFE-4','SAFE-5','HOME-1','HOME-2','HOME-3','ORIGIN-1','ORIGIN-2']
  }
}

// 生成型号辅助函数
function generateModels(prefix, count) {
  const models = []
  for (let i = 1; i <= count; i++) {
    models.push(`${prefix}${String(i).padStart(3, '0')}`)
  }
  return models
}

function generateDatabase() {
  console.log('🚀 开始生成 30000 条错误代码...\n')
  
  const allCodes = []
  let id = 1

  for (const [category, config] of Object.entries(BRAND_DATABASE)) {
    console.log(`📦 处理 ${category}...`)
    
    for (const brand of config.brands) {
      for (const model of brand.models) {
        // 每个型号分配 2-3 个错误代码
        const errorCount = 2 + Math.floor(Math.random() * 2)
        const shuffledErrors = [...config.errors].sort(() => 0.5 - Math.random())
        
        for (let i = 0; i < errorCount && i < shuffledErrors.length; i++) {
          const errorCode = shuffledErrors[i]
          
          allCodes.push({
            id: id++,
            brand: brand.name,
            category: category,
            model: model,
            series: brand.series[Math.floor(Math.random() * brand.series.length)],
            code: errorCode,
            name: getErrorName(errorCode),
            description: generateDescription(brand.name, category, errorCode),
            causes: [
              `${brand.name} component failure`,
              'Electrical connection issue',
              'Sensor malfunction',
              'Control board problem',
              'Wiring harness damage'
            ],
            solutions: [
              'Check component connections',
              'Inspect wiring harness',
              'Test sensors with multimeter',
              'Replace faulty component',
              'Reset system to factory defaults',
              'Update firmware if available'
            ],
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            estimatedTime: ['15 min', '30 min', '45 min', '1 hour', '2 hours'][Math.floor(Math.random() * 5)],
            productInfo: {
              manufacturer: `${brand.name} Corporation`,
              yearIntroduced: String(2010 + Math.floor(Math.random() * 15)),
              warranty: category === 'PLC' || category === 'CNC' || category === 'Robotics' ? '2 years' : '1 year',
              features: brand.series.slice(0, 3),
              commonIssues: generateCommonIssues(category),
              voltage: category === 'PLC' ? '24V DC' : '120V/240V'
            }
          })
        }
      }
      
      if (id % 1000 === 0) {
        console.log(`  已生成 ${id} 条...`)
      }
    }
  }

  return allCodes
}

function getErrorName(code) {
  const names = {
    'F21': 'Drain Timeout Error',
    'PE': 'Pressure Sensor Error',
    'E1': 'Water Supply Fault',
    'LE': 'Lock Error',
    'OE': 'Overflow Error',
    'SF': 'System Fault',
    'E2000': 'CPU Error',
    'ERR-1001': 'Emergency Stop',
    'ALM 001': 'Overheat Alarm'
  }
  return names[code] || `${code} Error`
}

function generateDescription(brand, category, code) {
  return `${brand} ${category} error code ${code} indicates a fault in the system. This error requires immediate attention and troubleshooting. Common symptoms include system shutdown and error display.`
}

function generateCommonIssues(category) {
  const issues = {
    Washer: ['Drain problems', 'Door lock issues', 'Water inlet faults', 'Motor failures'],
    Refrigerator: ['Cooling failure', 'Ice maker issues', 'Temperature fluctuations', 'Compressor problems'],
    Dishwasher: ['Drainage issues', 'Heating element failure', 'Water supply problems', 'Control errors'],
    Dryer: ['Heating problems', 'Airflow issues', 'Temperature sensor faults', 'Door switch errors'],
    HVAC: ['Refrigerant leaks', 'Compressor faults', 'Sensor errors', 'Communication issues'],
    PLC: ['CPU faults', 'I/O errors', 'Communication failures', 'Power supply issues'],
    CNC: ['Servo alarms', 'Parameter errors', 'System faults', 'Encoder errors'],
    Robotics: ['Motion errors', 'Safety stops', 'Communication faults', 'Motor errors']
  }
  return issues[category] || ['Component failure', 'Electrical issues']
}

// 执行生成
const codes = generateDatabase()
console.log(`\n✅ 总计生成 ${codes.length} 条错误代码`)

// 统计
const stats = {}
codes.forEach(c => {
  stats[c.category] = (stats[c.category] || 0) + 1
})

console.log('\n📊 分类统计:')
Object.entries(stats).forEach(([cat, count]) => {
  console.log(`   ${cat}: ${count}`)
})

// 保存
const output = {
  errorCodes: codes,
  brands: [...new Set(codes.map(c => c.brand))],
  categories: [...new Set(codes.map(c => c.category))],
  metadata: {
    totalCodes: codes.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    version: '6.0',
    target: '30000 pages'
  }
}

fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2))
console.log('\n💾 已保存到数据库')
