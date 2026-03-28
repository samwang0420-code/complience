export const metadata = {
  title: 'Whirlpool Dryer AF Code - Fix Guide',
  description: 'What does AF mean on your Whirlpool dryer? Complete fix guide for AF airflow error code.',
}

export default function WhirlpoolDryerAFPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Whirlpool Dryer AF Code - Fix Guide
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        AF means "Air Flow" - your dryer is not getting proper airflow. Here's how to fix it.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What AF Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          AF (Air Flow) error code indicates insufficient airflow. The dryer is taking too long because 
          air cannot flow properly through the drum and venting system.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Common Causes</h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Clogged lint trap</li>
          <li>Blocked dryer vent hose</li>
          <li>Dirty exhaust vent outside</li>
          <li>Blower wheel debris</li>
          <li>Restricted airflow from long/kinked vent</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>How to Fix</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 1: Clean Lint Trap</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Remove lint before every load. Wash the trap with soap and water every few months.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 2: Check Vent Hose</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Disconnect the vent hose and clean out any lint buildup inside.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 3: Clean Exterior Vent</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Go outside and make sure the vent flap opens freely. Remove debris or snow.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 4: Check Vent Length</h3>
          <p style={{ color: '#94a3b8' }}>
            Maximum recommended vent length is 25 feet (less if using elbows). 
            Longer vents restrict airflow significantly.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Affected Models</h2>
        <p style={{ color: '#94a3b8' }}>
          Works with: Whirlpool Cabrio, Thin Twin, Duet, LTE, MED, WED, and all models 
          with digital displays showing AF code.
        </p>
      </section>
    </div>
  )
}
