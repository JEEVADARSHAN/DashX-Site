import React from 'react';
import styles from './Features.module.css';
import { Row } from '../../components';
import { features } from '../../utils/images';

const featureList = [
    {
        title: 'Customizable Widgets',
        desc: 'Add, remove, and rearrange widgets like To-Do list, weather updates, stopwatch, and RSS feed. Customize your dashboard to fit your workflow.',
        img: features.s5,
        alt: 'To-Do Widget',
    },
    {
        title: 'Quick Access & Site Launcher',
        desc: 'Launch your favorite sites instantly with the quick access bar and customizable site launcher widgets.',
        img: features.s6,
        alt: 'Site Launcher and Quick Bar',
    },
    {
        title: 'My Browsing Stats',
        desc: 'Visualize your browsing patterns with easy-to-read graphs to stay productive and aware.',
        img: features.s9,
        alt: 'Browsing Stats Graph',
    },
    {
        title: 'Settings Panel',
        desc: 'Fine-tune your dashboard, customize colors, widget behavior, and more from the sleek settings panel.',
        img: features.s7,
        alt: 'Settings Panel',
    },
    {
        title: 'Wallpaper Customization',
        desc: 'Choose from beautiful dynamic wallpapers or upload your own images for a truly personalized experience.',
        img: features.s8,
        alt: 'Wallpaper Customization',
    },
];

const Features = () => {
    return (
        <section>
            <h1
                className="glow textCenter"
                style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.8rem' }}
            >
                DashX Features
            </h1>

            {featureList.map((feature, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={index} className="card" style={{ display:'flex', marginBottom: '3rem' }}>
                        <Row>
                            {isEven ? (
                                <>
                                    <div className="left">
                                        <img src={feature.img} alt={feature.alt} />
                                    </div>
                                    <div className="right" style={{ alignContent: 'center' }}>
                                        <h2 style={{ color: 'var(--btn-bg)' }}>{feature.title}</h2>
                                        <p style={{ maxWidth: 700 }}>{feature.desc}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="left" style={{ alignContent: 'center' }}>
                                        <h2 style={{ color: 'var(--btn-bg)' }}>{feature.title}</h2>
                                        <p style={{ maxWidth: 700 }}>{feature.desc}</p>
                                    </div>
                                    <div className="right">
                                        <img src={feature.img} alt={feature.alt} />
                                    </div>
                                </>
                            )}
                        </Row>
                        <br /> {/* adds spacing between cards */}
                    </div>
                );
            })}
        </section>
    );
};

export default Features;
