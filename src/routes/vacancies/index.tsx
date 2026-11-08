// Vacancies.route.tsx
import { createFileRoute } from '@tanstack/react-router'
import styles from "@/routes/Vacancies/Vacancies.module.css"
import { useTranslation } from "react-i18next";
import { usePageTitle } from "@/components/usePageTitile.tsx";

export const Route = createFileRoute('/vacancies/')({
    component: RouteComponent,
})

type Vacancy = {
    specialty: string   // ключ в vacancies.json -> specialties.<ключ>
    grade: 9 | 11
    lang: 'kk' | 'ru'
    places: number
}

type Course = {
    course: number
    vacancies: Vacancy[]
}

const v = (specialty: string, grade: 9 | 11, lang: 'kk' | 'ru', places: number): Vacancy =>
    ({ specialty, grade, lang, places })

const courses: Course[] = [
    {
        course: 1,
        vacancies: [
            v('oilGas', 9, 'kk', 1),
            v('electricSupply', 9, 'ru', 1),
            v('autoRepair', 9, 'kk', 1),
            v('automation', 11, 'kk', 1),
            v('software', 11, 'ru', 1),
            v('oilGas', 11, 'kk', 1),
        ],
    },
    {
        course: 2,
        vacancies: [
            v('automation', 9, 'ru', 1),
            v('translation', 9, 'ru', 1),
            v('laboratory', 9, 'ru', 3),
            v('machineBuilding', 9, 'kk', 1),
            v('machineBuilding', 9, 'ru', 1),
            v('electromechanical', 9, 'kk', 1),
            v('autoRepair', 9, 'kk', 1),
        ],
    },
    {
        course: 3,
        vacancies: [
            v('accounting', 9, 'kk', 4),
            v('accounting', 9, 'ru', 3),
            v('software', 9, 'ru', 7),
            v('software', 9, 'kk', 3),
            v('laboratory', 9, 'ru', 3),
            v('oilGas', 9, 'kk', 1),
            v('oilGas', 11, 'kk', 5),
            v('oilFields', 9, 'kk', 2),
            v('oilFields', 11, 'kk', 6),
            v('machineBuilding', 9, 'kk', 8),
            v('autoRepair', 9, 'kk', 6),
            v('autoRepair', 11, 'kk', 5),
            v('electricSupply', 9, 'kk', 5),
            v('electricSupply', 11, 'kk', 3),
            v('electromechanical', 9, 'kk', 1),
            v('automation', 9, 'kk', 12),
            v('automation', 9, 'ru', 4),
            v('automation', 11, 'kk', 2),
        ],
    },
    {
        course: 4,
        vacancies: [
            v('oilGas', 9, 'kk', 2),
            v('oilGas', 11, 'kk', 7),
            v('oilFields', 9, 'kk', 6),
            v('oilFields', 11, 'kk', 3),
            v('software', 9, 'kk', 3),
            v('software', 9, 'ru', 8),
            v('software', 11, 'ru', 3),
            v('laboratory', 9, 'kk', 6),
            v('autoRepair', 9, 'kk', 14),
            v('autoRepair', 11, 'kk', 5),
            v('machineBuilding', 9, 'kk', 12),
            v('construction', 9, 'ru', 4),
            v('automation', 9, 'kk', 10),
            v('automation', 9, 'ru', 1),
            v('automation', 11, 'kk', 17),
            v('electromechanical', 9, 'kk', 8),
            v('electricSupply', 9, 'ru', 3),
            v('electricSupply', 11, 'kk', 7),
        ],
    },
]

const sumPlaces = (list: Vacancy[]) => list.reduce((acc, item) => acc + item.places, 0)

function RouteComponent() {
    const { t, i18n } = useTranslation('vacancies');
    usePageTitle(t('vacancies'), [i18n.language, t]);

    const totalPlaces = courses.reduce((acc, c) => acc + sumPlaces(c.vacancies), 0)
    const date = t('orderDate')

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('vacancies')}</h1>
                </div>
            </div>

            <div className={styles.container}>
                {courses.map((item, idx) => {
                    const CardWrapper = idx % 2 === 0 ? styles.vacancyCard : styles.whVacancyCard
                    const tableWrapper = idx % 2 === 0 ? styles.table : styles.whTable

                    return (
                        <div className={CardWrapper} key={item.course}>
                            <div className={styles.headerCard}>
                                <h5 className={styles.periodText}>
                                    {t('cardHeader', { date })}
                                </h5>
                                <h1 className={styles.title}>{t('courseTitle', { course: item.course })}</h1>
                            </div>

                            <div className={styles.tableScroll}>
                                <table className={tableWrapper}>
                                    <thead>
                                    <tr>
                                        <th className={styles.colSpecialty}>{t('colSpecialty')}</th>
                                        <th>{t('colGrade')}</th>
                                        <th>{t('colLang')}</th>
                                        <th>{t('colPlaces')}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {item.vacancies.map((vac, i) => (
                                        <tr key={`${item.course}-${i}`}>
                                            <td className={styles.colSpecialty}>{t(`specialties.${vac.specialty}`)}</td>
                                            <td>{t(`grade${vac.grade}`)}</td>
                                            <td>{t(`lang.${vac.lang}`)}</td>
                                            <td>{vac.places}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colSpan={3} className={styles.totalLabel}>
                                            {t('courseTotal', { course: item.course })}
                                        </td>
                                        <td>{sumPlaces(item.vacancies)}</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.totalBlock}>
                <h2 className={styles.totalTitle}>{t('totalVacancies', { total: totalPlaces })}</h2>
            </div>
        </>
    )
}