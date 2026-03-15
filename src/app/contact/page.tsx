import Link from 'next/link'

export const metadata = {
  title: 'Contact Us - ErrorCodeHub',
  description: 'Contact ErrorCodeHub - Appliance and Industrial Error Code Database'
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      <header style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>
          Contact Us
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '40px' }}>
          Have questions? We'd love to hear from you.
        </p>

        {/* Contact Info */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px' }}>
            📧 Email
          </h2>
          <p style={{ color: '#6366f1', fontSize: '1.1rem' }}>
            support@uscomplianceguard.com
          </p>
        </div>

        {/* What we can help with */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px' }}>
            💬 We Can Help With
          </h2>
          <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
            <li>Report incorrect error code information</li>
            <li>Suggest new error codes to add</li>
            <li>Report broken links</li>
            <li>Business inquiries</li>
            <li>Partnership opportunities</li>
            <li>Advertise with us</li>
          </ul>
        </div>

        {/* Response time */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '15px' }}>
            ⏱️ Response Time
          </h2>
          <p style={{ color: '#94a3b8' }}>
            We typically respond within 24-48 hours on business days.
          </p>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #1e293b', color: '#64748b', marginTop: '60px' }}>
        <p>© 2026 ErrorCodeHub. All rights reserved.</p>
      </footer>
    </div>
  )
}
