import { createFileRoute } from '@tanstack/react-router'
import styles from './studentLive.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/studentLive/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('studentLive');
    usePageTitle(t('studentLive'),[i18n.language, t]);

    const clubs = [
        {
            name: t('clubs.0.name'),
            icon: "🎵",
            description: t('clubs.0.description'),
            members: "45+",
            events: "12/год"
        },
        {
            name: t('clubs.1.name'),
            icon: "😄",
            description: t('clubs.1.description'),
            members: "60+",
            events: "8/год"
        },
        {
            name: t('clubs.2.name'),
            icon: "🏆",
            description: t('clubs.2.description'),
            members: "120+",
            events: "15/год"
        },
        {
            name: t('clubs.3.name'),
            icon: "💃",
            description: t('clubs.3.description'),
            members: "35+",
            events: "10/год"
        },
        {
            name: t('clubs.4.name'),
            icon: "🌱",
            description: t('clubs.4.description'),
            members: "40+",
            events: "6/год"
        },
        {
            name: t('clubs.5.name'),
            icon: "⭐",
            description: t('clubs.5.description'),
            members: "55+",
            events: "8/год"
        },
        {
            name: t('clubs.6.name'),
            icon: "🦅",
            description: t('clubs.6.description'),
            members: "50+",
            events: "12/год"
        },
        {
            name: t('clubs.7.name'),
            icon: "🎤",
            description: t('clubs.7.description'),
            members: "25+",
            events: "20/год"
        },
        {
            name: t('clubs.8.name'),
            icon: "🎨",
            description: t('clubs.8.description'),
            members: "70+",
            events: "25/год"
        }
    ];

    const techClubs = [
        {
            name: t('techClubs.0.name'),
            icon: "🤖",
            description: t('techClubs.0.description'),
            highlight: t('techClubs.0.highlight'),
            tech: t('techClubs.0.tech')
        },
        {
            name: t('techClubs.1.name'),
            icon: "🎬",
            description: t('techClubs.1.description'),
            highlight: t('techClubs.1.highlight'),
            tech: t('techClubs.1.tech')
        },
        {
            name: t('techClubs.2.name'),
            icon: "📐",
            description: t('techClubs.2.description'),
            highlight: t('techClubs.2.highlight'),
            tech: t('techClubs.2.tech')
        },
        {
            name: t('techClubs.3.name'),
            icon: "⚡",
            description: t('techClubs.3.description'),
            highlight: t('techClubs.3.highlight'),
            tech: t('techClubs.3.tech')
        }
    ];

    const sports = [
        { name: t('sports.0.name'), icon: "🏀", level: t('sports.0.level'), description: t('sports.0.description') },
        { name: t('sports.1.name'), icon: "🏐", level: t('sports.1.level'), description: t('sports.1.description') },
        { name: t('sports.2.name'), icon: "⚽", level: t('sports.2.level'), description: t('sports.2.description') },
        { name: t('sports.3.name'), icon: "🏋️", level: t('sports.3.level'), description: t('sports.3.description') },
        { name: t('sports.4.name'), icon: "🎲", level: t('sports.4.level'), description: t('sports.4.description') },
        { name: t('sports.5.name'), icon: "♟️", level: t('sports.5.level'), description: t('sports.5.description') },
        { name: t('sports.6.name'), icon: "💪", level: t('sports.6.level'), description: t('sports.6.description') },
        { name: t('sports.7.name'), icon: "🏓", level: t('sports.7.level'), description: t('sports.7.description') }
    ];

    const achievements = [
        { icon: "🏆", number: "150+", label: t('stats.competitions') },
        { icon: "👥", number: "500+", label: t('stats.participants') },
        { icon: "🎯", number: "25+", label: t('stats.directions') },
        { icon: "🌟", number: "1000+", label: t('stats.events') }
    ];

    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('studentLive')}</h1>
                <p className={styles.subtitle}>{t('subtitle')}</p>
            </div>
            <div className={styles.floatingElements}>
                <div className={styles.float1}>🎨</div>
                <div className={styles.float2}>🏆</div>
                <div className={styles.float3}>🚀</div>
                <div className={styles.float4}>⭐</div>
            </div>
        </div>

        <div className={styles.container}>
            {/* Статистика */}
            <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    {achievements.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statIcon}>{stat.icon}</div>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Кружки и клубы */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>{t('clubsSection.title')}</h2>
                    <div className={styles.underline}></div>
                    <p>{t('clubsSection.description')}</p>
                </div>
                <div className={styles.grid}>
                    {clubs.map((club, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>{club.icon}</div>
                                <div>
                                    <h3>{club.name}</h3>
                                    <div className={styles.cardStats}>
                                        <span>{club.members} {t('clubsSection.members')}</span>
                                        <span>{club.events} {t('clubsSection.eventsPerYear')}</span>
                                    </div>
                                </div>
                            </div>
                            <p>{club.description}</p>
                            <div className={styles.cardFooter}>
                                <button className={styles.joinButton}>{t('clubsSection.joinButton')}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Цитата */}
            <section className={styles.quoteSection}>
                <div className={styles.quoteContent}>
                    <div className={styles.quoteIcon}>"</div>
                    <p>"{t('quote.text')}"</p>
                </div>
            </section>

            {/* Технические направления */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>{t('techSection.title')}</h2>
                    <div className={styles.underline}></div>
                    <p>{t('techSection.description')}</p>
                </div>
                <div className={styles.techGrid}>
                    {techClubs.map((tech, index) => (
                        <div key={index} className={styles.techCard}>
                            <div className={styles.techCardHeader}>
                                <div className={styles.cardIcon}>{tech.icon}</div>
                                <h3>{tech.name}</h3>
                            </div>
                            <p>{tech.description}</p>
                            <div className={styles.techHighlight}>
                                ⭐ {tech.highlight}
                            </div>
                            <div className={styles.techStack}>
                                <small>{t('techSection.technologies')} {tech.tech}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Спортивные секции */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>{t('sportsSection.title')}</h2>
                    <div className={styles.underline}></div>
                    <p>{t('sportsSection.description')}</p>
                </div>
                <div className={styles.sportsGrid}>
                    {sports.map((sport, index) => (
                        <div key={index} className={styles.sportCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>{sport.icon}</div>
                                <div>
                                    <h3>{sport.name}</h3>
                                    <div className={styles.sportLevel}>{sport.level}</div>
                                </div>
                            </div>
                            <p>{sport.description}</p>
                            <div className={styles.sportSchedule}>
                                📅 {t('sportsSection.schedule')}
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>{t('cta.title')}</h2>
                    <p>{t('cta.description')}</p>
                    <div className={styles.ctaButtons}>
                        <button className={styles.ctaButton}>{t('cta.applyButton')}</button>
                        <button className={styles.ctaButtonSecondary}>{t('cta.learnMoreButton')}</button>
                    </div>
                    <div className={styles.ctaContact}>
                        {t('cta.contact')}
                    </div>
                </div>
            </section>
        </div>
    </>
}