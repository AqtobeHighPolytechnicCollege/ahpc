import { createFileRoute } from '@tanstack/react-router'
import styles from './employment.module.css'
import { usePageTitle } from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/employment/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('employemnt');
    usePageTitle(t('employemnt'),[i18n.language, t]);

    const employmentData = [
        { year: '2016-2017', graduates: 409, employed: 391, rate: 96 },
        { year: '2017-2018', graduates: 402, employed: 360, rate: 90 },
        { year: '2018-2019', graduates: 345, employed: 315, rate: 91 },
        { year: '2019-2020', graduates: 378, employed: 299, rate: 79 },
        { year: '2020-2021', graduates: 420, employed: 248, rate: 59 },
        { year: '2021-2022', graduates: 420, employed: 399, rate: 88.3},
        { year: '2022-2023', graduates: 470, employed: 217, rate: 46.2 },
        { year: '2023-2024', graduates: 434, employed: 256, rate: 59 },
        { year: '2024-2025', graduates: 493, employed: 396, rate: 80.3}
    ];

    const activities = [
        {
            title: t('activity_1_title'),
            description: t('activity_1_description'),
            details: [
                t('activity_1_detail_1'),
                t('activity_1_detail_2'),
                t('activity_1_detail_3'),
                t('activity_1_detail_4')
            ]
        },
        {
            title: t('activity_2_title'),
            description: t('activity_2_description'),
            details: [
                t('activity_2_detail_1'),
                t('activity_2_detail_2'),
                t('activity_2_detail_3'),
                t('activity_2_detail_4')
            ]
        },
        {
            title: t('activity_3_title'),
            description: t('activity_3_description'),
            details: [
                t('activity_3_detail_1'),
                t('activity_3_detail_2'),
                t('activity_3_detail_3'),
                t('activity_3_detail_4')
            ]
        }
    ];

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('employemnt')}</h1>
                </div>
            </div>

            <div className={styles.container}>
                {/* Статистика трудоустройства */}
                <section className={styles.statsSection}>
                    <div className={styles.sectionHeader}>
                        <h2>{t('stats_title')}</h2>
                        <div className={styles.divider}></div>
                    </div>

                    <div className={styles.latestStats}>
                        <div className={styles.statCard}>
                            <div className={styles.statYear}>{t('period_9_years')}</div>
                            <div className={styles.statNumbers}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>2858</span>
                                    <span className={styles.statLabel}>{t('graduates')}</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>2086</span>
                                    <span className={styles.statLabel}>{t('employed')}</span>
                                </div>
                                <div className={styles.statPercent}>73%</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.historicalData}>
                        <h3>{t('dynamics_title')}</h3>
                        <div className={styles.dataGrid}>
                            {employmentData.map((data, index) => (
                                <div key={index} className={styles.dataItem}>
                                    <div className={styles.dataYear}>{data.year}</div>
                                    <div className={styles.dataDetails}>
                                        <div className={styles.dataRow}>
                                            <span>{t('graduates_label')}</span>
                                            <strong>{data.graduates}</strong>
                                        </div>
                                        <div className={styles.dataRow}>
                                            <span>{t('employed_label')}</span>
                                            <strong>{data.employed}</strong>
                                        </div>
                                        <div className={styles.dataRate}>{data.rate}%</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Направления деятельности */}
                <section className={styles.activitiesSection}>
                    <div className={styles.sectionHeader}>
                        <h2>{t('activities_title')}</h2>
                        <div className={styles.divider}></div>
                    </div>

                    <div className={styles.activitiesGrid}>
                        {activities.map((activity, index) => (
                            <div key={index} className={styles.activityCard}>
                                <div className={styles.activityHeader}>
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description}</p>
                                </div>
                                <ul className={styles.activityList}>
                                    {activity.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Процесс трудоустройства */}
                <section className={styles.processSection}>
                    <div className={styles.sectionHeader}>
                        <h2>{t('process_title')}</h2>
                        <div className={styles.divider}></div>
                    </div>

                    <div className={styles.processContent}>
                        <p className={styles.processDescription}>
                            {t('process_description')}
                        </p>

                        <div className={styles.processSteps}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h4>{t('process_step_1_title')}</h4>
                                    <p>{t('process_step_1_description')}</p>
                                </div>
                            </div>

                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h4>{t('process_step_2_title')}</h4>
                                    <p>{t('process_step_2_description')}</p>
                                </div>
                            </div>

                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h4>{t('process_step_3_title')}</h4>
                                    <p>{t('process_step_3_description')}</p>
                                </div>
                            </div>

                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h4>{t('process_step_4_title')}</h4>
                                    <p>{t('process_step_4_description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}