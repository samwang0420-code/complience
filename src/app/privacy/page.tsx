import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - ErrorCodeHub',
  description: 'Privacy Policy for ErrorCodeHub - Appliance and Industrial Error Code Database'
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: '40px 20px' }}>
      <header style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', color: '#e2e8f0' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>
          Privacy Policy
        </h1>

        <div style={{ lineHeight: '1.8', color: '#94a3b8' }}>
          <p style={{ marginBottom: '20px' }}>
            Last updated: March 15, 2026
          </p>

          <h2 style={{ color: 'white', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: '15px' }}>
            ErrorCodeHub does not collect personal information from our users. 
            We do not require registration, and we do not use cookies or tracking technologies.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
            2. Third-Party Services
          </h2>
          <p style={{ marginBottom: '15px' }}>
            We use Google Analytics to understand site traffic. Google may collect 
            anonymized information about your visit. Please refer to Google's Privacy Policy 
            for more information.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
            3. Google AdSense
          </h2>
          <p style={{ marginBottom: '15px' }}>
            We display Google AdSense advertisements on our site. Google may use cookies 
            to serve ads based on your interests. You can opt out of personalized advertising 
            by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" style={{ color: '#6366f1' }}>Google Ads Settings</a>.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
            4. Content
          </h2>
          <p style={{ marginBottom: '15px' }}>
            All error code information on this website is compiled from publicly available 
            sources including manufacturer manuals and technical documentation. We strive 
            for accuracy but cannot guarantee the completeness or correctness of all information.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
            5. Changes to This Policy
          </h2>
          <p style={{ marginBottom: '15px' }}>
            We may update this privacy policy from time to time. Any changes will be 
            posted on this page.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
            6. Contact Us
          </h2>
          <p style={{ marginBottom: '15px' }}>
            If you have any questions about this privacy policy, please contact us at: 
            <strong style={{ color: '#6366f1' }}> support@uscomplianceguard.com</strong>
          </p>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #1e293b', color: '#64748b', marginTop: '60px' }}>
        <p>© 2026 ErrorCodeHub. All rights reserved.</p>
      </footer>
    </div>
  )
}
