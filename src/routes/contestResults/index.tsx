import { createFileRoute } from '@tanstack/react-router'
import styles from './contestResults.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/contestResults/')({
    component: RouteComponent,
})

function RouteComponent() {
    usePageTitle('Результаты конкурса')
    const { t, i18n } = useTranslation('contestResult');

    const handleDownloadResults = () => {
        const fileUrl = '/documents/REns.xlsx'; // путь к вашему файлу на сервере
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'Результаты_конкурса.xlsx'); // имя сохраняемого файла
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('contestResult')}</h1>
                </div>
            </div>
            <div className={styles.container}>
                {/* Вводная информация */}
                <div className={styles.introSection}>
                    <h2>{t('result2025')}</h2>
                    <p>
                        {t('result2025Desc')}
                    </p>
                    <p>
                        {t('result2025Subdesc')}
                    </p>
                </div>

                {/* Общая статистика */}
                <div className={styles.statsCard}>
                    <div className={styles.cardHeader}>
                        <h3>{t('generalStats')}</h3>
                    </div>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>967</div>
                            <div className={styles.statLabel}>{t('application')}</div>
                        </div>
                        <div className={styles.statItem + ' ' + styles.success}>
                            <div className={styles.statNumber}>595</div>
                            <div className={styles.statLabel}>{t('received')}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>372</div>
                            <div className={styles.statLabel}>{t('notReceived')}</div>
                        </div>
                    </div>
                    <div className={styles.successRate}>
                        {t('received%')} <span>61.5%</span>
                    </div>
                </div>

                {/* Статистика по квотам */}
                <div className={styles.quotaSection}>
                    <h3>{t('quotaCatalog')}</h3>
                    <div className={styles.quotaGrid}>
                        <div className={styles.quotaCard}>
                            <h4>{t('notQuota')}</h4>
                            <div className={styles.quotaStats}>
                                <span className={styles.admitted}>{t('received')}: 280</span>
                                <span className={styles.rejected}>{t('notReceived')}: 201</span>
                            </div>
                            <div className={styles.quotaRate}>58.3% {t('success')}</div>
                        </div>

                        <div className={styles.quotaCard}>
                            <h4>{t('quotaK3')}</h4>
                            <div className={styles.quotaStats}>
                                <span className={styles.admitted}>{t('received')}: 98</span>
                                <span className={styles.rejected}>{t('notReceived')}: 34</span>
                            </div>
                            <div className={styles.quotaRate}>74.2% {t('success')}</div>
                        </div>

                        <div className={styles.quotaCard}>
                            <h4>{t('quotaK7')}</h4>
                            <div className={styles.quotaStats}>
                                <span className={styles.admitted}>{t('received')}: 92</span>
                                <span className={styles.rejected}>{t('notReceived')}: 60</span>
                            </div>
                            <div className={styles.quotaRate}>60.5% {t('success')}</div>
                        </div>

                        <div className={styles.quotaCard}>
                            <h4>{t('quotaK8')}</h4>
                            <div className={styles.quotaStats}>
                                <span className={styles.admitted}>{t('received')}: 54</span>
                                <span className={styles.rejected}>{t('notReceived')}: 34</span>
                            </div>
                            <div className={styles.quotaRate}>61.4% {t('success')}</div>
                        </div>

                        <div className={styles.quotaCard}>
                            <h4>{t('quotaK9')}</h4>
                            <div className={styles.quotaStats}>
                                <span className={styles.admitted}>{t('received')}: 13</span>
                                <span className={styles.rejected}>{t('notReceived')}: 2</span>
                            </div>
                            <div className={styles.quotaRate}>86.7% {t('success')}</div>
                        </div>

                        <div className={styles.quotaCard}>
                            <h4>{t('quotesK5K1')}</h4>
                            <div className={styles.quotaStats}>
                                <span className={styles.admitted}>{t('received')}: 3</span>
                                <span className={styles.rejected}>{t('notReceived')}: 0</span>
                            </div>
                            <div className={styles.quotaRate}>100% {t('success')}</div>
                        </div>
                    </div>
                </div>

                {/* Средние баллы */}
                <div className={styles.scoresSection}>
                    <h3>{t('avarageScores')}</h3>
                    <div className={styles.scoresGrid}>
                        <div className={styles.scoreCard}>
                            <h4>{t('scoresSKB')}</h4>
                            <div className={styles.scoreComparison}>
                                <div className={styles.scoreItem + ' ' + styles.admitted}>
                                    <span className={styles.scoreValue}>3.63</span>
                                    <span className={styles.scoreLabel}>{t('receiveds')}</span>
                                </div>
                                <div className={styles.scoreItem}>
                                    <span className={styles.scoreValue}>3.15</span>
                                    <span className={styles.scoreLabel}>{t('notReceiveds')}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.scoreCard}>
                            <h4>{t('avarageScoresDiploma')}</h4>
                            <div className={styles.scoreComparison}>
                                <div className={styles.scoreItem + ' ' + styles.admitted}>
                                    <span className={styles.scoreValue}>3.61</span>
                                    <span className={styles.scoreLabel}>{t('receiveds')}</span>
                                </div>
                                <div className={styles.scoreItem}>
                                    <span className={styles.scoreValue}>3.16</span>
                                    <span className={styles.scoreLabel}>{t('notReceiveds')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Кнопка скачивания */}
                <div className={styles.downloadSection}>
                    <button className={styles.downloadButton} onClick={handleDownloadResults}>
                        <svg className={styles.downloadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {t('dowland')}
                    </button>
                    <p className={styles.downloadNote}>
                        {t('fileInfo')}
                    </p>
                </div>

                {/* Дополнительная информация */}
                <div className={styles.infoSection}>
                    <h3>{t('additionalInformation')}</h3>
                    <div className={styles.infoContent}>
                        <p>
                            <strong>{t('happy')}</strong> {t('happyInfo')}
                        </p>
                        <p>
                            {t('notReceivedInfo')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}