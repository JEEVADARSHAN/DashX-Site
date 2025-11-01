import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images = [], interval = 5000, className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const fadeDuration = 500; // matches CSS transition
    const delayAfterFade = 300; // extra delay after fade-out

    useEffect(() => {
        const timer = setInterval(() => {
            // start fade out
            setFade(false);

            // after fade-out completes
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % images.length);

                // wait a bit before fading in
                setTimeout(() => {
                    setFade(true);
                }, delayAfterFade);

            }, fadeDuration);

        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`${className} ${styles.carouselImage} ${fade ? styles.fadeIn : styles.fadeOut}`}
        />
    );
};

export default Carousel;
