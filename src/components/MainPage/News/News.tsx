import styles from './News.module.css';
import { useTranslation } from 'react-i18next';
import {useEffect, useState} from "react";
import {fetchNewsList} from "@/lib/api.ts";
import {Link} from "@tanstack/react-router";

export default function News () {
    const { t, i18n } = useTranslation('home');
    const [newsList, setNewsList] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const currentLang = i18n.language


    useEffect(() => {
        fetchNewsList(currentLang)
            .then((data) => {
                console.log(data);
                setNewsList(data)
            })
            .catch((error) => setError('Ошибка при загрузке новостей'));
    }, [currentLang]);

    if (error) return <div className={styles.newsError}><h1>500</h1><h2>{error}</h2></div>;
    if (!newsList) return <div className={styles.loadNews}><h2>Загрузка новостей...</h2></div>;

    return (
        <>
            <div className={styles.mazzBlock}>
                <div className={styles.mazzBlock__Item1}></div>
                <div className={styles.mazzBlock__Item2}></div>
                <div className={styles.mazzBlock__Item3}></div>
                <div className={styles.mazzBlock__Item4}></div>
                <div className={styles.mazzBlock__Item5}></div>
                <div className={styles.mazzBlock__Item6}></div>
                <div className={styles.mazzBlock__Item7}></div>
                <div className={styles.mazzBlock__Item8}></div>
                <div className={styles.mazzBlock__Item9}></div>
                <div className={styles.mazzBlock__Item10}></div>
            </div>
            <div className={styles.newsSection} id="news-section">
                <h1>{t('news')}</h1>
                <div className={styles.newsContent}>
                    <div className={styles.newsList}>
                        {newsList.slice(0, 4).map((item) => {

                            const {id} = item;
                            const imageUrl = news.Photo?.url;
                            const imageName = item.Photo?.name
                            const article = item.Article
                            const itemDate = item.Date
                            const shortDescription = item.Short_description
                            const title = item.title
                            const nid = item.documentId


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
                                            <img src={imageUrl} alt={imageName}/>
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
            <div className={styles.mazzBlock__Bottom}>
                <div className={styles.mazzBlock__Bottom__Item1}></div>
                <div className={styles.mazzBlock__Bottom__Item2}></div>
                <div className={styles.mazzBlock__Bottom__Item3}></div>
                <div className={styles.mazzBlock__Bottom__Item4}></div>
                <div className={styles.mazzBlock__Bottom__Item5}></div>
                <div className={styles.mazzBlock__Bottom__Item6}></div>
                <div className={styles.mazzBlock__Bottom__Item7}></div>
            </div>
        </>
    );
}