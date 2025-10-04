import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--footer-bg)',
      color: 'var(--text-color)',
      textAlign: 'center',
      padding: '1.5rem 1rem',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto',
      fontSize: '0.9rem',
      userSelect: 'none'
    }}>
      &copy; {new Date().getFullYear()} DashX. All rights reserved.
    </footer>
  );
};

export default Footer;
