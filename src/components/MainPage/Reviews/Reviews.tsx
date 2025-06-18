import style from './Reviews.module.css';
import { useTranslation } from 'react-i18next';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

export default function Reviews() {    const { t, i18n } = useTranslation('reviews');

    const reviews = [
        {
            name: 'Денисова Анна',
            position: 'менеджер',
            text: 'Хочу выразить благодарность Актюбинскому высшему политехническому колледжу за качественное образование и замечательные годы обучения...',
            avatar: null,
        },
        {
            name: 'Иванов Петр',
            position: 'программист',
            text: 'Колледж дал мне отличную базу для старта карьеры в IT. Очень благодарен преподавателям.',
            avatar: null,
        },
        {
            name: 'Смирнова Елена',
            position: 'аналитик',
            text: 'Образование помогло мне понять, чем я хочу заниматься. Спасибо за поддержку и знания!',
            avatar: null,
        },
    ];

    return (
        <div className={style.reviewsContent}>
            <div className={style.reviewsHeader}>
                <h1>{t('Reviews')}</h1>
            </div>

            <Carousel
                slideSize="100%"
                height="auto"
                slideGap="xs"
                align="center"
                loop
                withIndicators
                controlsOffset="xs"
                controlSize={30}
                styles={{
                    indicator: {
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        marginLeft: 11.5, // половина от 23px
                        marginRight: 11.5,
                        backgroundColor: '#ccc',
                        transition: 'background-color 250ms ease',

                        '&[data-active]': {
                            backgroundColor: '#000E3B', // синий цвет
                        },
                    },
                }}
            >

            {reviews.map((review, index) => (
                    <Carousel.Slide key={index}>
                        <div className={style.cardsContent}>
                            <div className={style.cardsList}>
                                <div className={style.cardsInfo}>
                                    <div className={style.cardsInfoUp}>
                                        <div className={style.avatarLogo}>
                                            {review.avatar ? (
                                                <img src={review.avatar} alt="Avatar" />
                                            ) : (
                                                <span className={style.initials}>
                          {review.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                              .toUpperCase()}
                        </span>
                                            )}
                                        </div>
                                        <div className={style.nameConteiner}>
                                            <div className={style.firstName}>
                                                <h3>{review.name}</h3>
                                            </div>
                                            <div className={style.position}>
                                                <h4>{review.position}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cardsInfoDown}>
                                        <p>{review.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
}
