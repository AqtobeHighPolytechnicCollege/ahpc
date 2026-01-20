import styles from './News.module.css';
import { useTranslation } from 'react-i18next';
import {useEffect, useState} from "react";
import {fetchNewsList} from "@/lib/api.ts";
import {Link} from "@tanstack/react-router";

// Базовый URL для изображений
const API_BASE_URL = 'https://api.ahpc.edu.kz';

export default function News () {
    const { t, i18n } = useTranslation('home');
    const [newsList, setNewsList] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const currentLang = i18n.language

    useEffect(() => {
        fetchNewsList(currentLang)
            .then((data) => {
                console.log('Данные новостей:', data);
                setNewsList(data)
            })
            .catch((error) => setError('Ошибка при загрузке новостей'));
    }, [currentLang]);

    if (error) return <div className={styles.newsError}><h1>500</h1><h2>{error}</h2></div>;
    if (!newsList) return <div className={styles.loadNews}><h2>Загрузка новостей...</h2></div>;

    return (
        <>
            <div className={styles.newsSection} id="news-section">
                <h1>{t('news')}</h1>
                <div className={styles.newsContent}>
                    <div className={styles.newsList}>
                        {newsList.slice(0, 4).map((item) => {
                            const {id} = item;

                            // Получаем URL фото с учетом разных вариантов структуры
                            const photoData = item.photo || item.Photo;
                            let imageUrl = '';

                            if (photoData) {
                                // Если это объект с url
                                if (photoData.url) {
                                    imageUrl = photoData.url.startsWith('http')
                                        ? photoData.url
                                        : `${API_BASE_URL}${photoData.url}`;
                                }
                                // Если это массив (media library)
                                else if (Array.isArray(photoData) && photoData.length > 0 && photoData[0].url) {
                                    imageUrl = photoData[0].url.startsWith('http')
                                        ? photoData[0].url
                                        : `${API_BASE_URL}${photoData[0].url}`;
                                }
                            }

                            const imageName = photoData?.name || photoData?.[0]?.name || 'news image';
                            const article = item.article || item.article || '';
                            const itemDate = item.date || item.date || '';
                            const shortDescription = item.short_description || item.short_description || '';
                            const title = item.title || '';
                            const nid = item.documentId;

                            return <div className={styles.newsCard} key={id}>
                                <Link to={`/news/${nid}`}>
                                    <div className={styles.newsSplit}>
                                        <div className={styles.newsInfo}>
                                            <div className={styles.newsTime}>{itemDate}</div>
                                            <div className={styles.newsTitle}>
                                                {title}
                                            </div>
                                            <div className={styles.newsSubtitle}>
                                                {shortDescription}
                                            </div>
                                        </div>
                                        <div className={styles.newsImage}>
                                            {imageUrl && <img src={imageUrl} alt={imageName}/>}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
                <div className={styles.newsFooter}>
                    <div className={styles.newsButton}>
                        <Link to={'/news'}>{t('watchAll')}</Link>
                    </div>
                </div>
            </div>
        </>
    );
}