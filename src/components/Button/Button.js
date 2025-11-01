import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, href, className = '', ...props }) => {
    // Internal links: React Router <Link>
    if (href && href.startsWith('/')) {
        return (
            <Link to={href} className={`${styles.button} ${className}`} {...props}>
                {children}
            </Link>
        );
    }

    // External links: normal <a>
if (href) {
    return (
        <a
            href={href}
            className={`${styles.button} ${className}`}
            target={props.download ? undefined : "_blank"}
            rel={props.download ? undefined : "noopener noreferrer"}
            download={props.download}  // <-- ensure download attribute is set
            {...props}
        >
            {children}
        </a>
    );
}



    // Default: regular button
    return (
        <button className={styles.button}  {...props}>
            {children}
        </button>
    );
};

export default Button;
