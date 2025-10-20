import { createFileRoute } from '@tanstack/react-router'
import styles from  './examInfo.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/examInfo/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('examInfo');
    usePageTitle(t('examInfo'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('examInfo')}</h1>
            </div>
        </div>
        <div className={styles.container}>

            <section className={styles.examInfo}>
                <div className={styles.examInfo__Text}>
                    <h1 className={styles.examInfo__Text__Title}>{t('whyTakeExam')}</h1>
                    <p className={styles.examInfo__Text__Subtitle}>{t('passingExam')}</p>
                    <a className={styles.examinfo__Text__Link}>{t('checkExams')}</a>
                </div>
                <img className={styles.examInfo__Image} src='/img/examInfo/examInfo.png' alt='Информация по экзаменам' />
            </section>

            <section className={styles.infoBlock}>
                <div className={styles.infoBlock__Blocks}>
                    <div className={styles.infoBlock__Block}>
                        <h1 className={styles.infoBlock__Block__Title}>{t('courseWork')}</h1>
                        <p className={styles.infoBlock__Block__Subtitle}>{t('courseWorkDesc')}</p>
                    </div>
                    <div className={styles.infoBlock__Block}>
                        <h1 className={styles.infoBlock__Block__Title}>{t('purposeOfTheCourseWork')}</h1>
                        <p className={styles.infoBlock__Block__Subtitle}>{t('purposeOfTheCourseWorkDesc')}</p>
                    </div>
                </div>
                <div className={styles.infoBlock__Blocks}>
                    <div className={styles.infoBlock__Block}>
                        <h1 className={styles.infoBlock__Block__Title}>{t('protectionOfCourseWork')}</h1>
                        <p className={styles.infoBlock__Block__Subtitle}>Защита курсовой работы проводится перед специальной комиссией, которая оценивает качество выполнения задания, соответствие требованиям и уровень представления материала, после чего выставляет итоговую оценку студенту.</p>
                    </div>
                </div>
            </section>

            <section className={styles.graduateWork}>
                <div className={styles.graduateWork__Present}>
                    <img className={styles.graduateWork__Image} src='/img/examInfo/graduateWork.png' alt='Дипломная работа' />
                    <div className={styles.graduateWork__Present__Block}>
                        <h1 className={styles.graduateWork__Present__Block__Title}>{t('diplomaWork')}</h1>
                        <p className={styles.graduateWork__Present__Block__Subtitle}>{t('diplomaWorkDesc')}</p>
                    </div>
                </div>
                <div className={styles.graduateWork__Process}>
                    <div className={styles.graduateWork__Process__Block}>
                        <h1 className={styles.graduateWork__Process__Block__Title}>{t('purposeDiplomaWork')}</h1>
                        <p className={styles.graduateWork__Process__Block__Subtitle}>{t('purposeDiplomaWorkDesc')}</p>
                    </div>
                    <div className={styles.graduateWork__Process__Block}>
                        <h1 className={styles.graduateWork__Process__Block__Title}>{t('protectionDiplomaWork')}</h1>
                        <p className={styles.graduateWork__Process__Block__Subtitle}>{t('protectionDiplomaWorkDesc')}</p>
                    </div>
                </div>
            </section>
        </div>
        <section className={styles.examSchedule}>
            <div className={styles.examSchedule__Header}>
                <h1 className={styles.examSchedule__Header__Title}>{t('examGraph')}</h1>
                <p className={styles.examSchedule__Header__Subtitle}>{t('examGraphDesc')}</p>
            </div>
            <div className={styles.examSchedule__Search}>
                <div className={styles.examSchedule__Search__Input}>
                    <input className={styles.examSchedule__Search__Input__Item} />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.1333 24L13.7333 15.6C13.0667 16.1333 12.3 16.5556 11.4333 16.8667C10.5667 17.1778 9.64445 17.3333 8.66667 17.3333C6.24445 17.3333 4.19467 16.4942 2.51733 14.816C0.840001 13.1378 0.000889594 11.088 7.05467e-07 8.66667C-0.000888183 6.24533 0.838223 4.19556 2.51733 2.51733C4.19645 0.839111 6.24622 0 8.66667 0C11.0871 0 13.1373 0.839111 14.8173 2.51733C16.4973 4.19556 17.336 6.24533 17.3333 8.66667C17.3333 9.64444 17.1778 10.5667 16.8667 11.4333C16.5556 12.3 16.1333 13.0667 15.6 13.7333L24 22.1333L22.1333 24ZM8.66667 14.6667C10.3333 14.6667 11.7502 14.0836 12.9173 12.9173C14.0844 11.7511 14.6676 10.3342 14.6667 8.66667C14.6658 6.99911 14.0827 5.58267 12.9173 4.41733C11.752 3.252 10.3351 2.66844 8.66667 2.66667C6.99822 2.66489 5.58178 3.24844 4.41733 4.41733C3.25289 5.58622 2.66933 7.00267 2.66667 8.66667C2.664 10.3307 3.24756 11.7476 4.41733 12.9173C5.58711 14.0871 7.00356 14.6702 8.66667 14.6667Z"
                            fill="black"/>
                    </svg>
                </div>
            </div>

            <div className={styles.examSchedule__Block}>
                <img src='/img/examInfo/NoFiend.png' alt='График экзаменов не найден'/>
                <h1 className={styles.examSchedule__Block__NoFound__Title}>{t('notFound')}</h1>
            </div>
        </section>
    </>
}