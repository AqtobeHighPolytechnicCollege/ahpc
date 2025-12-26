import styles from './Partners.module.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Partners() {
    const { t, i18n } = useTranslation('partners');
    const currentLang = i18n.language;
    const [hoveredCard, setHoveredCard] = useState(null);

    const partners = [
        { filename: 'astanaHub.png', name: 'Astana Hub' },
        { filename: 'ERG.png', name: 'ERG' },
        { filename: 'talap.png', name: 'Talap'},
        { filename: 'aqtobeHub.png', name: 'Aqtobe Hub' },
        { filename: 'daService .png', name: 'Da Service'},
        { filename: 'CD.png', name: 'CD Company' },
        { filename: 'alina.png', name: 'Alina' },
        { filename: 'aqtobeJeo.png', name: 'Aqtobe Jeo' },
        { filename: 'ICA.png', name: 'ICA' },
        { filename: 'enegrosistema.png', name: 'Enegrosistema' },
        { filename: 'kegoc.png', name: 'KEGOC' },
        { filename: 'kuktas.png', name: 'Kuktas' },
        { filename: 'uzhpromsnab.png', name: 'Uzhpromsnab' }
    ];

    return (
        <div className={styles.partnersContent}>
            {/* Декоративные элементы */}
            <div className={styles.decorativeElements}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>

            <div className={styles.headContent}>
                <div className={styles.titleWrapper}>
                    <span className={styles.subtitle}>{t('Trusted by Industry Leaders')}</span>
                    <h1 className={styles.mainTitle}>
                        {t('Our')} <span className={styles.highlight}>{t('Partners')}</span>
                    </h1>
                    <p className={styles.description}>
                        {t('We collaborate with leading companies to deliver exceptional results and drive innovation across industries')}
                    </p>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.partnersGrid}>
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`${styles.partnerCard} ${hoveredCard === index ? styles.hovered : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardBackground}></div>
                                <div className={styles.logoContainer}>
                                    <img
                                        className={styles.partnerLogo}
                                        src={`/img/logoPartners/${partner.filename}`}
                                        alt={partner.name}
                                    />
                                </div>
                                <div className={styles.cardOverlay}>
                                    <span className={styles.partnerName}>{partner.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Статистика партнерства */}
            <div className={styles.statsSection}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>156</span>
                    <span className={styles.statLabel}>{t('Active Partners')}</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>60</span>
                    <span className={styles.statLabel}>{t('Years Experience')}</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>73%</span>
                    <span className={styles.statLabel}>{t('Joint Projects')}</span>
                </div>
            </div>
        </div>
    )
}