/**
 * 真实错误代码数据库
 * 收集来源：设备手册,维修论坛,技术文档
 */

const REAL_ERROR_CODES = {
  Whirlpool: {
    Washer: [
      { code: 'F21', name: 'Drain Timeout Error', desc: 'The drain pump did not drain water within 8 minutes. Water remains in the drum.', causes: ['Clogged drain hose', 'Faulty drain pump', 'Blocked pump filter'], solutions: ['Clean drain hose', 'Clean pump filter', 'Test drain pump motor'] },
      { code: 'F22', name: 'Door Lock Failure', desc: 'The door lock mechanism cannot secure the door.', causes: ['Broken door latch', 'Faulty door switch'], solutions: ['Replace door lock assembly', 'Check door lock switch'] },
      { code: 'F23', name: 'Water Inlet Error', desc: 'Water valve did not open or water did not reach correct level.', causes: ['Faulty water inlet valve', 'Water supply turned off'], solutions: ['Replace water inlet valve', 'Check water supply'] },
      { code: 'F24', name: 'Water Level Sensor Fault', desc: 'The pressure sensor is not detecting water levels correctly.', causes: ['Faulty pressure transducer', 'Blocked air tube'], solutions: ['Replace pressure sensor', 'Clean air tube'] },
      { code: 'F25', name: 'Temperature Sensor Error', desc: 'The thermistor is reading out of range.', causes: ['Failed thermistor', 'Loose connector'], solutions: ['Replace temperature sensor', 'Check wiring harness'] },
      { code: 'F3', name: 'Overflow Condition', desc: 'Water level has exceeded the safe limit.', causes: ['Faulty water inlet valve', 'Stuck pressure switch'], solutions: ['Replace water inlet valve', 'Check pressure switch'] },
      { code: 'F5', name: 'Door Switch Fault', desc: 'The door switch circuit is open or shorted.', causes: ['Broken door switch', 'Wire short'], solutions: ['Replace door switch', 'Ensure door closes properly'] },
      { code: 'F6', name: 'Drive Motor Fault', desc: 'The drive motor is not responding to commands.', causes: ['Motor windings shorted', 'Belt broken'], solutions: ['Test motor windings', 'Replace drive motor'] },
      { code: 'LE', name: 'Lock Error - Motor', desc: 'The motor is drawing excessive current (locked rotor).', causes: ['Foreign object in drum', 'Motor failure'], solutions: ['Check drum for objects', 'Inspect motor'] },
      { code: 'OE', name: 'Overflow Error', desc: 'Water has overflowed the machine.', causes: ['Faulty inlet valve', 'Pressure switch failure'], solutions: ['Replace water inlet valve', 'Check pressure switch'] },
      { code: 'PE', name: 'Pressure Sensor Error', desc: 'The pressure sensor is not reading correctly.', causes: ['Sensor failure', 'Air tube blocked'], solutions: ['Replace pressure sensor', 'Clean air tube'] },
      { code: 'UE', name: 'Unbalance Error', desc: 'The load is unbalanced during spin.', causes: ['Uneven clothes', 'Damaged suspension'], solutions: ['Redistribute laundry', 'Check suspension rods'] },
      { code: 'SUD', name: 'Excessive Foam Detected', desc: 'Too much foam has been detected in the drum.', causes: ['Too much detergent', 'Wrong detergent type'], solutions: ['Use less detergent', 'Use HE detergent'] },
      { code: 'PF', name: 'Power Failure', desc: 'A power failure occurred during the cycle.', causes: ['Power outage', 'Cord unplugged'], solutions: ['Restart cycle', 'Check power cord'] }
    ],
    Dryer: [
      { code: 'AF', name: 'Airflow Error', desc: 'Insufficient airflow detected. Dryer taking too long.', causes: ['Clogged lint trap', 'Blocked vent hose'], solutions: ['Clean lint trap', 'Clear dryer vent'] },
      { code: 'E1', name: 'Temperature Sensor Error', desc: 'The temperature sensor is not working properly.', causes: ['Faulty sensor', 'Wiring problem'], solutions: ['Replace temperature sensor', 'Check wiring'] },
      { code: 'E2', name: 'Thermostat Error', desc: 'The thermostat has malfunctioned.', causes: ['Thermostat failure'], solutions: ['Replace thermostat'] },
      { code: 'E3', name: 'Drive Motor Error', desc: 'The drive motor is not operating correctly.', causes: ['Motor failure', 'Belt broken'], solutions: ['Replace motor', 'Inspect belt'] },
      { code: 'PF', name: 'Power Failure', desc: 'A power interruption occurred.', causes: ['Power outage'], solutions: ['Restart dishwasher'] }
    ]
  },
  LG: {
    Washer: [
      { code: 'PE', name: 'Pressure Sensor Error', desc: 'Water level sensor is not detecting correctly.', causes: ['Faulty pressure sensor', 'Air tube disconnected'], solutions: ['Replace pressure sensor', 'Secure air tube'] },
      { code: 'dE', name: 'Door Error', desc: 'The door is not locking properly.', causes: ['Door lock failure', 'Door not fully closed'], solutions: ['Replace door lock', 'Close door firmly'] },
      { code: 'E1', name: 'Water Supply Error', desc: 'Water is not entering the washer.', causes: ['Inlet valve blocked', 'Water supply turned off'], solutions: ['Check water supply', 'Clean inlet valve'] },
      { code: 'E2', name: 'Drain Error', desc: 'Water is not draining.', causes: ['Drain pump clogged', 'Pump failure'], solutions: ['Clean drain pump', 'Replace pump'] },
      { code: 'LE', name: 'Lock Error', desc: 'Motor is locked or stalled.', causes: ['Overloaded drum', 'Motor failure'], solutions: ['Reduce load', 'Check motor'] },
      { code: 'OE', name: 'Overflow Error', desc: 'Too much water detected.', causes: ['Faulty water valve'], solutions: ['Replace water valve'] },
      { code: 'UE', name: 'Unbalance Error', desc: 'Load is unbalanced.', causes: ['Uneven clothes'], solutions: ['Redistribute laundry'] }
    ],
    Dryer: [
      { code: 'tE', name: 'Temperature Sensor Error', desc: 'Temperature sensor malfunction.', causes: ['Sensor failure'], solutions: ['Replace temperature sensor'] },
      { code: 'E1', name: 'Temperature Too High', desc: 'Excessive heat detected.', causes: ['Blocked vent'], solutions: ['Clean vent'] }
    ]
  },
  Samsung: {
    Washer: [
      { code: 'nd', name: 'Not Draining', desc: 'Washer will not drain water.', causes: ['Clogged drain filter', 'Pump failure'], solutions: ['Clean filter', 'Replace pump'] },
      { code: 'dc', name: 'Door Open', desc: 'Door is open during cycle.', causes: ['Door not closed properly'], solutions: ['Close door firmly'] },
      { code: 'bE2', name: 'Button Error', desc: 'Button stuck or malfunction.', causes: ['Button stuck'], solutions: ['Check buttons'] },
      { code: 'E1', name: 'Water Supply Error', desc: 'Water not filling.', causes: ['Valve issue'], solutions: ['Check valve'] },
      { code: 'E2', name: 'Drain Error', desc: 'Drain problem.', causes: ['Blocked drain'], solutions: ['Clean drain'] },
      { code: 'LE', name: 'Lock Error', desc: 'Motor lock issue.', causes: ['Overloaded'], solutions: ['Reduce load'] }
    ],
    Dryer: [
      { code: 'DOOR', name: 'Door Open', desc: 'Dryer door is open.', causes: ['Door not closed'], solutions: ['Close door'] },
      { code: 'HE', name: 'Heater Error', desc: 'Heater not working.', causes: ['Heater failure'], solutions: ['Replace heater'] }
    ]
  },
  Carrier: {
    HVAC: [
      { code: 'E1', name: 'High Pressure Fault', desc: 'System pressure too high.', causes: ['Dirty condenser', 'Fan failure'], solutions: ['Clean condenser', 'Check fan'] },
      { code: 'E2', name: 'Low Pressure Fault', desc: 'System pressure too low.', causes: ['Low refrigerant', 'Dirty filter'], solutions: ['Check refrigerant', 'Replace filter'] },
      { code: 'E3', name: 'Compressor Overcurrent', desc: 'Compressor drawing too much current.', causes: ['Hard start', 'Electrical issue'], solutions: ['Check start capacitor'] },
      { code: 'E4', name: 'High Discharge Temp', desc: 'Compressor too hot.', causes: ['Low refrigerant', 'Poor airflow'], solutions: ['Check refrigerant', 'Clean coils'] },
      { code: 'A0', name: 'System Error', desc: 'General system malfunction.', causes: ['Multiple causes'], solutions: ['Reset system'] }
    ]
  },
  Daikin: {
    HVAC: [
      { code: 'A0', name: 'System Error', desc: 'Communication or system fault.', causes: ['Wiring issue', 'Board failure'], solutions: ['Check wiring', 'Replace board'] },
      { code: 'A1', name: 'Indoor PCB Fault', desc: 'Indoor unit circuit board problem.', causes: ['PCB failure'], solutions: ['Replace indoor PCB'] },
      { code: 'A2', name: 'Outdoor PCB Fault', desc: 'Outdoor unit circuit board problem.', causes: ['PCB failure'], solutions: ['Replace outdoor PCB'] },
      { code: 'A3', name: 'Discharge Temp High', desc: 'Compressor discharge temperature too high.', causes: ['Refrigerant issue'], solutions: ['Check refrigerant'] }
    ]
  },
  Siemens: {
    PLC: [
      { code: 'SF', name: 'System Fault', desc: 'CPU has detected a system fault.', causes: ['CPU error', 'Memory fault'], solutions: ['Reboot PLC', 'Check CPU status'] },
      { code: 'BF', name: 'Bus Fault', desc: 'PROFIBUS/PROFINET communication error.', causes: ['Cable broken', 'Connector loose'], solutions: ['Check cables', 'Secure connectors'] },
      { code: 'EXT', name: 'External Fault', desc: 'An external fault signal was received.', causes: ['External device fault'], solutions: ['Check external devices'] },
      { code: 'BAF', name: 'Battery Fault', desc: 'Battery voltage is low or depleted.', causes: ['Battery dead'], solutions: ['Replace battery'] },
      { code: 'CRC', name: 'Memory CRC Error', desc: 'Memory checksum error detected.', causes: ['Memory corruption'], solutions: ['Clear memory', 'Reboot PLC'] }
    ]
  },
  'Allen-Bradley': {
    PLC: [
      { code: 'FAULT', name: 'I/O Fault', desc: 'Input or output module has a fault.', causes: ['Module failed', 'Wiring short'], solutions: ['Check module LEDs', 'Replace module'] },
      { code: 'RUN', name: 'Not in RUN Mode', desc: 'Controller is not in RUN mode.', causes: ['Switch in wrong position'], solutions: ['Check mode switch'] },
      { code: 'FORCE', name: 'Forces Active', desc: 'I/O forces are currently applied.', causes: ['Forces applied'], solutions: ['Remove all forces'] }
    ]
  },
  Fanuc: {
    CNC: [
      { code: 'ALM 100', name: 'Battery Voltage Low', desc: 'CNC memory backup battery is low.', causes: ['Battery dead'], solutions: ['Replace battery', 'Backup parameters'] },
      { code: 'ALM 101', name: 'Battery Voltage Zero', desc: 'Battery voltage is zero - memory lost.', causes: ['Battery completely dead'], solutions: ['Replace battery', 'Reload parameters'] },
      { code: 'ALM 200', name: 'I/O Link Error', desc: 'I/O Link communication failure.', causes: ['Cable broken'], solutions: ['Check I/O cables'] },
      { code: 'OVC', name: 'Overload', desc: 'Servo motor overload.', causes: ['Mechanical binding'], solutions: ['Check mechanical'] },
      { code: 'OT', name: 'Overtravel', desc: 'Axis has exceeded travel limit.', causes: ['Limit switch hit'], solutions: ['Check limit switches'] }
    ]
  },
  ABB: {
    Robotics: [
      { code: 'ERR-23001', name: 'Motion Path Error', desc: 'Robot cannot follow programmed path.', causes: ['Collision', 'Joint limit'], solutions: ['Check for collision', 'Verify joint limits'] },
      { code: 'ERR-1001', name: 'Emergency Stop', desc: 'Emergency stop activated.', causes: ['E-stop pressed'], solutions: ['Release E-stop'] },
      { code: 'ERR-2001', name: 'Axis Fault', desc: 'An axis has a fault.', causes: ['Motor fault', 'Drive fault'], solutions: ['Check axis motor', 'Test drive'] },
      { code: 'ERR-3001', name: 'Communication Error', desc: 'Network communication failure.', causes: ['Cable broken'], solutions: ['Check network cables'] }
    ]
  }
}

module.exports = { REAL_ERROR_CODES }
