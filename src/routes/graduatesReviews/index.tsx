import { createFileRoute } from '@tanstack/react-router'
import styles from  './graduatesReviews.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/graduatesReviews/')({
    component: RouteComponent,
})

function RouteComponent() {
    usePageTitle('Отзывы выпусников');
    const { t, i18n } = useTranslation('graduateReviews');
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('graduateReviews')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            {/* Отзыв 1 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-1.png' alt='Выпусник специальности ИС' />
                        <div className={styles.photoPlaceholderText}>Фото</div>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review1_name')}</h3>
                        <p className={styles.specialty}>{t('review1_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review1_text')}</p>
                </div>
            </div>

            {/* Отзыв 2 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-2.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review2_name')}</h3>
                        <p className={styles.specialty}>{t('review2_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review2_text')}</p>
                </div>
            </div>

            {/* Отзыв 3 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-3.png' alt='Выпусник специальности Электроснабжение'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review3_name')}</h3>
                        <p className={styles.specialty}>{t('review3_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review3_text')}</p>
                </div>
            </div>

            {/* Отзыв 4 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-4.png' alt='Выпусник специальности Электроснабжение'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review4_name')}</h3>
                        <p className={styles.specialty}>{t('review4_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review4_text')}</p>
                </div>
            </div>

            {/* Отзыв 5 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-5.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review5_name')}</h3>
                        <p className={styles.specialty}>{t('review5_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review5_text')}</p>
                </div>
            </div>

            {/* Отзыв 6 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-6.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review6_name')}</h3>
                        <p className={styles.specialty}>{t('review6_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review6_text')}</p>
                </div>
            </div>

            {/* Отзыв 7 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-7.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review7_name')}</h3>
                        <p className={styles.specialty}>{t('review7_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review7_text')}</p>
                </div>
            </div>

            {/* Отзыв 8 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-8.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review8_name')}</h3>
                        <p className={styles.specialty}>{t('review8_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review8_text')}</p>
                </div>
            </div>

            {/* Отзыв 9 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-9.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review9_name')}</h3>
                        <p className={styles.specialty}>{t('review9_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review9_text')}</p>
                </div>
            </div>

            {/* Отзыв 10 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-10.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review10_name')}</h3>
                        <p className={styles.specialty}>{t('review10_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review10_text')}</p>
                </div>
            </div>

            {/* Отзыв 11 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-11.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review11_name')}</h3>
                        <p className={styles.specialty}>{t('review11_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review11_text')}</p>
                </div>
            </div>

            {/* Отзыв 12 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-12.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review12_name')}</h3>
                        <p className={styles.specialty}>{t('review12_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review12_text')}</p>
                </div>
            </div>

            {/* Отзыв 13 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-13.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review13_name')}</h3>
                        <p className={styles.specialty}>{t('review13_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review13_text')}</p>
                </div>
            </div>

            {/* Отзыв 14 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-14.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review14_name')}</h3>
                        <p className={styles.specialty}>{t('review14_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review14_text')}</p>
                </div>
            </div>

            {/* Отзыв 15 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-15.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review15_name')}</h3>
                        <p className={styles.specialty}>{t('review15_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review15_text')}</p>
                </div>
            </div>

            {/* Отзыв 16 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-16.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review16_name')}</h3>
                        <p className={styles.specialty}>{t('review16_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review16_text')}</p>
                </div>
            </div>

            {/* Отзыв 17 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-17.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review17_name')}</h3>
                        <p className={styles.specialty}>{t('review17_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review17_text')}</p>
                </div>
            </div>

            {/* Отзыв 18 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-18.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review18_name')}</h3>
                        <p className={styles.specialty}>{t('review18_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review18_text')}</p>
                </div>
            </div>

            {/* Отзыв 19 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-19.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review19_name')}</h3>
                        <p className={styles.specialty}>{t('review19_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review19_text')}</p>
                </div>
            </div>

            {/* Отзыв 20 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-20.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review20_name')}</h3>
                        <p className={styles.specialty}>{t('review20_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review20_text')}</p>
                </div>
            </div>

            {/* Отзыв 21 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-21.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review21_name')}</h3>
                        <p className={styles.specialty}>{t('review21_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review21_text')}</p>
                </div>
            </div>

            {/* Отзыв 22 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-22.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review22_name')}</h3>
                        <p className={styles.specialty}>{t('review22_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review22_text')}</p>
                </div>
            </div>

            {/* Отзыв 23 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-23.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review23_name')}</h3>
                        <p className={styles.specialty}>{t('review23_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review23_text')}</p>
                </div>
            </div>

            {/* Отзыв 24 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-24.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review24_name')}</h3>
                        <p className={styles.specialty}>{t('review24_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review24_text')}</p>
                </div>
            </div>

            {/* Отзыв 25 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-25.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review25_name')}</h3>
                        <p className={styles.specialty}>{t('review25_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review25_text')}</p>
                </div>
            </div>

            {/* Отзыв 26 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-26.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review26_name')}</h3>
                        <p className={styles.specialty}>{t('review26_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review26_text')}</p>
                </div>
            </div>

            {/* Отзыв 27 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-27.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review27_name')}</h3>
                        <p className={styles.specialty}>{t('review27_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review27_text')}</p>
                </div>
            </div>

            {/* Отзыв 28 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-28.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review28_name')}</h3>
                        <p className={styles.specialty}>{t('review28_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review28_text')}</p>
                </div>
            </div>

            {/* Отзыв 29 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-29.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review29_name')}</h3>
                        <p className={styles.specialty}>{t('review29_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review29_text')}</p>
                </div>
            </div>

            {/* Отзыв 30 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-30.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review30_name')}</h3>
                        <p className={styles.specialty}>{t('review30_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review30_text')}</p>
                </div>
            </div>

            {/* Отзыв 31 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-31.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review31_name')}</h3>
                        <p className={styles.specialty}>{t('review31_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review31_text')}</p>
                </div>
            </div>

            {/* Отзыв 32 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-32.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review32_name')}</h3>
                        <p className={styles.specialty}>{t('review32_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review32_text')}</p>
                </div>
            </div>

            {/* Отзыв 33 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-33.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review33_name')}</h3>
                        <p className={styles.specialty}>{t('review33_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review33_text')}</p>
                </div>
            </div>

            {/* Отзыв 34 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-34.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review34_name')}</h3>
                        <p className={styles.specialty}>{t('review34_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review34_text')}</p>
                </div>
            </div>

            {/* Отзыв 35 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-35.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review35_name')}</h3>
                        <p className={styles.specialty}>{t('review35_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review35_text')}</p>
                </div>
            </div>

            {/* Отзыв 36 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-36.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review36_name')}</h3>
                        <p className={styles.specialty}>{t('review36_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review36_text')}</p>
                </div>
            </div>

            {/* Отзыв 37 */}
            <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                    <div className={styles.photoPlaceholder}>
                        <img src='/img/graduatesReviews/graduate-37.png' alt='Выпусник специальности ИС'/>
                    </div>
                    <div className={styles.reviewInfo}>
                        <h3>{t('review37_name')}</h3>
                        <p className={styles.specialty}>{t('review37_specialty')}</p>
                    </div>
                </div>
                <div className={styles.reviewText}>
                    <p>{t('review37_text')}</p>
                </div>
            </div>
        </div>
    </>
}