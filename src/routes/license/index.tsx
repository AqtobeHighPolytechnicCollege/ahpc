import { createFileRoute } from '@tanstack/react-router'
import styles from  './license.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/license/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('license');
    usePageTitle(t('license'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('license')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.contentSection}>
                <div className={styles.introText}>
                    <h2>{t('ourLicense')}</h2>
                    <p>
                        {t('ourLicenseDesc1')}
                    </p>
                    <p>
                        {t('ourLicenseDesc2')}
                    </p>
                </div>

                <div className={styles.licenseInfo}>
                    <div className={styles.licenseCard}>
                        <h3>{t('licenseForLearn')}</h3>
                        <div className={styles.licenseDetails}>
                            <p><strong>{t('licenseNumber')}</strong> KZ39LAM00000564</p>
                            <p><strong>{t('dateOfIssue')}</strong> {t('data1')}</p>
                            <p><strong>{t('startLicense')}</strong>{t('data2')}</p>
                            <p><strong>{t('licenseTaker')}</strong>{t('licenseTakerInfo')}</p>
                        </div>
                    </div>

                    <div className={styles.specialtiesSection}>
                        <h3>{t('licensedSpeciaties')}</h3>
                        <div className={styles.specialtiesList}>
                            <div className={styles.specialtyItem}>
                                <span>{t('maintenance')}</span>
                                <span className={styles.code}>071613001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('automaticates')}</span>
                                <span className={styles.code}>071401001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('electricity')}</span>
                                <span className={styles.code}>071302001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('build')}</span>
                                <span className={styles.code}>073201001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('auditing')}</span>
                                <span className={styles.code}>041101001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('oil')}</span>
                                <span className={styles.code}>072409001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('software')}</span>
                                <span className={styles.code}>061301001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('oilteechnology')}</span>
                                <span className={styles.code}>071105001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('translate')}</span>
                                <span className={styles.code}>023101001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('machineBuild')}</span>
                                <span className={styles.code}>071501001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('labaratory')}</span>
                                <span className={styles.code}>071104001</span>
                            </div>
                            <div className={styles.specialtyItem}>
                                <span>{t('technology')}</span>
                                <span className={styles.code}>071307001</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.downloadSection}>
                    <h3>{t('dowlandLicense')}</h3>
                    <p>{t('officialDocs')}</p>

                    <div className={styles.downloadButtons}>
                        <a
                            href="/documents/license_ru.pdf"
                            download="Лицензия_АВПК_русский.pdf"
                            className={styles.downloadButton}
                        >
                            <div className={styles.downloadIcon}>📄</div>
                            <div className={styles.downloadText}>
                                <span className={styles.downloadTitle}>{t('licenseRus')}</span>
                                <span className={styles.downloadSubtitle}>{t('pdf')}</span>
                            </div>
                        </a>

                        <a
                            href="/documents/license_kz.pdf"
                            download="Лицензия_АВПК_казахский.pdf"
                            className={styles.downloadButton}
                        >
                            <div className={styles.downloadIcon}>📄</div>
                            <div className={styles.downloadText}>
                                <span className={styles.downloadTitle}>{t('licenseKaz')}</span>
                                <span className={styles.downloadSubtitle}>{t('pdf')}</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={styles.verificationSection}>
                    <h3>{t('authentication')}</h3>
                    <p>
                        {t('officialPrortal')}
                        <a href="https://www.elicense.kz" target="_blank" rel="noopener noreferrer"
                           className={styles.verificationLink}>
                            www.elicense.kz
                        </a>
                    </p>
                    <p className={styles.verificationNote}>
                        {t('docsInfo')}
                    </p>
                </div>
            </div>
        </div>
    </>
}