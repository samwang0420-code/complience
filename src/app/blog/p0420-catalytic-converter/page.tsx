export const metadata = {
  title: 'P0420 Catalytic Converter Code - Fix Cost & Guide',
  description: 'P0420 code? Catalytic converter efficiency below threshold. Causes, fixes, and cost guide.',
}

export default function P0420Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '16px' }}>
        🔧 OBD-II Code P0420
      </div>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>
        P0420 - Catalytic Converter Efficiency Fix
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Your catalytic converter isn't working efficiently. Will fail emissions test.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What P0420 Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The catalytic converter (Bank 1) is not reducing harmful emissions effectively. 
          Oxygen sensor readings show the converter isn't working. <strong style={{color: '#fff'}}>You will fail emissions test.</strong>
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔍 Common Causes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <ol style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
            <li><strong style={{color: '#fff'}}>Failing Catalytic Converter</strong> - Most common. Usually from age or contamination.</li>
            <li><strong style={{color: '#fff'}}>Bad O2 Sensor</strong> - Downstream sensor giving false readings.</li>
            <li><strong style={{color: '#fff'}}>Exhaust Leaks</strong> - Before the converter.</li>
            <li><strong style={{color: '#fff'}}>Oil/ antifreeze burning</strong> - Contaminating the converter.</li>
            <li><strong style={{color: '#fff'}}>Running rich</strong> - Too much fuel entering exhaust.</li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>💰 Repair Costs</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%' }}>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>O2 Sensor Replacement</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$150-500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>OEM Catalytic Converter</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$800-2500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>Universal Cat (DIY)</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$200-600</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', color: '#94a3b8' }}>Shop Labor + Parts</td>
              <td style={{ padding: '10px', color: '#22c55e' }}>$1200-3500</td>
            </tr>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔧 Quick Checks</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', marginBottom: '10px' }}>1. Check for exhaust leaks before the cat</p>
          <p style={{ color: '#94a3b8', marginBottom: '10px' }}>2. Replace downstream O2 sensor first (cheapest fix)</p>
          <p style={{ color: '#94a3b8', marginBottom: '10px' }}>3. Check for pending codes - P0421, P0422</p>
          <p style={{ color: '#94a3b8' }}>4. If old converter (100k+ miles), replacement usually needed.</p>
        </div>
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', background: '#7f1d1d', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#fca5a5' }}>⚠️ Important</h2>
        <p style={{ color: '#fca5a5', lineHeight: '1.6' }}>
          Don't ignore P0420. It will cause your vehicle to fail emissions testing. 
          Also, a failing cat can overheat and cause a fire.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#f59e0b', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Medium-Hard</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 1-3 hours</span>
      </div>
    </div>
  )
}
