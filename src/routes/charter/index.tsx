import { createFileRoute } from '@tanstack/react-router'
import styles from  './charter.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/charter/')({
    component: RouteComponent,
})

function RouteComponent() {
    usePageTitle('Устав колледжа');
    const { t, i18n } = useTranslation('charter');

    const handleDownloadPDF = () => {
        // Создаем ссылку для скачивания PDF
        const link = document.createElement('a');
        link.href = '/documents/Ustav.pdf'; // путь к вашему PDF файлу
        link.download = 'Ustav.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('collegeCharter')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.charterContent}>
                <div className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>📚</div>
                        <h3>{t('mainProvisions')}</h3>
                        <p>{t('mainProvisionsDesc')}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>🎓</div>
                        <h3>{t('studentsObligations')}</h3>
                        <p>{t('studentObligationsDesc')}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>🏛️</div>
                        <h3>{t('managementStructure')}</h3>
                        <p>{t('managementStructureDesc')}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>⚖️</div>
                        <h3>{t('internalRegulation')}</h3>
                        <p>{t('internalRegulationDesc')}</p>
                    </div>
                </div>

                <div className={styles.downloadSection}>
                    <div className={styles.downloadCard}>
                        <h2>{t('fullVersion')}</h2>
                        <p>{t('fullVersionDesc')}</p>
                        <button
                            className={styles.downloadButton}
                            onClick={handleDownloadPDF}
                        >
                            <span className={styles.downloadIcon}>📄</span>
                            {t('dowland')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}