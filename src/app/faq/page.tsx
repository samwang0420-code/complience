import { Metadata } from 'next'
import errorCodes from '@/data/error-codes/database.json'

export const metadata: Metadata = {
  title: 'FAQ - ErrorCodeHub | Frequently Asked Questions',
  description: 'Find answers to common questions about error codes for appliances, cars, and electric vehicles. Expert troubleshooting guides.',
}

export default function FAQPage() {
  const faqs = [
    {
      q: 'What is an error code?',
      a: 'An error code is a diagnostic code displayed by a device (appliance, vehicle, or system) to indicate a specific malfunction or fault. These codes help technicians identify the problem quickly.'
    },
    {
      q: 'How do I find the error code on my appliance?',
      a: 'Error codes are typically displayed on the device\'s control panel or digital display. Check your user manual for the specific location. Some devices require entering diagnostic mode to view codes.'
    },
    {
      q: 'Can I fix the error code myself?',
      a: 'Many error codes indicate simple issues that can be fixed DIY-style (like cleaning a filter or resetting the device). However, electrical or mechanical issues should be handled by professionals.'
    },
    {
      q: 'What does F21 mean on a Whirlpool washer?',
      a: 'F21 indicates a drain timeout error - the washer couldn\'t drain water within 8 minutes. Common causes: clogged drain hose, faulty pump, or blocked filter. Solution: clean drain hose and pump filter.'
    },
    {
      q: 'What does P0300 mean on a car?',
      a: 'P0300 is a random/multiple cylinder misfire code. It means the engine is misfiring in multiple cylinders randomly. Common causes: worn spark plugs, faulty ignition coils, or fuel injector issues.'
    },
    {
      q: 'What does P0AA6 mean on an electric vehicle?',
      a: 'P0AA6 indicates a hybrid battery voltage isolation fault - the high-voltage battery system has detected an isolation problem. This is a safety-critical fault that requires immediate professional attention.'
    },
    {
      q: 'How accurate are these error codes?',
      a: 'Our error codes are sourced from manufacturer service manuals, OBD-II standards (SAE J2012), and verified by professional technicians. Each code includes multiple potential causes and solutions.'
    },
    {
      q: 'Are the solutions safe to try at home?',
      a: 'Basic troubleshooting (checking connections, cleaning filters, resetting devices) is generally safe. However, repairs involving high voltage (EVs, some appliances), gas systems, or complex electronics should be left to certified professionals.'
    },
    {
      q: 'Why do different brands use different error codes?',
      a: 'Each manufacturer develops their own diagnostic systems. However, automotive OBD-II codes are standardized (P0xxx for powertrain). Appliance codes vary by manufacturer but often follow similar patterns.'
    },
    {
      q: 'How often should I update my error code database?',
      a: 'We update our database weekly with new codes from latest models and corrections. Vehicle manufacturers release new codes annually with new model years.'
    },
    {
      q: 'Can error codes be cleared without repair?',
      a: 'Clearing codes without fixing the underlying issue is not recommended - the problem will likely return. However, a temporary clear may help identify if the issue is intermittent.'
    },
    {
      q: 'What tools do I need to diagnose error codes?',
      a: 'Basic: user manual and smartphone. Professional: OBD-II scanner (vehicles), multimeter, and manufacturer-specific diagnostic tools for appliances.'
    }
  ]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Frequently Asked Questions
      </h1>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>
        Expert answers to common questions about error codes
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {faqs.map((faq, index) => (
          <details
            key={index}
            style={{
              background: '#1e293b',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer'
            }}
          >
            <summary style={{ fontWeight: '600', fontSize: '1.1rem', listStyle: 'none' }}>
              {faq.q}
            </summary>
            <p style={{ color: '#94a3b8', marginTop: '12px', lineHeight: '1.7' }}>
              {faq.a}
            </p>
          </details>
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: '#1e293b', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px' }}>
          Still have questions?
        </h2>
        <p style={{ color: '#94a3b8' }}>
          Search our database of {errorCodes.errorCodes.length.toLocaleString()} error codes or contact us.
        </p>
      </div>
    </div>
  )
}
