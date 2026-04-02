export const metadata = {
  title: 'GE Washer Error Codes - Complete List & Fix Guide',
  description: 'GE washer error codes E1, E2, E3, E4, F1, F7. Troubleshooting guide with solutions.',
}

export default function GEWasherCodesPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>
        GE Washer Error Codes - Complete Fix Guide
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Complete list of GE washing machine error codes with causes and solutions.
      </p>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Error Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #334155' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Problem</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>E1</strong></td><td style={{padding:'10px'}}>Water inlet fault</td><td style={{padding:'10px'}}>Check valve, supply</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>E2</strong></td><td style={{padding:'10px'}}>Drain fault</td><td style={{padding:'10px'}}>Clean pump, hose</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>E3</strong></td><td style={{padding:'10px'}}>Unbalance</td><td style={{padding:'10px'}}>Redistribute load</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>E4</strong></td><td style={{padding:'10px'}}>Overflow</td><td style={{padding:'10px'}}>Check valve, sensor</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>F1</strong></td><td style={{padding:'10px'}}>Main board fault</td><td style={{padding:'10px'}}>Replace board</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>F2</strong></td><td style={{padding:'10px'}}>Keypad issue</td><td style={{padding:'10px'}}>Replace keypad</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>F3</strong></td><td style={{padding:'10px'}}>Temp sensor</td><td style={{padding:'10px'}}>Replace sensor</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{padding:'10px'}}><strong>F7</strong></td><td style={{padding:'10px'}}>Motor fault</td><td style={{padding:'10px'}}>Check motor, belt</td></tr>
              <tr><td style={{padding:'10px'}}><strong>F9</strong></td><td style={{padding:'10px'}}>Drain pump</td><td style={{padding:'10px'}}>Replace pump</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Popular Models</h2>
        <p style={{ color: '#94a3b8' }}>GTW220, GTW330, GTW460, GTW485, GTW490, GTW500, GTW525, GFW450, GFW460, GFW550, 
        WPGT9350, WPSR4250, and all front-load/ top-load models.</p>
      </section>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Quick Fix Tips</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Unplug washer for 2 minutes to reset control board</li>
          <li>Check lid switch on top-load models</li>
          <li>Clean drain pump filter monthly</li>
          <li>Use HE detergent only</li>
        </ul>
      </section>
    </div>
  )
}
