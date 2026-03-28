export const metadata = {
  title: 'Hisense Error Codes - Complete List & Fix Guide',
  description: 'Complete list of Hisense appliance error codes. Find solutions for washing machines, dishwashers, refrigerators, and AC units.',
}

export default function HisenseErrorCodesPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Hisense Error Codes - Complete Fix Guide
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Find and fix your Hisense appliance error codes. Updated for 2024-2025 models.
      </p>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>Washing Machine Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #334155' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Problem</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E1</td>
                <td style={{ padding: '10px' }}>Water inlet issue</td>
                <td style={{ padding: '10px' }}>Check water supply, clean inlet valve</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E2</td>
                <td style={{ padding: '10px' }}>Drain problem</td>
                <td style={{ padding: '10px' }}>Clean drain hose, check pump</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E3</td>
                <td style={{ padding: '10px' }}>Water overflow</td>
                <td style={{ padding: '10px' }}>Check water valve, level sensor</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>UE</td>
                <td style={{ padding: '10px' }}>Unbalanced load</td>
                <td style={{ padding: '10px' }}>Redistribute clothes evenly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>Dishwasher Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #334155' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Problem</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E1</td>
                <td style={{ padding: '10px' }}>Water leak detected</td>
                <td style={{ padding: '10px' }}>Check for leaks, level sensor</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E2</td>
                <td style={{ padding: '10px' }}>Drainage issue</td>
                <td style={{ padding: '10px' }}>Clean filter, check drain hose</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E3</td>
                <td style={{ padding: '10px' }}>Heating problem</td>
                <td style={{ padding: '10px' }}>Check heating element, thermostat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>Air Conditioner Codes</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #334155' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Problem</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#6366f1' }}>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E1</td>
                <td style={{ padding: '10px' }}>Room temperature sensor</td>
                <td style={{ padding: '10px' }}>Replace sensor</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E2</td>
                <td style={{ padding: '10px' }}>Evaporator sensor</td>
                <td style={{ padding: '10px' }}>Check sensor, wiring</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E3</td>
                <td style={{ padding: '10px' }}>Condenser dirty</td>
                <td style={{ padding: '10px' }}>Clean condenser coil</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>E4</td>
                <td style={{ padding: '10px' }}>Compressor issue</td>
                <td style={{ padding: '10px' }}>Check compressor, refrigerant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
