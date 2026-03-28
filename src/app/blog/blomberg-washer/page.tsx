export const metadata = {
  title: 'Blomberg Washing Machine Problems - Troubleshooting',
  description: 'Common Blomberg washing machine problems and error codes. Fix E01, door locked, not starting issues.',
}

export default function BlombergWasherPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Blomberg Washing Machine Problems
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Troubleshooting guide for common Blomberg washer issues.
      </p>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Error Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #334155' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Issue</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E01</td>
                <td style={{ padding: '10px' }}>Door lock problem</td>
                <td style={{ padding: '10px' }}>Check door latch, wiring</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E02</td>
                <td style={{ padding: '10px' }}>Water inlet issue</td>
                <td style={{ padding: '10px' }}>Check valve, supply</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E03</td>
                <td style={{ padding: '10px' }}>Drainage problem</td>
                <td style={{ padding: '10px' }}>Clean pump, hose</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E04</td>
                <td style={{ padding: '10px' }}>Overflow detected</td>
                <td style={{ padding: '10px' }}>Check pressure switch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Common Problems</h2>
        
        <h3 style={{ fontWeight: '600', marginBottom: '10px', marginTop: '20px' }}>Door Locked / Won't Start</h3>
        <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
          Unplug washer for 5 minutes to reset. Check door latch for damage. 
          If persistent, replace door lock assembly.
        </p>
        
        <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Not Draining</h3>
        <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
          Clean the drain pump filter (front bottom panel). Check drain hose for blockages.
        </p>
        
        <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Not Spinning</h3>
        <p style={{ color: '#94a3b8' }}>
          Check for unbalanced loads. Ensure washer is level. 
          Inspect drive belt and motor.
        </p>
      </section>
    </div>
  )
}
