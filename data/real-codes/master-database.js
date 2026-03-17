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
  },

  // ============ MAYTAG ============
  Maytag: {
    Washer: [
      { code: 'E1', name: 'Water Inlet Fault', desc: 'Water not filling properly.', causes: ['Inlet valve failed', 'Water supply issue'], solutions: ['Check inlet valve', 'Verify water supply'] },
      { code: 'E2', name: 'Drain Fault', desc: 'Water not draining.', causes: ['Pump clogged', 'Hose blocked'], solutions: ['Clean pump', 'Check hose'] },
      { code: 'E3', name: 'Unbalance', desc: 'Load unbalanced during spin.', causes: ['Uneven load'], solutions: ['Redistribute clothes'] },
      { code: 'E4', name: 'Overflow', desc: 'Water overflow detected.', causes: ['Valve stuck', 'Sensor fail'], solutions: ['Replace valve', 'Check sensor'] },
      { code: 'F5', name: 'Door Switch Fault', desc: 'Door switch circuit problem.', causes: ['Switch failed', 'Wiring issue'], solutions: ['Replace switch', 'Check wiring'] },
      { code: 'F7', name: 'Motor Fault', desc: 'Drive motor malfunction.', causes: ['Motor failed', 'Belt broken'], solutions: ['Replace motor', 'Check belt'] },
      { code: 'F0', name: 'Control Board Fault', desc: 'Main control board error.', causes: ['Board failed'], solutions: ['Replace board'] }
    ],
    Dryer: [
      { code: 'E1', name: 'Temperature Sensor', desc: 'Temperature sensor failed.', causes: ['Sensor bad'], solutions: ['Replace sensor'] },
      { code: 'E2', name: 'Heater Fault', desc: 'Heater not working.', causes: ['Heater failed'], solutions: ['Replace heater'] },
      { code: 'AF', name: 'Airflow Error', desc: 'Blocked airflow.', causes: ['Lint trap full', 'Vent blocked'], solutions: ['Clean lint trap', 'Clear vent'] }
    ]
  },

  // ============ KENMORE ============
  Kenmore: {
    Washer: [
      { code: 'F21', name: 'Drain Timeout', desc: 'Drain cycle timeout.', causes: ['Clogged drain'], solutions: ['Clean drain hose'] },
      { code: 'F22', name: 'Door Lock', desc: 'Door lock failure.', causes: ['Lock broken'], solutions: ['Replace lock'] },
      { code: 'F23', name: 'Water Fill', desc: 'Water fill error.', causes: ['Valve issue'], solutions: ['Check valve'] },
      { code: 'F24', name: 'Water Level', desc: 'Water level sensor fault.', causes: ['Sensor bad'], solutions: ['Replace sensor'] },
      { code: 'F25', name: 'Temperature Sensor', desc: 'Temp sensor error.', causes: ['Sensor failed'], solutions: ['Replace sensor'] },
      { code: 'UE', name: 'Unbalance', desc: 'Load unbalanced.', causes: ['Uneven load'], solutions: ['Balance load'] }
    ],
    Dryer: [
      { code: 'E1', name: 'Overheat', desc: 'Temperature too high.', causes: ['Vent blocked'], solutions: ['Clean vent'] },
      { code: 'E2', name: 'No Heat', desc: 'Heater not working.', causes: ['Heater failed'], solutions: ['Replace heater'] },
      { code: 'PF', name: 'Power Failure', desc: 'Power interrupted.', causes: ['Power outage'], solutions: ['Restart'] }
    ],
    Refrigerator: [
      { code: '22E', name: 'Ice Maker', desc: 'Ice maker fault.', causes: ['Motor jam'], solutions: ['Reset ice maker'] },
      { code: 'FF', name: 'Fan Fault', desc: 'Evaporator fan error.', causes: ['Fan motor'], solutions: ['Replace fan'] }
    ]
  },

  // ============ ELECTROLUX ============
  Electrolux: {
    Washer: [
      { code: 'E10', name: 'Water Inlet Fault', desc: 'Water not entering.', causes: ['Inlet valve'], solutions: ['Replace valve'] },
      { code: 'E20', name: 'Drain Fault', desc: 'Drain problem.', causes: ['Pump blocked'], solutions: ['Clean pump'] },
      { code: 'E40', name: 'Door Lock', desc: 'Door not locking.', causes: ['Lock failed'], solutions: ['Replace lock'] },
      { code: 'E50', name: 'Motor Fault', desc: 'Motor not running.', causes: ['Motor failed'], solutions: ['Replace motor'] },
      { code: 'E60', name: 'Heater Fault', desc: 'Heater error.', causes: ['Heater bad'], solutions: ['Replace heater'] },
      { code: 'E70', name: 'NTC Fault', desc: 'Temperature sensor error.', causes: ['Sensor failed'], solutions: ['Replace sensor'] }
    ],
    Dryer: [
      { code: 'E10', name: 'Temp Sensor', desc: 'Temperature sensor fault.', causes: ['Sensor bad'], solutions: ['Replace sensor'] },
      { code: 'E20', name: 'Heater Fault', desc: 'Heater not working.', causes: ['Heater failed'], solutions: ['Replace heater'] },
      { code: 'E30', name: 'Motor Fault', desc: 'Motor error.', causes: ['Motor problem'], solutions: ['Check motor'] }
    ],
    Dishwasher: [
      { code: 'i10', name: 'Water Inlet', desc: 'Water fill issue.', causes: ['Valve issue'], solutions: ['Check valve'] },
      { code: 'i20', name: 'Drain Fault', desc: 'Drain problem.', causes: ['Pump blocked'], solutions: ['Clean pump'] },
      { code: 'i30', name: 'AquaStop', desc: 'Leak detection.', causes: ['Water leak'], solutions: ['Check for leaks'] }
    ]
  },

  // ============ BOSCH ============
  Bosch: {
    Washer: [
      { code: 'E17', name: 'Water Inlet Fault', desc: 'Fill time too long.', causes: ['Water supply', 'Valve issue'], solutions: ['Check supply', 'Replace valve'] },
      { code: 'E18', name: 'Drain Fault', desc: 'Drain time too long.', causes: ['Blocked drain'], solutions: ['Clean drain'] },
      { code: 'E23', name: 'Drain Pump Fault', desc: 'Drain pump malfunction.', causes: ['Pump failed'], solutions: ['Replace pump'] },
      { code: 'E24', name: 'Door Lock', desc: 'Door lock error.', causes: ['Lock failed'], solutions: ['Replace lock'] },
      { code: 'E27', name: 'NTC Fault', desc: 'Temperature sensor error.', causes: ['Sensor bad'], solutions: ['Replace sensor'] },
      { code: 'F17', name: 'Door Timeout', desc: 'Door not closing.', causes: ['Lock issue'], solutions: ['Check lock'] }
    ],
    Dishwasher: [
      { code: 'E15', name: 'Leak Detected', desc: 'Water in base.', causes: ['Leak', 'Seal failed'], solutions: ['Find leak', 'Replace seal'] },
      { code: 'E24', name: 'Drain Fault', desc: 'Not draining.', causes: ['Blocked drain'], solutions: ['Clean filter'] },
      { code: 'E25', name: 'Circulation Pump', desc: 'Pump not working.', causes: ['Pump failed'], solutions: ['Replace pump'] }
    ]
  },

  // ============ FRIGIDAIRE ============
  Frigidaire: {
    Washer: [
      { code: 'E10', name: 'Water Inlet', desc: 'Fill valve error.', causes: ['Valve failed'], solutions: ['Replace valve'] },
      { code: 'E20', name: 'Drain Fault', desc: 'Drain problem.', causes: ['Pump blocked'], solutions: ['Clean pump'] },
      { code: 'E40', name: 'Door', desc: 'Door lock issue.', causes: ['Lock failed'], solutions: ['Replace lock'] },
      { code: 'E50', name: 'Motor', desc: 'Motor fault.', causes: ['Motor failed'], solutions: ['Replace motor'] }
    ],
    Refrigerator: [
      { code: 'SY CE', name: 'Communication', desc: 'Board communication error.', causes: ['Wiring', 'Board'], solutions: ['Check wiring', 'Replace board'] },
      { code: 'H1', name: 'High Temp', desc: 'Temperature too high.', causes: ['Compressor', 'Fan'], solutions: ['Check compressor'] }
    ]
  },

  // ============ YORK ============
  York: {
    HVAC: [
      { code: 'A1', name: 'System Fault', desc: 'General system fault.', causes: ['Multiple'], solutions: ['Reset system'] },
      { code: 'A2', name: 'Lockout', desc: 'System locked out.', causes: ['Safety trip'], solutions: ['Reset breaker'] },
      { code: 'E1', name: 'High Pressure', desc: 'High pressure trip.', causes: ['Condenser dirty'], solutions: ['Clean condenser'] },
      { code: 'E2', name: 'Low Pressure', desc: 'Low pressure trip.', causes: ['Low refrigerant'], solutions: ['Check refrigerant'] },
      { code: 'E3', name: 'High Temp', desc: 'Discharge temp high.', causes: ['Poor airflow'], solutions: ['Clean coils'] }
    ]
  },

  // ============ TRANE ============
  Trane: {
    HVAC: [
      { code: 'E1', name: 'High Pressure Switch', desc: 'High pressure fault.', causes: ['Dirty condenser'], solutions: ['Clean condenser coil'] },
      { code: 'E2', name: 'Low Pressure Switch', desc: 'Low pressure fault.', causes: ['Low refrigerant'], solutions: ['Check for leaks'] },
      { code: 'E3', name: 'Compressor Contactor', desc: 'Contactor stuck.', causes: ['Contactor failed'], solutions: ['Replace contactor'] },
      { code: 'E4', name: 'Loss of Airflow', desc: 'Low airflow.', causes: ['Dirty filter', 'Blower issue'], solutions: ['Replace filter', 'Check blower'] },
      { code: 'E5', name: 'Temperature Fault', desc: 'Sensor error.', causes: ['Sensor failed'], solutions: ['Replace sensor'] }
    ]
  },

  // ============ HONEYWELL ============
  Honeywell: {
    PLC: [
      { code: 'F00', name: 'Watchdog Fault', desc: 'CPU not responding.', causes: ['CPU hang'], solutions: ['Reboot PLC'] },
      { code: 'F01', name: 'Memory Error', desc: 'Memory fault.', causes: ['Corruption'], solutions: ['Clear memory'] },
      { code: 'F02', name: 'I/O Error', desc: 'I/O module fault.', causes: ['Module failed'], solutions: ['Replace module'] },
      { code: 'F03', name: 'Battery Low', desc: 'Battery voltage low.', causes: ['Battery dead'], solutions: ['Replace battery'] }
    ]
  },

  // ============ OMRON ============
  Omron: {
    PLC: [
      { code: 'FAL 00', name: 'System Error', desc: 'CPU error.', causes: ['CPU failed'], solutions: ['Replace CPU'] },
      { code: 'FAL 01', name: 'Memory Error', desc: 'Memory fault.', causes: ['Memory bad'], solutions: ['Clear memory'] },
      { code: 'FAL 02', name: 'I/O Bus Error', desc: 'I/O bus fault.', causes: ['Bus issue'], solutions: ['Check bus'] },
      { code: 'FAL 03', name: 'Battery Error', desc: 'Battery low.', causes: ['Battery dead'], solutions: ['Replace battery'] }
    ]
  },

  // ============ MITSUBISHI ============
  Mitsubishi: {
    PLC: [
      { code: '3401', name: 'CPU Error', desc: 'CPU module error.', causes: ['CPU failed'], solutions: ['Replace CPU'] },
      { code: '3402', name: 'Memory Card', desc: 'Memory card error.', causes: ['Card failed'], solutions: ['Replace card'] },
      { code: '3403', name: 'Watchdog', desc: 'Watchdog timer.', causes: ['CPU hang'], solutions: ['Reboot'] },
      { code: '3404', name: 'I/O Error', desc: 'I/O error.', causes: ['Module fault'], solutions: ['Check modules'] }
    ],
    CNC: [
      { code: 'S01', name: 'Servo Alarm', desc: 'Servo system alarm.', causes: ['Servo issue'], solutions: ['Check servo'] },
      { code: 'S02', name: 'Spindle Alarm', desc: 'Spindle fault.', causes: ['Spindle issue'], solutions: ['Check spindle'] }
    ]
  },

  // ============ KUKA ============
  KUKA: {
    Robotics: [
      { code: 'KSS 001', name: 'Safety Stop', desc: 'Safety stop activated.', causes: ['E-stop', 'Gate open'], solutions: ['Release E-stop'] },
      { code: 'KSS 002', name: 'Path Error', desc: 'Path deviation.', causes: ['Collision'], solutions: ['Check for collision'] },
      { code: 'KSS 003', name: 'Motor Fault', desc: 'Axis motor error.', causes: ['Motor failed'], solutions: ['Check motors'] },
      { code: 'KSS 004', name: 'I/O Error', desc: 'I/O fault.', causes: ['I/O issue'], solutions: ['Check I/O'] }
    ]
  }
}

module.exports = { REAL_ERROR_CODES }
