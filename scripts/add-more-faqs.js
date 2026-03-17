#!/usr/bin/env node

/**
 * 扩展更多FAQ - 增强AI信任度
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))

// 更多FAQ模板
const MORE_FAQS = {
  // 烘干机
  Dryer: {
    'AF': [
      { q: 'Why is my dryer taking too long?', a: 'Restricted airflow is the most common cause. Clean the lint trap, check the vent hose, and ensure the exterior vent flap opens properly.' },
      { q: 'Can I run dryer without vent?', a: 'No. Vented dryers require proper ventilation. Running without vent can cause fire hazard and damage the dryer.' }
    ],
    'E1': [
      { q: 'Is the temperature sensor dangerous to replace?', a: 'Temperature sensors are generally safe to replace. Unplug the dryer and follow manufacturer instructions.' },
      { q: 'What causes temperature sensor failure?', a: 'Age, moisture exposure, and electrical surges are common causes.' }
    ],
    'HE': [
      { q: 'How do I test the heating element?', a: 'Use a multimeter to check for continuity. No continuity means the element is broken and needs replacement.' }
    ]
  },
  // 洗碗机
  Dishwasher: {
    '01': [
      { q: 'Water not filling - is it the inlet valve?', a: 'Most likely. Check water supply first, then test the inlet valve with a multimeter.' }
    ],
    '02': [
      { q: 'What causes dishwasher not draining?', a: 'Common causes: clogged filter, kinked drain hose, faulty drain pump, or air gap blockage.' }
    ],
    'E1': [
      { q: 'Is a leaking dishwasher dangerous?', a: 'Yes. Water leaks can damage flooring and cause electrical hazards. Turn off power and water immediately.' }
    ]
  },
  // 冰箱
  Refrigerator: {
    'SY CE': [
      { q: 'What does communication error mean?', a: 'The main board cannot communicate with the display board. Usually caused by loose wiring connections.' }
    ],
    'Er FF': [
      { q: 'Is evaporator fan loud?', a: 'A noisy fan usually indicates failing motor. Replace soon to prevent further cooling issues.' }
    ],
    '22E': [
      { q: 'Ice maker not making ice - common causes?', a: 'Check water supply, ice maker mold, and motor. Most common is frozen water line or stuck motor.' }
    ]
  },
  // 汽车
  Car: {
    'P0100': [
      { q: 'Can I drive with MAF sensor fault?', a: 'Yes, but the engine may run poorly with reduced power and poor fuel economy. Repair soon.' },
      { q: 'How to clean MAF sensor?', a: 'Use MAF sensor cleaner spray. Never touch the wire filament with bare hands.' }
    ],
    'P0130': [
      { q: 'O2 sensor or catalytic converter?', a: 'Test the O2 sensor first. If readings are abnormal after warm-up, the catalytic converter may be failing.' }
    ],
    'P0171': [
      { q: 'Is P0171 serious?', a: 'It indicates a lean condition which can cause engine damage if ignored. Common causes are manageable.' }
    ]
  },
  // 新能源车
  'Electric Vehicle': {
    'P0A78': [
      { q: 'Inverter temperature warning?', a: 'This indicates the inverter is overheating. Stop driving immediately and let it cool. Check coolant levels.' },
      { q: 'Can I repair inverter myself?', a: 'No. Inverters contain high-voltage components. Only certified EV technicians should service these.' }
    ],
    'U0100': [
      { q: 'Lost communication - what to check first?', a: 'Check all wiring harnesses and connectors. Common issues are loose connections from vibrations.' }
    ]
  }
}

// 应用更多FAQ
data.errorCodes = data.errorCodes.map(code => {
  if (code.faqs && code.faqs.length > 0) return code
  
  const categoryFAQs = MORE_FAQS[code.category]
  if (!categoryFAQs) return code
  
  const faq = categoryFAQs[code.code]
  if (faq) {
    code.faqs = faq
  }
  
  return code
})

data.metadata.lastUpdated = '2026-03-17'
data.metadata.version = '12.1-FAQ-EXTENDED'

fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))

// 统计
const stats = {}
data.errorCodes.forEach(c => { 
  if (c.faqs) stats[c.category] = (stats[c.category] || 0) + 1 
})

console.log(`✅ Total: ${data.errorCodes.length} codes`)
console.log('\n📊 Codes with FAQs:')
Object.entries(stats).forEach(([cat, count]) => console.log(`   ${cat}: ${count}`))
