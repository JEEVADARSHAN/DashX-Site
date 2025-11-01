import React from 'react';

const sections = [
    {
        title: 'Zero Data Collection',
        content:
            'DashX does not collect or send any user data to the cloud or external servers. Everything — from your widgets to time tracking data — is stored securely locally on your device.',
    },
    {
        title: 'Full Transparency',
        content:
            'We don’t use trackers, analytics, or any background scripts to monitor your behavior. DashX operates completely in the foreground with user permissions.',
    },
    {
        title: 'Local Storage Only',
        content:
            "All configurations, widget settings, graphs, and personalization data are stored in your browser's local storage. You have full control and can reset or clear your data at any time.",
    },
    {
        title: 'Offline First',
        content:
            'DashX is designed to work offline. No internet connection is required for core functionality. This ensures speed, reliability, and maximum privacy — even on a plane or in offline mode.',
    },
    {
        title: 'Commitment to Trust',
        content:
            "Your trust means everything to us. We're committed to staying transparent and respectful of your digital rights. If we ever change our privacy model, it will be opt-in only and clearly communicated.",
    },
];

const Privacy = () => (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
        <h1 className="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Privacy Policy
        </h1>

        <p style={{ marginBottom: '1.2rem', animation: 'fadeup 0.2s ease' }}>
            At <strong>DashX</strong>, your privacy is not an afterthought, it’s a foundation.
            We believe that great software should empower, not exploit.
        </p>

        {sections.map((section, index) => (
            <div key={index} style={{ marginTop: '1.5rem', animation: 'fadeup 1s ease'}} className="card" >
                <h3 style={{ color: 'var(--btn-bg)', marginBottom: '0.5rem' }}>{section.title}</h3>
                <p>{section.content}</p>
            </div>
        ))}

        <p style={{ marginTop: '2rem' }}>
            Have questions? <a href="/contact">Reach out</a> and we’ll be happy to explain our privacy practices in more detail.
        </p>
    </section>
);

export default Privacy;
