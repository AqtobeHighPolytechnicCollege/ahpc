import styles from './Partners.module.css'
import { useTranslation } from 'react-i18next';

export default function  Partners() {

    const { t, i18n } = useTranslation('partners');
    const currentLang = i18n.language;

    return (
        <div className={styles.partnersContent}>
            <div className={styles.headContent}>
                <h1>{t('Partners')}</h1>
            </div>
            <div className={styles.mainContent}>
                {[
                    'CD.png',
                    'alina.png',
                    'aqtobeHub.png',
                    'aqtobeJeo.png',
                    'ERG.png',
                    'ICA.png',
                    'astanaHub.png',
                    'enegrosistema.png',
                    'kegoc.png',
                    'kuktas.png',
                    'uzhpromsnab.png',
                ].map((filename, index) => (
                    <div key={index} className={styles.partnersCards}>
                        <img className={styles.imgCards} src={`/src/img/logoPartners/${filename}`} alt='ImageLogo'/>
                    </div>
                ))}
            </div>

        </div>
    )
}