import { createFileRoute, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { fetchNewsItem } from '../../lib/api';
import styles from '../../styles/newsdetail.module.css';
import {useTranslation} from "react-i18next";

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
        const id = newsId;
        console.log({newsId});


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
    }, [currentLang]);


    if (error) return <div>{error}</div>;
    if (!news) return <div>Загрузка...</div>;

    const id = newsId;
    console.log(`Запрос на новость с ID: ${id}`);
    const imageUrl = news.Photo?.url
        ? `${window.location.origin}${news.Photo.url}`
        : null;
    const imageName = news.Photo?.name;
    const title = news.title;
    const itemDate = news.Date;
    const shortDescription = news.Short_description;
    const article = news.Arcticle;

    return (
        <div className={styles.newsContainer}>
            <p className={styles.newsDate}>{itemDate}</p>
            <h1 className={styles.newsTitle}>{title}</h1>
            <img className={styles.newsImage} src={imageUrl} alt={imageName} />
            <div className={styles.newsContent}>
                <p>{article}</p>
            </div>
        </div>
    );
}


