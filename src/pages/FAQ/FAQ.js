import React, { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▾</span>
            </button>
            <div
                ref={contentRef}
                className={styles.faqAnswerWrapper}
                style={{
                    maxHeight: height,
                    transition: 'max-height 0.4s ease',
                }}
            >
                <div className={styles.faqAnswer}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqList = [
        {
            question: 'Is DashX free to use?',
            answer: 'Yes, DashX is completely free and will always be free for users.'
        },
        {
            question: 'How is my data stored?',
            answer: 'All your data is stored locally in your browser’s storage. Nothing is ever sent to external servers or the cloud.'
        },
        {
            question: 'Can I customize every part?',
            answer: 'Yes, you can choose wallpaper, add/remove widgets, reorder, change colors, and more.'
        },
        {
            question: 'Will it affect browser performance?',
            answer: 'DashX is lightweight and loads only on new tab pages, so it has minimal impact on general browsing performance.'
        },
        {
            question: 'Does it work Offline?',
            answer: 'Yes, since your data is local, many features (widgets, settings) function even without an internet connection.'
        },
        {
            question: 'Can I suggest new features?',
            answer: 'Absolutely! Use the Contact page to send us your ideas, and we may include them in future updates.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Your data never leaves your browser. We use no cloud storage or analytics tools.'
        },
        {
            question: 'How to uninstall DashX?',
            answer: 'Go to your browser’s extensions page, find DashX, and click “Remove” or “Uninstall”.'
        }
    ];

    return (
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '1rem' }}>
            <h1 className="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Frequently Asked Questions
            </h1>

            {faqList.map((item, idx) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
            ))}
        </section>
    );
};

export default FAQ;
