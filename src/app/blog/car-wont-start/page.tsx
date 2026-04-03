export const metadata = {
  title: 'Car Won\'t Start - 10 Common Reasons & Fix | 2024 Guide',
  description: 'Car won\'t start? Battery, starter, alternator issues. Complete troubleshooting guide with fixes.',
}

export default function CarWontStartPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Car Won't Start? 10 Common Reasons</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>Complete troubleshooting guide - figure out why your car won't start.</p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>🔋 Quick Test: Lights & Sound</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li><strong>No lights, no sound</strong> = Dead battery</li>
          <li><strong>Lights work, no crank</strong> = Starter problem</li>
          <li><strong>Cranks slow</strong> = Weak battery or bad starter</li>
          <li><strong>Click-click</strong> = Starter solenoid issue</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>#1-5 Most Common Causes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1' }}>#1 Dead Battery (40% of cases)</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Check headlights dim? Try jump start. If starts with jump but dies, battery is bad. Cost: $150-250.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1' }}>#2 Bad Starter</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Click when key turned but no crank. Tapping starter sometimes works temporarily. Cost: $150-400.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1' }}>#3 Alternator Not Charging</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Car dies after jump start. Battery light on dashboard. Test: voltage should be 13.5-14.5 running. Cost: $150-350.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1' }}>#4 Spark Plugs</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Engine cranks but doesn't start. Wet, fouled, or worn plugs. Cost: $20-100 for plugs + labor.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: '600', color: '#6366f1' }}>#5 Fuel Pump</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>No fuel to engine. Listen for click from back seat when key turned. Cost: $200-600.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>💰 Cost Summary</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%' }}>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Battery</td><td style={{ padding: '10px', color: '#22c55e' }}>$150-250</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Starter</td><td style={{ padding: '10px', color: '#22c55e' }}>$150-400</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Alternator</td><td style={{ padding: '10px', color: '#22c55e' }}>$150-350</td></tr>
            <tr><td style={{ padding: '10px', color: '#94a3b8' }}>Ignition Switch</td><td style={{ padding: '10px', color: '#22c55e' }}>$100-300</td></tr>
          </table>
        </div>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#22c55e', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Easy Checks DIY</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 30 min - 2 hours</span>
      </div>
    </div>
  )
}
