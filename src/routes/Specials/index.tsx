// Specials.route.tsx
import { createFileRoute } from '@tanstack/react-router'
import styles from "@/routes/Specials/Specials.module.css"
import { useTranslation } from "react-i18next";
import { usePageTitle } from "@/components/usePageTitile.tsx";

export const Route = createFileRoute('/Specials/')({
    component: RouteComponent,
})

type Specialty = {
    key: string
    imgSrc: string
}

const specialties: Specialty[] = [
    { key: "specialty1", imgSrc: "/img/Specials/Translate.png" },
    { key: "specialty2", imgSrc: "/img/Specials/grommet-icons_money.png" },
    { key: "specialty3", imgSrc: "/img/Specials/hugeicons_developer.png" },
    { key: "specialty4", imgSrc: "/img/Specials/medical-icon_laboratory.png" },
    { key: "specialty5", imgSrc: "/img/Specials/fa6-solid_oil-well.png" },
    { key: "specialty6", imgSrc: "/img/Specials/hugeicons_electric-tower-01.png" },
    { key: "specialty7", imgSrc: "/img/Specials/Group 339.png" },
    { key: "specialty8", imgSrc: "/img/Specials/streamline-ultimate_customer-relationship-management-lead-management-1-bold.png" },
    { key: "specialty9", imgSrc: "/img/Specials/material-symbols_car-repair.png" },
    { key: "specialty10", imgSrc: "/img/Specials/mdi_car-repair.png" },
    { key: "specialty11", imgSrc: "/img/Specials/game-icons_oil-pump.png" },
]

function RouteComponent() {
    const { t, i18n } = useTranslation('specials');
    usePageTitle(t('specials'), [i18n.language, t]);

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('specials')}</h1>
                </div>
            </div>

            <div className={styles.container}>
                {specialties.map((spec, idx) => {
                    const CardWrapper = idx % 2 === 0 ? styles.specialsCard : styles.whSpecialsCard
                    const idWrapper = idx % 2 === 0 ? styles.id : styles.whId

                    return (
                        <div className={CardWrapper} key={spec.key}>
                            <div className={styles.headerCard}>
                                <div className={styles.period}>
                                    <h5 className={styles.periodText}>
                                        {t('onBase9')} <br />
                                        {t(`${spec.key}.base9Duration`)}
                                    </h5>
                                    <h5 className={styles.periodText}>
                                        {t('onBase11')} <br />
                                        {t(`${spec.key}.base11Duration`)}
                                    </h5>
                                </div>
                                <h1 className={styles.title}>{t(`${spec.key}.title`)}</h1>
                                <h2 className={styles.subTitle}>{t(`${spec.key}.qualification`)}</h2>
                                <div className={styles.indificators}>
                                    <h3 className={idWrapper}>{t(`${spec.key}.codeSpecialty`)}</h3>
                                    <h3 className={idWrapper}>{t(`${spec.key}.codeQualification`)}</h3>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                    {t(`${spec.key}.description`)}
                                </p>
                                <img
                                    className={styles.infoImg}
                                    src={spec.imgSrc}
                                    alt={t(`${spec.key}.title`)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}