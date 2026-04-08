export const metadata = {
  title: 'Hisense Error Codes - Complete List for All Appliances',
  description: 'Complete list of Hisense error codes for dishwashers, washing machines, dryers, and refrigerators. Find causes and fixes for every code.',
}

export default function HisenseErrorCodesPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Hisense Error Codes: Complete List for All Appliances</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Your Hisense appliance showing an error code? This comprehensive guide covers every Hisense error code for dishwashers, washing machines, dryers, and refrigerators. Find exactly what your code means and how to fix it.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #6366f1' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>How to Use This Guide</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          Error codes on Hisense appliances follow a consistent pattern. <strong style={{color: '#fff'}}>E codes</strong> typically indicate water or temperature issues, while <strong style={{color: '#fff'}}>F codes</strong> usually point to mechanical or electrical problems. Find your specific code below and follow the troubleshooting steps.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Hisense Dishwasher Error Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          
          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E1 - Water Inlet Error</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> The dishwasher is not receiving water properly.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Causes:</strong> Closed water valve, kinked inlet hose, low water pressure, clogged inlet screen.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', marginBottom: '8px' }}><strong>Fix:</strong></p>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Verify the hot water valve under the sink is fully open</li>
                <li>Check inlet hose for kinks or crushing</li>
                <li>Clean the inlet valve screen</li>
                <li>Test water pressure (should be 20-120 PSI)</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E2 - Drain Error</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> The dishwasher cannot drain water properly.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Causes:</strong> Clogged drain hose, blocked filter, drain pump failure.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', marginBottom: '8px' }}><strong>Fix:</strong></p>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Clean the filter at the bottom of the dishwasher</li>
                <li>Check drain hose for clogs or kinks</li>
                <li>Verify drain hose height is correct</li>
                <li>Run a manual drain cycle</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E3 - Overheating</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Water temperature is too high.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Causes:</strong> Faulty thermostat, heating element malfunction.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', marginBottom: '8px' }}><strong>Fix:</strong></p>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Let the dishwasher cool down for 30 minutes</li>
                <li>Reset by unplugging for 2 minutes</li>
                <li>If error persists, test the thermostat</li>
                <li>Replace heating element if faulty</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E4 - Water Leakage</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Water has been detected outside the tub.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Causes:</strong> Cracked tub, loose hose connection, over-sudsing.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', marginBottom: '8px' }}><strong>Fix:</strong></p>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Check all hose connections for tightness</li>
                <li>Use only HE dishwasher detergent</li>
                <li>Inspect the door seal for leaks</li>
                <li>If tub is cracked, replacement is needed</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E5 - Water Level Fault</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> The water level sensor is not working correctly.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Causes:</strong> Faulty pressure switch, air tube blockage.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', marginBottom: '8px' }}><strong>Fix:</strong></p>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Clean the pressure switch hose</li>
                <li>Test the pressure switch with a multimeter</li>
                <li>Replace if faulty</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '10px' }}>E6 - Communication Error</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Control board communication failure.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Causes:</strong> Faulty control board, wiring issue.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <p style={{ color: '#22c55e', marginBottom: '8px' }}><strong>Fix:</strong></p>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Reset by unplugging for 2 minutes</li>
                <li>Check wire connections to the control board</li>
                <li>If error persists, replace the control board</li>
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Hisense Washing Machine Error Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          
          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E11 - Water Fill Problem</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Water is not entering the drum.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Fix:</strong> Check inlet valve, water supply, and pressure.</p>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E12 - Water Overflow</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Too much water detected.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Fix:</strong> Check inlet valve and pressure switch.</p>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E21 - Drain Problem</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Drain pump not working.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Fix:</strong> Clean filter, check pump, inspect drain hose.</p>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E31 - NTC Fault</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Temperature sensor not working.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Fix:</strong> Test NTC thermistor, replace if faulty.</p>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '10px' }}>E41 - Door Lock Issue</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Meaning:</strong> Door not locking properly.</p>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}><strong>Fix:</strong> Clean latch, test door switch, replace if needed.</p>
          </div>

        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Hisense Dryer Error Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          
          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E1 - Temperature Sensor Error</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Temperature sensor is malfunctioning. Test and replace sensor.</p>
          </div>

          <div style={{ marginBottom: '25px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444', marginBottom: '10px' }}>E2 - Moisture Sensor Error</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Moisture sensor not detecting properly. Clean sensor contacts.</p>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '10px' }}>E3 - Vent Blockage</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Dryer vent is restricted. Clean vent hose and exterior vent.</p>
          </div>

        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Parts Cost Guide</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%' }}>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Water Inlet Valve</td><td style={{ padding: '10px', color: '#22c55e' }}>$30-60</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Drain Pump</td><td style={{ padding: '10px', color: '#22c55e' }}>$40-80</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Temperature Sensor/NTC</td><td style={{ padding: '10px', color: '#22c55e' }}>$20-40</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Door Latch</td><td style={{ padding: '10px', color: '#22c55e' }}>$30-60</td></tr>
            <tr><td style={{ padding: '10px', color: '#94a3b8' }}>Control Board</td><td style={{ padding: '10px', color: '#22c55e' }}>$100-200</td></tr>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Compatible Models</h2>
        <p style={{ color: '#94a3b8' }}>Hisense DH-4520, DH-6020, DH-7020, DW-4520, DW-6020, DW-7020, 
        Hi-WM55, Hi-WM75, Hi-WM85, Hi-WM105, Hi-WM120, 
        Hi-DFD24, Hi-DFD28, and all Hisense compact, countertop, and built-in dishwashers.</p>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#22c55e', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ DIY-Friendly</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 15-60 Minutes</span>
      </div>
    </div>
  )
}