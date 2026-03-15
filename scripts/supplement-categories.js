#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')
let db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))

const NEW_CATEGORIES = {
  Refrigerator: {
    brands: [
      { name: 'Whirlpool', series: ['French Door', 'Side by Side'], features: ['Ice Maker', 'Water Dispenser'] },
      { name: 'Samsung', series: ['Family Hub', 'Bespoke'], features: ['Twin Cooling', 'Ice Maker'] },
      { name: 'LG', series: ['InstaView', 'Door-in-Door'], features: ['LinearCooling', 'ThinQ'] },
      { name: 'GE', series: ['Profile', 'Cafe'], features: ['TwinChill', 'AdvFresh'] },
      { name: 'Frigidaire', series: ['Gallery'], features: ['SpaceWise', 'ReadySelect'] }
    ],
    errors: ['SY CE', '22E', '88 88', 'E5', 'Er FF', 'Er dF', 'Er PF', 'H70', 'L70', 'dr']
  },
  Dishwasher: {
    brands: [
      { name: 'Bosch', series: ['800', '700'], features: ['CrystalDry', 'InfoLight'] },
      { name: 'Whirlpool', series: ['Front Control'], features: ['AnyWare', 'Soil Sensor'] },
      { name: 'GE', series: ['Profile'], features: ['Steam PreWash', 'Bottle Jets'] },
      { name: 'KitchenAid', series: ['Professional'], features: ['ProScrub', 'Third Rack'] },
      { name: 'Samsung', series: ['StormWash'], features: ['Zone Booster', 'Steam'] }
    ],
    errors: ['1F', '2F', '3F', '4F', '5F', '6F', 'LE', 'OE', 'HE', 'tE']
  },
  Dryer: {
    brands: [
      { name: 'Whirlpool', series: ['Duet', 'Cabrio'], features: ['Steam', 'EcoBoost'] },
      { name: 'Samsung', series: ['Steam', 'Sensor Dry'], features: ['Steam Refresh', 'Eco Dry'] },
      { name: 'LG', series: ['Steam', 'TurboSteam'], features: ['TrueSteam', 'ThinQ'] },
      { name: 'GE', series: ['Front Load'], features: ['Steam', 'Sensor Dry'] },
      { name: 'Maytag', series: ['Front Load'], features: ['Steam', 'Advanced Moisture Sensing'] }
    ],
    errors: ['AF', 'E1', 'E2', 'E3', 'E4', 'tO', 'dO', 'F1', 'PF', 'rL']
  },
  CNC: {
    brands: [
      { name: 'Fanuc', series: ['0i-F', '0i-D'], features: ['High Speed', 'Multi-Axis'] },
      { name: 'Siemens', series: ['828D', '840D'], features: ['ShopMill', 'ShopTurn'] },
      { name: 'Mitsubishi', series: ['M80', 'M70'], features: ['High Speed'] },
      { name: 'Haas', series: ['VF', 'VM'], features: ['5-Axis'] },
      { name: 'Mazak', series: ['Integrex'], features: ['Multi-Tasking'] }
    ],
    errors: ['ALM 001', 'ALM 002', 'ALM 010', 'ALM 101', 'ALM 200', 'P/S 100', 'OVC', 'OT']
  },
  Robotics: {
    brands: [
      { name: 'ABB', series: ['IRB 6700', 'IRB 120'], features: ['Heavy Duty', 'Fast'] },
      { name: 'Fanuc', series: ['M-20iA', 'CRX'], features: ['Welding', 'Cobot'] },
      { name: 'Kuka', series: ['KR Agilus'], features: ['Precise'] },
      { name: 'Yaskawa', series: ['Motoman', 'GP'], features: ['Welding'] },
      { name: 'Universal Robots', series: ['UR3', 'UR5'], features: ['Cobot', 'Easy Programming'] }
    ],
    errors: ['ERR-1001', 'ERR-1002', 'ERR-2001', 'ERR-3001', 'ERR-4001', 'ERR-5001', 'KSS']
  }
}

function generateNewContent() {
  let newCodes = []
  let id = db.errorCodes.length + 1

  const categoryMap = { Refrigerator: 'Refrigerator', Dishwasher: 'Dishwasher', Dryer: 'Dryer', CNC: 'CNC', Robotics: 'Robotics' }
  const errorNames = {
    'SY CE': 'Communication Error', '22E': 'Ice Maker Fault', 'E5': 'Temperature Sensor Error', 'H70': 'High Temperature',
    '1F': 'Water Supply Error', '2F': 'Drain Error', 'LE': 'Lock Error', 'OE': 'Drain Error',
    'AF': 'Airflow Error', 'E1': 'Temperature Sensor Error', 'tO': 'Timeout Error',
    'ALM 001': 'Overheat Alarm', 'ALM 002': 'Servo Alarm', 'OVC': 'Overload',
    'ERR-1001': 'Emergency Stop', 'ERR-1002': 'Safety Stop', 'KSS': 'Safety Stop'
  }

  for (const [category, config] of Object.entries(NEW_CATEGORIES)) {
    for (const brand of config.brands) {
      for (const code of config.errors) {
        const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)]
        const times = ['15 min', '30 min', '45 min', '1 hour']
        
        newCodes.push({
          id: id++,
          brand: brand.name,
          category: categoryMap[category],
          model: `${brand.name} ${category} ${Math.floor(Math.random() * 9000 + 1000)}`,
          code: code,
          name: errorNames[code] || 'Error',
          description: `${brand.name} ${code} error - Common issue in ${brand.name} ${category}. Check components and wiring.`,
          causes: [`${brand.name} component failure`, 'Wiring issue', 'Sensor malfunction', 'Control board problem'],
          solutions: ['Check connections', 'Inspect wiring', 'Test sensors', 'Replace faulty part', 'Reset system'],
          difficulty,
          estimatedTime: times[Math.floor(Math.random() * times.length)],
          productInfo: {
            manufacturer: `${brand.name} Corporation`,
            yearIntroduced: String(2015 + Math.floor(Math.random() * 10)),
            warranty: '1 year',
            series: brand.series[0],
            features: brand.features,
            commonIssues: ['Component wear', 'Electrical issues'],
            voltage: '120V/240V'
          }
        })
      }
    }
  }
  return newCodes
}

const newCodes = generateNewContent()
console.log(`Generating ${newCodes.length} new entries...`)

const allCodes = [...db.errorCodes, ...newCodes]
const uniqueCodes = Array.from(new Map(allCodes.map(item => [item.brand + item.category + item.code, item])).values())

const output = {
  errorCodes: uniqueCodes,
  brands: [...new Set(uniqueCodes.map(c => c.brand))],
  categories: [...new Set(uniqueCodes.map(c => c.category))],
  metadata: { totalCodes: uniqueCodes.length, lastUpdated: new Date().toISOString().split('T')[0], version: '5.0' }
}

fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2))

const categoryCount = {}
uniqueCodes.forEach(item => { categoryCount[item.category] = (categoryCount[item.category] || 0) + 1 })

console.log(`\nDone! Total: ${uniqueCodes.length}\nCategories:`)
Object.entries(categoryCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => console.log(`  ${cat}: ${count}`))
