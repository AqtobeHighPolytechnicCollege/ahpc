import styles from './footer.module.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {Link} from "@tanstack/react-router";


export default function Footer() {

    const { t, i18n } = useTranslation('footer');
    const currentLang = i18n.language;

    return (
        <div className={styles.footer}>
            <div className={styles.ftrContentIfo}>
                <div className={styles.ftrInfoBlock}>
                    <div className={styles.ftrInfoBlockTitle}>
                        <h3>{t('contacts')}</h3>
                    </div>
                    <div className={styles.ftrInfoBlockInfoContact}>
                        <ul>
                            <li>{t('admissionCommittee')}</li>
                            <li>+7 (771) 149 12 02</li>
                            <li>{t('helplineNumber')}</li>
                            <li>+7 (7132) 578 491</li>
                            <li>E-mail</li>
                            <li>info@apk-edu.kz</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.ftrInfoBlock}>
                    <div className={styles.ftrInfoBlockTitle}>
                        <h3>{t("address")}</h3>
                    </div>
                    <div className={styles.ftrInfoBlockInfoContact}>
                        <ul>
                            <li>{t('street')}</li>
                            <li>{t('streetNmb')}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.ftrInfoBlock}>
                    <div className={styles.ftrInfoBlockTitle}>
                        <h3>{t('navigation')}</h3>
                    </div>
                    <div className={styles.ftrInfoBlockInfo}>
                        <ul>
                            <li>{t('main')}</li>
                            <Link to={'/news'}>
                            <li>{t('news')}</li>
                            </Link>
                            <li>{t('reviews')}</li>
                            <li>{t('partners')}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.ftrInfoBlock}>
                    <div className={styles.ftrInfoBlockTitle}>
                        <h3>{t('usefulResources')}</h3>
                    </div>
                    <div className={styles.ftrInfoBlockInfo}>
                        <ul>
                            <li>{t('EGRK')}</li>
                            <li>{t('adilet')}</li>
                            <li>{t('AEPC')}</li>
                            <li>{t('talap')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.ftrContentSM}>
                <a href='https://www.instagram.com/aqtobe.polytech/'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.44 0H25.56C31.32 0 36 4.68 36 10.44V25.56C36 28.3289 34.9001 30.9843 32.9422 32.9422C30.9843 34.9001 28.3289 36 25.56 36H10.44C4.68 36 0 31.32 0 25.56V10.44C0 7.67114 1.09993 5.01569 3.05781 3.05781C5.01569 1.09993 7.67114 0 10.44 0ZM10.08 3.6C8.3614 3.6 6.71318 4.28271 5.49795 5.49795C4.28271 6.71318 3.6 8.3614 3.6 10.08V25.92C3.6 29.502 6.498 32.4 10.08 32.4H25.92C27.6386 32.4 29.2868 31.7173 30.5021 30.5021C31.7173 29.2868 32.4 27.6386 32.4 25.92V10.08C32.4 6.498 29.502 3.6 25.92 3.6H10.08ZM27.45 6.3C28.0467 6.3 28.619 6.53705 29.041 6.95901C29.4629 7.38097 29.7 7.95326 29.7 8.55C29.7 9.14674 29.4629 9.71903 29.041 10.141C28.619 10.5629 28.0467 10.8 27.45 10.8C26.8533 10.8 26.281 10.5629 25.859 10.141C25.437 9.71903 25.2 9.14674 25.2 8.55C25.2 7.95326 25.437 7.38097 25.859 6.95901C26.281 6.53705 26.8533 6.3 27.45 6.3ZM18 9C20.3869 9 22.6761 9.94821 24.364 11.636C26.0518 13.3239 27 15.6131 27 18C27 20.3869 26.0518 22.6761 24.364 24.364C22.6761 26.0518 20.3869 27 18 27C15.6131 27 13.3239 26.0518 11.636 24.364C9.94821 22.6761 9 20.3869 9 18C9 15.6131 9.94821 13.3239 11.636 11.636C13.3239 9.94821 15.6131 9 18 9ZM18 12.6C16.5678 12.6 15.1943 13.1689 14.1816 14.1816C13.1689 15.1943 12.6 16.5678 12.6 18C12.6 19.4322 13.1689 20.8057 14.1816 21.8184C15.1943 22.8311 16.5678 23.4 18 23.4C19.4322 23.4 20.8057 22.8311 21.8184 21.8184C22.8311 20.8057 23.4 19.4322 23.4 18C23.4 16.5678 22.8311 15.1943 21.8184 14.1816C20.8057 13.1689 19.4322 12.6 18 12.6Z"
                            fill="white"/>
                    </svg>
                </a>
                <a href='https://api.whatsapp.com/send/?phone=77711491202&text&type=phone_number&app_absent=0'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.7538 5.23808C29.095 3.57148 27.1194 2.25003 24.9422 1.35075C22.765 0.451461 20.4297 -0.00767368 18.0724 9.7011e-05C8.19497 9.7011e-05 0.144724 8.01008 0.144724 17.838C0.144724 20.988 0.976884 24.048 2.53266 26.748L0 36L9.49749 33.516C12.1206 34.938 15.0693 35.694 18.0724 35.694C27.9497 35.694 36 27.684 36 17.8561C36 13.0861 34.1367 8.60407 30.7538 5.23808ZM18.0724 32.67C15.395 32.67 12.7719 31.95 10.4744 30.6L9.93166 30.276L4.28744 31.752L5.78894 26.28L5.42714 25.722C3.93928 23.3587 3.14941 20.6267 3.14774 17.838C3.14774 9.66607 9.8412 3.00609 18.0543 3.00609C22.0342 3.00609 25.7789 4.55409 28.5829 7.36208C29.9716 8.73703 31.072 10.3726 31.8204 12.1741C32.5688 13.9755 32.9503 15.9068 32.9427 17.8561C32.9789 26.028 26.2854 32.67 18.0724 32.67ZM26.2492 21.582C25.797 21.366 23.5899 20.286 23.192 20.124C22.7759 19.98 22.4864 19.908 22.1789 20.34C21.8714 20.79 21.0211 21.798 20.7678 22.086C20.5146 22.392 20.2432 22.428 19.791 22.194C19.3387 21.978 17.8915 21.492 16.191 19.98C14.8523 18.792 13.9658 17.3341 13.6945 16.8841C13.4412 16.4341 13.6583 16.2001 13.8935 15.9661C14.0925 15.7681 14.3457 15.4441 14.5628 15.1921C14.7799 14.9401 14.8704 14.7421 15.0151 14.4541C15.1598 14.1481 15.0874 13.8961 14.9789 13.6801C14.8703 13.4641 13.9658 11.2681 13.604 10.3681C13.2422 9.50407 12.8623 9.61207 12.591 9.59407H11.7226C11.4151 9.59407 10.9447 9.70207 10.5286 10.1521C10.1307 10.6021 8.97286 11.6821 8.97286 13.8781C8.97286 16.0741 10.5829 18.198 10.8 18.486C11.0171 18.792 13.9658 23.292 18.4523 25.218C19.5196 25.686 20.3518 25.956 21.003 26.154C22.0703 26.496 23.0472 26.442 23.8251 26.334C24.6935 26.208 26.4844 25.254 26.8462 24.21C27.2261 23.166 27.2261 22.284 27.0995 22.086C26.9729 21.888 26.7015 21.798 26.2492 21.582Z"
                            fill="white"/>
                    </svg>
                </a>
                <a href='https://mail.google.com/mail/?view=cm&to=info@apk-edu.kz'>
                    <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.7 30C2.6825 30 1.81177 29.6331 1.0878 28.8994C0.363833 28.1656 0.00123333 27.2825 0 26.25V3.75C0 2.71875 0.3626 1.83625 1.0878 1.1025C1.813 0.36875 2.68373 0.00125 3.7 0H33.3C34.3175 0 35.1888 0.3675 35.914 1.1025C36.6392 1.8375 37.0012 2.72 37 3.75V26.25C37 27.2812 36.638 28.1644 35.914 28.8994C35.1901 29.6344 34.3187 30.0012 33.3 30H3.7ZM18.5 16.875L3.7 7.5V26.25H33.3V7.5L18.5 16.875ZM18.5 13.125L33.3 3.75H3.7L18.5 13.125ZM3.7 7.5V3.75V26.25V7.5Z"
                            fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}