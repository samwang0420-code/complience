import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="text-lg mb-4">Get in touch with our team.</p>
          <p className="text-gray-600">Email: support@uscomplianceguard.com</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
