export const metadata = {
  title: 'Hotpoint Dishwasher Error Codes - Troubleshooting',
  description: 'Hotpoint dishwasher error codes. Find solutions for 03, E1, and common faults.',
}

export default function HotpointDishwasherPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Hotpoint Dishwasher Error Codes
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Complete troubleshooting guide for Hotpoint dishwasher error codes.
      </p>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Common Error Codes</h2>
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
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>03</td>
                <td style={{ padding: '10px' }}>Drainage issue</td>
                <td style={{ padding: '10px' }}>Clean filter, check drain hose</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E1</td>
                <td style={{ padding: '10px' }}>Water leak detected</td>
                <td style={{ padding: '10px' }}>Check for leaks, inspect seals</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E2</td>
                <td style={{ padding: '10px' }}>Heating fault</td>
                <td style={{ padding: '10px' }}>Check heating element</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E4</td>
                <td style={{ padding: '10px' }}>Overflow</td>
                <td style={{ padding: '10px' }}>Check water inlet valve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Quick Fixes</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Clean the filter basket monthly</li>
          <li>Check drain hose for kinks</li>
          <li>Ensure water supply is fully open</li>
          <li>Run hot water before starting cycle</li>
          <li>Use proper dishwasher detergent</li>
        </ul>
      </section>
    </div>
  )
}
