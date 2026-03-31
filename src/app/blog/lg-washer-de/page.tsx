export const metadata = {
  title: 'LG Washer dE Error - Door Lock Problem Fix',
  description: 'LG washer showing dE or dE1 error? Door lock fix guide. How to unlock and repair.',
}

export default function LGWasherDEPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '16px' }}>
        🔧 Error Code dE
      </div>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>
        LG Washer dE Error - Door Lock Fix
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        dE or dE1 means the door won't lock. Here's how to fix it yourself.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What dE Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The door lock mechanism cannot secure the door after multiple attempts. The washer won't start 
          because it thinks the door is open. This is a <strong style={{color: '#fff'}}>safety feature</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🔧 How to Fix</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 1: Force Door Open (Emergency)</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Unplug washer. Pull emergency release cord (bottom of door frame). Open door and restart.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 2: Check Door Latch</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Inspect the door latch for debris, damage, or wear. Clean with damp cloth.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 3: Test Door Switch</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Use multimeter to test door switch for continuity. Replace if faulty.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>Step 4: Replace Lock Assembly</h3>
          <p style={{ color: '#94a3b8' }}>
            If problem persists, replace the door lock assembly (LG part #EAG76444803).
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>📋 Compatible Models</h2>
        <p style={{ color: '#94a3b8' }}>
          Works with: LG WM0001, WM0002, WM0003, WM9500, WM9505, WM9800, Front Load, 
          TurboWash, and all models showing dE or dE1.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>🛒 Parts</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <ul style={{ color: '#94a3b8', lineHeight: '2' }}>
            <li>Door Lock Assembly #EAG76444803 (~$50)</li>
            <li>Door Switch #EAF60785201 (~$15)</li>
          </ul>
        </div>
      </section>

      <div style={{ display: 'flex', gap: '20px' }}>
        <span style={{ background: '#22c55e', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Easy Fix</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 15-30 minutes</span>
      </div>
    </div>
  )
}
