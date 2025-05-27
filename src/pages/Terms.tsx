
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <p className="text-gray-400 text-center mb-12">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using GGWorld, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Service Description</h2>
              <p>
                GGWorld is a platform that enables users to create, customize, and deploy Discord bots through 
                a visual block-based interface and low-code solutions. Our service includes bot hosting, 
                AI-powered assistance, and a marketplace for sharing bot templates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Comply with Discord's Terms of Service and Community Guidelines</li>
                  <li>Not create bots that spam, harass, or violate Discord's policies</li>
                  <li>Respect other users and maintain appropriate conduct</li>
                  <li>Not attempt to hack, exploit, or abuse our systems</li>
                  <li>Take responsibility for bots created using our platform</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Prohibited Content</h2>
              <div className="space-y-4">
                <p>Users may not create bots that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Contain malicious code or attempt to compromise security</li>
                  <li>Promote hate speech, violence, or discrimination</li>
                  <li>Engage in cryptocurrency mining or similar resource abuse</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
              <p>
                We strive to maintain high uptime for our service, but cannot guarantee 100% availability. 
                We reserve the right to modify, suspend, or discontinue the service at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                GGWorld shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please visit our{' '}
                <Link to="/support" className="text-emerald-400 hover:text-emerald-300">
                  support center
                </Link>.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
