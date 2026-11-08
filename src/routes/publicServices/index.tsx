// publicServices.route.tsx
import { createFileRoute } from '@tanstack/react-router'
import styles from "@/routes/publicServices/publicServices.module.css"
import { useTranslation } from "react-i18next";
import { usePageTitle } from "@/components/usePageTitile.tsx";

export const Route = createFileRoute('/publicServices/')({
    component: RouteComponent,
})

type PublicService = {
    key: string
    url: string
}

// Названия услуг лежат в файле переводов (namespace "publicServices"),
// здесь хранятся только ключи и ссылки
const services: PublicService[] = [
    { key: "service1", url: "https://adilet.zan.kz/kaz/docs/V1400010475" },
    { key: "service2", url: "https://adilet.zan.kz/kaz/docs/72dca1e3-f64c-4f96-afd3-2f0fe01c8896" },
    { key: "service3", url: "https://adilet.zan.kz/kaz/docs/V2000020704" },
    { key: "service4", url: "https://adilet.zan.kz/kaz/docs/V2000020704" },
    { key: "service5", url: "https://adilet.zan.kz/kaz/docs/V2300032226" },
    { key: "service6", url: "https://adilet.zan.kz/kaz/docs/V1600013487" },
    { key: "service7", url: "https://adilet.zan.kz/kaz/docs/V2500036397" },
]

function RouteComponent() {
    const { t, i18n } = useTranslation('publicServices');
    usePageTitle(t('publicServices'), [i18n.language, t]);

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('publicServices')}</h1>
                </div>
            </div>

            <div className={styles.container}>
                {services.map((service, idx) => {
                    const CardWrapper = idx % 2 === 0 ? styles.serviceCard : styles.whServiceCard
                    const numberWrapper = idx % 2 === 0 ? styles.number : styles.whNumber
                    const buttonWrapper = idx % 2 === 0 ? styles.button : styles.whButton

                    return (
                        <div className={CardWrapper} key={service.key}>
                            <div className={styles.headerCard}>
                                <h3 className={numberWrapper}>№ {idx + 1}</h3>
                                <h2 className={styles.title}>{t(`${service.key}.title`)}</h2>
                            </div>
                            <div className={styles.info}>
                                <a
                                    className={buttonWrapper}
                                    href={service.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('goToService')}
                                    <span className={styles.arrow} aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}