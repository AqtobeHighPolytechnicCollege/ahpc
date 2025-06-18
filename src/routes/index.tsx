// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar.tsx';
import styles from '../styles/homepage.module.css';
import {useEffect, useState} from "react";
import {fetchNewsList} from "@/lib/api.ts";
import InfoCards from '@/components/MainPage/InfoCards/InfoCards.tsx';
import News from '@/components/MainPage/News/News.tsx'
import Reviews from '@/components/MainPage/Reviews/Reviews.tsx'
import Partners from "@/components/MainPage/partners/Partners.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import {usePageTitle} from "@/components/usePageTitile.tsx";
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


            {/* Новости */}
            <News />
            {/* Отзывы*/}
            {/*<Reviews />*/}
            {/* Партнёры */}
            <Partners />

        </>
    );
}
