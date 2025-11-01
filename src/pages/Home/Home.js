import React from 'react';
import styles from './Home.module.css';
import { Button, Row, Column, Carousel } from '../../components';
import { home } from '../../utils/images';

const featureSummary = [
    { title: 'Fully Customizable Widgets', desc: 'Drag & drop live widgets like To-Do, Weather, RSS Feed, Stopwatch, and more.' },
    { title: 'Quick Access Bar & Site Launcher', desc: 'One-click launch your favorite sites and bookmarks.' },
    { title: 'Usage Analytics', desc: 'Visualize time spent on tabs (privacy-first & local storage only).' },
    { title: 'Dark Mode & Stunning Wallpapers', desc: 'Choose from dynamic wallpapers or upload your own.' },
    { title: '100% Privacy First', desc: 'All data is stored locally. No tracking, no cloud sync.' },
];
const heroImages = [home.s1, home.s2, home.s3, home.s4];
const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <section className="fScontainer">
                {/* Hero Section */}
                <Row>
                    <div className="left">
                        <img src={home.logo} alt="DashX Logo" className={styles.heroLogo} />
                        <h1 className="glow">Introducing DashX</h1>
                        <h3>Your new tab. Smarter than ever.</h3>
                        <p>
                            DashX transforms your browser’s new tab with live widgets, quick access tools, site launchers, and powerful productivity features all while respecting your privacy.
                        </p>
                        <br/>
                        <Button href="/download">Download Now</Button>
                    </div>
                    <div className="right">
                        <Carousel images={heroImages} interval={6000} className="right" />
                    </div>
                </Row>
            </section>
            <br />
            <br />
            <section className="fScontainer">
                {/* Feature Preview */}
                <div>
                    <img src={home.s1} alt="Live widgets preview" />
                </div>
            </section>
            <br />
            <br />
            <section className="fScontainer">
                {/* Features Summary */}
                <div className={styles.featuresSummary}>
                    <h2 className="glow textCenter">Key Features</h2>
                    <br/>
                    <div className={styles.featureCards}>
                        {featureSummary.map(({ title, desc }, i) => (
                            <div key={i} className={styles.featureCard}>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section className="fScontainer">
                {/* Dashboard Preview */}
                <div>
                    <h2 className="glow textCenter">See DashX in Action</h2>
                    <br/>
                    <img src={home.s4} alt="Full dashboard overview" />
                </div>
            </section>
            <br />
            <br />
        </div>
    );
};

export default Home;
