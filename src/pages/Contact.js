import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // For now, simulate form submission
    setSubmitted(true);
  };

  return (
    <section style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 className="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Contact Us
      </h1>

      {submitted ? (
        <p style={{ textAlign: 'center', color: 'var(--btn-bg)', fontWeight: '600' }}>
          Thank you for reaching out! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--nav-bg)',
                color: 'var(--text-color)',
              }}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--nav-bg)',
                color: 'var(--text-color)',
              }}
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--nav-bg)',
                color: 'var(--text-color)',
                resize: 'vertical',
              }}
            />
          </label>

          <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
