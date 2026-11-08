// admissionRules/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import styles from './admissionRules.module.css'
import { usePageTitle } from "@/components/usePageTitile.tsx";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute('/admissionRules/')({
    component: RouteComponent,
})

type ScheduleRow = { day: string; time: string }

const ADMISSION_PHONE = { display: '+7 (7132) 562-051', href: 'tel:+77132562051' }
const CONTACT_CENTER = { display: '1414', href: 'tel:1414' }
const EGOV_URL = 'https://egov.kz'

function RouteComponent() {
    const { t, i18n } = useTranslation('admissionRules');
    usePageTitle(t('admissionRules'), [i18n.language, t]);

    const docs = t('docs', { returnObjects: true }) as string[]
    const ways = t('details.ways.items', { returnObjects: true }) as string[]
    const scheduleRows = t('details.schedule.rows', { returnObjects: true }) as ScheduleRow[]
    const results = t('details.results.items', { returnObjects: true }) as string[]
    const refusals = t('details.refusal.items', { returnObjects: true }) as string[]

    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('admissionRules')}</h1>
            </div>
        </div>

        <div className={styles.container}>
            {/* ---------- Название услуги ---------- */}
            <div className={styles.titleBlock}>
                <div className={styles.titleBlock__Text}>
                    <p className={styles.titleBlock__Label}>{t('serviceLabel')}</p>
                    <h1 className={styles.titleBlock__Tittle}>{t('serviceTitle')}</h1>
                    <p className={styles.titleBlock__Paragraph}>
                        <span className={styles.titleBlock__ParagraphBold}>{t('providerLabel')}</span>{' '}
                        {t('provider')}
                    </p>
                    <p className={styles.titleBlock__Paragraph}>
                        <span className={styles.titleBlock__ParagraphBold}>{t('basisLabel')}</span>{' '}
                        {t('basis')}
                    </p>
                </div>
                <img src='/img/admissionRules/info.png' alt='Фото'/>
            </div>

            {/* ---------- Сроки, документы, портал ---------- */}
            <div className={styles.infoSection}>
                <h1 className={styles.infoSection__Title}>{t('deadlinesTitle')}</h1>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlock__BlockAdress}>
                        <h2 className={styles.infoBlock__BlockAdress__Title}>{t('commission')}</h2>
                        <h3 className={styles.infoBlock__BlockAdress__Adress}>{t('street')}</h3>
                        <p className={styles.infoBlock__BlockAdress__City}>{t('city')}</p>
                    </div>
                    <div className={styles.infoBlock__Info}>
                        <div className={styles.infoBlock__Data}>
                            <div className={styles.infoBlock__Data__FT}>
                                <p className={styles.infoBLock__Data__FT__Titile}>{t('fullTime')}</p>
                                <h1 className={styles.infoBLock__Data__FT__Data}>{t('stateOrderDates')}</h1>
                                <p className={styles.infoBLock__Data__FT__subtitle}>{t('stateOrderText')}</p>
                                <h1 className={styles.infoBLock__Data__FT__Data}>{t('paidDates')}</h1>
                                <p className={styles.infoBLock__Data__FT__subtitle}>{t('paidText')}</p>
                            </div>
                            <div className={styles.infoBlock__Data__Corr}>
                                <h1 className={styles.infoBlock__Data__Corr__Data}>{t('eveningDates')}</h1>
                                <p className={styles.infoBlock__Data__Corr__subtitle}>{t('eveningText')}</p>
                            </div>
                        </div>
                        <div className={styles.infoBlock__Docs}>
                            <div className={styles.infoBlock__Docs__DocsList}>
                                <div className={styles.infoBlock__Docs__DocsList__text}>
                                    <h1 className={styles.infoBlock__Docs__DocsList__Title}>{t('docsTitle')}</h1>
                                    <ul className={styles.infoBlock__Docs__DocsList__List}>
                                        {docs.map((doc) => (
                                            <li key={doc} className={styles.infoBLock__Docs__DocsList__ListItem}>{doc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <svg width="92" height="92" viewBox="0 0 92 92" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.8327 11.5L72.8327 34.5V80.5H19.166V11.5H49.8327Z" stroke="white"
                                          strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M47.916 11.5V32.5833H72.8327" stroke="white" strokeWidth="2.41667"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <a className={styles.infoBlock__Docs__Portal} href={EGOV_URL} target="_blank" rel="noreferrer">
                                <img className={styles.infoBlock__Docs__Portal__Logo} src='/img/admissionRules/LogNewWhite%201.png' alt='Логотип'/>
                                <h1 className={styles.infoBLock__Docs__Portal__Title}>{t('portalTitle')}</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <p className={styles.PS}>{t('psText')}</p>
            </div>

            {/* ---------- Условия оказания услуги ---------- */}
            <div className={styles.detailsSection}>
                <h1 className={styles.detailsSection__Title}>{t('details.title')}</h1>
                <div className={styles.detailsGrid}>
                    <div className={styles.detailsCard}>
                        <h2 className={styles.detailsCard__Title}>{t('details.ways.title')}</h2>
                        <ul className={styles.detailsCard__List}>
                            {ways.map((w) => <li key={w}>{w}</li>)}
                        </ul>
                    </div>

                    <div className={styles.detailsCard}>
                        <h2 className={styles.detailsCard__Title}>{t('details.form.title')}</h2>
                        <p className={styles.detailsCard__Text}>{t('details.form.text')}</p>
                        <h2 className={styles.detailsCard__Title}>{t('details.price.title')}</h2>
                        <p className={styles.detailsCard__Big}>{t('details.price.text')}</p>
                    </div>

                    <div className={`${styles.detailsCard} ${styles.detailsCardAccent}`}>
                        <h2 className={styles.detailsCard__Title}>{t('details.schedule.title')}</h2>
                        <ul className={styles.scheduleList}>
                            {scheduleRows.map((row) => (
                                <li key={row.day} className={styles.scheduleRow}>
                                    <span>{row.day}</span>
                                    <span className={styles.scheduleRow__Time}>{row.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.detailsCard}>
                        <p className={styles.detailsCard__Label}>{t('details.wait.label')}</p>
                        <p className={styles.detailsCard__Big}>{t('details.wait.value')}</p>
                        <p className={styles.detailsCard__Label}>{t('details.service.label')}</p>
                        <p className={styles.detailsCard__Big}>{t('details.service.value')}</p>
                    </div>

                    <div className={styles.detailsCard}>
                        <h2 className={styles.detailsCard__Title}>{t('details.results.title')}</h2>
                        <ul className={styles.detailsCard__List}>
                            {results.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                    </div>

                    <div className={`${styles.detailsCard} ${styles.detailsCardDark} ${styles.detailsCardWide}`}>
                        <h2 className={styles.detailsCard__Title}>{t('details.refusal.title')}</h2>
                        <ul className={styles.detailsCard__List}>
                            {refusals.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                        <p className={styles.detailsCard__Note}>{t('details.appeal')}</p>
                    </div>
                </div>
            </div>

            {/* ---------- Контакты ---------- */}
            <div className={styles.requisitesSelection}>
                <h1 className={styles.requisitesTitle}>{t('contacts.title')}</h1>
                <div className={styles.requisites}>
                    <div className={styles.requisitesInfo}>
                        <div className={styles.requisitesInfo__SMM}>
                            <div className={styles.requisitesInfo__SMM__Social}>
                                <div className={styles.requisitesInfo__SMM__Social__Mesenger}>
                                    <div className={styles.contactItem}>
                                        <p className={styles.contactItem__Label}>{t('contacts.address')}</p>
                                        <h1 className={styles.contactItem__Value}>{t('city')}, {t('street')}</h1>
                                    </div>
                                </div>
                                <div className={styles.requisitesInfo__SMM__Social__Mesenger}>
                                    <div className={styles.contactItem}>
                                        <p className={styles.contactItem__Label}>{t('contacts.egov')}</p>
                                        <h1 className={styles.contactItem__Value}>
                                            <a href={EGOV_URL} target="_blank" rel="noreferrer">egov.kz</a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.requisitesInfo__SMM__Number}>
                                <h1 className={styles.requisitesInfo__SMM__Number__Title}>{t('contacts.phones')}</h1>
                                <p className={styles.contactItem__LabelLight}>{t('contacts.admissionPhone')}</p>
                                <div className={styles.requisitesInfo__SMM__Number__Block}>
                                    <img src='/img/admissionRules/phone.png' alt='Icon'/>
                                    <p className={styles.requisitesInfo__SMM__Number__Block__Number}>
                                        <a href={ADMISSION_PHONE.href}>{ADMISSION_PHONE.display}</a>
                                    </p>
                                </div>
                                <p className={styles.contactItem__LabelLight}>{t('contacts.contactCenter')}</p>
                                <div className={styles.requisitesInfo__SMM__Number__Block}>
                                    <img src='/img/admissionRules/phone.png' alt='Icon'/>
                                    <p className={styles.requisitesInfo__SMM__Number__Block__Number}>
                                        <a href={CONTACT_CENTER.href}>{CONTACT_CENTER.display}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={styles.photographia} src='/img/admissionRules/requisites.png' alt='Фото'/>
                </div>
            </div>
        </div>
    </>
}