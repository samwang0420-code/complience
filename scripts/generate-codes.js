#!/usr/bin/env node

/**
 * 批量生成错误代码数据
 * 用法: node scripts/generate-codes.js
 */

const fs = require('fs')
const path = require('path')

// 现有数据
const existingDb = require('../src/data/error-codes/database.json')

// 品牌和分类模板
const templates = {
  brands: {
    washer: ['Whirlpool', 'LG', 'Samsung', 'GE', 'Maytag', 'Electrolux', 'Bosch', 'AEG'],
    refrigerator: ['Samsung', 'LG', 'GE', 'Whirlpool', 'Frigidaire', 'KitchenAid', 'Bosch'],
    dishwasher: ['GE', 'Bosch', 'Whirlpool', 'Maytag', 'KitchenAid', 'Samsung'],
    dryer: ['Whirlpool', 'LG', 'Samsung', 'GE', 'Maytag', 'Electrolux'],
    hvac: ['Carrier', 'Daikin', 'Trane', 'Lennox', 'Honeywell', 'Johnson Controls', 'Mitsubishi'],
    plc: ['Siemens', 'Schneider', 'Allen-Bradley', 'Omron', 'Mitsubishi', 'Delta'],
    cnc: ['Fanuc', 'Mitsubishi', 'Siemens', ' Haas', 'Mazak'],
    robotics: ['ABB', 'Kuka', 'Fanuc', 'Yaskawa', 'Universal Robots']
  },
  codes: {
    washer: ['F21', 'F5', 'E1', 'LE', 'OE', 'dE', 'F7', 'F9', 'SUD', 'L0'],
    refrigerator: ['22E', 'SY EF', 'E5', 'FF', 'DF', '22C', '8888'],
    dishwasher: ['H20', '1F', 'CA', 'LE', 'HE', 'SD'],
    dryer: ['AF', 'E1', 'tO', 'dO', 'F1', 'E2'],
    hvac: ['E1', 'E2', 'E3', 'E4', 'A0', 'A2', 'F3', 'F4'],
    plc: ['SF', 'ERR', 'FAULT', 'E2000', 'CPU', 'I/O'],
    cnc: ['ALM', 'M01', 'P/S', 'OVC', 'OT', 'SP', 'HMI'],
    robotics: ['ERR', 'KSS', 'SAFE', 'COLL', 'JOINT', 'PATH']
  },
  problems: {
    washer: [
      { name: 'Drain Timeout', code: 'F21', desc: 'Water not draining within expected time' },
      { name: 'Door Lock Fault', code: 'dE', desc: 'Door lock mechanism failed' },
      { name: 'Water Inlet Error', code: 'E1', desc: 'Water supply problem detected' },
      { name: 'Motor Overload', code: 'LE', desc: 'Motor stalled or overloaded' },
      { name: 'Overflow Error', code: 'OE', desc: 'Water level too high' }
    ],
    refrigerator: [
      { name: 'Ice Maker Fault', code: '22E', desc: 'Ice maker malfunction detected' },
      { name: 'Cooling Failure', code: 'SY CF', desc: 'Refrigerator not cooling properly' },
      { name: 'Defrost Error', code: 'DF', desc: 'Defrost system malfunction' },
      { name: 'Fan Motor Fault', code: 'FF', desc: 'Evaporator fan failure' },
      { name: 'Temperature Sensor', code: 'E5', desc: 'Temperature sensor malfunction' }
    ],
    hvac: [
      { name: 'High Pressure Fault', code: 'E1', desc: 'System high refrigerant pressure' },
      { name: 'Low Pressure Fault', code: 'E2', desc: 'System low refrigerant pressure' },
      { name: 'Communication Error', code: 'A0', desc: 'System communication failure' },
      { name: 'Overcurrent Fault', code: 'F3', desc: 'Compressor overcurrent detected' },
      { name: 'Temperature Sensor', code: 'E4', desc: 'Sensor reading out of range' }
    ],
    plc: [
      { name: 'System Fault', code: 'SF', desc: 'CPU or system error detected' },
      { name: 'I/O Fault', code: 'FAULT', desc: 'Input/Output module error' },
      { name: 'Memory Error', code: 'ERR', desc: 'Memory corruption or overflow' },
      { name: 'Communication Error', code: 'E2000', desc: 'Network communication failure' },
      { name: 'Power Supply Fault', code: 'PWR', desc: 'Power supply voltage issue' }
    ]
  }
}

function generateCode(id, brand, category, problem, difficulty, time) {
  return {
    id,
    brand,
    category,
    model: `${brand} ${category} Series`,
    code: problem.code,
    name: problem.name,
    description: problem.desc,
    causes: [
      `${brand} ${category} component failure`,
      'Wiring connection issue',
      'Sensor malfunction',
      'Control board problem'
    ],
    solutions: [
      'Check component connections',
      'Inspect wiring harness',
      'Test sensors',
      'Replace faulty component',
      'Reset system'
    ],
    difficulty,
    estimatedTime: time
  }
}

function expandData() {
  const newCodes = []
  let id = existingDb.errorCodes.length + 1
  
  // 为每个分类扩展更多品牌和代码组合
  const categories = ['washer', 'refrigerator', 'dishwasher', 'dryer', 'hvac', 'plc', 'cnc', 'robotics']
  
  categories.forEach(cat => {
    const brands = templates.brands[cat] || []
    const codes = templates.codes[cat] || []
    const problems = templates.problems[cat] || []
    
    brands.forEach(brand => {
      codes.forEach((code, idx) => {
        const problem = problems[idx % problems.length] || { name: `${code} Error`, code, desc: 'Error detected' }
        const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)]
        const times = ['15 min', '30 min', '45 min', '1 hour', '2 hours']
        const time = times[Math.floor(Math.random() * times.length)]
        
        newCodes.push(generateCode(id++, brand, cat.charAt(0).toUpperCase() + cat.slice(1), { ...problem, code }, difficulty, time))
      })
    })
  })
  
  return newCodes
}

const newCodes = expandData()
const allCodes = [...existingDb.errorCodes, ...newCodes]

// 去重
const uniqueCodes = Array.from(new Map(allCodes.map((item) => [item.brand + item.category + item.code, item])).values())

console.log(`生成完成: 原有 ${existingDb.errorCodes.length} 条, 新增 ${newCodes.length} 条, 去重后 ${uniqueCodes.length} 条`)

// 写回文件
const output = {
  ...existingDb,
  errorCodes: uniqueCodes
}

fs.writeFileSync(
  path.join(__dirname, '../src/data/error-codes/database.json'),
  JSON.stringify(output, null, 2)
)

console.log('数据已写入 database.json')
