import { createFileRoute, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { fetchNewsItem } from '../../lib/api';
import styles from '../../styles/newsdetail.module.css';
import {useTranslation} from "react-i18next";

// Базовый URL для изображений
const API_BASE_URL = 'https://api.ahpc.edu.kz';

export const Route = createFileRoute('/news/$newsId')({
    component: NewsDetail,
});

function NewsDetail() {
    const {t, i18n} = useTranslation();
    const { newsId } = useParams({ strict: false });
    const [news, setNews] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const currentLang = i18n.language

    useEffect(() => {
        console.log(`Запрос к API: /news/${newsId}`);
        fetchNewsItem(newsId, currentLang)
            .then((data) => {
                console.log('Ответ от API:', data);
                setNews(data);
            })
            .catch((err) => {
                console.error('Ошибка при запросе:', err);
                setError('Ошибка при загрузке новости');
            });
    }, [newsId, currentLang]);

    if (error) return <div>{error}</div>;
    if (!news) return <div>Загрузка...</div>;

    // Получаем URL фото с учетом разных вариантов структуры
    const photoData = news.photo || news.Photo;
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
    const title = news.title || '';
    const itemDate = news.date || news.Date || '';
    const shortDescription = news.short_description || news.Short_description || '';
    const article = news.article || news.Article || '';

    return (
        <div className={styles.newsContainer}>
            <p className={styles.newsDate}>{itemDate}</p>
            <h1 className={styles.newsTitle}>{title}</h1>
            {imageUrl && <img className={styles.newsImage} src={imageUrl} alt={imageName} />}
            <div className={styles.newsContent}>
                <p>{article}</p>
            </div>
        </div>
    );
}