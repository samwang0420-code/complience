#!/usr/bin/env node

/**
 * 完整数据库 - 家电 + 汽车 + 新能源
 */

const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '../src/data/error-codes/database.json')

// 家电模板
const APPLIANCE_TEMPLATES = {
  Washer: [
    { code: 'F0E1', name: 'Control Board', causes: ['Board failed'], solutions: ['Replace board'] },
    { code: 'F21', name: 'Drain Timeout', causes: ['Pump clogged'], solutions: ['Clean pump'] },
    { code: 'F22', name: 'Door Lock', causes: ['Lock broken'], solutions: ['Replace lock'] },
    { code: 'F23', name: 'Water Inlet', causes: ['Valve failed'], solutions: ['Replace valve'] },
    { code: 'F24', name: 'Water Level', causes: ['Sensor bad'], solutions: ['Replace sensor'] },
    { code: 'F25', name: 'Temp Sensor', causes: ['Thermistor'], solutions: ['Replace'] },
    { code: 'LE', name: 'Lock Error', causes: ['Motor locked'], solutions: ['Check motor'] },
    { code: 'OE', name: 'Overflow', causes: ['Valve leak'], solutions: ['Replace valve'] },
    { code: 'UE', name: 'Unbalance', causes: ['Load uneven'], solutions: ['Balance load'] },
    { code: 'E1', name: 'Water Supply', causes: ['Supply issue'], solutions: ['Check supply'] },
    { code: 'E2', name: 'Drain', causes: ['Pump issue'], solutions: ['Check pump'] },
    { code: 'dE', name: 'Door Error', causes: ['Lock failed'], solutions: ['Replace lock'] },
    { code: 'PE', name: 'Pressure', causes: ['Sensor bad'], solutions: ['Replace sensor'] },
    { code: 'SUD', name: 'Foam', causes: ['Too much detergent'], solutions: ['Use less'] },
    { code: 'PF', name: 'Power', causes: ['Outage'], solutions: ['Restart'] }
  ],
  Dryer: [
    { code: 'AF', name: 'Airflow', causes: ['Lint full'], solutions: ['Clean'] },
    { code: 'E1', name: 'Temp Sensor', causes: ['Bad sensor'], solutions: ['Replace'] },
    { code: 'E2', name: 'Thermostat', causes: ['Failed'], solutions: ['Replace'] },
    { code: 'E3', name: 'Motor', causes: ['Failed'], solutions: ['Replace'] },
    { code: 'HE', name: 'Heater', causes: ['Bad'], solutions: ['Replace'] },
    { code: 'NO', name: 'No Heat', causes: ['Heater'], solutions: ['Check'] },
    { code: 'PF', name: 'Power', causes: ['Outage'], solutions: ['Restart'] },
    { code: 'tO', name: 'Timeout', causes: ['Vent'], solutions: ['Clean'] },
    { code: 'dO', name: 'Door', causes: ['Open'], solutions: ['Close'] },
    { code: 'ME', name: 'Motor', causes: ['Bad'], solutions: ['Replace'] }
  ],
  Dishwasher: [
    { code: '01', name: 'Inlet', causes: ['Valve'], solutions: ['Replace'] },
    { code: '02', name: 'Drain', causes: ['Pump'], solutions: ['Clean'] },
    { code: '03', name: 'Float', causes: ['Stuck'], solutions: ['Clean'] },
    { code: '04', name: 'Heater', causes: ['Bad'], solutions: ['Replace'] },
    { code: '05', name: 'Temp', causes: ['Sensor'], solutions: ['Replace'] },
    { code: '06', name: 'Motor', causes: ['Failed'], solutions: ['Replace'] },
    { code: '07', name: 'Pump', causes: ['Blocked'], solutions: ['Clean'] },
    { code: '08', name: 'Fan', causes: ['Bad'], solutions: ['Replace'] },
    { code: 'E1', name: 'Leak', causes: ['Leak'], solutions: ['Find'] },
    { code: 'E2', name: 'Drain', causes: ['Block'], solutions: ['Clean'] }
  ],
  Refrigerator: [
    { code: 'SY CE', name: 'Comm', causes: ['Wiring'], solutions: ['Check'] },
    { code: 'SY CF', name: 'Cooling', causes: ['Compressor'], solutions: ['Check'] },
    { code: 'Er FF', name: 'Fan', causes: ['Motor'], solutions: ['Replace'] },
    { code: 'Er dF', name: 'Defrost', causes: ['Heater'], solutions: ['Replace'] },
    { code: '22E', name: 'Ice Maker', causes: ['Motor'], solutions: ['Reset'] },
    { code: '88 88', name: 'Display', causes: ['Board'], solutions: ['Replace'] },
    { code: 'H70', name: 'High Temp', causes: ['System'], solutions: ['Check'] },
    { code: 'FF', name: 'Fan', causes: ['Failed'], solutions: ['Replace'] },
    { code: 'DF', name: 'Defrost', causes: ['Heater'], solutions: ['Replace'] },
    { code: 'EC', name: 'Evap', causes: ['Frozen'], solutions: ['Defrost'] }
  ],
  Oven: [
    { code: 'F0E1', name: 'Control', causes: ['Board'], solutions: ['Replace'] },
    { code: 'F2E1', name: 'Keypad', causes: ['Bad'], solutions: ['Replace'] },
    { code: 'F3E0', name: 'Sensor', causes: ['Failed'], solutions: ['Replace'] },
    { code: 'F3E1', name: 'Probe', causes: ['Bad'], solutions: ['Replace'] },
    { code: 'F5E0', name: 'Door Switch', causes: ['Failed'], solutions: ['Replace'] },
    { code: 'F0', name: 'Control', causes: ['Board'], solutions: ['Replace'] },
    { code: 'F1', name: 'Keypad', causes: ['Bad'], solutions: ['Replace'] },
    { code: 'F2', name: 'Temp', causes: ['Sensor'], solutions: ['Replace'] }
  ],
  Microwave: [
    { code: 'F1', name: 'Control', causes: ['Board'], solutions: ['Replace'] },
    { code: 'F2', name: 'Keypad', causes: ['Bad'], solutions: ['Replace'] },
    { code: 'F3', name: 'Sensor', causes: ['Failed'], solutions: ['Replace'] },
    { code: 'F6', name: 'Magnetron', causes: ['Bad'], solutions: ['Replace'] }
  ]
}

// OBD-II
const OBD_CODES = [
  { code: 'P0100', name: 'Mass Air Flow Circuit Malfunction', causes: ['MAF sensor', 'Wiring'], solutions: ['Replace MAF', 'Check wiring'] },
  { code: 'P0101', name: 'MAF Circuit Range/Performance', causes: ['MAF dirty', 'Air leak'], solutions: ['Clean MAF', 'Fix leak'] },
  { code: 'P0115', name: 'Coolant Temp Circuit Malfunction', causes: ['ECT sensor', 'Coolant'], solutions: ['Replace ECT'] },
  { code: 'P0120', name: 'Throttle Position Sensor Fault', causes: ['TPS failed', 'Wiring'], solutions: ['Replace TPS'] },
  { code: 'P0130', name: 'O2 Sensor Circuit Malfunction', causes: ['O2 sensor', 'Exhaust'], solutions: ['Replace O2'] },
  { code: 'P0171', name: 'System Too Lean Bank 1', causes: ['Vacuum leak', 'MAF dirty'], solutions: ['Fix leak', 'Clean MAF'] },
  { code: 'P0300', name: 'Random Cylinder Misfire', causes: ['Spark plugs', 'Coils'], solutions: ['Replace plugs', 'Replace coils'] },
  { code: 'P0301', name: 'Cylinder 1 Misfire', causes: ['Spark plug', 'Coil'], solutions: ['Replace plug', 'Replace coil'] },
  { code: 'P0302', name: 'Cylinder 2 Misfire', causes: ['Spark plug', 'Coil'], solutions: ['Replace plug', 'Replace coil'] },
  { code: 'P0335', name: 'Crankshaft Position Sensor', causes: ['CKP sensor', 'Tone ring'], solutions: ['Replace CKP'] },
  { code: 'P0340', name: 'Camshaft Position Sensor', causes: ['CMP sensor', 'Timing chain'], solutions: ['Replace CMP'] },
  { code: 'P0401', name: 'EGR Flow Insufficient', causes: ['EGR valve', 'Carbon'], solutions: ['Clean EGR'] },
  { code: 'P0420', name: 'Catalyst Efficiency Low Bank 1', causes: ['Catalytic converter', 'O2 sensor'], solutions: ['Replace cat'] },
  { code: 'P0440', name: 'EVAP System Malfunction', causes: ['Gas cap', 'EVAP leak'], solutions: ['Replace cap'] },
  { code: 'P0500', name: 'Vehicle Speed Sensor', causes: ['VSS sensor', 'Wiring'], solutions: ['Replace VSS'] },
  { code: 'P0505', name: 'Idle Control Malfunction', causes: ['IAC valve', 'Throttle body'], solutions: ['Clean IAC'] },
  { code: 'P0562', name: 'System Voltage Low', causes: ['Battery', 'Alternator'], solutions: ['Test battery', 'Test alternator'] },
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
  { code: 'U0100', name: 'Lost Comm With ECM', causes: ['ECU', 'CAN bus'], solutions: ['Check ECU', 'Check CAN'] },
  { code: 'U0101', name: 'Lost Comm With TCM', causes: ['TCU', 'CAN bus'], solutions: ['Check TCU'] },
  { code: 'B0001', name: 'Airbag Deployment Control', causes: ['Airbag', 'Sensor'], solutions: ['Check airbag'] },
  { code: 'C0035', name: 'Left Front Wheel Speed', causes: ['Wheel sensor', 'Tone ring'], solutions: ['Replace sensor'] },
  { code: 'C0040', name: 'Right Front Wheel Speed', causes: ['Wheel sensor', 'Tone ring'], solutions: ['Replace sensor'] }
]

const APPLIANCE_BRANDS = [
  { name: 'Whirlpool', prefix: { Washer: 'WTW', Dryer: 'WED', Dishwasher: 'WDF', Refrigerator: 'WR', Oven: 'WOS', Microwave: 'WMW' } },
  { name: 'LG', prefix: { Washer: 'WM', Dryer: 'DLE', Dishwasher: 'LDF', Refrigerator: 'LM', Oven: 'LWO' } },
  { name: 'Samsung', prefix: { Washer: 'WF', Dryer: 'DV', Dishwasher: 'DW', Refrigerator: 'RF', Oven: 'NE' } },
  { name: 'GE', prefix: { Washer: 'GTD', Dryer: 'GTP', Dishwasher: 'GDT', Refrigerator: 'GSS' } },
  { name: 'Maytag', prefix: { Washer: 'MVW', Dryer: 'MED', Dishwasher: 'MDT', Refrigerator: 'MSS' } },
  { name: 'Kenmore', prefix: { Washer: '417', Dryer: '417', Dishwasher: '665', Refrigerator: '253' } },
  { name: 'Electrolux', prefix: { Washer: 'EWF', Dryer: 'EWE', Dishwasher: 'ESI', Refrigerator: 'EI' } },
  { name: 'Bosch', prefix: { Washer: 'WAW', Dryer: 'WTG', Dishwasher: 'SHP', Refrigerator: 'B' } },
  { name: 'Frigidaire', prefix: { Washer: 'FFR', Dryer: 'FDE', Dishwasher: 'FDB', Refrigerator: 'FFF' } },
  { name: 'Amana', prefix: { Washer: 'NTW', Dryer: 'NED', Dishwasher: 'ADB', Refrigerator: 'A' } },
  { name: 'KitchenAid', prefix: { Washer: 'K', Dryer: 'K', Dishwasher: 'KD', Refrigerator: 'K' } },
  { name: 'Hotpoint', prefix: { Washer: 'HTW', Dryer: 'HTP', Dishwasher: 'HTD', Refrigerator: 'H' } },
  { name: 'Miele', prefix: { Washer: 'W', Dryer: 'T', Dishwasher: 'G', Refrigerator: 'K' } },
  { name: 'Siemens', prefix: { Washer: 'WM', Dryer: 'WT', Dishwasher: 'SN', Refrigerator: 'K' } },
  { name: 'Hisense', prefix: { Washer: 'H', Dryer: 'H', Dishwasher: 'H', Refrigerator: 'H' } },
  { name: 'Haier', prefix: { Washer: 'H', Dryer: 'H', Dishwasher: 'H', Refrigerator: 'H' } }
]

const CAR_BRANDS = [
  { name: 'Toyota', car: 8, ev: 3 },
  { name: 'Honda', car: 8, ev: 2 },
  { name: 'Ford', car: 10, ev: 4 },
  { name: 'Chevrolet', car: 8, ev: 3 },
  { name: 'BMW', car: 8, ev: 2 },
  { name: 'Mercedes-Benz', car: 6, ev: 2 },
  { name: 'Audi', car: 6, ev: 2 },
  { name: 'Volkswagen', car: 8, ev: 3 },
  { name: 'Hyundai', car: 6, ev: 3 },
  { name: 'Kia', car: 6, ev: 3 },
  { name: 'Nissan', car: 6, ev: 2 },
  { name: 'Mazda', car: 5, ev: 0 },
  { name: 'Subaru', car: 5, ev: 0 },
  { name: 'Jeep', car: 5, ev: 2 },
  { name: 'GMC', car: 5, ev: 2 },
  { name: 'Cadillac', car: 4, ev: 2 },
  { name: 'Lexus', car: 4, ev: 2 },
  { name: 'Volvo', car: 4, ev: 2 },
  { name: 'Porsche', car: 3, ev: 2 },
  { name: 'Tesla', car: 0, ev: 8 },
  { name: 'BYD', car: 0, ev: 6 },
  { name: 'NIO', car: 0, ev: 5 },
  { name: 'Xpeng', car: 0, ev: 4 },
  { name: 'Li Auto', car: 0, ev: 4 },
  { name: 'Geely', car: 0, ev: 4 }
]

let codes = []
let id = 1

// 家电
for (const brand of APPLIANCE_BRANDS) {
  for (const [category, templates] of Object.entries(APPLIANCE_TEMPLATES)) {
    if (!brand.prefix[category]) continue
    
    const modelCount = category === 'Refrigerator' ? 12 : 10
    
    for (let m = 0; m < modelCount; m++) {
      const model = `${brand.prefix[category]}${100 + m * 10}`
      
      for (const template of templates) {
        codes.push({
          id: id++,
          brand: brand.name,
          category,
          model,
          series: 'Standard',
          code: template.code,
          name: template.name,
          description: `${template.name} error in ${brand.name} ${category}.`,
          causes: [...template.causes],
          solutions: [...template.solutions],
          difficulty: 'Medium',
          estimatedTime: '30 min',
          productInfo: {
            manufacturer: `${brand.name} Corp`,
            yearIntroduced: '2024',
            warranty: '1 year',
            features: ['Standard'],
            commonIssues: [...template.causes],
            voltage: '120V'
          }
        })
      }
    }
  }
}

// 汽车
for (const brand of CAR_BRANDS) {
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
        difficulty: 'Medium',
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

console.log(`✅ Total: ${codes.length} error codes`)

const output = {
  errorCodes: codes,
  brands: [...new Set(codes.map(c => c.brand))],
  categories: [...new Set(codes.map(c => c.category))],
  metadata: {
    totalCodes: codes.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    version: '12.0-FULL',
    note: 'Complete - appliances + automotive + EV'
  }
}

fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2))

const stats = {}
codes.forEach(c => { stats[c.category] = (stats[c.category] || 0) + 1 })
console.log('\n📊 Categories:')
Object.entries(stats).sort((a,b) => b[1]-a[1]).forEach(([cat, count]) => console.log(`   ${cat}: ${count}`))

console.log(`\n📁 Size: ${(fs.statSync(DB_PATH).size / 1024 / 1024).toFixed(1)} MB`)
