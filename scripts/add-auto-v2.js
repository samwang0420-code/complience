#!/usr/bin/env node

/**
 * 添加汽车/新能源车 - 优化版本 <20MB
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

// OBD-II
const OBD_CODES = [
  { code: 'P0100', name: 'Mass Air Flow Circuit Malfunction', causes: ['MAF sensor', 'Wiring'], solutions: ['Replace MAF', 'Check wiring'] },
  { code: 'P0101', name: 'MAF Circuit Range/Performance', causes: ['MAF dirty', 'Air leak'], solutions: ['Clean MAF', 'Fix leak'] },
  { code: 'P0102', name: 'MAF Circuit Low Input', causes: ['MAF failed', 'Wiring'], solutions: ['Replace MAF'] },
  { code: 'P0115', name: 'Coolant Temp Circuit Malfunction', causes: ['ECT sensor', 'Coolant'], solutions: ['Replace ECT'] },
  { code: 'P0120', name: 'Throttle Position Sensor Fault', causes: ['TPS failed', 'Wiring'], solutions: ['Replace TPS'] },
  { code: 'P0130', name: 'O2 Sensor Circuit Malfunction', causes: ['O2 sensor', 'Exhaust'], solutions: ['Replace O2'] },
  { code: 'P0171', name: 'System Too Lean Bank 1', causes: ['Vacuum leak', 'MAF dirty'], solutions: ['Fix leak', 'Clean MAF'] },
  { code: 'P0172', name: 'System Too Rich Bank 1', causes: ['Injector leak', 'Fuel pressure'], solutions: ['Replace injector'] },
  { code: 'P0300', name: 'Random Cylinder Misfire', causes: ['Spark plugs', 'Coils', 'Injectors'], solutions: ['Replace plugs', 'Replace coils'] },
  { code: 'P0301', name: 'Cylinder 1 Misfire', causes: ['Spark plug', 'Coil'], solutions: ['Replace plug', 'Replace coil'] },
  { code: 'P0302', name: 'Cylinder 2 Misfire', causes: ['Spark plug', 'Coil'], solutions: ['Replace plug', 'Replace coil'] },
  { code: 'P0303', name: 'Cylinder 3 Misfire', causes: ['Spark plug', 'Coil'], solutions: ['Replace plug', 'Replace coil'] },
  { code: 'P0304', name: 'Cylinder 4 Misfire', causes: ['Spark plug', 'Coil'], solutions: ['Replace plug', 'Replace coil'] },
  { code: 'P0325', name: 'Knock Sensor Circuit', causes: ['Knock sensor', 'Wiring'], solutions: ['Replace sensor'] },
  { code: 'P0335', name: 'Crankshaft Position Sensor', causes: ['CKP sensor', 'Tone ring'], solutions: ['Replace CKP'] },
  { code: 'P0340', name: 'Camshaft Position Sensor', causes: ['CMP sensor', 'Timing chain'], solutions: ['Replace CMP'] },
  { code: 'P0401', name: 'EGR Flow Insufficient', causes: ['EGR valve', 'Carbon'], solutions: ['Clean EGR'] },
  { code: 'P0420', name: 'Catalyst Efficiency Low Bank 1', causes: ['Catalytic converter', 'O2 sensor'], solutions: ['Replace cat'] },
  { code: 'P0440', name: 'EVAP System Malfunction', causes: ['Gas cap', 'EVAP leak'], solutions: ['Replace cap'] },
  { code: 'P0455', name: 'EVAP Large Leak', causes: ['Gas cap', 'Loose hose'], solutions: ['Replace cap'] },
  { code: 'P0500', name: 'Vehicle Speed Sensor', causes: ['VSS sensor', 'Wiring'], solutions: ['Replace VSS'] },
  { code: 'P0505', name: 'Idle Control Malfunction', causes: ['IAC valve', 'Throttle body'], solutions: ['Clean IAC'] },
  { code: 'P0562', name: 'System Voltage Low', causes: ['Battery', 'Alternator'], solutions: ['Test battery', 'Test alternator'] },
  { code: 'P0563', name: 'System Voltage High', causes: ['Alternator', 'Regulator'], solutions: ['Test alternator'] },
  { code: 'P0700', name: 'Transmission Control Fault', causes: ['TCU', 'Sensors'], solutions: ['Check TCU'] }
]

// EV
const EV_CODES = [
  { code: 'P0AA6', name: 'Battery Voltage Isolation Fault', causes: ['Battery pack', 'High voltage cable'], solutions: ['Check battery', 'Check cables'] },
  { code: 'P0AA7', name: 'Battery Positive Contactor Stuck', causes: ['Contactor', 'Relay'], solutions: ['Replace contactor'] },
  { code: 'P0ABB', name: 'Battery Voltage Sensor Fault', causes: ['Voltage sensor', 'Wiring'], solutions: ['Replace sensor'] },
  { code: 'P0AE6', name: 'Precharge Contactor Stuck Open', causes: ['Contactor', 'ECU'], solutions: ['Replace contactor'] },
  { code: 'P0A78', name: 'Inverter Temperature Sensor', causes: ['Temp sensor', 'Inverter'], solutions: ['Replace sensor'] },
  { code: 'P0A90', name: 'Drive Motor Inverter Performance', causes: ['Inverter', 'IGBT'], solutions: ['Replace inverter'] },
  { code: 'P0A91', name: 'Inverter Over Temperature', causes: ['Inverter', 'Cooling'], solutions: ['Check cooling', 'Replace inverter'] },
  { code: 'P0A92', name: 'Battery Coolant Pump', causes: ['Coolant pump', 'Coolant'], solutions: ['Replace pump', 'Add coolant'] },
  { code: 'P0AFA', name: 'Motor Position Sensor', causes: ['Position sensor', 'Motor'], solutions: ['Replace sensor'] },
  { code: 'P0B10', name: 'Battery State of Charge High', causes: ['BMS', 'Charger'], solutions: ['Check BMS', 'Check charger'] },
  { code: 'P0B11', name: 'Battery State of Charge Low', causes: ['Battery aging', 'BMS'], solutions: ['Test battery', 'Check BMS'] },
  { code: 'P0B20', name: 'Battery Temperature Sensor', causes: ['Temp sensor', 'Cooling'], solutions: ['Replace sensor', 'Check cooling'] },
  { code: 'P0C00', name: 'Motor Coolant Temperature', causes: ['Coolant sensor', 'Thermostat'], solutions: ['Replace sensor'] },
  { code: 'P0C10', name: 'Motor Coolant Flow', causes: ['Pump', 'Air in system'], solutions: ['Replace pump', 'Bleed air'] },
  { code: 'U0100', name: 'Lost Comm With ECM', causes: ['ECU', 'CAN bus'], solutions: ['Check ECU', 'Check CAN'] },
  { code: 'U0101', name: 'Lost Comm With TCM', causes: ['TCU', 'CAN bus'], solutions: ['Check TCU'] },
  { code: 'U0115', name: 'Lost Comm With Hybrid PCM', causes: ['Hybrid PCM', 'CAN bus'], solutions: ['Check PCM'] },
  { code: 'B0001', name: 'Airbag Deployment Control', causes: ['Airbag', 'Sensor'], solutions: ['Check airbag'] },
  { code: 'C0035', name: 'Left Front Wheel Speed', causes: ['Wheel sensor', 'Tone ring'], solutions: ['Replace sensor'] },
  { code: 'C0040', name: 'Right Front Wheel Speed', causes: ['Wheel sensor', 'Tone ring'], solutions: ['Replace sensor'] }
]

const CAR_BRANDS = [
  { name: 'Toyota', car: 8, ev: 4 },
  { name: 'Honda', car: 8, ev: 3 },
  { name: 'Ford', car: 10, ev: 5 },
  { name: 'Chevrolet', car: 8, ev: 4 },
  { name: 'BMW', car: 8, ev: 3 },
  { name: 'Mercedes-Benz', car: 6, ev: 3 },
  { name: 'Audi', car: 6, ev: 2 },
  { name: 'Volkswagen', car: 8, ev: 4 },
  { name: 'Hyundai', car: 6, ev: 4 },
  { name: 'Kia', car: 6, ev: 4 },
  { name: 'Nissan', car: 6, ev: 3 },
  { name: 'Mazda', car: 5, ev: 0 },
  { name: 'Subaru', car: 5, ev: 0 },
  { name: 'Jeep', car: 5, ev: 2 },
  { name: 'Dodge', car: 5, ev: 0 },
  { name: 'GMC', car: 5, ev: 2 },
  { name: 'Cadillac', car: 4, ev: 2 },
  { name: 'Lexus', car: 4, ev: 3 },
  { name: 'Volvo', car: 4, ev: 3 },
  { name: 'Porsche', car: 3, ev: 2 },
  { name: 'Tesla', car: 0, ev: 10 },
  { name: 'BYD', car: 0, ev: 8 },
  { name: 'NIO', car: 0, ev: 6 },
  { name: 'Xpeng', car: 0, ev: 5 },
  { name: 'Li Auto', car: 0, ev: 4 },
  { name: 'Geely', car: 0, ev: 4 }
]

let codes = []
let id = 1

for (const brand of CAR_BRANDS) {
  // 普通汽车
  for (let m = 0; m < brand.car; m++) {
    const model = `${brand.name.substring(0,3).toUpperCase()}${2020 + m}`
    for (const code of OBD_CODES) {
      codes.push({
        id: id++,
        brand: brand.name,
        category: 'Car',
        model,
        series: 'Standard',
        code: code.code,
        name: code.name,
        description: `${code.name}.`,
        causes: [...code.causes],
        solutions: [...code.solutions],
        difficulty: code.code.startsWith('P0') ? 'Hard' : 'Medium',
        estimatedTime: '45 min',
        productInfo: {
          manufacturer: brand.name,
          yearIntroduced: String(2020 + m),
          warranty: '3 years',
          features: ['OBD-II', 'ABS', 'Airbags'],
          commonIssues: [...code.causes],
          voltage: '12V'
        }
      })
    }
  }
  
  // 新能源车
  for (let m = 0; m < brand.ev; m++) {
    const model = `${brand.name.substring(0,3).toUpperCase()}${100 + m}`
    for (const code of EV_CODES) {
      codes.push({
        id: id++,
        brand: brand.name,
        category: 'Electric Vehicle',
        model,
        series: 'EV',
        code: code.code,
        name: code.name,
        description: `${code.name}.`,
        causes: [...code.causes],
        solutions: [...code.solutions],
        difficulty: 'Hard',
        estimatedTime: '1 hour',
        productInfo: {
          manufacturer: brand.name,
          yearIntroduced: String(2020 + m),
          warranty: '8 years',
          features: ['EV', 'Battery Management', 'Regen Braking'],
          commonIssues: [...code.causes],
          voltage: '400V'
        }
      })
    }
  }
}

console.log(`✅ Total: ${codes.length} auto codes`)

const output = {
  errorCodes: codes,
  brands: [...new Set(codes.map(c => c.brand))],
  categories: [...new Set(codes.map(c => c.category))],
  metadata: {
    totalCodes: codes.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    version: '11.0-AUTO',
    note: 'Added automotive and EV error codes'
  }
}

fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2))

const stats = {}
codes.forEach(c => { stats[c.category] = (stats[c.category] || 0) + 1 })
console.log('\n📊 Categories:')
Object.entries(stats).forEach(([cat, count]) => console.log(`   ${cat}: ${count}`))

console.log(`\n📁 Size: ${(fs.statSync(DB_PATH).size / 1024 / 1024).toFixed(1)} MB`)
