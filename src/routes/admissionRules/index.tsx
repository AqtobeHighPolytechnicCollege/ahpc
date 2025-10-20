import { createFileRoute } from '@tanstack/react-router'
import styles from './admissionRules.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/admissionRules/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('admissionRules');
    usePageTitle(t('admissionRules'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('admissionRules')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <div className={styles.titleBlock__Text}>
                    <h1 className={styles.titleBlock__Tittle}>{t('arDocs')}</h1>
                    <p className={styles.titleBlock__Paragraph}>{t('arDocsText')}</p>
                    <p className={styles.titleBlock__Paragraph}>{t('arQuote')}</p>
                    <p className={styles.titleBlock__Paragraph}>{t('takeDocs')} <span className={styles.titleBlock__ParagraphBold}> {t('notExam')}</span>{t('notExamContinue')}
                    </p>
                </div>
                <img src='/img/admissionRules/info.png' alt='Фото'/>
            </div>
            <div className={styles.infoSection}>
                <h1 className={styles.infoSection__Title}>{t('takeDocsVariant')}</h1>
                <div className={styles.infoBlock}>
                    <div className={styles.infoBlock__BlockAdress}>
                        <h2 className={styles.infoBlock__BlockAdress__Title}>{t('priemCommis')}</h2>
                        <h3 className={styles.infoBlock__BlockAdress__Adress}>{t('street')}</h3>
                        <p className={styles.infoBlock__BlockAdress__City}>{t('city')}</p>
                    </div>
                    <div className={styles.infoBlock__Info}>
                        <div className={styles.infoBlock__Data}>
                            <div className={styles.infoBlock__Data__FT}>
                                <p className={styles.infoBLock__Data__FT__Titile}>{t('fullTimeEducation')}</p>
                                <h1 className={styles.infoBLock__Data__FT__Data}>{t('termAfter9')}</h1>
                                <p className={styles.infoBLock__Data__FT__subtitle}>{t('termAfter9Text')}</p>
                                <h1 className={styles.infoBLock__Data__FT__Data}>{t('termAfter11')}</h1>
                                <p className={styles.infoBLock__Data__FT__subtitle}>{t('termAfter11Text')}</p>
                            </div>
                            <div className={styles.infoBlock__Data__Corr}>
                                <h1 className={styles.infoBlock__Data__Corr__Data}>{t('termAfterCorrespodence')}</h1>
                                <p className={styles.infoBlock__Data__Corr__subtitle}>{t('termAfterCorrespodenceText')}</p>
                            </div>
                        </div>
                        <div className={styles.infoBlock__Docs}>
                            <div className={styles.infoBlock__Docs__DocsList}>
                                <div className={styles.infoBlock__Docs__DocsList__text}>
                                <h1 className={styles.infoBlock__Docs__DocsList__Title}>{t('docList')}</h1>
                                <ul className={styles.infoBlock__Docs__DocsList__List}>
                                    <li className={styles.infoBLock__Docs__DocsList__ListItem}>{t('applicationForAccept')}</li>
                                    <li className={styles.infoBLock__Docs__DocsList__ListItem}>{t('documentOfEducation')}</li>
                                    <li className={styles.infoBLock__Docs__DocsList__ListItem}>{t('photo')}</li>
                                    <li className={styles.infoBLock__Docs__DocsList__ListItem}>{t('medicalDocs')}</li>
                                </ul>
                                </div>
                                <svg width="92" height="92" viewBox="0 0 92 92" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.8327 11.5L72.8327 34.5V80.5H19.166V11.5H49.8327Z" stroke="white"
                                          stroke-width="4.83333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M47.916 11.5V32.5833H72.8327" stroke="white" stroke-width="2.41667"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <div className={styles.infoBlock__Docs__Portal}>
                                <img className={styles.infoBlock__Docs__Portal__Logo} src='/img/admissionRules/LogNewWhite%201.png' alt='Логотип'/>
                                <h1 className={styles.infoBLock__Docs__Portal__Title}>{t('portalCollege')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.PS}><span className={styles.PSBold}>{t('crediting')}</span>{t('creditingText')}</p>
            </div>
            <div className={styles.requisitesSelection}>
                <h1 className={styles.requisitesTitle}>{t('bankDetails')}</h1>
                <div className={styles.requisites}>
                    <div className={styles.requisitesInfo}>
                        <div className={styles.requisitesInfo__SMM}>
                            <div className={styles.requisitesInfo__SMM__Social}>
                                <div className={styles.requisitesInfo__SMM__Social__Mesenger}>
                                    <img src='/img/admissionRules/inst.png' alt='Лого'/>
                                    <h1 className={styles.requisitesInfo__SMM__Social__Title__Mesenger}>aktobe.polytech</h1>
                                </div>
                                <div className={styles.requisitesInfo__SMM__Social__Mesenger}>
                                    <img src='/img/admissionRules/whatsapp.png' alt='Лого'/>
                                    <h1 className={styles.requisitesInfo__SMM__Social__Title__Mesenger}>+7 (771) 149 12-02</h1>
                                </div>
                                <div className={styles.requisitesInfo__SMM__Social__Mesenger}>
                                    <img src='/img/admissionRules/mail.png' alt='Лого'/>
                                    <h1 className={styles.requisitesInfo__SMM__Social__Title__Mesenger}>info@apk-edu.kz</h1>
                                </div>
                            </div>
                            <div className={styles.requisitesInfo__SMM__Number}>
                                <h1 className={styles.requisitesInfo__SMM__Number__Title}>По телефонам:</h1>
                                <div className={styles.requisitesInfo__SMM__Number__Block}>
                                    <img src='/img/admissionRules/phone.png' alt='Icon'/>
                                    <p className={styles.requisitesInfo__SMM__Number__Block__Number}>+7 (7132) 562-051</p>
                                </div>
                                <div className={styles.requisitesInfo__SMM__Number__Block}>
                                    <img src='/img/admissionRules/phone.png' alt='Icon'/>
                                    <p className={styles.requisitesInfo__SMM__Number__Block__Number}>+7 (771) 149 12-02</p>
                                </div>
                                <div className={styles.requisitesInfo__SMM__Number__Block}>
                                    <img src='/img/admissionRules/phone.png' alt='Icon'/>
                                    <p className={styles.requisitesInfo__SMM__Number__Block__Number}>+7 (7132) 578-491</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.requisitesInfo__BIN}>
                            <div className={styles.requisitesInfo__BIN__Info}>
                                <div className={styles.requisitesInfo__BIN__Info__Detail}>
                                    <img src='/img/admissionRules/creditcard.png' alt='icon' />
                                    <h1 className={styles.requisitesInfo__BIN__Title}>{t('iic')} </h1>
                                </div>
                                <div className={styles.requisitesInfo__BIN__Info__Detail}>
                                    <img src='/img/admissionRules/bank.png' alt='icon'/>
                                    <h1 className={styles.requisitesInfo__BIN__Title}>{t('bin')}
                                    </h1>
                                </div>
                            </div>
                            <div className={styles.requisitesInfo__BIN__Adress}>
                                <p className={styles.requisitesInfo__BIN__Adress__Subtitle}>{t('adAdress')}</p>
                                <h1 className={styles.requisitesInfo__BIN__Adress__Title}>030000</h1>
                                <p className={styles.requisitesInfo__BIN__Adress__Subtitle}>{t('mail')}</p>
                            </div>
                        </div>
                    </div>
                    <img className={styles.photographia} src='/img/admissionRules/requisites.png' alt='Фото'/>
                </div>
            </div>
            <div className={styles.tableContainer}>
            <img src='/img/admissionRules/table.png' />
            </div>
        </div>
    </>
}