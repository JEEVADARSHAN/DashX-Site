import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/dashX_plain.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        ['/', 'Home'],
        ['/features', 'Features'],
        ['/download', 'Download'],
        ['/about', 'About'],
        ['/privacy', 'Privacy'],
        ['/faq', 'FAQ'],
        ['/contact', 'Contact'],
    ];

    return (
        <nav className={styles.navbar}>
            <div className="midSpaceContainer">
                <NavLink to="/">
                    <img src={logo} alt="DashX Logo" className={styles.logo} />
                </NavLink>

                {/* Hamburger Button */}
                <button
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* Navigation Links */}
                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    {navLinks.map(([path, label]) => (
                        <li key={label}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} ${styles.active}`
                                        : styles.navLink
                                }
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
