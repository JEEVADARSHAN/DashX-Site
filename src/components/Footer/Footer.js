import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} DashX. All rights reserved.
    </footer>
  );
};

export default Footer;
