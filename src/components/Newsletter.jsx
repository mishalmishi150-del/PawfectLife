
import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) return

    setMessage('Thank you for your interest in PawfectLife!')
    setEmail('')
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">

        {/* LEFT CONTENT */}
        <div className="newsletter-text">
          <span className="newsletter-paw">🐾</span>

          <div>
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Get helpful pet care tips, guides and updates
              delivered to your inbox.
            </p>
          </div>
        </div>

        {/* EMAIL FORM */}
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-wrap">
            <span className="newsletter-envelope">✉</span>

            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setMessage('')
              }}
              required
            />
          </div>

          <button type="submit">
            Subscribe <span>→</span>
          </button>

          {message && (
            <p className="newsletter-message" role="status">
              {message}
            </p>
          )}
        </form>

        {/* RIGHT DECORATION */}
        <div className="newsletter-decoration">
          <span className="newsletter-heart">♡</span>
          <span className="newsletter-decoration-paw">🐾</span>
          <p>Because they are family</p>
        </div>

      </div>
    </section>
  )
}

export default Newsletter
