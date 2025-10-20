import { createFileRoute } from '@tanstack/react-router'
import styles from './distanceLearning.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/distanceLearning/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('distancelLearning');
    usePageTitle(t('distancelLearning'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('distancelLearning')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.whoIs}>
                <div className={styles.whoIs__Text}>
                    <h1 className={styles.whoIs__Text__Title}>{t('platonus')}</h1>
                    <p className={styles.whoIs__Text__Subtitle}>{t('platonusInfo')}</p>
                    <a className={styles.whoIs__Text__Link} href='#'>{t('platonusLink')}</a>
                </div>
                <div className={styles.whoIs__Logo}>
                    <img src='/img/distanceLearning/Platonus.png' alt='Platonus АВПК ссылка на платформу'/>
                </div>
            </div>
        </div>
        <div className={styles.forWhat}>
            <h1 className={styles.forWhat__Title}>{t('forWhat')}</h1>
            <p className={styles.forWhat__Subtitle}>{t('forWhatInfo')}</p>
        </div>
        <div className={styles.container}>
            <div  className={styles.howWork}>
                <div className={styles.howWork__Text}>
                    <ul className={styles.howWork__Text__List}>
                        <h1 className={styles.howWork__Text__Title}>{t('howWork')}</h1>
                        <li className={styles.howWork__Text__List__Item}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.71484 30.6426H28.7148V27.6426H7.71484M28.7148 14.1426H22.7148V5.14258H13.7148V14.1426H7.71484L18.2148 24.6426L28.7148 14.1426Z"
                                    fill="#000E3B"/>
                            </svg>
                            <span
                                className={styles.howWork__Text__List__Item__Stroke}>{t('item1')}</span>
                        </li>
                        <li className={styles.howWork__Text__List__Item}>
                        <svg width="36" height="41" viewBox="0 0 36 41" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M32.7536 5.125H3.2625C1.48661 5.125 0 6.60645 0 8.37617V19.2027C0 29.1885 8.01161 37.1562 18.0161 37.1562C27.9804 37.1562 36 29.1885 36 19.2027V8.37617C36 6.58242 34.5777 5.125 32.7536 5.125ZM19.7357 26.626C18.7393 27.5709 17.2125 27.5148 16.3286 26.626C7.19196 17.9055 7.09554 18.2098 7.09554 16.7604C7.09554 15.407 8.20446 14.302 9.5625 14.302C10.9286 14.302 10.8562 14.6062 18.0161 21.4529C25.2964 14.4941 25.1357 14.302 26.4938 14.302C27.8518 14.302 28.9607 15.407 28.9607 16.7604C28.9607 18.1857 28.7277 18.0176 19.7357 26.626Z"
                                    fill="#14AE5C"/>
                            </svg>
                            <span className={styles.howWork__Text__List__Item__Stroke}>{t('item2')}</span>
                        </li>
                        <li className={styles.howWork__Text__List__Item}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35.25 25.5L27.75 33L22.5 27.75L24.75 25.5L27.75 28.5L33 23.25L35.25 25.5ZM18 13.5C19.1935 13.5 20.3381 13.9741 21.182 14.818C22.0259 15.6619 22.5 16.8065 22.5 18C22.5 19.1935 22.0259 20.3381 21.182 21.182C20.3381 22.0259 19.1935 22.5 18 22.5C16.8065 22.5 15.6619 22.0259 14.818 21.182C13.9741 20.3381 13.5 19.1935 13.5 18C13.5 16.8065 13.9741 15.6619 14.818 14.818C15.6619 13.9741 16.8065 13.5 18 13.5ZM18 6.75C25.5 6.75 31.905 11.415 34.5 18C34.125 18.975 33.66 19.89 33.12 20.775C32.242 20.2449 31.2771 19.8742 30.27 19.68L31.23 18C30.0176 15.5245 28.135 13.4389 25.7963 11.9801C23.4575 10.5214 20.7564 9.74802 18 9.74802C15.2436 9.74802 12.5425 10.5214 10.2037 11.9801C7.86496 13.4389 5.98238 15.5245 4.77 18C5.98252 20.4752 7.86518 22.5606 10.204 24.019C12.5427 25.4774 15.2438 26.2504 18 26.25L19.815 26.145C19.605 26.895 19.5 27.69 19.5 28.5V29.19L18 29.25C10.5 29.25 4.095 24.585 1.5 18C4.095 11.415 10.5 6.75 18 6.75Z"
                                    fill="#0D99FF"/>
                            </svg>
                            <span className={styles.howWork__Text__List__Item__Stroke}>{t('item3')}</span>
                        </li>
                        <li className={styles.howWork__Text__List__Item}>
                            <svg width="36" height="38" viewBox="0 0 36 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30.0938 15.75H20.25C19.3549 15.75 18.4964 15.3944 17.8635 14.7615C17.2306 14.1286 16.875 13.2701 16.875 12.375V2.53125C16.875 2.45666 16.8454 2.38512 16.7926 2.33238C16.7399 2.27963 16.6683 2.25 16.5938 2.25H10.125C8.93153 2.25 7.78693 2.72411 6.94302 3.56802C6.09911 4.41193 5.625 5.55653 5.625 6.75V29.25C5.625 30.4435 6.09911 31.5881 6.94302 32.432C7.78693 33.2759 8.93153 33.75 10.125 33.75H25.875C27.0685 33.75 28.2131 33.2759 29.057 32.432C29.9009 31.5881 30.375 30.4435 30.375 29.25V16.0312C30.375 15.9567 30.3454 15.8851 30.2926 15.8324C30.2399 15.7796 30.1683 15.75 30.0938 15.75Z"
                                    fill="#FFA629"/>
                                <path
                                    d="M29.4764 13.26L19.3648 3.14832C19.3451 3.12877 19.3201 3.11547 19.2929 3.11009C19.2657 3.10471 19.2375 3.1075 19.2119 3.11809C19.1863 3.12869 19.1643 3.14662 19.1489 3.16964C19.1334 3.19266 19.1251 3.21973 19.125 3.24746V12.3747C19.125 12.6731 19.2435 12.9592 19.4545 13.1702C19.6655 13.3812 19.9516 13.4997 20.25 13.4997H29.3773C29.405 13.4996 29.4321 13.4913 29.4551 13.4758C29.4781 13.4604 29.496 13.4385 29.5066 13.4128C29.5172 13.3872 29.52 13.359 29.5146 13.3318C29.5093 13.3046 29.496 13.2796 29.4764 13.26Z"
                                    fill="#FFA629"/>
                                <path
                                    d="M25.0723 19.2852C25.8984 19.2852 26.6953 19.3906 27.4629 19.6016C28.2305 19.8125 28.9453 20.1172 29.6074 20.5156C30.2695 20.9141 30.876 21.3828 31.4268 21.9219C31.9775 22.4609 32.4492 23.0674 32.8418 23.7412C33.2344 24.415 33.5361 25.1328 33.7471 25.8945C33.958 26.6562 34.0664 27.4531 34.0723 28.2852C34.0723 29.1113 33.9668 29.9082 33.7559 30.6758C33.5449 31.4434 33.2402 32.1582 32.8418 32.8203C32.4434 33.4824 31.9746 34.0889 31.4355 34.6396C30.8965 35.1904 30.29 35.6621 29.6162 36.0547C28.9424 36.4473 28.2246 36.749 27.4629 36.96C26.7012 37.1709 25.9043 37.2793 25.0723 37.2852C24.2461 37.2852 23.4492 37.1797 22.6816 36.9688C21.9141 36.7578 21.1992 36.4531 20.5371 36.0547C19.875 35.6562 19.2686 35.1875 18.7178 34.6484C18.167 34.1094 17.6953 33.5029 17.3027 32.8291C16.9102 32.1553 16.6084 31.4375 16.3975 30.6758C16.1865 29.9141 16.0781 29.1172 16.0723 28.2852C16.0723 27.459 16.1777 26.6621 16.3887 25.8945C16.5996 25.127 16.9043 24.4121 17.3027 23.75C17.7012 23.0879 18.1699 22.4814 18.709 21.9307C19.248 21.3799 19.8545 20.9082 20.5283 20.5156C21.2021 20.123 21.9199 19.8213 22.6816 19.6104C23.4434 19.3994 24.2402 19.291 25.0723 19.2852ZM30.3721 25.3057L29.1768 24.1104L23.3848 29.9023L20.9678 27.4854L19.7725 28.6807L23.3848 32.293L30.3721 25.3057Z"
                                    fill="#14AE5C"/>
                            </svg>
                            <span className={styles.howWork__Text__List__Item__Stroke}>{t('item4')}</span>
                        </li>
                    </ul>
                </div>
                <img className={styles.howWork__Image} src='/img/distanceLearning/howWork.png' alt='Как это работает? Platonus АВПК'/>
            </div>
        </div>
    </>
}