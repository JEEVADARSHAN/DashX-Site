import React from 'react';
import styles from './About.module.css';

const features = [
    {
        title: 'Personalized Dashboard',
        description:
            'Customize your new tab with widgets, shortcuts, and themes that match your workflow and style. Every new tab becomes productive and beautiful.',
    },
    {
        title: 'Quick Access Tools',
        description:
            'Instantly access bookmarks, search engines, notes, and frequently visited websites no more wasted clicks or cluttered tabs.',
    },
    {
        title: 'Real-Time Information',
        description:
            'Stay updated with live weather, time, and calendar widgets directly on your new tab. Get the info you need at a glance.',
    },
    {
        title: 'Privacy First',
        description:
            'All data stays on your device. DashX does not track your activity or store sensitive information on servers.',
    },
    {
        title: 'Community Driven',
        description:
            'DashX is continuously improved based on feedback from its user community, ensuring features evolve to meet real-world needs.',
    },
    {
        title: 'Performance Focused',
        description:
            'Lightweight and fast, designed to load instantly without slowing down your browser, even with multiple widgets.',
    },
];

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <h1 className={`glow textCenter`}>About DashX</h1>

            <p>
                DashX transforms your browser's new tab into a clean, functional, and visually appealing dashboard. Unlike standard new tabs, it focuses on productivity, personalization, and privacy all in one fast-loading extension.
            </p>

            <br/>

            <div className={styles.features}>
                {features.map((feature, idx) => (
                    <div key={idx} className={'card ${styles.hCard}'}>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>

            <p>
                Whether you are a casual browser or a productivity power user, DashX enhances your new tab with tools, information, and customization options to make every visit efficient and enjoyable.
            </p>
        </section>
    );
};

export default About;
