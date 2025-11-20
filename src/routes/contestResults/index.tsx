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
                        <strong>{t('happy')}</strong> {t('happyInfo')}
                    </p>
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


            </div>
        </>
    );
}