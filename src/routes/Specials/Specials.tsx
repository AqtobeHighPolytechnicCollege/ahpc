// Specials.route.tsx
import { createFileRoute } from '@tanstack/react-router'
import styles from "@/routes/Specials/Specials.module.css"

export const Route = createFileRoute('/Specials/Specials')({
    component: RouteComponent,
})

type Specialty = {
    title: string
    qualification: string
    codeSpecialty: string
    codeQualification: string
    base9: {
        duration: string
    }
    base11: {
        duration: string
    }
    description: string
    imgSrc: string
}

const specialties: Specialty[] = [
    // 1. Переводческое дело
    {
        title: "Переводческое дело",
        qualification: "Переводчик",
        codeSpecialty: "02310100",
        codeQualification: "4S02310101",
        base9: { duration: "2 года 10 месяцев" },
        base11: { duration: "1 год 10 месяцев" },
        description:
            "Специальность готовит профессиональных переводчиков, способных осуществлять письменный и устный перевод в различных сферах — бизнесе, туризме, науке, образовании и международных отношениях.",
        imgSrc: "/src/img/Specials/Translate.png",
    },
    // 2. Учет и аудит
    {
        title: "Учет и аудит",
        qualification: "Бухгалтер",
        codeSpecialty: "04110100",
        codeQualification: "4S04110102",
        base9: { duration: "2 года 10 месяцев" },
        base11: { duration: "1 год 10 месяцев" },
        description:
            "Специальность готовит профессионалов в области учёта и аудита, способных вести бухгалтерский и налоговый учёт в различных сферах — бизнесе, производстве, финансах, образовании и государственном управлении.",
        imgSrc: "/src/img/Specials/grommet-icons_money.png",
    },
    // 3. Программное обеспечение
    {
        title: "Программное обеспечение",
        qualification: "Техник информационных систем",
        codeSpecialty: "06130100",
        codeQualification: "4S06130105",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration: "2 года 10 месяцев" },
        description: "Специальность готовит профессиональных разработчиков, способных создавать и сопровождать программное обеспечение в различных сферах — бизнесе, образовании, производстве, здравоохранении и IT-индустрии.",
        imgSrc: "/src/img/Specials/hugeicons_developer.png",
    },
    // 4. Лабораторная технология
    {
        title: "Лабораторная технология",
        qualification: "Техник–лаборант",
        codeSpecialty: "07110400",
        codeQualification: "4S07110404",
        base9: { duration: "3 года 10 месяцев" }, // (стандартный срок; на странице не указан отдельно)
        base11: { duration: "2 года 10 месяцев" }, // (стандартный срок; на странице не указан отдельно)
        description: "**Специальность готовит квалифицированных лаборантов, способных проводить анализы и исследования в различных сферах — медицине, экологии, пищевой промышленности, образовании и научной деятельности.**\n",
        imgSrc: "/src/img/Specials/medical-icon_laboratory.png",
    },
    // 5. Технология переработки нефти и газа
    {
        title: "Технология переработки нефти и газа",
        qualification: "Техник–технолог",
        codeSpecialty: "07110500",
        codeQualification: "4S07110502",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration: "2 года 10 месяцев" },
        description: "Специальность готовит специалистов, способных осуществлять переработку нефти и газа в различных сферах — промышленности, энергетике, химической и нефтехимической отрасли, а также экологическом контроле.",
        imgSrc: "/src/img/Specials/fa6-solid_oil-well.png",
    },
    // 6. Электроснабжение
    {
        title: "Электроснабжение",
        qualification: "Техник–электрик",
        codeSpecialty: "07130200",
        codeQualification: "4S07130202",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration: "2 года 10 месяцев" },
        description: "Специальность готовит квалифицированных специалистов, способных проектировать, эксплуатировать и обслуживать системы электроснабжения в различных сферах — промышленности, строительстве, транспорте, энергетике и жилищно-коммунальном хозяйстве.",
        imgSrc: "/src/img/Specials/hugeicons_electric-tower-01.png",
    },
    // 7. Тех. обслуживание, ремонт и эксплуатация электромеханического оборудования
    {
        title: "Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования",
        qualification: "Техник–электромеханик",
        codeSpecialty: "07130700",
        codeQualification: "4S07130704",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration: "2 года 10 месяцев" },
        description: "Специальность готовит профессионалов, способных выполнять техническое обслуживание, ремонт и эксплуатацию электромеханического оборудования в различных сферах — промышленности, транспорте, энергетике, строительстве и сельском хозяйстве.",
        imgSrc: "/src/img/Specials/Group 339.png",
    },
    // 8. Автоматизация и управление технологическими процессами
    {
        title: "Автоматизация и управление технологическими процессами",
        qualification: "Техник–электромеханик",
        codeSpecialty: "07140100",
        codeQualification: "4S07140102",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration: "2 года 10 месяцев" },
        description: "Специальность готовит специалистов, способных разрабатывать, внедрять и обслуживать системы автоматизации в различных сферах — промышленности, энергетике, транспорте, производстве и строительстве.",
        imgSrc: "/src/img/Specials/streamline-ultimate_customer-relationship-management-lead-management-1-bold.png",
    },
    // 9. Технология машиностроения
    {
        title: "Технология машиностроения",
        qualification: "Техник–механик",
        codeSpecialty: "07150100",
        codeQualification: "4S07150106",
        base9: { duration: "3 года 6 месяцев" },
        base11: { duration: "2 года 6 месяцев" },
        description: "Специальность готовит квалифицированных специалистов, способных разрабатывать и внедрять технологии обработки материалов в различных сферах — машиностроении, металлургии, производстве, строительстве и энергетике.",
        imgSrc: "/src/img/Specials/material-symbols_car-repair.png",
    },
    // 10. Тех. обслуживание, ремонт и эксплуатация автомобильного транспорта
    {
        title: "Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта",
        qualification: "Техник–механик",
        codeSpecialty: "07161300",
        codeQualification: "4S07161304",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration: "2 года 10 месяцев" },
        description: "Специальность готовит профессионалов, способных выполнять техническое обслуживание, ремонт и эксплуатацию автомобильного транспорта в различных сферах — автосервисе, перевозках, производстве, логистике и дорожной инфраструктуре.",
        imgSrc: "/src/img/Specials/mdi_car-repair.png",
    },
    // 11. Эксплуатация нефтяных и газовых месторождений
    {
        title: "Эксплуатация нефтяных и газовых месторождений",
        qualification: "Техник–технолог",
        codeSpecialty: "07240900",
        codeQualification: "4S07240902",
        base9: { duration: "3 года 10 месяцев" },
        base11: { duration : "2 года 10 месяцев" },
        description: "Специальность готовит специалистов, способных обеспечивать эффективную разработку и эксплуатацию нефтяных и газовых месторождений в различных сферах — добыче, переработке, транспорте, экологии и энергетике.",
        imgSrc: "/src/img/Specials/game-icons_oil-pump.png",
    },
]

function RouteComponent() {
    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>Специальности</h1>
                </div>
            </div>

            <div className={styles.container}>
                {specialties.map((spec, idx) => {
                    // Для чётных индексов (0, 2, 4…) применяем "синюю" карточку, для нечётных (1, 3, 5…) – "белую":
                    const CardWrapper =
                        idx % 2 === 0 ? styles.specialsCard : styles.whSpecialsCard
                    const  idWrapper =
                        idx % 2 === 0 ? styles.id : styles.whId

                    return (
                        <div className={CardWrapper} key={spec.codeSpecialty}>
                            <div className={styles.headerCard}>
                                <div className={styles.period}>
                                    <h5 className={styles.periodText}>
                                        на базе 9 классов <br />
                                        {spec.base9.duration}
                                    </h5>
                                    <h5 className={styles.periodText}>
                                        на базе 11 классов <br />
                                        {spec.base11.duration}
                                    </h5>
                                </div>
                                <h1 className={styles.title}>{spec.title}</h1>
                                <h2 className={styles.subTitle}>{spec.qualification}</h2>
                                <div className={styles.indificators}>
                                    <h3 className={idWrapper}>{spec.codeSpecialty}</h3>
                                    <h3 className={idWrapper}>{spec.codeQualification}</h3>
                                </div>
                            </div>
                            <div className={styles.info}>
                                {spec.description && (
                                    <p className={styles.description}>{spec.description}</p>
                                )}
                                <img
                                    className={styles.infoImg}
                                    src={spec.imgSrc}
                                    alt={spec.title}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
