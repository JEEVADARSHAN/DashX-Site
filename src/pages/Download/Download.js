import React, { useState } from 'react';
import styles from './Download.module.css';
import { download } from '../../utils/images';
import { Button, Row, Column, Carousel } from '../../components';

const Download = () => {
    const [activeTab, setActiveTab] = useState('chrome');

    const tabInfo = {
        chrome: {
            title: 'Install on Chrome / Chromium',
            steps: [
                <>Download the <strong>DashX ZIP file</strong> from the official site.</>,
                <>Extract the ZIP to a folder.</>,
                <>Open <code>chrome://extensions/</code> in Chrome.</>,
                <>Enable <strong>Developer mode</strong> (toggle at top right).</>,
                <>Click <strong>Load unpacked</strong> and select the extracted folder.</>,
                <>Pin DashX to your toolbar (optional).</>,
                <>Open a new tab, DashX should load automatically.</>
            ],
            img: download.d1,
            alt: 'Chrome extension install steps screenshot'
        },
        firefox: {
            title: 'Install on Firefox',
            steps: [
                <>Download the <strong>DashX ZIP file</strong>.</>,
                <>Extract it to a local folder.</>,
                <>Open <code>about:debugging#/runtime/this-firefox</code> in Firefox.</>,
                <>Click <strong>Load Temporary Add-on</strong>.</>,
                <>Select the <code>manifest.json</code> file inside the extracted folder.</>,
                <>After loading, open a new tab DashX becomes active.</>
            ],
            img: null,
            video: 'https://www.youtube.com/embed/J7el77F1ckg?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=J7el77F1ckg',
            alt: 'Firefox extension install video guide'
        },
        edge: {
            title: 'Install on Edge',
            steps: [
                <>Download the <strong>DashX ZIP file</strong>.</>,
                <>Extract it locally on your system.</>,
                <>Go to <code>edge://extensions/</code> in Edge.</>,
                <>Enable <strong>Developer mode</strong> (toggle).</>,
                <>Click <strong>Load unpacked</strong> and choose the folder.</>,
                <>DashX will now be active in new tabs.</>
            ],
            img: download.d2,
            alt: 'Edge extension install steps screenshot'
        }
    };

    const { title, steps, img, alt } = tabInfo[activeTab];

    return (
        <section>
            <h1 className="glow textCenter">
                Download & Install DashX
            </h1>
            <br/>
            <div className={styles.blob}></div>

            <div className="card">
                {/* Tabs */}
                <div className={styles.downloadTabs}>
                    {Object.keys(tabInfo).map(tab => (
                        <button
                            key={tab}
                            className={`${styles.downloadTabBtn} ${activeTab === tab ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="border">
                    <div className={styles.downloadContent}>
                        <div className={styles.downloadText}>
                            <h2 style={{ color: 'var(--btn-bg)', marginBottom: '1rem' }}>{title}</h2>
                            <ol style={{ paddingLeft:'40px' }}>
                                {steps.map((step, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.8rem' }}>{step}</li>
                                ))}
                            </ol>
                        </div>
                        <div key={activeTab} className={`${styles.downloadImage} ${styles.fadeIn}`}>
                            {activeTab === 'firefox' ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    overflow="hidden"
                                    src={tabInfo.firefox.video}
                                    title="Firefox Installation Guide"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img src={img} alt={alt} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="center card">
                <Button href="https://github.com/JEEVADARSHAN/DashX/releases/latest/download/DashX.zip" download>
                    Download ZIP
                </Button>
            </div>
            <p style={{ marginTop: '2rem', textAlign: 'center' }}>
                If you face any issues, visit our <a href="/faq">FAQ</a> or <a href="/contact">Contact</a> us for help.
            </p>
        </section>
    );
};

export default Download;
