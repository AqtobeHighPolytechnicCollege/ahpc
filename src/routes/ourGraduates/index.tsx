import { createFileRoute } from '@tanstack/react-router'
import styles from './ourGraduates.module.css'
import { usePageTitle } from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/ourGraduates/')({
    component: RouteComponent,
})

const graduatesData = [
    { year: 1997, count: 107 }, { year: 1998, count: 70 }, { year: 1999, count: 170 },
    { year: 2000, count: 355 }, { year: 2001, count: 329 }, { year: 2002, count: 158 },
    { year: 2003, count: 699 }, { year: 2004, count: 1538 }, { year: 2005, count: 1261 },
    { year: 2006, count: 504 }, { year: 2007, count: 349 }, { year: 2008, count: 359 },
    { year: 2009, count: 148 }, { year: 2010, count: 621 }, { year: 2011, count: 593 },
    { year: 2012, count: 390 }, { year: 2013, count: 432 }, { year: 2014, count: 299 },
    { year: 2015, count: 472 }, { year: 2016, count: 407 }, { year: 2017, count: 421 },
    { year: 2018, count: 403 }, { year: 2019, count: 345 }, { year: 2020, count: 378 },
    { year: 2021, count: 420 }, { year: 2022, count: 452 }, { year: 2023, count: 470 },
    { year: 2024, count: 434 }, { year: 2025, count: 493 }
];

const graduateImages = [
    "/img/ourGraduates/graduates1.png",
    "/img/ourGraduates/graduates8.png",
    "/img/ourGraduates/graduates9.png",
    "/img/ourGraduates/graduates10.png",
    "/img/ourGraduates/graduates11.png",
    "/img/ourGraduates/graduates12.png",
    "/img/ourGraduates/graduates13.png",
    "/img/ourGraduates/graduates14.png",
    "/img/ourGraduates/graduates15.png",
    "/img/ourGraduates/graduates7.png",
    "/img/ourGraduates/graduates2.png",
    "/img/ourGraduates/graduates3.png",
    "/img/ourGraduates/graduates4.png",
    "/img/ourGraduates/graduates5.png",
    "/img/ourGraduates/graduates6.png"
];

const graduateYears = [
    "2020",
    "2018",
    "2020",
    "2017",
    "2021",
    "2019",
    "2005",
    "2022",
    "2018",
    "2019",
    "2010",
    "2019",
    "2023",
    "2020",
    "2022"
];

const totalGraduates = graduatesData.reduce((sum, item) => sum + item.count, 0);

function RouteComponent() {
    const { t, i18n } = useTranslation('ourGraduates');
    usePageTitle(t('ourGraduates'),[i18n.language, t]);

    const graduatesFromLocale = t('graduates', { returnObjects: true }) as Array<{name: string, position: string}>;
    const successfulGraduates = graduatesFromLocale.map((graduate, index) => ({
        id: index + 1,
        name: graduate.name,
        position: graduate.position,
        image: graduateImages[index],
        year: graduateYears[index]
    }));

    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('ourGraduates')}</h1>
            </div>
        </div>

        <div className={styles.container}>
            {/* Описательный блок */}
            <section className={styles.introSection}>
                <div className={styles.introContent}>
                    <h2>{t('introTitle')}</h2>
                    <p>
                        {t('introDescription1')}
                    </p>
                    <p>
                        {t('introDescription2')}
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>95%</span>
                            <span className={styles.statLabel}>{t('statEmployment')}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>150+</span>
                            <span className={styles.statLabel}>{t('statPartners')}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{totalGraduates.toLocaleString()}</span>
                            <span className={styles.statLabel}>{t('statGraduates')}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.graduatesStatsSection}>
                <h2>{t('graduatesCountTitle')}</h2>

                {/* Сетка карточек по годам */}
                <div className={styles.cardsGrid}>
                    {graduatesData.map((item) => (
                        <div
                            key={item.year}
                            className={`${styles.yearCard} ${
                                item.count === 1538 ? styles.topYear :
                                    item.year === 1997 ? styles.firstYear :
                                        item.year === 2025 ? styles.currentYear : ''
                            }`}
                        >
                            <div className={styles.yearNumber}>
                                {item.year}
                            </div>
                            <div className={styles.yearCount}>
                                {item.count}
                            </div>

                            {/* Специальные бейджи */}
                            {item.count === 1538 && (
                                <div className={styles.badge + ' ' + styles.badgeTop}>
                                    {t('badgeTop')}
                                </div>
                            )}
                            {item.year === 2025 && (
                                <div className={styles.badge + ' ' + styles.badgeCurrent}>
                                    {t('badgeNew')}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Общая статистика */}
                <div className={styles.totalStatsNew}>
                    <div className={styles.totalNumber}>
                        {totalGraduates.toLocaleString()}
                    </div>
                    <div className={styles.totalLabel}>
                        {t('totalGraduatesLabel')}
                    </div>
                    <div className={styles.yearRange}>
                        {t('yearRange')}
                    </div>
                </div>
            </section>

            {/* Успешные выпускники */}
            <section className={styles.successfulGraduatesSection}>
                <h2>{t('successfulGraduatesTitle')}</h2>
                <p className={styles.sectionSubtitle}>
                    {t('successfulGraduatesSubtitle')}
                </p>

                <div className={styles.graduatesGrid}>
                    {successfulGraduates.map((graduate) => (
                        <div key={graduate.id} className={styles.graduateCard}>
                            <div className={styles.graduateImage}>
                                <img
                                    src={graduate.image}
                                    alt={graduate.name}
                                    onError={(e) => {
                                        e.currentTarget.src = '/img/default-avatar.jpg';
                                    }}
                                />
                            </div>
                            <div className={styles.graduateInfo}>
                                <h3>{graduate.name}</h3>
                                <p className={styles.graduateYear}>{t('graduationYear')} {graduate.year}</p>
                                <p className={styles.graduatePosition}>{graduate.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Призыв к действию */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>{t('ctaTitle')}</h2>
                    <p>
                        {t('ctaDescription')}
                    </p>
                    <button className={styles.ctaButton}>{t('ctaButton')}</button>
                </div>
            </section>
        </div>
    </>
}