// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import Navbar from '../components/Navbar/Navbar.tsx';
import styles from '../styles/homepage.module.css';
import InfoCards from '@/components/MainPage/InfoCards/InfoCards.tsx';
import News from '@/components/MainPage/News/News.tsx'
import Partners from "@/components/MainPage/partners/Partners.tsx";
import { usePageTitle } from "@/components/usePageTitile.tsx";
import AnniversarySection from "@/components/MainPage/AnniversarySection/AnniversarySection.tsx";
import InfoCardsWithDeck from "@/components/MainPage/InfoCardsWithDeck/InfoCardsWithDeck.tsx";
import ReviewsSection from "@/components/MainPage/Reviews/Reviews.tsx";

export class NotFoundError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'NotFoundError';
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

export const Route = createFileRoute('/')({
    component: HomePage,
    notFoundComponent: () => {
        return <p>This setting page doesn't exist!</p>
    },
});

// Компонент для эффекта расыпанной мозаики с квадратами
function ScatteredMosaicEffect({ type }: { type: 'afterAnniversary' | 'beforeNews' | 'afterNews' }) {
    // Генерируем случайные высоты для квадратов
    const squareCount = 60; // Фиксированное количество для стабильности
    const heights = Array.from({ length: squareCount }, () =>
        Math.floor(Math.random() * 50) + 20 // Высота от 20px до 70px
    );

    const getClassName = () => {
        switch(type) {
            case 'afterAnniversary':
                return 'mosaicAfterAnniversary';
            case 'beforeNews':
                return 'mosaicBeforeNews';
            case 'afterNews':
                return 'mosaicAfterNews';
            default:
                return '';
        }
    };

    return (
        <div className={`${styles.mosaicTop} ${getClassName()}`}>
            {heights.map((height, index) => (
                <div
                    key={index}
                    className={styles.mosaicSquare}
                    style={{
                        height: `${height}px`,
                        animationDelay: `${index * 0.05}s`
                    }}
                />
            ))}
        </div>
    );
}








function HomePage() {
    usePageTitle('Главная')
    const { t, i18n } = useTranslation();

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <div className={styles.hashtag}>
                        <p>{t('hashtag')}</p>
                    </div>
                </div>
                <h1>
                    <span>{t('aqtobeHigher')}</span>
                    <span>{t('polytechnic')}</span>
                    <span>{t('college')}</span>
                </h1>
                <InfoCards />
            </div>

            {/* Блок к 60-летию колледжа */}
            <AnniversarySection />



            {/* Информационные карточки с эффектом колоды */}
            <InfoCardsWithDeck />



            {/* Блог директора */}
            <div className={styles.directorBlogBanner}>
                <div className={styles.directorBlogCard}>
                    <img
                        className={styles.directorBlogPhoto}
                        src="/img/collegeManagement/Zhetkergenkyzy_Nurgul.png"
                        alt={t('directorBlogTitle')}
                    />
                    <div className={styles.directorBlogContent}>
                        <span className={styles.directorBlogTag}>{t('directorBlogTag')}</span>
                        <h2 className={styles.directorBlogTitle}>{t('directorBlogTitle')}</h2>
                        <p className={styles.directorBlogName}>Жеткергенқызы Нұргүл</p>
                        <p className={styles.directorBlogDesc}>{t('directorBlogDesc')}</p>
                        <Link to="/directorBlog" className={styles.directorBlogBtn}>
                            {t('directorBlogBtn')}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M13 6L19 12L13 18" stroke="#000E3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Новости */}
            <News />



            {/* Отзывы */}
            <ReviewsSection />

            {/* Партнёры */}
            <Partners />
        </>
    );
}