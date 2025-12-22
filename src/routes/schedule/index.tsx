import { createFileRoute } from '@tanstack/react-router'
import styles from './schedule.module.css'
import { usePageTitle } from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/schedule/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('schedule');
    usePageTitle(t('schedule'),[i18n.language, t]);

    const scheduleFiles = [
        { course: t('course_1'), filename: '/documents/schedule/1course.pdf' },
        { course: t('course_2'), filename: '/documents/schedule/2course.pdf' },
        { course: t('course_3'), filename: '/documents/schedule/3course.pdf' },
        { course: t('course_4'), filename: '/documents/schedule/4course.pdf' }
    ];

    const classTimes = [
        { number: 1, time: '8:00 - 9:30' },
        { number: 2, time: '9:40 - 11:10' },
        { number: 3, time: '11:25 - 12:55' },
        { number: 4, time: '13:15 - 14:45' },
        { number: 5, time: '14:55 - 16:25' },
        { number: 6, time: '16:40 - 18:10' }
    ];

    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('schedule')}</h1>
            </div>
        </div>

        <div className={styles.container}>
            {/* Информационный блок */}
            <div className={styles.infoSection}>
                <h2>{t('info_title')}</h2>
                <p>
                    {t('info_description')}
                </p>

                <div className={styles.timeTable}>
                    <h3>{t('class_times_title')}</h3>
                    <div className={styles.timeGrid}>
                        {classTimes.map((classTime) => (
                            <div key={classTime.number} className={styles.timeItem}>
                                <span className={styles.classNumber}>{classTime.number} {t('class_pair')}:</span>
                                <span className={styles.classTime}>{classTime.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Секция скачивания расписаний */}
            <div className={styles.downloadSection}>
                <h2>{t('download_title')}</h2>
                <p>{t('download_description')}</p>

                <div className={styles.downloadGrid}>
                    {scheduleFiles.map((file) => (
                        <div key={file.course} className={styles.downloadCard}>
                            <div className={styles.courseTitle}>
                                <h3>{file.course}</h3>
                            </div>
                            <a
                                href={file.filename}
                                download
                                className={styles.downloadButton}
                            >
                                <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7,10 12,15 17,10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                {t('download_button')}
                            </a>
                        </div>
                    ))}
                </div>
                {/* Дополнительная информация */}
                <div className={styles.additionalInfo}>
                    <h3>{t('important_info_title')}</h3>
                    <ul>
                        <li>{t('important_info_1')}</li>
                        <li>{t('important_info_2')}</li>
                        <li>{t('important_info_3')}</li>
                        <li>{t('important_info_4')}</li>
                    </ul>
                </div>
            </div>


        </div>
    </>
}