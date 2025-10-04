import React from 'react';
import '../css/home.css';

import logo from '../assets/logo/dashX_plain.png';
import s1 from '../assets/s1.png';
import s8 from '../assets/s8.png';

const Home = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <section style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-container">
        <div className="hero" style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <img src={logo} alt="DashX Logo" style={{ height: 80, marginBottom: '1rem', boxShadow: 'none' }} />
          <h1 className="glow" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            Introducing DashX
          </h1>
          <h3>Your new tab. Smarter than ever.</h3>
          <p style={{ maxWidth: 600, fontSize: '1.2rem', color: 'var(--text-color)' }}>
            DashX transforms your browser’s new tab with live widgets, quick access tools, site launchers, and powerful productivity features all while respecting your privacy.
          </p>
          <a href="/download" className="btn" style={{ fontSize: '1.1rem' }}>
            Download Now
          </a>
        </div>
        
          <img className="hero-img" src={s1}/>
          </div>
        {/* Preview Image */}
        <div className="feature-preview" style={{ marginBottom: '4rem' }}>
          <img
            src={s1}
            alt="Live widgets preview"
            style={{
              width: '100%',
              maxWidth: 900,
              borderRadius: '16px',
              boxShadow: '0 0 20px var(--accent-color)',
              display: 'block',
              margin: '0 auto',
              animation: 'pulseGlow 5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Features Summary */}
        <div className="features-summary" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 className="glow" style={{ marginBottom: '2rem', fontSize: '2.5rem', textAlign: 'center' }}>
            Key Features
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {[
              { title: 'Fully Customizable Widgets', desc: 'Drag & drop live widgets like To-Do, Weather, RSS Feed, Stopwatch, and more.' },
              { title: 'Quick Access Bar & Site Launcher', desc: 'One-click launch your favorite sites and bookmarks.' },
              { title: 'Tab Time Tracking & Graphs', desc: 'Visualize time spent on tabs (privacy-first & local storage only).' },
              { title: 'Dark Mode & Stunning Wallpapers', desc: 'Choose from dynamic wallpapers or upload your own.' },
              { title: '100% Privacy First', desc: 'All data is stored locally. No tracking, no cloud sync.' },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  backgroundColor: 'var(--nav-bg)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  flex: '1 1 280px',
                  boxShadow: '0 0 12px var(--accent-color-dark)',
                  color: 'var(--text-color)',
                  minHeight: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <h3 style={{ marginBottom: '0.75rem', color: 'var(--btn-bg)' }}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Dashboard Preview */}
        <div className="dashboard-preview" style={{ marginTop: '5rem', textAlign: 'center' }}>
          <h2 className="glow" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
            See DashX in Action
          </h2>
          <img
            src={s8}
            alt="Full dashboard overview"
            style={{
              width: '100%',
              maxWidth: 900,
              borderRadius: '20px',
              boxShadow: '0 0 30px var(--accent-color)',
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
