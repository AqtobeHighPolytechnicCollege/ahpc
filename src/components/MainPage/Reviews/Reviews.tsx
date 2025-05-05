import style from './Reviews.module.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Reviews() {
    const { t, i18n } = useTranslation('reviews');
    const currentLang = i18n.language;
    const userAvatarUrl = 1?.avatar || null;

    const [currentSlide, setCurrentSlide] = useState(0);
    const reviews = [...Array(5).fill(null)];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className={style.reviewsContent}>
            <div className={style.reviewsHeader}>
                <h1>{t('Reviews')}</h1>
            </div>

            <div className={style.carouselWrapper}>
                <div
                    className={style.carousel}
                    style={{ transform: `translateX(-${currentSlide * 580}px)` }}
                >
                    {reviews.map((_, i) => (
                        <div className={style.cardsContent} key={i}>
                            <div className={style.cardsList}>
                                <div className={style.cardsInfo}>
                                    <div className={style.cardsInfoUp}>
                                        <div className={style.avatarLogo}>
                                            {userAvatarUrl ? (
                                                <img src={userAvatarUrl} alt="Avatar" />
                                            ) : (
                                                <span className={style.initials}>ДА</span>
                                            )}
                                        </div>
                                        <div className={style.nameConteiner}>
                                            <div className={style.firstName}>
                                                <h3>Денисова Анна</h3>
                                            </div>
                                            <div className={style.position}>
                                                <h4>менеджер</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cardsInfoDown}>
                                        <p>
                                            Хочу выразить благодарность Актюбинскому высшему политехническому
                                            колледжу за качественное образование и замечательные годы обучения.
                                            За время учебы я получил не только прочные знания в своей специальности,
                                            но и ценный практический опыт, который пригодился мне в профессиональной
                                            деятельности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.cardsSwitch}>
                {reviews.map((_, i) => (
                    <span
                        key={i}
                        className={`${style.dot} ${currentSlide === i ? style.activeDot : ''}`}
                        onClick={() => handleDotClick(i)}
                    />
                ))}
            </div>
        </div>
    );
}
