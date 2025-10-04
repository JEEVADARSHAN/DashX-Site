import React from 'react';

const Privacy = () => {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto' }}>
      <h1 className="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Privacy Policy
      </h1>

      <p style={{ marginBottom: '1.2rem' }}>
        At <strong>DashX</strong>, your privacy is not an afterthought — it’s a foundation.
        We believe that great software should empower, not exploit.
      </p>

      <h3 style={{ color: 'var(--btn-bg)', marginTop: '1.5rem' }}>🔒 Zero Data Collection</h3>
      <p>
        DashX does <strong>not</strong> collect or send any user data to the cloud or external servers. Everything — from your widgets to time tracking data — is stored securely <strong>locally</strong> on your device.
      </p>

      <h3 style={{ color: 'var(--btn-bg)', marginTop: '1.5rem' }}>🧠 Full Transparency</h3>
      <p>
        We don’t use trackers, analytics, or any background scripts to monitor your behavior. DashX operates completely in the foreground with user permissions.
      </p>

      <h3 style={{ color: 'var(--btn-bg)', marginTop: '1.5rem' }}>🔐 Local Storage Only</h3>
      <p>
        All configurations, widget settings, graphs, and personalization data are stored in your browser's local storage. You have full control and can reset or clear your data at any time.
      </p>

      <h3 style={{ color: 'var(--btn-bg)', marginTop: '1.5rem' }}>🌍 Offline First</h3>
      <p>
        DashX is designed to work offline. No internet connection is required for core functionality. This ensures speed, reliability, and maximum privacy — even on a plane or in offline mode.
      </p>

      <h3 style={{ color: 'var(--btn-bg)', marginTop: '1.5rem' }}>🤝 Commitment to Trust</h3>
      <p>
        Your trust means everything to us. We're committed to staying transparent and respectful of your digital rights. If we ever change our privacy model, it will be opt-in only and clearly communicated.
      </p>

      <p style={{ marginTop: '2rem' }}>
        Have questions? <a href="/contact">Reach out</a> and we’ll be happy to explain our privacy practices in more detail.
      </p>
    </section>
  );
};

export default Privacy;
