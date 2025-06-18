// src/routes/CollegeManagement/CollegeManagement.tsx
import { createFileRoute } from '@tanstack/react-router'
import { useState, FC } from 'react'
import styles from './CollegeManagement.module.css'

// 1) Определяем структуру данных для каждого человека
type Person = {
    id: number
    photoSrc: string      // путь к картинке (от корня public или вашей сборки)
    name: string
    position: string
    education: {
        title: string      // заголовок раздела
        text: string       // текст раздела
    }
    endYearName: {
        title: string
        text: string
    }
    specials: {
        title: string
        text: string
}
    qualification: {
        title: string
        text: string
    }
    degree: {
        title: string
        text: string
    }
    achievements: string[]     // список строк, которые попадут в <li>
    documentLink?: string      // ссылка на PDF (если есть)
}

// 2) Сами данные (пример для 8 человек).
//    Для краткости здесь заполнены только данные директора,
//    остальные 7 человек добавлены «заглушками» — замените текст/пути картинок и т. д.
const teamData: Person[] = [
    {
        id: 0,
        photoSrc: '/src/img/collegeManagement/Dir.png',
        name: 'Мухамбептаизова Женискул Сагидоллаевна',
        position: 'Директор колледжа',
        education: {
            title: 'Год окончания и наименование учебного заведения',
            text: 'Алматинский институт инженеров железнодорожного транспорта',
        },
        endYearName: {
            title: 'Год окончания и наименование учебного заведения',
            text: 'Алматинский институт инженеров железнодорожного транспорта',
        },
        specials: {
            title: '',
            text: ''
        },
        qualification: {
            title: 'Квалификация по специальности',
            text: 'Инженер путей сообщения по управлению процессами перевозок на железнодорожном транспорте.',
        },
        degree: {
            title: 'Академическая учебная степень, учебное звание',
            text: 'Кандидат технических наук',
        },
        achievements: [
            'Благодарственное письмо Президента РК',
            'Сертификат Министра транспорта и коммуникации',
            'Похвальный лист Министра Образования и науки',
            'Сертификат и благодарственное письмо Акима Актюбинской области',
            'Благодарственное письмо Акима города Актобе',
            'Почетная грамота Актюбинского областного управления образования',
            'Член партии «Нұр Отан»',
            'Депутат областного маслихата',
            'Член общественного совета по борьбе с коррупцией',
            'Нагрудный знак «Ы.Алтынсарин»',
            'Орден «Құрмет»',
            'Нагрудный знак «Қос Шынар»',
            'Медаль к 20-летию маслихата РК',
        ],
        documentLink: '/src/docs/prikaz_direktor.pdf',
    },
    {
        id: 1,
        photoSrc: '/src/img/collegeManagement/Rinat-Askerovich.png',
        name: 'Хайруллаев Ринат Аскерович',
        position: 'Заместитель директора по информационным технологиям',
        education: {
            title: 'Оброзование',
            text: 'Высшее',
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: 'Актюбинский региональный государственный уневерситет К.Жубанова, 2015г.',
        },
        specials: {
            title: 'Специальность',
            text: '5В011100 –Информатика\n',
        },
        qualification: {
            title: 'Квалификация',
            text: 'Бакалавр образования',
        },
        degree: {
            title: 'Академическая учебная степень',
            text: 'Актюбинский региональный государственный университет им.К.Жубанова, 2017г., 6М060200- Информатика, магистр естествознания.',
        },
        achievements: [
            'Диплом «Гран-при» в чемпионате по работотехнике на областном уровне-2018г.',
            'Диплом 1- степени за подготовку студента в региональном чемпионате «WorldSkills Kazakstan Aktobe-2018» по компетенции «Графический дизайн»\n',
            'Диплом III- степени за подготовку в Национальном чемпионате «WorldSkills Kazakstan-2018» студента по компетенции «Графический дизайн».\n',
            'Диплом III- степени за участие в бизнес-проекте «Преподаватель инноватор»-2018г.\n',
        ],
    },
    {
        id: 2,
        photoSrc: '/src/img/collegeManagement/Erzhan-Utitliev.png',
        name: 'Утеулиев Ержан Бактыбаевич',
        position: 'Заместитель директора по учебной работе',
        education: {
            title: 'Оброзование',
            text: 'Высшее',
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: ['Карагандинский государственный университет им. Е. А. Букетова 2011г.\n',
                  'Актюбинский университет им. С. Байшева 2013г.\n',
                  'Актюбинский университет им. С. Байшева 2017г.\n',
                ]
        },
        specials: {
            title: 'Специальность'  ,
            text: [
                '050901 - «Организация перевозок, движения и эксплуатация транспорта»\n',
                '6М051000 - Государственное и местное управление\n',
                '«Автоматизация и управление»\n',
            ],
        },
        qualification: {
            title: 'Квалификация',
            text: [
                'Бакалавр в области услуг\n',
                'Магистр экономических наук\n',
                'Бакалавр техники и технологии\n',
            ],
        },
        degree: {
            title: 'Академическая учебная степень',
            text: 'Экономика научного и педагогического направления, магистр экономических наук\n',
        },
        achievements: [
            'Победитель конкурса на республиканском уровне «Лучший педагог» - 2017 г. , имеет свидетельство обладателя звания\n',
            '«Лучший педагог»-2017 г. Республики Казахстан.\n',
            'Медаль за выдающиеся заслуги в области технического и профессионального образования Республики Казахстан, 2016г.\n',
            '2017 г. Пятый республиканский конкурс педагогов «Өнегелі ұстаз». 1 место\n',
            '2019 г. Медаль «За отличие в области образования».\n',
            '2019 г. Победитель конкурса Ы.Алтынсарин\n',
            '2021 г. Победитель республиканского конкурса «Білім беру саласының үздіктері».\n',
            '2021 г. Региональный конкурс проектов «3D-моделирование-инжиниринг будущего» — 1 место.\n',
            '2021 г. Благодарность Министерства образования и науки Республики Казахстан\n',
            'Благодарственное письмо НАО Talap, 2022 г.\n',
            'Нагрудный знак "Білім беру ісінің құрметті қызметкері", 2024 г\n',
        ],
    },
    {
        id: 3,
        photoSrc: '/src/img/collegeManagement/Muhtarov-Abzal.png',
        name: 'Мухтаров Абзал Танжарбаевич',
        position: 'Заместитель директора по учебно-производственной работе',
        education: {
            title: 'Оброзование',
            text: 'Высшее',
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: [
                'Западно-Казахстанский аграрный университет, 1999г.\n',
                'Актюбинский государственный университет им. К.Жубанова, 2006г.\n',
                ]
        },
        specials: {
            title: 'Специальность'  ,
            text: [
                'Механизация с/х производства\n',
                'Юриспруденция',
            ],
        },
        qualification: {
            title: 'Квалификация',
            text: [
              'Инженер-механик с высшим профессиональным образованием\n',
              'Юрист с высшим профессиональным образованием\n',
            ],
        },
        degree: {
            title: '',
            text: '',
        },
        achievements: [
            'Благодарственное письмо Министра Образования и науки РК, 2014г.\n',
            'Имеет 30 научных работ и 1 инновационный патент на изобретение РК.\n',
            'Почетная грамота Актюбинского областного организации казахстанского отраслевого профессионального союза работников образования, 2019\n',
        ],
    },
    {
        id: 4,
        photoSrc: '/src/img/collegeManagement/Karazhev-Asilbek.png',
        name: 'Карашев Асылбек Амантаевич',
        position: 'Заместитель директора по профессиональному обучению',
        education: {
            title: 'Оброзование',
            text: 'Высшее',
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: 'Казахская академия транспорта и коммуникации им. М.Тынышпаева, 2009г.\n',
        },
        specials: {
            title: 'Специальность',
            text: 'Радиотехника, электроника и телекоммуникация\n',
        },
        qualification: {
            title: 'Квалификация по специальности',
            text: 'Бакалавр радиотехники, электроники и телекоммуникации\n',
        },
        degree: {
            title: '',
            text: '',
        },
        achievements: [
            'Диплом ІІ степени за участие на областном олимпиаде по предметам «Теоретические основы электротехники» и «Теория электрических цепей»\n',
            'Диплом ІІІ-степени за подготовку студента в региональном чемпионате «WorldSkills Kazakstan Aktobe-2021» по компетенции «Информационые кабельные сети»\n',
            'Диплом ІІ-степени за подготовку студента в региональном чемпионате «WorldSkills Kazakstan Aktobe-2023» по компетенции «Информационые кабельные сети»\n',
            'Благодарность за участие в ІІІ Международной научно-практической конференции «Молодежь. Наука. Траспорт»\n',
            'Диплом І-степени за участие в конкурсе республиканских научных проектов «Рухани жаңғыру-елдіктің тірегі»\n',
        ],
    },
    {
        id: 5,
        photoSrc: '/src/img/collegeManagement/Seetkali.png',
        name: 'Муканов Сейткали Умбетязович',
        position: 'Заместитель директора по хозяйственной работе',
        education: {
            title: 'Оброзование',
            text: 'Высшее',
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: 'Актюбинский политехнический колледж, 2005г.\n',
        },
        specials: {
            title: 'Специальность',
            text: 'Электро-снабжение\n',
        },
        qualification: {
            title: 'Квалификация',
            text: 'Техник-электрик\n',
        },
        degree: {
            title: '',
            text: '',
        },
        achievements: [

        ],
    },
    {
        id: 6,
        photoSrc: '/src/img/collegeManagement/Seetkali.png',
        name: 'Кылышбаева Куралай Мураткызыэ',
        position: 'Заместитель директора по учебно-методической работе',
        education: {
            title: 'Оброзование',
            text: 'Высшее',
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: [
                'Западно- Казахстанский аграрный университет, 1996г.',
                'Западно-Казахстанский инженерно-гуманитарный университет, 2013г',
                ]
        },
        specials: {
            title: 'Специальность',
            text: [
                'Экономика и управление в отраслях АПК',
                '6М050600-Экономика',
            ]
        },
        qualification: {
            title: 'Квалификация',
            text: [
                'Экономист-менеджер предприятий АПК',
                'Магистр экономических наук',
            ]
        },
        degree: {
            title: '',
            text: '',
        },
        achievements: [

        ],
    },
    {
        id: 7,
        photoSrc: '/src/img/collegeManagement/Seetkali.png',
        name: 'Абиева Жайнагуль Шакеновна',
        position: 'Заместитель директора по воспитательной работе',
        education: {
            title: 'Оброзование',
            text: [
                'Высшее',
                'Среднее-техническое'
                ]
        },
        endYearName: {
            title: 'Год окончания и наимиенование учебного заведения',
            text: [
                'Актюбинский политехнический колледж, 2005г',
                'Центрально-Азиатский университет, 2009г.',
                'Актюбинский региональный государственный университет им.К.Жубанова, 2014г.',
            ]
        },
        specials: {
            title: 'Специальность',
            text: [
                'Эксплуатация нефтяных и газовых месторождений',
                'Бакалавр нефтегазового дела',
                '5В010300- Педагогика и психология',
            ]
        },
        qualification: {
            title: 'Квалификация',
            text: [
                'Техник- технолог',
                'Бакалавр нефтегазовоего дела',
                'Бакалавр образования',
            ]
        },
        degree: {
            title: 'Академическая учебная степень',
            text: 'Магистр педагогики и психологии',
        },
        achievements: [

        ],
    },
]

// 3) Компонент «Карточка» — отрисовывает мини-версию (фото + ФИО + кнопка)
type PersonCardProps = {
    person: Person
    onOpen: () => void
}
const PersonCard: FC<PersonCardProps> = ({ person, onOpen }) => (
    <div className={styles.card}>
        <img className={styles.photo} src={person.photoSrc} alt={person.name} />
        <div className={styles.info}>
            <div className={styles.text}>
                <h2 className={styles.name}>{person.name}</h2>
                <p className={styles.position}>{person.position}</p>
            </div>
            <button className={styles.button} onClick={onOpen}>
                Подробнее
            </button>
        </div>
    </div>
)

// 4) Компонент «Модалка» — получает объект person и кнопку «закрыть»
type PersonModalProps = {
    person: Person
    onClose: () => void
}
const PersonModal: FC<PersonModalProps> = ({ person, onClose }) => (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={onClose}>
                &times;
            </button>

            <div className={styles.modalBody}>
                <img className={styles.modalPhoto} src={person.photoSrc} alt={person.name} />

                <div className={styles.modalInfo}>
                    <h2 className={styles.modalName}>{person.name}</h2>
                    <p className={styles.modalPosition}>{person.position}</p>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{person.education.title}</h3>
                        <p className={styles.sectionText}>{person.education.text}</p>
                    </div>


                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{person.endYearName.title}</h3>
                        <p className={styles.sectionText}>{person.endYearName.text}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{person.specials.title}</h3>
                        <p className={styles.sectionText}>{person.specials.text}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{person.qualification.title}</h3>
                        <p className={styles.sectionText}>{person.qualification.text}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{person.degree.title}</h3>
                        <p className={styles.sectionText}>{person.degree.text}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Достижения</h3>
                        <ul className={styles.achievementsList}>
                            {person.achievements.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {person.documentLink && (
                        <a
                            href={person.documentLink}
                            className={styles.documentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Приказ о назначении
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
)

export const Route = createFileRoute('/CollegeManagement/CollegeManagement')({
    component: RouteComponent,
})

function RouteComponent() {
    // activeIndex = индекс человека в teamData, или null (никто не выбран)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>Руководство колледжа</h1>
                </div>
            </div>

            {/* Рендерим сразу grid из карточек всех людей */}
            <div className={styles.container}>
                {teamData.map((person, idx) => (
                    <PersonCard key={person.id} person={person} onOpen={() => setActiveIndex(idx)} />
                ))}
            </div>

            {/* Если кто-то открыт — рендерим модалку этого человека */}
            {activeIndex !== null && (
                <PersonModal person={teamData[activeIndex]} onClose={() => setActiveIndex(null)} />
            )}
        </>
    )
}

export default RouteComponent
