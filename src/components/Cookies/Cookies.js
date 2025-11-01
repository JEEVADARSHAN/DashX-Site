import React, { useState, useEffect } from 'react';
import styles from './Cookies.module.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ga-consent');
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      loadGA();
    }
  }, []);

  const loadGA = () => {
    if (!window.gtag) {
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-PBGN4TG0P2";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-PBGN4TG0P2', { 'anonymize_ip': true });
      };
    }
  };

  const handleAccept = () => {
    localStorage.setItem('ga-consent', 'accepted');
    loadGA();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ga-consent', 'declined');
    setVisible(false);
  };

  const handleOpenSettings = () => {
    setVisible(true);
  };

  return (
    <>
      <div className={`${styles.banner} ${!visible ? styles.hidden : ''}`}>
        <span>
          DashX respects your privacy. We use anonymous analytics to improve your experience. You can choose to allow or decline tracking.
        </span>
        <div>
          <button onClick={handleAccept} className={`${styles.button} ${styles.accept}`}>Allow</button>
          <button onClick={handleDecline} className={`${styles.button} ${styles.decline}`}>Decline</button>
        </div>
      </div>

      <button onClick={handleOpenSettings} className={styles.settingsButton} title="Privacy Settings">
        ⚙
      </button>
    </>
  );
};

export default CookieConsent;
