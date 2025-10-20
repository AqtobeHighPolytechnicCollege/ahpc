import { createFileRoute } from '@tanstack/react-router'
import styles from  './media.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/media/')({
    component: RouteComponent,
})

function RouteComponent() {
    usePageTitle('СМИ о нас');
    const { t, i18n } = useTranslation('media');

    // Пример данных для новостных карточек
    const newsItems = [
        {
            id: 1,
            title: "Смартхан поможет",
            description: "Робота, говорящего на казахском языке, собрали преподаватель и учащиеся колледжа.",
            image: "/img/media/news1.jpg",
            source: "Актюбинский Вестник",
            link: "https://avestnik.kz/smarthan-pomozhet/"
        },
        {
            id: 2,
            title: "Техникалық және кәсіптік білім беретін оқу орындарының беделі артады",
            description: "Ақтөбе жоғары политехникалық колледжінің мәжіліс залында оқытушылар мен білім алушылар Мемлекет басшысы Қасым-Жомарт Тоқаевтың Қазақстан халқына арнаған кезекті Жолдауын онлайн режимде көрді.",
            image: "/img/media/news2.jpg",
            source: "Актобе",
            link: "https://aqtobegazeti.kz/?p=150223"
        },
        {
            id: 3,
            title: "Преподователь АВПК получил звание лучшего преподователя",
            description: "Преподователь Актюбинского Высшего политехнического колледжа Дархан Шанбаев был награждён на конкурсе Лучший педагог",
            image: "/img/media/news3.jpeg",
            source: "gov.kz",
            link: "https://www.gov.kz/memleket/entities/aktobe-bilim/press/news/details/887747?lang=ru"
        }
    ];

    // Пример данных для YouTube видео
    const videoItems = [
        {
            id: 1,
            title: "Современное учебное заведение - залог качественного образования",
            description: "лены регионального общественного совета по развитию образования и науки при партии \"Nur Otan\" посетили один из колледжей нашего города. Там они ознакомились с обновленной материальной базой, а также деятельностью учебного заведения.",
            videoId: "sDJQFgqqF2U?si=DAikN3ZZALTK0yzi", // Замените на реальный ID видео
            channel: "AQTOBE TV"
        },
        {
            id: 2,
            title: "Профориентация школьников",
            description: "Выбрать технические специальности предлагают школьникам выпускных классов. Сегодня в высшем политехническом колледже 300 будущих абитуриентов ознакомились с процессом подготовки кадров. ",
            videoId: "YhEOVPXD6ss?si=nCkKbjNb2j6yyprZ", // Замените на реальный ID видео
            channel: "AQTOBE TV"
        },
        {
            id: 3,
            title: "Смартхан поможет",
            description: "Робота, говорящего на казахском языке, собрали преподаватель и учащиеся колледжа.",
            videoId: "S51Kqk_6AuU?si=3avk-0rRSySnmeJb", // Замените на реальный ID видео
            channel: "AV Press"
        }
    ];

    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('smi')}</h1>
            </div>
        </div>

        <div className={styles.container}>
            {/* Секция новостей */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('newsAndPublication')}</h2>
                <div className={styles.cardsGrid}>
                    {newsItems.map(item => (
                        <div key={item.id} className={styles.newsCard}>
                            <div className={styles.cardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.cardSource}>{item.source}</span>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.cardLink}
                                    >
                                        {t('read')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Секция видео */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('video')}</h2>
                <div className={styles.cardsGrid}>
                    {videoItems.map(item => (
                        <div key={item.id} className={styles.videoCard}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.videoId}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={styles.videoIframe}
                                ></iframe>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.cardSource}>{item.channel}</span>
                                    <a
                                        href={`https://www.youtube.com/watch?v=${item.videoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.cardLink}
                                    >
                                        {t('watchFromYoutube')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}