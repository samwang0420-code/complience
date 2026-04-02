export const metadata = {
  title: 'P0300 Engine Code - Random Misfire Fix | Cost & Causes',
  description: 'P0300 diagnostic code? Random misfire causes, fixes, and cost. Complete guide for DIY repair.',
}

export default function P0300Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '16px' }}>
        🔧 OBD-II Code P0300
      </div>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>
        P0300 - Random/Multiple Cylinder Misfire Fix
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        One of the most common check engine lights. Here's what causes it and how to fix it.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What P0300 Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The engine is misfiring randomly in multiple cylinders. Not a specific cylinder - could be any combination.
          Can damage catalytic converter if ignored. <strong style={{color: '#fff'}}>Check engine light will flash.</strong>
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔍 Most Common Causes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <ol style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
            <li><strong style={{color: '#fff'}}>Worn Spark Plugs</strong> - #1 cause. Replace every 30,000 miles.</li>
            <li><strong style={{color: '#fff'}}>Bad Ignition Coils</strong> - Coil on plug (COP) systems common failure.</li>
            <li><strong style={{color: '#fff'}}>Fuel Injector Issues</strong> - Clogged or failing injectors.</li>
            <li><strong style={{color: '#fff'}}>Vacuum Leaks</strong> - Gasket, hose, or intake leaks.</li>
            <li><strong style={{color: '#fff'}}>Low Compression</strong> - Rings, head gasket, valves.</li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔧 DIY Fix Steps</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 1: Check Spark Plugs First ($10-50)</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>Remove and inspect. If worn, cracked, or fouled - replace all 4 at once.</p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 2: Check Coils ($20-100 each)</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>Use OBD scanner to identify specific cylinder misfire, then test/replace that coil.</p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 3: Look for Vacuum Leaks ($5-30)</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>Spray carb cleaner around intake while idling. If RPM changes - found leak.</p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 4: Professional Help</h3>
          <p style={{ color: '#94a3b8' }}>If above don't work - compression test needed. Could be head gasket or ring damage.</p>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>💰 Estimated Cost</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%' }}>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>Spark Plugs (4)</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$20-100</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>Ignition Coils</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$80-400</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>Fuel Injectors</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$200-800</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', color: '#94a3b8' }}>Shop Labor</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$80-150/hr</td>
            </tr>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🚗 Affected Vehicles</h2>
        <p style={{ color: '#94a3b8' }}>All makes: Toyota, Honda, Ford, Chevrolet, BMW, Mercedes, Hyundai, etc. 
        Most common on high-mileage vehicles (80,000+ miles).</p>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#f59e0b', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Medium-Hard</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 1-4 hours</span>
        <span style={{ background: '#dc2626', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⚠️ Can damage catalytic converter</span>
      </div>
    </div>
  )
}
