export const metadata = {
  title: 'Whirlpool Washer UE Code - Unbalance Error Fix',
  description: 'What does UE mean on Whirlpool washer? How to fix unbalance error and redistribute clothes.',
}

export default function WhirlpoolWasherUEPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Whirlpool Washer UE Code - Fix Guide
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        UE (Unbalance Error) indicates the load is uneven. Here's how to fix it.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>⚠️ What UE Means</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          UE error means the washer detected an unbalanced load during the spin cycle. 
          The machine automatically reduces spin speed to prevent damage.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>How to Fix</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>1. Redistribute Clothes</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Pause the cycle, open door, and redistribute clothes evenly around the drum.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>2. Check Load Size</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Don't overload - fill drum only 3/4 full. Mix small and large items.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>3. Level the Washer</h3>
          <p style={{ color: '#94a3b8', marginBottom: '15px' }}>
            Ensure washer is on level flooring. Adjust feet if needed.
          </p>
          
          <h3 style={{ fontWeight: '600', marginBottom: '10px', color: '#6366f1' }}>4. Check Suspension</h3>
          <p style={{ color: '#94a3b8' }}>
            If problem persists, suspension rods may be worn. Replace if needed.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Compatible Models</h2>
        <p style={{ color: '#94a3b8' }}>
          Works with: Whirlpool Cabrio, Duet, Kenmore, Maytag Atlantis, and all 
          front-load/top-load models showing UE or "bAL" code.
        </p>
      </section>
    </div>
  )
}
