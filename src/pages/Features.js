import React from 'react';

// Screenshots for features
import s2 from '../assets/s2.png'; // To-Do Widget
import s3 from '../assets/s3.png'; // Weather + Time Tracker
import s4 from '../assets/s4.png'; // Site Launcher + Quick Bar
import s5 from '../assets/s5.png'; // Tab Time Graph
import s6 from '../assets/s6.png'; // Settings Panel
import s7 from '../assets/s7.png'; // Wallpaper Customization

const Features = () => {
  return (
    <section>
      <h1 className="glow" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.8rem' }}>
        DashX Features
      </h1>

      <div className="feature-section" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--btn-bg)' }}>Customizable Widgets</h2>
        <p style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Add, remove, and rearrange widgets like To-Do list, weather updates, stopwatch, and RSS feed. Customize your dashboard to fit your workflow.
        </p>
        <img src={s2} alt="To-Do Widget" />
      </div>

      <div className="feature-section" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--btn-bg)' }}>Weather & Tab Time Tracker</h2>
        <p style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Get real-time weather updates and track how much time you spend on each tab with intuitive graphs, all stored locally for your privacy.
        </p>
        <img src={s3} alt="Weather and Time Tracker" />
      </div>

      <div className="feature-section" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--btn-bg)' }}>Quick Access & Site Launcher</h2>
        <p style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Launch your favorite sites instantly with the quick access bar and customizable site launcher widgets.
        </p>
        <img src={s4} alt="Site Launcher and Quick Bar" />
      </div>

      <div className="feature-section" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--btn-bg)' }}>Tab Time Graphs</h2>
        <p style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Visualize your browsing habits over time with easy-to-read graphs to boost productivity and awareness.
        </p>
        <img src={s5} alt="Tab Time Graph" />
      </div>

      <div className="feature-section" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--btn-bg)' }}>Settings Panel</h2>
        <p style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Fine-tune your dashboard, customize colors, widget behavior, and more from the sleek settings panel.
        </p>
        <img src={s6} alt="Settings Panel" />
      </div>

      <div className="feature-section" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--btn-bg)' }}>Wallpaper Customization</h2>
        <p style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Choose from beautiful dynamic wallpapers or upload your own images for a truly personalized experience.
        </p>
        <img src={s7} alt="Wallpaper Customization" />
      </div>
    </section>
  );
};

export default Features;
