import React from 'react';

const About = () => {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto' }}>
      <h1 className="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        About DashX
      </h1>

      <p style={{ marginBottom: '1rem' }}>
        DashX was born out of a simple idea — to make your browser’s new tab both beautiful and functional without sacrificing your privacy. We believe that productivity tools should be customizable, lightweight, and secure.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        Our mission is to empower users to take control of their browsing experience with powerful widgets like time tracking, weather, and quick access tools, all while ensuring your data stays on your device.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        Built with React and open to community contributions, DashX is constantly evolving to meet the needs of power users and casual browsers alike.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        Join us on this journey and customize your new tab like never before.
      </p>
    </section>
  );
};

export default About;
