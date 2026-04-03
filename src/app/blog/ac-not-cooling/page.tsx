export const metadata = {
  title: 'AC Not Cooling? 10 Reasons & Fix | HVAC Troubleshooting',
  description: 'Air conditioner not cooling? Refrigerant, compressor, capacitor issues. Complete troubleshooting guide.',
}

export default function ACNotCoolingPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>AC Not Cooling? 10 Common Reasons</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>Troubleshoot your air conditioner and figure out why it's not cooling.</p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #6366f1' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔍 Quick Checks First</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Check thermostat is set to "Cool" and below room temp</li>
          <li>Check circuit breaker - reset if tripped</li>
          <li>Check air filter - if clogged, AC won't cool</li>
          <li>Check outdoor unit - should be running</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Top 10 Causes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#1 Low Refrigerant ($150-1200)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Most common. AC blows warm. Hissing sound? Possible leak. Must call professional to recharge.</p>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#2 Dirty Air Filter ($10-30)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Clogged filter restricts airflow. AC works harder, cools poorly. Replace monthly!</p>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#3 Dirty Condenser Coil ($75-200)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Outdoor unit coil dirty = can't release heat. Hose it off carefully.</p>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#4 Bad Capacitor ($150-400)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>AC won't start, capacitor bulged or leaking. Common in older units.</p>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#5 Compressor Failed ($1000-3000)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>The heart of AC. No cooling + loud noises = compressor issues. Often not cost-effective to repair.</p>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#6 Frozen Evaporator Coil</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Ice on indoor coil = low refrigerant or dirty filter. Turn off AC, let thaw, then check.</p>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#7 Thermostat Issues ($50-150)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Not sending signal. Try new batteries or replace thermostat.</p>
          </div>
          <div style={{ marginBottom: '15px', paddingBottom: '15px' }}>
            <h3 style={{ fontWeight: '600', color: '#ef4444' }}>#8 Electrical Issues</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Contactor, relay, or circuit board problems. Requires licensed electrician/HVAC tech.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', background: '#7f1d1d', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#fca5a5' }}>⚠️ When to Call a Pro</h2>
        <p style={{ color: '#fca5a5', lineHeight: '1.6' }}>Refrigerant handling requires EPA certification. Electrical work can be dangerous. 
        If you're not comfortable, call a licensed HVAC technician.</p>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#f59e0b', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Mixed DIY & Pro</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 30 min - 2 hours</span>
      </div>
    </div>
  )
}
