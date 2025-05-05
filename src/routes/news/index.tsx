import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'; // <--- Добавь эту строку
import { Link } from '@tanstack/react-router'; // если Link используется
import { fetchNewsList } from '../../lib/api'; // убедись, что этот путь корректный
import styles from '../../styles/newspage.module.css';


export const Route = createFileRoute('/news/')({
  component: NewsPage,
})

function NewsPage() {
    const {t, i18n} = useTranslation('news');
    const [newsList, setNewsList] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const currentLang = i18n.language

    useEffect(() => {
        fetchNewsList(currentLang)
            .then((data) => {
                setNewsList(data)
            })
            .catch((error) => setError('Ошибка при загрузке новостей'));
    }, [currentLang]);

    if (error) return <div className={styles.newsError}><h1>{error}</h1></div>;
    if (!newsList) return <div className={styles.loadNews}><h1>Загрузка новостей...</h1></div>;

    return (
        <div className={styles.headContent}>
            <h1>{t('News')}</h1>
            <div className={styles.newsContent}>
                <div className={styles.newsCardList}>
                    {newsList.map((item: any) => {
                        const { id} = item;
                        const imageUrl = "http://95.182.15.62:1337" + item.Photo?.url
                        const imageName = item.Photo?.name
                        const article = item.Article
                        const itemDate = item.Date
                        const shortDescription = item.Short_description
                        const nid = item.documentId
                        return (
                            <div className={styles.newsCard} key={id}>
                                <div className={styles.newsLeftInfo}>
                                    <div className={styles.newsImage}>
                                        <img src={imageUrl} alt={imageName} />
                                    </div>
                                </div>
                                <div className={styles.newsRightInfo}>
                                    <div className={styles.newsRightInfoUp}>
                                        <div className={styles.newsDate}>{itemDate}</div>
                                        <div className={styles.newsTitle}>{article}</div>
                                        <div className={styles.newsSubtitle}>{shortDescription}</div>
                                    </div>
                                    <div className={styles.newsRightInfoDown}>
                                        <div className={styles.newsButton}>
                                            <Link to={`/news/${nid}`}>{t('Read')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

