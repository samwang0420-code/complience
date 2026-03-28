export const metadata = {
  title: 'GE Oven Error Code F2 - Fix Guide',
  description: 'What does F2 mean on your GE oven? Find causes and solutions for GE range F2 error code.',
}

export default function GEOvenF2Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        GE Oven Error Code F2 - Fix Guide
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        The F2 error code on GE ovens indicates a temperature sensor problem.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What F2 Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          F2 indicates the oven temperature sensor (thermistor) is reading too hot or has failed. 
          The oven may display this code when temperature exceeds 350°F (177°C) unexpectedly.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Common Causes</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Faulty oven temperature sensor/thermistor</li>
          <li>Wiring harness damage or loose connection</li>
          <li>Control board malfunction</li>
          <li>Spark igniter issues (gas models)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>How to Fix</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 1: Check Temperature Sensor</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Locate the temperature sensor (usually inside the oven, near the back wall). 
            Unplug the oven, disconnect the sensor, and test with a multimeter. 
            Normal resistance at room temperature: ~1100 ohms.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 2: Check Wiring</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Inspect the wiring harness for damage, burn marks, or loose connections. 
            Repair or replace as needed.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 3: Replace Sensor</h3>
          <p style={{ color: '#94a3b8' }}>
            If the sensor shows abnormal resistance, replace with OEM part. 
            GE temperature sensor part #: WB21T10011, WB22K10002
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Compatible Models</h2>
        <p style={{ color: '#94a3b8' }}>
          Works with: GE Profile, GE Adora, GE Monogram, HotPoint, RCA ovens. 
          F2 code also appears on Kenmore and Hotpoint ovens with GE technology.
        </p>
      </section>
    </div>
  )
}
