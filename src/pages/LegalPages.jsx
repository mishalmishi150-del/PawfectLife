
import { Link } from 'react-router-dom'

export function PrivacyPolicyPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <span className="legal-label">LEGAL INFORMATION</span>
        <h1>Privacy Policy</h1>
        <p className="legal-intro">
          Your privacy matters to us. This policy explains how
          PawfectLife handles information when you visit our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          PawfectLife is an informational pet care website.
          We may receive information that visitors voluntarily
          provide through contact or newsletter forms.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          Information may be used to respond to enquiries,
          provide requested updates and improve our website.
        </p>

        <h2>3. Cookies</h2>
        <p>
          Our website or its service providers may use cookies
          to support website functionality and understand
          website usage.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Our website may contain links to external websites.
          We are not responsible for their privacy practices
          or content.
        </p>

        <h2>5. Data Protection</h2>
        <p>
          We take reasonable steps to protect information
          submitted through our website. However, no online
          transmission or storage method is completely secure.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          PawfectLife does not knowingly collect personal
          information from children without appropriate
          parental or guardian involvement.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy when necessary.
          Changes will be published on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For questions, please visit our
          {' '}<Link to="/contact">Contact Page</Link>.
        </p>
      </div>
    </section>
  )
}

export function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <span className="legal-label">LEGAL INFORMATION</span>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-intro">
          Welcome to PawfectLife. By accessing and using
          this website, you agree to the following terms.
        </p>

        <h2>1. Website Purpose</h2>
        <p>
          PawfectLife provides informational content about
          responsible pet care, animal behavior, grooming,
          nutrition and general pet well-being.
        </p>

        <h2>2. Use of Content</h2>
        <p>
          Our content is provided for educational and
          informational purposes. You may share links to
          our content but may not republish our material
          without appropriate permission.
        </p>

        <h2>3. Accuracy of Information</h2>
        <p>
          We aim to provide helpful and accurate information.
          However, we do not guarantee that all content is
          complete, current or suitable for every situation.
        </p>

        <h2>4. Veterinary Disclaimer</h2>
        <p>
          Our articles are not a substitute for professional
          veterinary advice, diagnosis or treatment. Always
          consult a qualified veterinarian regarding your
          pet's health and medical needs.
        </p>

        <h2>5. Responsible Website Use</h2>
        <p>
          Visitors must not misuse this website, attempt
          unauthorized access or engage in activities that
          affect its security or availability.
        </p>

        <h2>6. External Links</h2>
        <p>
          PawfectLife may link to third-party websites.
          We do not control or guarantee their content
          or services.
        </p>

        <h2>7. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions when
          necessary. Updated terms will be published here.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions, please visit our
          {' '}<Link to="/contact">Contact Page</Link>.
        </p>
      </div>
    </section>
  )
}
