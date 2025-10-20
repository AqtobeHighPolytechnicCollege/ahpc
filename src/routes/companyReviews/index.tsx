import { createFileRoute } from '@tanstack/react-router'
import styles from  './companyReview.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/companyReviews/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('companyReviews');
    usePageTitle('Отзывы предприятий');
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('companyReviews')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.company}>
                <div className={styles.companyInfo}>
                    <img src='/img/companyReviews/kegoc.png' alt='Отзыв об АВПК предприятия KEGOC'/>
                    <div className={styles.companyInfo__Text}>
                        <h3 className={styles.companyInfo__Text__Title}>{t('kegoc')}</h3>
                        <h3 className={styles.companyInfo__Text__Title}>{t('kegocFoundation')}</h3>
                        <h3 className={styles.companyInfo__Text__Title}>{t('ilhasov')}</h3>
                    </div>
                </div>
                <div className={styles.companyLeaders__Block__Info__Video}>
                    <video src="/video/companyReviews/Ilhasov-Review.mp4" controls/>
                </div>
            </div>
            <div className={styles.companyLeaders}>
                <div className={styles.companyLeaders__Block}>
                    <img src='/img/companyReviews/Gubarov.png' alt='Губаров В. К.'/>
                    <div className={styles.companyLeaders__Block__Info}>
                        <h3 className={styles.companyLeaders__Block__Info__Name}>{t('gubarov')}</h3>
                        <p className={styles.companyLeaders__Block__Info__Post}>{t('gubarovPosition')}</p>
                        <div className={styles.companyLeaders__Block__Info__Video}>
                            <video src="/video/companyReviews/Gubanov-Review.mp4" controls/>
                        </div>
                    </div>
                </div>
                <div className={styles.companyLeaders__Block}>
                    <img src='/img/companyReviews/Bekmuratov.png' alt='Губаров В. К.'/>
                    <div className={styles.companyLeaders__Block__Info}>
                    <h3 className={styles.companyLeaders__Block__Info__Name}>{t('bekmuratov')}</h3>
                    <p className={styles.companyLeaders__Block__Info__Post}>{t('bekmuratovPosition')}</p>
                        <div className={styles.companyLeaders__Block__Info__Video}>
                            <video src="/video/companyReviews/Bekmuratov-Review.mp4" controls/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}