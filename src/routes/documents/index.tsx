import { createFileRoute } from '@tanstack/react-router'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import styles from './documents.module.css'
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/documents/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('documents');
    usePageTitle(t('documents'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('documents')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            {/* Секция документов */}
            <div className={styles.documentSection}>
                <h2 className={styles.sectionTitle}>{t('regulatoryDocuments')}</h2>

                {/*<div className={styles.documentCard}>*/}
                {/*    <div className={styles.documentInfo}>*/}
                {/*        <h3 className={styles.documentTitle}>Положение об образовательной организации</h3>*/}
                {/*        <p className={styles.documentDescription}>*/}
                {/*            Основной документ, регламентирующий деятельность учебного заведения*/}
                {/*        </p>*/}
                {/*        <div className={styles.documentMeta}>*/}
                {/*            <span className={styles.documentType}>PDF</span>*/}
                {/*            <span className={styles.documentSize}>2.5 МБ</span>*/}
                {/*            <span className={styles.documentDate}>Обновлено: 15.11.2024</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={styles.documentActions}>*/}
                {/*        <button className={styles.downloadButton}>*/}
                {/*            <span className={styles.downloadIcon}>⬇</span>*/}
                {/*            Скачать*/}
                {/*        </button>*/}
                {/*        <button className={styles.viewButton}>*/}
                {/*            Просмотр*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>

            {/* Еще одна секция */}
            <div className={styles.documentSection}>
                <h2 className={styles.sectionTitle}>{t('educationalMaterials')}</h2>

                {/*<div className={styles.documentCard}>*/}
                {/*    <div className={styles.documentInfo}>*/}
                {/*        <h3 className={styles.documentTitle}>Учебный план 2024-2025</h3>*/}
                {/*        <p className={styles.documentDescription}>*/}
                {/*            Календарный учебный график на текущий учебный год*/}
                {/*        </p>*/}
                {/*        <div className={styles.documentMeta}>*/}
                {/*            <span className={styles.documentType}>DOCX</span>*/}
                {/*            <span className={styles.documentSize}>450 КБ</span>*/}
                {/*            <span className={styles.documentDate}>Обновлено: 01.09.2024</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={styles.documentActions}>*/}
                {/*        <button className={styles.downloadButton}>*/}
                {/*            <span className={styles.downloadIcon}>⬇</span>*/}
                {/*            Скачать*/}
                {/*        </button>*/}
                {/*        <button className={styles.viewButton}>*/}
                {/*            Просмотр*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* Секция с группой документов */}
            <div className={styles.documentSection}>
                <h2 className={styles.sectionTitle}>{t('ordersDocs')}</h2>

                {/*<div className={styles.documentGroup}>*/}
                {/*    <div className={styles.documentCard}>*/}
                {/*        <div className={styles.documentInfo}>*/}
                {/*            <h3 className={styles.documentTitle}>Годовой отчет 2023</h3>*/}
                {/*            <p className={styles.documentDescription}>*/}
                {/*                Отчет о деятельности за 2023 год*/}
                {/*            </p>*/}
                {/*            <div className={styles.documentMeta}>*/}
                {/*                <span className={styles.documentType}>PDF</span>*/}
                {/*                <span className={styles.documentSize}>3.2 МБ</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={styles.documentActions}>*/}
                {/*            <button className={styles.downloadButton}>*/}
                {/*                <span className={styles.downloadIcon}>⬇</span>*/}
                {/*                Скачать*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            {/* Секция другое */}
            <div className={styles.documentSection}>
                <h2 className={styles.sectionTitle}>{t('other')}</h2>

                <div className={styles.documentGroup}>
                    <div className={styles.documentCard}>
                        <div className={styles.documentInfo}>
                            <h3 className={styles.documentTitle}>Сведения по доходам</h3>
                            <p className={styles.documentDescription}>
                                Сведения по доходам должностных лиц ГКП "Актюбниский Высший политех. колледж" на ПХВ ГУ "Управление оброзования Актюбинской области"
                            </p>
                            <div className={styles.documentMeta}>
                                <span className={styles.documentType}>PDF</span>
                                <span className={styles.documentSize}>1 МБ</span>
                            </div>
                        </div>
                        <div className={styles.documentActions}>
                            <button
                                className={styles.downloadButton}
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/documents/Income_Information.pdf';
                                    link.download = 'Сведения по доходам.pdf';
                                    link.click();
                                }}
                            >
                                <span className={styles.downloadIcon}>⬇</span>
                                {t('download')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}