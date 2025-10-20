import { createFileRoute } from '@tanstack/react-router'
import styles from './correspondence.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/correspondence/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('correspondence');
    usePageTitle(t('correspondence'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('correspondence')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.whoIs}>
                <div className={styles.whoIs__Text}>
                    <h1 className={styles.whoIs__Text__Title}>{t('correspodenceInfo')}</h1>
                    <p className={styles.whoIs__Text__Subtitle}>{t('correspodenceInfoDesc')}</p>
                </div>
                <img src='/img/correspondence/correspodence.png' alt='Заочное отделение авпк' />
            </div>
            <div className={styles.questionBlock}>
                <table className={styles.tableQuestion}>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('question')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('questionSum')}</td>
                    </tr>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('budgetCoins')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('no')}</td>
                    </tr>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('aviableBudget')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('no')}</td>
                    </tr>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('passingGrade')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('checkSite')}</td>
                    </tr>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('aviableGrade')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('200+')}</td>
                    </tr>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('whatShould')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('diplomabals')}</td>
                    </tr>
                    <tr className={styles.tableQuestion__Column}>
                        <td className={styles.tableQuestion__RowsQuestion}>{t('quetionLearnTime')}</td>
                        <td className={styles.tableQuestion__RowsAnswer}>{t('learnTIme')}</td>
                    </tr>
                </table>
            </div>
            <div className={styles.directionsSection}>
                <div className={styles.directionsGrid}>
                    <div className={styles.directionCard}>
                        <div className={styles.cardIcon}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M10 15L20 8L30 15V28C30 29.1 29.1 30 28 30H12C10.9 30 10 29.1 10 28V15Z"
                                      stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                                <path d="M15 30V20H25V30" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                                <circle cx="32" cy="12" r="3" fill="#8B5CF6"/>
                                <circle cx="35" cy="8" r="2" fill="#A78BFA"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>{t('software')}</h3>
                    </div>

                    <div className={styles.directionCard}>
                        <div className={styles.cardIcon}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect x="8" y="12" width="24" height="18" rx="2" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                                <rect x="12" y="8" width="16" height="4" rx="1" fill="#3B82F6"/>
                                <circle cx="16" cy="20" r="2" fill="#3B82F6"/>
                                <circle cx="24" cy="20" r="2" fill="#60A5FA"/>
                                <path d="M10 26H30" stroke="#3B82F6" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>{t('maintenance')}</h3>
                    </div>

                    <div className={styles.directionCard}>
                        <div className={styles.cardIcon}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="8" stroke="#10B981" strokeWidth="2" fill="none"/>
                                <circle cx="20" cy="20" r="4" fill="#10B981"/>
                                <path d="M20 4V12M20 28V36M36 20H28M12 20H4" stroke="#10B981" strokeWidth="2"/>
                                <circle cx="20" cy="8" r="2" fill="#34D399"/>
                                <circle cx="20" cy="32" r="2" fill="#34D399"/>
                                <circle cx="32" cy="20" r="2" fill="#34D399"/>
                                <circle cx="8" cy="20" r="2" fill="#34D399"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>{t('acProcess')}</h3>
                    </div>

                    <div className={styles.directionCard}>
                        <div className={styles.cardIcon}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M8 32L20 16L32 32H8Z" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                                <circle cx="12" cy="28" r="2" fill="#F59E0B"/>
                                <circle cx="20" cy="28" r="2" fill="#FCD34D"/>
                                <circle cx="28" cy="28" r="2" fill="#F59E0B"/>
                                <path d="M16 12C16 8 18 6 20 6C22 6 24 8 24 12" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>{t('oil')}</h3>
                    </div>

                    <div className={styles.directionCard}>
                        <div className={styles.cardIcon}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect x="6" y="20" width="28" height="12" rx="2" stroke="#EF4444" strokeWidth="2" fill="none"/>
                                <circle cx="12" cy="26" r="4" stroke="#EF4444" strokeWidth="2" fill="none"/>
                                <circle cx="28" cy="26" r="4" stroke="#EF4444" strokeWidth="2" fill="none"/>
                                <path d="M10 20V16C10 14 11 12 14 12H26C29 12 30 14 30 16V20" stroke="#EF4444" strokeWidth="2"/>
                                <rect x="16" y="8" width="8" height="4" rx="1" fill="#F87171"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>{t('fixCar')}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.whyUsSection}>
                <h1 className={styles.whyUs__Title}>{t('whyUs')}</h1>
                <div className={styles.whyUs__Container}>
                    <div className={styles.whyUs__Block}>
                        <div className={styles.whyUs__Block__Item}>
                            <img src='/img/correspondence/learning.png' alt="#Индивидуальный график обучения" />
                            <h2 className={styles.whyUs__Block__Item__Title}>{t('learningGraph')}</h2>
                        </div>
                        <div className={styles.whyUs__Block__Item}>
                            <img src='/img/correspondence/card.png' alt="Онлайн оплата обучения" />
                            <h2 className={styles.whyUs__Block__Item__Title}>{t('onlineLearning')}</h2>
                        </div>
                        <div className={styles.whyUs__Block__Item}>
                            <img src='/img/correspondence/job.png' alt="Трудоустройство" />
                            <h2 className={styles.whyUs__Block__Item__Title}>{t('employmet')}</h2>
                        </div>
                    </div>
                    <div className={styles.whyUs__Block}>
                        <div className={styles.whyUs__Block__Item}>
                            <img src='/img/correspondence/search.png' alt="Абитуриенты по всему Казахстану"/>
                            <h2 className={styles.whyUs__Block__Item__Title}>{t('allAbituriens')}</h2>
                        </div>
                        <div className={styles.whyUs__Block__Item}>
                            <img src='/img/correspondence/statistic.png' alt="Сопровождение оброзовательного процесса"/>
                            <h2 className={styles.whyUs__Block__Item__Title}>{t('supportEducationProcess')}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.willGetSection}>
                <h1 className={styles.willGet__Title}>{t('willGet')}</h1>
                <div className={styles.willGetBlock}>
                    <div className={styles.willGetBlock__Item}>
                        <div className={styles.willGetBlock__Item__Info}>
                            <h1 className={styles.willGetBlock__Item__Info__Title}>{t('convenience')}</h1>
                            <p className={styles.willGetBlock__Item__Info__Subtitle}>{t('convenienceDesc')}</p>
                        </div>
                        <div className={styles.willGetBlock__Item__Emoji}>
                            <img src='/img/correspondence/smile.png' alt='Удобства заочного обучения'/>
                        </div>
                    </div>
                    <div className={styles.willGetBlock__Item}>
                        <div className={styles.willGetBlock__Item__Info}>
                            <h1 className={styles.willGetBlock__Item__Info__Title}>{t('quality')}</h1>
                            <p className={styles.willGetBlock__Item__Info__Subtitle}>{t('qualityDesc')}</p>
                        </div>
                        <div className={styles.willGetBlock__Item__Emoji}>
                            <img src='/img/correspondence/mdi_like.png' alt='Качество заочного обучения'/>
                        </div>
                    </div>
                    <div className={styles.willGetBlock__Item}>
                        <div className={styles.willGetBlock__Item__Info}>
                            <h1 className={styles.willGetBlock__Item__Info__Title}>{t('comfort')}</h1>
                            <p className={styles.willGetBlock__Item__Info__Subtitle}>{t('comfortDesc')}</p>
                        </div>
                        <div className={styles.willGetBlock__Item__Emoji}>
                            <img src='/img/correspondence/job_people.png' alt='Комфорт заочного обучения'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.learningSection}>
                <h1 className={styles.learningTitle}>{t('specialsLearning')}</h1>
                <div className={styles.learning}>
                <div className={styles.learningBlock}>
                    <div className={styles.learningBlock__Item}>
                        <img src='/img/correspondence/programmer.png' alt='Програмное обеспечение'/>
                        <div className={styles.learningBLock__Item__Info}>
                            <h1 className={styles.learningBlock__Item__Info__Title}>{t('software')}</h1>
                            <p className={styles.learningBlock__Item__Info__Subtitle}>{t('softwareSpecialist')}</p>
                            <h5 className={styles.learningBlock__Item__Info__Data}>{t('softwareDurationTime')}</h5>
                        </div>
                    </div>
                    <div className={styles.learningBlock__Item}>
                        <img src='/img/correspondence/fixcar.png' alt='Тех обслуживание авто'/>
                        <div className={styles.learningBLock__Item__Info}>
                            <h1 className={styles.learningBlock__Item__Info__Title}>{t('carFixing')}</h1>
                            <p className={styles.learningBlock__Item__Info__Subtitle}>{t('carFixingSpecialist')}</p>
                            <h5 className={styles.learningBlock__Item__Info__Data}>{t('carFixingDurationTime')}</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.learningBlock}>
                    <div className={styles.learningBlock__Item}>
                        <img src='/img/correspondence/oil.png' alt='Переработка нефти и газа'/>
                        <div className={styles.learningBLock__Item__Info}>
                            <h1 className={styles.learningBlock__Item__Info__Title}>{t('oil')}</h1>
                            <p className={styles.learningBlock__Item__Info__Subtitle}>{t('oilSpecialist')}</p>
                            <h5 className={styles.learningBlock__Item__Info__Data}>{t('oilDurationTime')}</h5>
                        </div>
                    </div>
                    <div className={styles.learningBlock__Item}>
                        <img src='/img/correspondence/AS.png' alt='Автоматизация и управление тех процессов'/>
                        <div className={styles.learningBLock__Item__Info}>
                            <h1 className={styles.learningBlock__Item__Info__Title}>{t('acProcess')}</h1>
                            <p className={styles.learningBlock__Item__Info__Subtitle}>{t('acProcessSpecialist')}</p>
                            <h5 className={styles.learningBlock__Item__Info__Data}>{t('acProcessDurationTime')}</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.learningSpecialsSection}>
                <h1 className={styles.learningSpecials__Title}>{t('learningOfSpecials')}</h1>
                <p className={styles.learningSpecials__Subtitle}>{t('learningOfSpecialsDesc')} <span className={styles.learningSpecials__Bold}>{t('learningOfSpecialsData')}</span></p>
            </div>

            <div className={styles.docsSection}>
                <h1 className={styles.docs__Title}>{t('docsTitle')}</h1>
                <div className={styles.docsBlock}>
                    <div className={styles.docsBlock__Item}>
                        <img src='/img/correspondence/1.png' alt='Заявление о приеме в произвольной форме'/>
                        <h2 className={styles.docsBlock__Item__Title}>{t('applicationForm')}</h2>
                    </div>
                    <div className={styles.docsBlock__Item}>
                        <img src='/img/correspondence/2.png' alt='Подлинник документа об оброзовании'/>
                        <h2 className={styles.docsBlock__Item__Title}>{t('certificationDocs')}</h2>
                    </div>
                    <div className={styles.docsBlock__Item}>
                        <img src='/img/correspondence/3.png' alt='Фотографии размером 3х4 см в количестве 4-х штук'/>
                        <h2 className={styles.docsBlock__Item__Title}>{t('photo')}</h2>
                    </div>
                    <div className={styles.docsBlock__Item}>
                        <img src='/img/correspondence/4.png' alt='ЗМедецинская форма 075-У с приоложением флюроснимка.'/>
                        <h2 className={styles.docsBlock__Item__Title}>{t('medicalDocs')}</h2>
                    </div>
                </div>
            </div>

        </div>
    </>
}