// src/routes/CollegeManagement/CollegeManagement.tsx
import { createFileRoute } from '@tanstack/react-router'
import { useState, FC } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './CollegeManagement.module.css'

type Person = {
    id: number
    photoSrc: string
}

const teamData: Person[] = [
    { id: 0, photoSrc: '/img/collegeManagement/Dir.png' },
    { id: 1, photoSrc: '/img/collegeManagement/Rinat-Askerovich.png' },
    { id: 2, photoSrc: '/img/collegeManagement/Erzhan-Utitliev.png' },
    { id: 3, photoSrc: '/img/collegeManagement/Muhtarov-Abzal.png' },
    { id: 4, photoSrc: '/img/collegeManagement/Karazhev-Asilbek.png' },
    { id: 5, photoSrc: '/img/collegeManagement/Seetkali.png' },
    { id: 6, photoSrc: '/img/collegeManagement/Seetkali.png' },
    { id: 7, photoSrc: '/img/collegeManagement/Jainagul_Shackenovna.png' },
]

type PersonCardProps = {
    person: Person
    onOpen: () => void
}

const PersonCard: FC<PersonCardProps> = ({ person, onOpen }) => {
    const { t } = useTranslation('collegeManagement');

    return (
        <div className={styles.card}>
            <img className={styles.photo} src={person.photoSrc} alt={t(`team.${person.id}.name`)} />
            <div className={styles.info}>
                <div className={styles.text}>
                    <h2 className={styles.name}>{t(`team.${person.id}.name`)}</h2>
                    <p className={styles.position}>{t(`team.${person.id}.position`)}</p>
                </div>
                <button className={styles.button} onClick={onOpen}>
                    {t('moreDetails')}
                </button>
            </div>
        </div>
    )
}

type PersonModalProps = {
    person: Person
    onClose: () => void
}

const PersonModal: FC<PersonModalProps> = ({ person, onClose }) => {
    const { t } = useTranslation('collegeManagement');
    const personId = person.id.toString();

    // Получаем данные из переводов
    const graduationYear = t(`team.${personId}.graduationYear`, { returnObjects: true });
    const specialty = t(`team.${personId}.specialty`, { returnObjects: true, defaultValue: '' });
    const qualification = t(`team.${personId}.qualification`, { returnObjects: true, defaultValue: '' });
    const degree = t(`team.${personId}.degree`, { defaultValue: '' });
    const achievements = t(`team.${personId}.achievements`, { returnObjects: true, defaultValue: [] });

    // Проверяем, является ли значение массивом
    const isArrayGradYear = Array.isArray(graduationYear);
    const isArraySpecialty = Array.isArray(specialty);
    const isArrayQualification = Array.isArray(qualification);

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                <div className={styles.modalBody}>
                    <img className={styles.modalPhoto} src={person.photoSrc} alt={t(`team.${personId}.name`)} />

                    <div className={styles.modalInfo}>
                        <h2 className={styles.modalName}>{t(`team.${personId}.name`)}</h2>
                        <p className={styles.modalPosition}>{t(`team.${personId}.position`)}</p>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>{t('education')}</h3>
                            <p className={styles.sectionText}>{t(`team.${personId}.education`)}</p>
                        </div>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>{t('graduationYear')}</h3>
                            {isArrayGradYear ? (
                                <ul className={styles.achievementsList}>
                                    {(graduationYear as string[]).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={styles.sectionText}>{graduationYear as string}</p>
                            )}
                        </div>

                        {specialty && (
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>{t('specialty')}</h3>
                                {isArraySpecialty ? (
                                    <ul className={styles.achievementsList}>
                                        {(specialty as string[]).map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={styles.sectionText}>{specialty as string}</p>
                                )}
                            </div>
                        )}

                        {qualification && (
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>{t('qualification')}</h3>
                                {isArrayQualification ? (
                                    <ul className={styles.achievementsList}>
                                        {(qualification as string[]).map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={styles.sectionText}>{qualification as string}</p>
                                )}
                            </div>
                        )}

                        {degree && (
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>{t('academicDegree')}</h3>
                                <p className={styles.sectionText}>{degree}</p>
                            </div>
                        )}

                        {Array.isArray(achievements) && achievements.length > 0 && (
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>{t('achievements')}</h3>
                                <ul className={styles.achievementsList}>
                                    {achievements.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {personId === '0' && (
                            <a
                                href="/src/docs/prikaz_direktor.pdf"
                                className={styles.documentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('appointmentOrder')}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Route = createFileRoute('/CollegeManagement/')({
    component: RouteComponent,
})

function RouteComponent() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const { t } = useTranslation('collegeManagement');

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('collegeManagement')}</h1>
                </div>
            </div>

            <div className={styles.container}>
                {teamData.map((person, idx) => (
                    <PersonCard key={person.id} person={person} onOpen={() => setActiveIndex(idx)} />
                ))}
            </div>

            {activeIndex !== null && (
                <PersonModal person={teamData[activeIndex]} onClose={() => setActiveIndex(null)} />
            )}
        </>
    )
}

export default RouteComponent