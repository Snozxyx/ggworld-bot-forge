
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <p className="text-gray-400 text-center mb-12">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  When you use GGWorld, we collect information to provide and improve our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Discord account information (username, ID, email, avatar)</li>
                  <li>Server information for bot management</li>
                  <li>Bot configurations and custom commands you create</li>
                  <li>Usage analytics to improve our platform</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our Discord bot building service</li>
                  <li>Authenticate your account and manage your bots</li>
                  <li>Send important service updates and security notifications</li>
                  <li>Improve our platform based on usage patterns</li>
                  <li>Ensure compliance with Discord's Terms of Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. All data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>
                GGWorld integrates with Discord's API and follows Discord's privacy guidelines. We do not sell your 
                personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Export your bot configurations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <Link to="/support" className="text-emerald-400 hover:text-emerald-300">
                  our support center
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

export default Privacy;
