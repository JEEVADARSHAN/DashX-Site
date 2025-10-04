import React, { useState } from 'react';
import '../css/download.css';

import imgChrome from '../assets/s1.png';
import imgFirefox from '../assets/s1.png';
import imgEdge from '../assets/s1.png';

const Download = () => {
  const [activeTab, setActiveTab] = useState('chrome');

  const tabInfo = {
    chrome: {
      title: 'Install on Chrome / Chromium',
      steps: [
        <>Download the <strong>DashX ZIP file</strong> from the official site.</>,
        <>Extract the ZIP to a folder.</>,
        <>Open <code>chrome://extensions/</code> in Chrome.</>,
        <>Enable <strong>Developer mode</strong> (toggle at top right).</>,
        <>Click <strong>Load unpacked</strong> and select the extracted folder.</>,
        <>Pin DashX to your toolbar (optional).</>,
        <>Open a new tab, DashX should load automatically.</>
      ],
      img: imgChrome,
      alt: 'Chrome extension install steps screenshot'
    },
    firefox: {
      title: 'Install on Firefox',
      steps: [
        <>Download the <strong>DashX ZIP file</strong>.</>,
        <>Extract it to a local folder.</>,
        <>Open <code>about:debugging#/runtime/this-firefox</code> in Firefox.</>,
        <>Click <strong>Load Temporary Add-on</strong>.</>,
        <>Select the <code>manifest.json</code> file inside the extracted folder.</>,
        <>After loading, open a new tab DashX becomes active.</>
      ],
      img: imgFirefox,
      alt: 'Firefox extension install steps screenshot'
    },
    edge: {
      title: 'Install on Edge',
      steps: [
        <>Download the <strong>DashX ZIP file</strong>.</>,
        <>Extract it locally on your system.</>,
        <>Go to <code>edge://extensions/</code> in Edge.</>,
        <>Enable <strong>Developer mode</strong> (toggle).</>,
        <>Click <strong>Load unpacked</strong> and choose the folder.</>,
        <>DashX will now be active in new tabs.</>
      ],
      img: imgEdge,
      alt: 'Edge extension install steps screenshot'
    }
  };

  const { title, steps, img, alt } = tabInfo[activeTab];

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '1rem', position: 'relative' }}>
      <h1 className="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Download & Install DashX
      </h1>      
      
      <div className="blob"></div>

      <div className="card">      
        {/* Tabs */}
        <div className="download-tabs">
          {Object.keys(tabInfo).map(tab => (
            <button
              key={tab}
              className={`download-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="download-content">
          <div className="download-text">
            <h2 style={{ color: 'var(--btn-bg)', marginBottom: '1rem' }}>{title}</h2>
            <ol>
              {steps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: '0.8rem' }}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="download-image">
            <img src={img} alt={alt} />
          </div>
        </div>      
      </div>

      <p style={{ marginTop: '2rem', textAlign: 'center' }}>
        If you face any issues, visit our <a href="/faq">FAQ</a> or <a href="/contact">Contact</a> us for help.
      </p>
    </section>
  );
};

export default Download;
