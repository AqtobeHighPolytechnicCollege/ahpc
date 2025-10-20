// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar.tsx';
import styles from '../styles/homepage.module.css';
import { useEffect, useState } from "react";
import { fetchNewsList } from "@/lib/api.ts";
import InfoCards from '@/components/MainPage/InfoCards/InfoCards.tsx';
import News from '@/components/MainPage/News/News.tsx'
import Reviews from '@/components/MainPage/Reviews/Reviews.tsx'
import Partners from "@/components/MainPage/partners/Partners.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import { usePageTitle } from "@/components/usePageTitile.tsx";

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


// Компонент блока к 60-летию
// Компонент блока к 60-летию
function AnniversarySection() {
    const stats = [
        { number: "15000+", label: "Выпускников" },
        { number: "120+", label: "Преподавателей" },
        { number: "25", label: "Специальностей" },
        { number: "95%", label: "Трудоустройство" }
    ];

    return (
        <section className={styles.anniversarySection}>
            <div className={styles.anniversaryBackground}>
                <div className={styles.anniversaryLogoBackground}></div>
            </div>

            <div className={styles.anniversaryContent}>
                <div className={styles.anniversaryHeader}>
                    <div className={styles.yearsBadge}>
                        <span className={styles.yearsNumber}>60</span>
                        <span className={styles.yearsText}>ЛЕТ</span>
                    </div>

                    <h2 className={styles.anniversaryTitle}>1965 — 2025</h2>
                    <p className={styles.anniversarySubtitle}>ЮБИЛЕЙ КОЛЛЕДЖА</p>
                </div>

                <div className={styles.anniversaryMainContent}>
                    <p className={styles.description}>
                        Шесть десятилетий качественного образования, подготовки<br/>
                        профессионалов и развития инженерной мысли
                    </p>

                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.achievementsBadges}>
                        <div className={styles.badge}>Лучший колледж региона</div>
                        <div className={styles.badge}>Международные стандарты</div>
                        <div className={styles.badge}>Современное оборудование</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Компонент информационных карточек с эффектом колоды
function InfoCardsWithDeck() {
    const infoCards = [
        {
            icon: "🎓",
            title: "Качественное образование",
            description: "Современные программы обучения, соответствующие международным стандартам"
        },
        {
            icon: "💼",
            title: "Трудоустройство",
            description: "95% выпускников находят работу в первые 6 месяцев после окончания"
        },
        {
            icon: "🔬",
            title: "Современные технологии",
            description: "Новейшее оборудование и лаборатории для практического обучения"
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

// Компонент отзывов
function ReviewsSection() {
    const reviews = [
        {
            text: "Актюбинский политехнический колледж дал мне отличную базу знаний и практических навыков. Преподаватели всегда готовы помочь, а материальная база постоянно обновляется.",
            author: "Алия Сатпаева",
            role: "Выпускница 2023 года, специальность 'Информационные системы'"
        },
        {
            text: "Благодаря обучению в колледже я смог быстро найти работу по специальности. Знания, полученные здесь, реально применимы в профессиональной деятельности.",
            author: "Марат Токтаров",
            role: "Выпускник 2022 года, специальность 'Машиностроение'"
        },
        {
            text: "Колледж предоставляет не только качественное образование, но и помогает в личностном развитии. Здесь я нашел друзей и наставников на всю жизнь.",
            author: "Динара Ахметова",
            role: "Выпускница 2024 года, специальность 'Экономика'"
        }
    ];

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.reviewsContainer}>
                <h2 className={styles.reviewsTitle}>Отзывы выпускников</h2>
                <div className={styles.reviewsGrid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <p className={styles.reviewText}>"{review.text}"</p>
                            <div className={styles.reviewAuthor}>{review.author}</div>
                            <div className={styles.reviewRole}>{review.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
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



            {/* Новости */}
            <News />



            {/* Отзывы */}
            <ReviewsSection />

            {/* Партнёры */}
            <Partners />
        </>
    );
}