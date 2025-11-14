import styles from './InfoCardsWithDeck.module.css'
import { useTranslation } from 'react-i18next';

export default function InfoCardsWithDeck() {

    const { t, i18n } = useTranslation('home');

    const infoCards = [
        {
            icon: "🎓",
            title: t('infoCards.education.title'),
            description: t('infoCards.education.description')
        },
        {
            icon: "💼",
            title: t('infoCards.employment.title'),
            description: t('infoCards.employment.description')
        },
        {
            icon: "🔬",
            title: t('infoCards.technology.title'),
            description: t('infoCards.technology.description')
        }
    ];

    return (
        <section className={styles.infoCardsSection}>
            <div className={styles.infoCardsContainer}>
                {infoCards.map((card, index) => (
                    <div key={index} className={styles.cardStack}>
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}