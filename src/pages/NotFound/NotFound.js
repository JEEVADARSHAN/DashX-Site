import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className={styles.homeBtn}>Go Back Home</Link>
    </section>
  );
};

export default NotFound;
