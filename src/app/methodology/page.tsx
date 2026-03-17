import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology - How We Verify Error Codes',
  description: 'Learn how ErrorCodeHub verifies and organizes error codes. Our data verification process ensures accuracy.',
}

export default function MethodologyPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
        Methodology
      </h1>
      
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.8' }}>
        How we verify, organize, and present error code information
      </p>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#6366f1' }}>
          1. Data Collection
        </h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            We collect error codes from multiple authoritative sources:
          </p>
          <ul style={{ color: '#94a3b8', lineHeight: '2', marginTop: '15px', paddingLeft: '20px' }}>
            <li>Official manufacturer service manuals</li>
            <li>OBD-II diagnostic standards (SAE J2012)</li>
            <li>OEM technical service bulletins</li>
            <li>Verified professional technician databases</li>
            <li>EV manufacturer documentation</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#6366f1' }}>
          2. Verification Process
        </h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            Each error code goes through a verification process:
          </p>
          <ol style={{ color: '#94a3b8', lineHeight: '2', marginTop: '15px', paddingLeft: '20px' }}>
            <li><strong>Cross-reference</strong> - Check against 3+ independent sources</li>
            <li><strong>Format validation</strong> - Ensure code matches manufacturer format</li>
            <li><strong>Description accuracy</strong> - Verify technical descriptions</li>
            <li><strong>Solution validity</strong> - Confirm recommended fixes are safe and effective</li>
            <li><strong>Professional review</strong> - Complex codes reviewed by certified technicians</li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#6366f1' }}>
          3. Code Organization
        </h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            We organize error codes by:
          </p>
          <ul style={{ color: '#94a3b8', lineHeight: '2', marginTop: '15px', paddingLeft: '20px' }}>
            <li><strong>Category</strong> - Appliance type (Washer, Dryer, Car, EV, etc.)</li>
            <li><strong>Brand</strong> - Manufacturer (Whirlpool, Toyota, Tesla, etc.)</li>
            <li><strong>Code</strong> - The exact error code (F21, P0300, P0AA6)</li>
            <li><strong>Difficulty</strong> - DIY vs Professional repair</li>
            <li><strong>Time</strong> - Estimated repair duration</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#6366f1' }}>
          4. Trust Scoring
        </h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            Each code is assigned a trust score (80-99) based on:
          </p>
          <ul style={{ color: '#94a3b8', lineHeight: '2', marginTop: '15px', paddingLeft: '20px' }}>
            <li><strong>Source count</strong> - Number of independent sources (10-60)</li>
            <li><strong>Source quality</strong> - Manufacturer docs vs user posts</li>
            <li><strong>Last verified</strong> - When was the code last checked</li>
            <li><strong>Correction history</strong> - Number of corrections made</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#6366f1' }}>
          5. AI Optimization
        </h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            For AI search engines (GEO), we optimize for:
          </p>
          <ul style={{ color: '#94a3b8', lineHeight: '2', marginTop: '15px', paddingLeft: '20px' }}>
            <li><strong>Structured data</strong> - JSON-LD schemas for FAQ, HowTo, Article</li>
            <li><strong>Clear answers</strong> - Direct, factual responses to questions</li>
            <li><strong>Entity clarity</strong> - Unambiguous references to brands, codes, parts</li>
            <li><strong>Comprehensive coverage</strong> - One code = one page for AI citation</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
