import { createFileRoute } from '@tanstack/react-router'
import styles from './counteringCorruption.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/counteringCorruption/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('counteringCorruption');
    usePageTitle(t('counteringCorruption'));
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('counteringCorruption')}</h1>
            </div>
        </div>
        <div className={styles.container}>

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroIcon}>⚖</div>
                    <h2 className={styles.heroTitle}>
                        {t('heroTitle')}
                    </h2>
                    <p className={styles.heroText}>
                        {t('heroText')}
                    </p>
                </div>
            </section>

            {/* Key Achievements */}
            <section className={styles.achievementsSection}>
                <div className={styles.achievementCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardIcon}>◉</span>
                        <h3 className={styles.cardTitle}>{t('achievementLeagueTitle')}</h3>
                    </div>
                    <p className={styles.cardText}>
                        {t('achievementLeagueText')}
                    </p>
                </div>

                <div className={styles.achievementCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardIcon}>◉</span>
                        <h3 className={styles.cardTitle}>{t('achievementCodesTitle')}</h3>
                    </div>
                    <p className={styles.cardText}>
                        {t('achievementCodesText')}
                    </p>
                </div>
            </section>

            {/* Project Office */}
            <section className={styles.projectSection}>
                <div className={styles.projectHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t('projectSectionTitle')}
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t('projectSectionSubtitle')}
                    </p>
                </div>

                <div className={styles.projectContent}>
                    <div className={styles.projectList}>
                        <div className={styles.projectItem}>
                            <div className={styles.projectBullet}></div>
                            <div>
                                <h4 className={styles.projectItemTitle}>{t('projectStrategyTitle')}</h4>
                                <p className={styles.projectItemText}>{t('projectStrategyText')}</p>
                            </div>
                        </div>
                        <div className={styles.projectItem}>
                            <div className={styles.projectBullet}></div>
                            <div>
                                <h4 className={styles.projectItemTitle}>{t('projectStandardTitle')}</h4>
                                <p className={styles.projectItemText}>{t('projectStandardText')}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.goalCard}>
                        <h4 className={styles.goalTitle}>{t('goalTitle')}</h4>
                        <p className={styles.goalText}>
                            {t('goalText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Clean Session Campaign */}
            <section className={styles.campaignSection}>
                <div className={styles.campaignContent}>
                    <div className={styles.campaignIcon}>▣</div>
                    <h2 className={styles.campaignTitle}>
                        {t('campaignTitle')}
                    </h2>
                    <p className={styles.campaignText}>
                        {t('campaignText')}
                    </p>
                </div>
            </section>

            {/* Legal Definition */}
            <section className={styles.legalSection}>
                <h2 className={styles.sectionTitle}>
                    {t('legalSectionTitle')}
                </h2>
                <div className={styles.legalContent}>
                    <div className={styles.legalCard}>
                        <h3 className={styles.legalCardTitle}>{t('legalEtymologyTitle')}</h3>
                        <p className={styles.legalCardText}>
                            {t('legalEtymologyText')}
                        </p>
                        <div className={styles.legalNote}>
                            <p>{t('legalEtymologyNote')}</p>
                        </div>
                    </div>
                    <div className={styles.legalCard}>
                        <h3 className={styles.legalCardTitle}>{t('legalLawTitle')}</h3>
                        <div className={styles.legalQuote}>
                            <p>
                                {t('legalLawText')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* National Priority */}
            <section className={styles.nationalSection}>
                <div className={styles.nationalContent}>
                    <h2 className={styles.nationalTitle}>
                        {t('nationalTitle')}
                    </h2>
                    <p className={styles.nationalText}>
                        {t('nationalText')}
                    </p>
                    <div className={styles.nationalGrid}>
                        <div className={styles.nationalCard}>
                            <h4 className={styles.nationalCardTitle}>{t('nationalCard1Title')}</h4>
                            <p className={styles.nationalCardText}>{t('nationalCard1Text')}</p>
                        </div>
                        <div className={styles.nationalCard}>
                            <h4 className={styles.nationalCardTitle}>{t('nationalCard2Title')}</h4>
                            <p className={styles.nationalCardText}>{t('nationalCard2Text')}</p>
                        </div>
                        <div className={styles.nationalCard}>
                            <h4 className={styles.nationalCardTitle}>{t('nationalCard3Title')}</h4>
                            <p className={styles.nationalCardText}>{t('nationalCard3Text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* College Activities */}
            <section className={styles.activitiesSection}>
                <h2 className={styles.sectionTitle}>
                    {t('activitiesSectionTitle')}
                </h2>
                <div className={styles.activitiesList}>
                    <div className={styles.activityItem}>
                        <div className={styles.activityBullet}></div>
                        <p className={styles.activityText}>
                            {t('activity1')}
                        </p>
                    </div>
                    <div className={styles.activityItem}>
                        <div className={styles.activityBullet}></div>
                        <p className={styles.activityText}>
                            {t('activity2')}
                        </p>
                    </div>
                    <div className={styles.activityItem}>
                        <div className={styles.activityBullet}></div>
                        <p className={styles.activityText}>
                            {t('activity3')}
                        </p>
                    </div>
                    <div className={styles.activityItem}>
                        <div className={styles.activityBullet}></div>
                        <p className={styles.activityText}>
                            {t('activity4')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className={styles.contactSection}>
                <div className={styles.contactHeader}>
                    <div className={styles.contactIcon}>!</div>
                    <h2 className={styles.contactTitle}>
                        {t('contactSectionTitle')}
                    </h2>
                    <p className={styles.contactSubtitle}>
                        {t('contactSectionSubtitle')}
                    </p>
                </div>

                <div className={styles.contactGrid}>
                    <div className={styles.contactCard}>
                        <div className={styles.contactCardIcon}>☎</div>
                        <h3 className={styles.contactCardTitle}>{t('contactPhoneTitle')}</h3>
                        <p className={styles.contactCardText}>{t('contactPhone1')}</p>
                        <p className={styles.contactCardText}>{t('contactPhone2')}</p>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.contactCardIcon}>◉</div>
                        <h3 className={styles.contactCardTitle}>{t('contactBlogTitle')}</h3>
                        <p className={styles.contactCardText}>{t('contactBlogText')}</p>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.contactCardIcon}>◉</div>
                        <h3 className={styles.contactCardTitle}>{t('contactBoxTitle')}</h3>
                        <p className={styles.contactCardText}>{t('contactBoxText')}</p>
                    </div>
                </div>

                <div className={styles.warningBox}>
                    <p className={styles.warningText}>
                        <strong>{t('warningTitle')}</strong> {t('warningText')}
                    </p>
                </div>
            </section>

            {/* Conclusion */}
            <section className={styles.conclusionSection}>
                <div className={styles.conclusionContent}>
                    <h2 className={styles.conclusionTitle}>
                        {t('conclusionTitle')}
                    </h2>
                    <p className={styles.conclusionText}>
                        {t('conclusionText')}
                    </p>
                </div>
            </section>
        </div>
    </>
}