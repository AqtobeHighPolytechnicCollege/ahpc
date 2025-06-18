import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'; // <--- Добавь эту строку
import { Link } from '@tanstack/react-router'; // если Link используется
import { fetchNewsList } from '../../lib/api'; // убедись, что этот путь корректный
import styles from '../../styles/newspage.module.css';
import { usePageTitle} from "@/components/usePageTitile.tsx";


export const Route = createFileRoute('/news/')({
  component: NewsPage,
})

function NewsPage() {
    usePageTitle('Новости');
    const { t, i18n } = useTranslation('news');
    const [newsList, setNewsList] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>(''); // для хранения ввода
    const currentLang = i18n.language;

    useEffect(() => {
        fetchNewsList(currentLang)
            .then((data) => {
                setNewsList(data);
            })
            .catch(() => setError('Ошибка при загрузке новостей'));
    }, [currentLang]);

    // Функция фильтрации новостей по заголовку (или любому полю)
    const filteredList = newsList
        ? newsList.filter((item: any) =>
            item.Article.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    if (error)
        return (
            <div className={styles.newsError}>
                <h1>{error}</h1>
            </div>
        );
    if (!newsList)
        return (
            <div className={styles.loadNews}>
                <h1>Загрузка новостей...</h1>
            </div>
        );

    return (
        <div className={styles.headContent}>
            <h1>{t('News')}</h1>

            {/* ===== Строка поиска ===== */}
            <div className={styles.searchWrapper}>
                <div className={styles.searchInputWrapper}>
                    <input
                        type="text"
                        placeholder={t('Search placeholder') || 'Поиск...'}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                    <svg
                        className={styles.searchIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7,0C4.2385864,0,2,2.2385864,2,5c0,1.2001343,0.4402466,2.2866211,1.1450195,3.1483765L0,11.2929688
           L0.7070313,12l3.1450806-3.1446533C4.7138062,9.5598755,5.8001099,10,7,10c2.7614136,0,5-2.2385864,5-5S9.7614136,0,7,0z
           M7,9C4.7943726,9,3,7.2056274,3,5s1.7943726-4,4-4s4,1.7943726,4,4S9.2056274,9,7,9z"
                            fill="#1D1D1B"
                        />
                    </svg>
                </div>
            </div>

            {/* ========================== */}

            <div className={styles.newsContent}>
                <div className={styles.newsCardList}>
                    {filteredList.map((item: any) => {
                        const {id} = item;
                        const imageUrl =
                            'http://95.182.15.62:1337' + item.Photo?.url;
                        const imageName = item.Photo?.name;
                        const article = item.Article;
                        const itemDate = item.Date;
                        const shortDescription = item.Short_description;
                        const nid = item.documentId;
                        return (
                            <div className={styles.newsCard} key={id}>
                                <div className={styles.newsLeftInfo}>
                                <div className={styles.newsImage}>
                                        <img src={imageUrl} alt={imageName} />
                                    </div>
                                </div>
                                <div className={styles.newsRightInfo}>
                                    <div className={styles.newsRightInfoUp}>
                                        <div className={styles.newsDate}>
                                            {itemDate}
                                        </div>
                                        <div className={styles.newsTitle}>
                                            {article}
                                        </div>
                                        <div className={styles.newsSubtitle}>
                                            {shortDescription}
                                        </div>
                                    </div>
                                    <div className={styles.newsRightInfoDown}>
                                        <div className={styles.newsButton}>
                                            <Link to={`/news/${nid}`}>
                                                {t('Read')}
                                            </Link>
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


