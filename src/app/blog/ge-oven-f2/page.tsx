export const metadata = {
  title: 'GE Oven F2 Error Code - Complete Fix Guide',
  description: 'GE oven showing F2 error? Temperature sensor fix guide. Causes, DIY repair steps, and replacement cost.',
}

export default function GEOvenF2Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '16px' }}>
        ⚠️ F2 = Temperature Sensor Fault
      </div>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>GE Oven F2 Error Code - Complete Fix Guide</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Your GE oven showing F2? This is the complete guide to diagnose and fix the temperature sensor issue yourself.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What F2 Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          F2 indicates the <strong style={{color: '#fff'}}>oven temperature sensor (thermistor)</strong> is malfunctioning. 
          The sensor is reading temperatures incorrectly - either too high or too low - which triggers the error. 
          Your oven may <strong style={{color: '#fff'}}>not heat, overheat, or shut down</strong> for safety.
        </p>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', marginTop: '15px' }}>
          <strong style={{color: '#f59e0b'}}>Warning:</strong> Do not use the oven if displaying F2 - it could overheat and become a fire hazard.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔧 Step-by-Step Fix</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          
          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 1: Power Reset (Try First)</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Sometimes a simple reset clears the error.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Turn off oven at the circuit breaker</li>
                <li>Wait <strong>60 seconds</strong></li>
                <li>Turn breaker back on</li>
                <li>Try to set oven to a low temperature (250°F)</li>
                <li>If F2 returns, proceed to Step 2</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 2: Locate the Temperature Sensor</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>The sensor is usually near the oven cavity.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Open the oven door</li>
                <li>Look for a <strong>thin metal probe</strong> sticking into the oven cavity (top, back, or side)</li>
                <li>It's about 2-3 inches long with 2 wires connected</li>
                <li>May be behind a panel on some models</li>
                <li>Take a photo before disconnecting</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 3: Test the Temperature Sensor</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Use a multimeter to check if the sensor is faulty.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Set multimeter to <strong>Ohms (Ω)</strong> setting</li>
                <li>Disconnect the sensor wires</li>
                <li>Place meter probes on sensor terminals</li>
                <li>At room temperature (70°F), should read <strong>1000-1100 ohms</strong></li>
                <li>If reading is way off (0, infinite, or 500+ off), sensor is bad</li>
              </ol>
              <p style={{ color: '#f59e0b', marginTop: '10px' }}>💡 Pro tip: Resistance should drop as temperature rises.</p>
            </div>
          </div>

          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 4: Check Wiring</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Sometimes the problem is in the wires, not the sensor.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Inspect the wire harness for damage</li>
                <li>Look for melted, cracked, or loose wires</li>
                <li>Check the connection at the control board</li>
                <li>Reroute or replace damaged wires</li>
                <li>Use wire connectors for any splices</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 5: Replace the Sensor</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>If tests confirm the sensor is bad, replace it.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Order correct part for your model</li>
                <li>Disconnect old sensor wires</li>
                <li>Remove sensor (usually screws in)</li>
                <li>Install new sensor in same position</li>
                <li>Reconnect wires (match colors)</li>
                <li>Test oven at 350°F</li>
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>💰 Parts Cost Guide</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%' }}>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Oven Temperature Sensor</td><td style={{ padding: '10px', color: '#22c55e' }}>$20-50</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Wiring Harness</td><td style={{ padding: '10px', color: '#22c55e' }}>$15-40</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Control Board</td><td style={{ padding: '10px', color: '#22c55e' }}>$150-300</td></tr>
            <tr><td style={{ padding: '10px', color: '#94a3b8' }}>Professional Service</td><td style={{ padding: '10px', color: '#22c55e' }}>$100-200</td></tr>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>📋 Compatible Models</h2>
        <p style={{ color: '#94a3b8' }}>JBP20, JBP21, JBP24, JBP26, JBP30, JBP35, JBP40, JBP45, JBP47, JBP48, JBP55, JBP57, JBP59, JBP60, JBP61, JBP62, JBP63, 
        JB645, JB655, JB660, JB705, JB710, JB715, JB720, JB735, JB750, JB755, 
        and all GE, GE Profile, and Hotpoint electric ranges and wall ovens.</p>
      </section>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>✅ Prevention Tips</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Don't use oven cleaners inside - they damage the sensor</li>
          <li>Keep the sensor probe clean and dry</li>
          <li>Avoid slamming the oven door</li>
          <li>Replace sensor if showing F2 repeatedly</li>
          <li>Have a fire extinguisher nearby when using oven</li>
        </ul>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#f59e0b', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Medium DIY</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 30-60 minutes</span>
      </div>
    </div>
  )
}