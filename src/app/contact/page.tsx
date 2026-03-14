export const metadata = {
  title: 'Contact Us - US Compliance Guard',
  description: 'Get in touch with our team'
}

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', padding: '40px', background: '#f9fafb' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h1>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>Get in touch with our team.</p>
        <p style={{ color: '#666' }}>Email: support@uscomplianceguard.com</p>
      </div>
    </div>
  )
}
