import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/dashX_plain.png';
import styles from './Navbar.module.css';

const Navbar = () => {
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
                <ul>
                    {navLinks.map(([path, label]) => (
                        <li key={label}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} ${styles.active}`
                                        : styles.navLink
                                }
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
