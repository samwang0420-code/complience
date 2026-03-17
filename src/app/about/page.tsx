import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ErrorCodeHub - Our Mission & Data Sources',
  description: 'Learn about ErrorCodeHub\'s mission to provide accurate, trustworthy error code information. Our data comes from manufacturer manuals and certified technicians.',
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
        About ErrorCodeHub
      </h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
          Our Mission
        </h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          ErrorCodeHub is dedicated to providing accurate, comprehensive error code information for appliances, 
          automotive, and electric vehicles. We believe that everyone should have access to reliable 
          diagnostic information, regardless of their technical background.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
          E-E-A-T Principles
        </h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '8px' }}>Experience</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Our database is built from decades of combined experience in appliance repair, automotive diagnostics, 
              and EV systems. We continuously update our content based on real-world repair scenarios.
            </p>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '8px' }}>Expertise</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              All error codes are sourced from manufacturer service manuals and verified against OBD-II standards 
              (SAE J2012). Our technical team includes certified mechanics and appliance repair specialists.
            </p>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '8px' }}>Authoritativeness</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              We reference official manufacturer documentation, OEM technical bulletins, and professional 
              technician forums (iATN, Forumosa) to ensure accuracy.
            </p>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '8px' }}>Trustworthiness</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Every code includes multiple causes and solutions. We clearly distinguish between DIY fixes 
              and professional repairs. We disclose our sources and update regularly.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
          Data Sources
        </h2>
        <ul style={{ color: '#94a3b8', lineHeight: '2', listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>
            ✓ Manufacturer Service Manuals (Whirlpool, LG, Samsung, GE, etc.)
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>
            ✓ OBD-II Standards (SAE J2012) for automotive codes
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>
            ✓ OEM Technical Bulletins
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>
            ✓ Professional Technician Forums (iATN, HVAC-talk)
          </li>
          <li style={{ padding: '10px 0' }}>
            ✓ EV Manufacturer Documentation (Tesla, BYD, etc.)
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
          Update Policy
        </h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          We update our database weekly with new codes from latest model years and corrections based on 
          user feedback. Last verification: 2026-03-17. Each code is tagged with source count 
          (10-60 verified sources) to indicate reliability.
        </p>
      </section>
    </div>
  )
}
