
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you for contacting PawfectLife!')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section className="contact-section">
      <div className="contact-content">
        <span className="welcome-label">GET IN TOUCH</span>
        <h2>Contact Us</h2>
        <p>
          Have a question or suggestion? We would love to hear from you.
          Send us a message and we will be happy to hear from you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter message subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <a href="mailto:hello@pawfectlife.com">
          hello@pawfectlife.com
        </a>
      </div>
    </section>
  )
}

export default Contact
