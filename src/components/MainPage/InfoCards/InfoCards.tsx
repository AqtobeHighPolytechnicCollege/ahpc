import { useEffect, useRef } from 'react';
import styles from './InfoCards.module.css';
import {useTranslation} from "react-i18next";

function animateValue(ref, end, duration) {
    let start = 0;
    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        if (ref.current) {
            ref.current.textContent = value.toLocaleString(); // добавляет пробелы
        }
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

export default function InfoCards() {
    const studentsRef = useRef(null);
    const graduatesRef = useRef(null);
    const specialtiesRef = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        animateValue(studentsRef, 2875, 700);
        animateValue(graduatesRef, 3545, 700);
        animateValue(specialtiesRef, 12, 700);
    }, []);

    return (
        <div className={styles.infoCards}>
            <div className={styles.cardsItem}>
                <div className={styles.itemTitle}>
                    <h2>№2</h2>
                </div>
                <div className={styles.itemSubtitle}>
                    <h4>{t('collegeInKz')}</h4>
                </div>
            </div>

            <div className={styles.cardsItem}>
                <div className={styles.itemTitle}>
                    <h2 ref={studentsRef}>0</h2>
                </div>
                <div className={styles.itemSubtitle}>
                    <h4>{t('students')}</h4>
                </div>
            </div>

            <div className={styles.cardsItem}>
                <div className={styles.itemTitle}>
                    <h2 ref={graduatesRef}>0</h2>
                </div>
                <div className={styles.itemSubtitle}>
                    <h4>{t('graduates')}</h4>
                </div>
            </div>

            <div className={styles.cardsItem}>
                <div className={styles.itemTitle}>
                    <h2 ref={specialtiesRef}>0</h2>
                </div>
                <div className={styles.itemSubtitle}>
                    <h4>{t('specialties')}</h4>
                </div>
            </div>
        </div>
    );
}
