import { createFileRoute } from '@tanstack/react-router'
import styles from './symbols.module.css'
import {useTranslation} from "react-i18next";


export const Route = createFileRoute('/Symbols/')({
  component: RouteComponent,
})

function RouteComponent() {

    const { t, i18n } = useTranslation('sybmols');
  return (
    <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('stateSymbols')}</h1>
            </div>
        </div>
<body className={styles.backGround}>
        <div className={styles.container}>
            <div className={styles.infoBlock}>
                <img src='/img/Symbols/Flag.png' alt='Флаг'/>
                <div className={styles.border}> .</div>
                <div className={styles.infoText}>
                    <div className={styles.title}>{t('flag')}</div>
                    <div className={styles.subtitle}>{t('flagDescription')}
                    </div>
                    <div className={styles.autor}>{t('flagAutor')}
                    </div>
                </div>
            </div>
            <div className={styles.infoBlockR}>
                <img src='/img/Symbols/gerb.png' alt='Герб'/>
                <div className={styles.border}> .</div>
                <div className={styles.infoText}>
                    <div className={styles.title}>{t('emblem')}</div>
                    <div className={styles.subtitle}>{t('emblemDescription')}
                    </div>
                    <div className={styles.autor}>{t('emblemAutor')}
                    </div>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <img src='/img/Symbols/gimn.png' alt='Флаг'/>
                <div className={styles.border}> .</div>
                <div className={styles.infoText}>
                    <div className={styles.title}>{t('anthem')}</div>
                    <div className={styles.subtitle}>{t('anthemDescription')}
                    </div>
                    <div className={styles.autor}>{t('anthemAutor')}
                    </div>
                </div>
            </div>
        </div>
</body>
    </>
  )
}
