export const metadata = {
  title: 'Samsung Dryer AF Error - Airflow Problem Fix',
  description: 'Samsung dryer showing AF error? Airflow issue fix guide. Clean vent, lint trap, and exhaust.',
}

export default function SamsungDryerAFPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '16px' }}>
        🔧 Error Code AF
      </div>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>
        Samsung Dryer AF Error - Airflow Fix
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        AF means "Air Flow" - your dryer isn't getting proper airflow. Takes too long to dry.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What AF Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          Insufficient airflow detected. The dryer is taking too long because air cannot flow properly 
          through the drum and venting system. <strong style={{color: '#fff'}}>Fire hazard if ignored!</strong>
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔧 How to Fix (4 Steps)</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 1: Clean Lint Trap EVERY TIME</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Remove lint before/after each load. Wash trap with soap monthly.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 2: Clean Vent Hose</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Disconnect and clean inside of hose. Check for kinks or crushed sections.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 3: Clean Exterior Vent</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Go outside. Make sure vent flap opens freely. Remove debris, leaves, snow.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 4: Check Vent Length</h3>
          <p style={{ color: '#94a3b8' }}>
            Max 25 feet (less with elbows). Longer vents restrict airflow badly.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>📋 Models Affected</h2>
        <p style={{ color: '#94a3b8' }}>
          Works with: Samsung DV210, DV220, DV300, DV350, DV400, DV500, DV700, 
          Bespoke, FlexDry, and all vented dryers with AF code.
        </p>
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', background: '#7f1d1d', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#fca5a5' }}>🔥 Fire Warning</h2>
        <p style={{ color: '#fca5a5', lineHeight: '1.6' }}>
          Lint buildup is the #1 cause of dryer fires. Clean lint trap and vent system monthly. 
          Never run dryer unattended. Consider professional vent cleaning yearly.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '20px' }}>
        <span style={{ background: '#22c55e', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Easy Fix</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 20-45 minutes</span>
      </div>
    </div>
  )
}
