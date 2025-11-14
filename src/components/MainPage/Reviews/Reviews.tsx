import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import styles from './Reviews.module.css';

export default function ReviewsSection() {
    const { t } = useTranslation('home');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const reviews = [
        {
            text: t('reviews.items.0.text'),
            author: t('reviews.items.0.author'),
            role: t('reviews.items.0.role'),
            image: "/img/Reviews/rev1.jpg"
        },
        {
            text: t('reviews.items.1.text'),
            author: t('reviews.items.1.author'),
            role: t('reviews.items.1.role'),
            image: "/img/Reviews/rev2.jpg"
        },
        {
            text: t('reviews.items.2.text'),
            author: t('reviews.items.2.author'),
            role: t('reviews.items.2.role'),
            image: "/img/Reviews/rev3.jpg"
        },
        {
            text: t('reviews.items.3.text'),
            author: t('reviews.items.3.author'),
            role: t('reviews.items.3.role'),
            image: "/img/Reviews/rev4.jpeg"
        },
        {
            text: t('reviews.items.4.text'),
            author: t('reviews.items.4.author'),
            role: t('reviews.items.4.role'),
            image: "/img/Reviews/rev5.jpg"
        },
        {
            text: t('reviews.items.5.text'),
            author: t('reviews.items.5.author'),
            role: t('reviews.items.5.role'),
            image: "/img/Reviews/rev6.jpg"
        },
        {
            text: t('reviews.items.6.text'),
            author: t('reviews.items.6.author'),
            role: t('reviews.items.6.role'),
            image: "/img/Reviews/rev9.png"
        },
        {
            text: t('reviews.items.7.text'),
            author: t('reviews.items.7.author'),
            role: t('reviews.items.7.role'),
            image: "/img/Reviews/rev10.jpg"
        },
        {
            text: t('reviews.items.8.text'),
            author: t('reviews.items.8.author'),
            role: t('reviews.items.8.role'),
            image: "/img/Reviews/rev11.jpg"
        },
        {
            text: t('reviews.items.9.text'),
            author: t('reviews.items.9.author'),
            role: t('reviews.items.9.role'),
            image: "/img/Reviews/rev12.jpg"
        },
        {
            text: t('reviews.items.10.text'),
            author: t('reviews.items.10.author'),
            role: t('reviews.items.10.role'),
            image: "/img/Reviews/rev13.jpg"
        },
        {
            text: t('reviews.items.11.text'),
            author: t('reviews.items.11.author'),
            role: t('reviews.items.11.role'),
            image: "/img/Reviews/rev14.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const getVisibleReviews = () => {
        const prev = (currentIndex - 1 + reviews.length) % reviews.length;
        const next = (currentIndex + 1) % reviews.length;
        return [prev, currentIndex, next];
    };

    const visibleIndices = getVisibleReviews();

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.backgroundEffect}>
                <div className={styles.bgCircle1}></div>
                <div className={styles.bgCircle2}></div>
            </div>

            <div className={styles.reviewsContainer}>
                <h2 className={styles.reviewsTitle}>{t('reviews.title')}</h2>
                <p className={styles.reviewsSubtitle}>
                    {t('reviews.subtitle')}
                </p>

                <div
                    className={styles.carouselWrapper}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className={styles.carouselTrack}>
                        {visibleIndices.map((index, position) => {
                            const review = reviews[index];
                            const isCenter = position === 1;
                            const isLeft = position === 0;
                            const isRight = position === 2;

                            return (
                                <div
                                    key={index}
                                    className={`${styles.carouselCard} ${
                                        isCenter ? styles.cardCenter : ''
                                    } ${isLeft ? styles.cardLeft : ''} ${
                                        isRight ? styles.cardRight : ''
                                    }`}
                                >
                                    <div className={styles.reviewCardInner}>
                                        <div className={styles.quoteIcon}>"</div>

                                        <p className={styles.reviewText}>
                                            {review.text}
                                        </p>

                                        <div className={styles.reviewAuthorSection}>
                                            <div className={styles.authorAvatar}>
                                                <img
                                                    src={review.image}
                                                    alt={review.author}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.reviewAuthor}>
                                                    {review.author}
                                                </div>
                                                <div className={styles.reviewRole}>
                                                    {review.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button onClick={prevSlide} className={`${styles.navButton} ${styles.navButtonPrev}`}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button onClick={nextSlide} className={`${styles.navButton} ${styles.navButtonNext}`}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className={styles.dotsContainer}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.dot} ${
                                index === currentIndex ? styles.dotActive : ''
                            }`}
                        />
                    ))}
                </div>

                <div className={styles.counter}>
                    <span className={styles.counterCurrent}>{currentIndex + 1}</span>
                    <span className={styles.counterSeparator}>/</span>
                    <span className={styles.counterTotal}>{reviews.length}</span>
                </div>
            </div>
        </section>
    );
}