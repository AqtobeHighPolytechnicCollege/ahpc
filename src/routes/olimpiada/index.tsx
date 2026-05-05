import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import styles from './olimpiada.module.css'
import { usePageTitle } from "@/components/usePageTitile.tsx"
import { useTranslation } from "react-i18next"

export const Route = createFileRoute('/olimpiada/')({
    component: RouteComponent,
})

const enc = encodeURIComponent

const firstPlace = [
    "Абдраманов Нурали Ерболович",
    "Айтқали Аянат",
    "Акунов Амирхан Азаматович",
    "Алишев Айбын",
    "Аманбек Арсен Нұрлыбекұлы",
    "Аманбеков Радмир Аманбекұлы",
    "Аманжанұлы Әділхан",
    "Асан Рафаильұлы Ғаділ",
    "Асылханұлы Әлібек",
    "Беловодский Семён Николаевич",
    "Ерболова Жангүлім Ерболқызы",
    "Есенаманов Елдос",
    "Жакетаев Абдулрахман",
    "Жанкелди  Даниял",
    "Замадинов Айдос",
    "Карабаев Ризат Ерланович",
    "Красных Ксения Евгеньевна",
    "Максимова Александра Сергеевна",
    "Миралиев Диас Асылбекұлы",
    "Мұқтарұлы Нұрбақыт",
    "Нәдірхан Өркен",
    "Реймер Елизавета Игоревна",
    "Сабиғалиев Санжар Қайратұлы",
    "Серік Әсел",
    "Сражадин Абдуғафур Дидарұлы",
    "Умарова Аяна Каршигакызы",
    "Өтеғұлов Диас Сәрсеналыұлы",
]

const secondPlace = [
    "Абилов Тимур Амангельдинович",
    "Аблаев Сағи Кайратович",
    "Амангелді Айзара Арматкызы",
    "Аманкос Диас Елдосулы",
    "Арманулы Алихан",
    "Асылхан Даниал Асылбекулы",
    "Бапанов Әдлет",
    "Бегежан Аян Асхатұлы",
    "Бекенов Марат Сергеевич",
    "Болат Али Серікұлы",
    "Болат Даулет Маратулы",
    "Болбеков Азизбек",
    "Бостан Іңкәр Кеңесқызы",
    "Гильфанов Ратмир Данисович",
    "Гольц Ярослав Анатольевич",
    "Гора Дмитрий Константинович",
    "Густенко Вячеслав Дмитриевич",
    "Данияр Рустам Даниярұлы",
    "Досщанова Ясминь Асылбековна",
    "Жапен Нұрлыжан",
    "Жасұланұлы Сержан",
    "Жеңіс Саят Ақбергенұлы",
    "Имандыгулов Акниет Ерланович",
    "Иса Турар Махсатұлы",
    "Исенко Руслан Рамильевич",
    "Кабдыров Ералы Серикович",
    "Кабиев Диар Нұрболатұлы",
    "Кайбалдиев Бакытжан Орынбасарович",
    "Калымжан Әлихан",
    "Кершетаев Бағдат Ерқасымұлы",
    "Конуртаев Адильхан Есенгельдинович",
    "Крайнюкова Валерия Витальевна",
    "Кыдырбай Нурмухан Коркембайұлы",
    "Көшербай Жұбаныш Қуанышұлы",
    "Мехтиев Даниил Русланович",
    "Меңдібай Ерәлі Бисенғалиұлы",
    "Мороз Алина Константиновна",
    "Мусин Рустам Бауыржанович",
    "Мусиров Ахмад Умирбекович",
    "Мұханбетқали Иманали Сержанұлы",
    "Мәлікұлы Иманғали",
    "Найманбаев Ануар Амангельдинович",
    "Нұржанұлы Жалғас",
    "Нұрланұлы Роман",
    "Орынғали Әмірхан Азаматұлы",
    "Пердебаев Атабек Жалғасбаев",
    "Пердебаев Атабек Жалғасбаевч",
    "Рахат Ерасыл Ерболатулы",
    "Рахманов Аян Қалиұлы",
    "Сагидолла Бекзат Жолдасұлы",
    "Сакитай Альмансур Қайратұлы",
    "Серікбаев Жомарт Алмасұлы",
    "Серик Самал Жанузаккызы",
    "Серкешбаева Дана Канатовна",
    "Сұлтанбекұлы Әділхан",
    "Таласбай Ерасыл Айбатұлы",
    "Тасболат Ерболат Серікұлы",
    "Уталиев Тамерлан Талгатович",
    "Хабаров Даниил Алексеевич",
    "Чернов Александр Георгиевич",
    "Ясенков Максим Анатольевич",
    "Ғалымжан Муса Сайранұлы",
    "Қалыбай Арсен Рүстемұлы",
    "Қуаныш Мансур",
    "Әлімжан Жазылбек",
]

const thirdPlace = [
    "Абай Дастан Дәуренұлы",
    "Абатұлы Саян",
    "Агелеуов Нуртай Куанышевич",
    "Айжарықұлы Нурхан",
    "Бағдаулет Бекзат Алматұлы",
    "Безносов Михаил Геннадьевич",
    "Бекбулат Асылхан Куанышулы",
    "Бисенбай Дулат Қуанарұлы",
    "Бофонов Радион Анатольевич",
    "Герасимов Дмитрий Андреевич",
    "Дощанов Дияс Берикович",
    "Жағыпаров Нұрбол Нурадинұлы",
    "Кенжегалиев Исмагул Джарасович",
    "Кустанова Аделина Ерболатқызы",
    "Мами Ернұр Кенжеғазыұлы",
    "Масютенко Даниил Андреевич",
    "Мурат Магжан Аскарбекулы",
    "Мухамеджанова Эльвира Ренатқызы",
    "Нағи Арсен Нұрболатұлы",
    "Омарқұлов Диас Ерболұлы",
    "Оразбек Нұрсұлтан Серікжанұлы",
    "Тажибек Бейбарыс Бауыржанулы",
    "Токтаров Азамат Асетович",
    "Торланбаев Данияр Тойлыбекович",
    "Турлыбек Ернар Русланулы",
    "Халық Нұрасыл Алматұлы",
    "Шагбанов Роман Максимович",
    "Шаріпбай Нұрислам Ерланұлы",
    "Шаяхов Равиль Валерьевич",
    "Элиакбар Бекзатхан Жомартулы",
    "Қайроллаев Жанболат Кәдірболатұлы",
]

const thankYouLetters = [
    "Абилов Али Берликович",
    "Аймұратов Нұрболат Қуанышбекұлы",
    "Асанбай Азамат Назарұлы",
    "Аскарова Арай Ардаковна",
    "Бекпаев Жанат Ахметханулы",
    "Габитов Беимбет Габитович",
    "Досмағанбетов Еламан Асылбекұлы",
    "Енин Арсений Владимирович",
    "Ерабат Дархан Ақанұлы",
    "Жолдығали Ерқанат Айдынғалиұлы",
    "Жұмагелді Әли Нұрболұлы",
    "Ислам Алмат Салауатұлы",
    "Кадырханова Амина Жанатовна",
    "Ксёнз Виктор Владимирович",
    "Куприн Роман Дмитриевич",
    "Кәрімолла Азамат Мерекеұлы",
    "Мұқат Жібек Қазбекқызы",
    "Нұрлыбек Байтөре Маратұлы",
    "Рашев Ақсұңқар Аскарович",
    "Тимашов Кирилл Олегович",
    "Тиуков Артем Алексеевич",
    "Турханова Наргиза Тимурқызы",
    "Тұрғанбайұлы Бағлан",
    "Шеибов Султан Мурадович",
    "Қалдыбаев Ержан Еркінбекұлы",
    "Қожахметова Карима",
]

type Variant = 'gold' | 'silver' | 'bronze' | 'blue'

function PdfIcon() {
    return (
        <svg
            className={styles.pdfIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    )
}

function DownloadIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    )
}

function WinnersSection({
    title,
    names,
    urlFn,
    variant,
    linkLabel,
    searchPlaceholder,
    noResults,
}: {
    title: string
    names: string[]
    urlFn: (name: string) => string
    variant: Variant
    linkLabel: string
    searchPlaceholder: string
    noResults: string
}) {
    const [search, setSearch] = useState('')
    const filtered = search
        ? names.filter(n => n.toLowerCase().includes(search.toLowerCase()))
        : names

    const medalLabel = variant === 'gold' ? 'I' : variant === 'silver' ? 'II' : variant === 'bronze' ? 'III' : '★'

    return (
        <section className={`${styles.section} ${styles[variant]}`}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionHeaderTop}>
                    <span className={`${styles.medalBadge} ${styles[`${variant}Badge`]}`}>
                        {medalLabel}
                    </span>
                    <div>
                        <h2 className={styles.sectionTitle}>{title}</h2>
                        <p className={styles.sectionCount}>{names.length} участников</p>
                    </div>
                </div>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder={searchPlaceholder}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className={styles.namesGrid}>
                {filtered.length > 0 ? (
                    filtered.map(name => (
                        <a
                            key={name}
                            href={urlFn(name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.nameCard} ${styles[`${variant}Card`]}`}
                        >
                            <PdfIcon />
                            <span className={styles.nameText}>{name}</span>
                            <span className={styles.openLink}>{linkLabel} →</span>
                        </a>
                    ))
                ) : (
                    <p className={styles.noResults}>{noResults}</p>
                )}
            </div>
        </section>
    )
}

function RouteComponent() {
    const { t, i18n } = useTranslation('olimpiada')
    usePageTitle(t('pageTitle'), [i18n.language, t])

    const firstUrl  = (name: string) => `/documents/olimpiada/${enc('1 диплом')}/${enc('1 диплом')}/${enc(name)}.pdf`
    const secondUrl = (name: string) => `/documents/olimpiada/${enc('2 диплом')}/${enc('2 диплом')}/${enc(name)}.pdf`
    const thirdUrl  = (name: string) => `/documents/olimpiada/${enc('3 диплом')}/${enc(name)}.pdf`
    const thanksUrl = (name: string) => `/documents/olimpiada/${enc('алгыс хат')}/${enc(name)}.pdf`

    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('pageTitle')}</h1>
                </div>
            </div>

            <div className={styles.container}>
                <section className={styles.regulationSection}>
                    <div className={styles.regulationInfo}>
                        <h2 className={styles.regulationTitle}>{t('regulation.title')}</h2>
                        <p className={styles.regulationDesc}>{t('regulation.description')}</p>
                    </div>
                    <a
                        href="/documents/olimpiada/положение.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.regulationBtn}
                    >
                        <DownloadIcon />
                        {t('regulation.download')}
                    </a>
                </section>

                <WinnersSection
                    title={t('sections.first.title')}
                    names={firstPlace}
                    urlFn={firstUrl}
                    variant="gold"
                    linkLabel={t('openPdf')}
                    searchPlaceholder={t('searchPlaceholder')}
                    noResults={t('noResults')}
                />

                <WinnersSection
                    title={t('sections.second.title')}
                    names={secondPlace}
                    urlFn={secondUrl}
                    variant="silver"
                    linkLabel={t('openPdf')}
                    searchPlaceholder={t('searchPlaceholder')}
                    noResults={t('noResults')}
                />

                <WinnersSection
                    title={t('sections.third.title')}
                    names={thirdPlace}
                    urlFn={thirdUrl}
                    variant="bronze"
                    linkLabel={t('openPdf')}
                    searchPlaceholder={t('searchPlaceholder')}
                    noResults={t('noResults')}
                />

                <WinnersSection
                    title={t('sections.thankYou.title')}
                    names={thankYouLetters}
                    urlFn={thanksUrl}
                    variant="blue"
                    linkLabel={t('openLetter')}
                    searchPlaceholder={t('searchPlaceholder')}
                    noResults={t('noResults')}
                />
            </div>
        </>
    )
}
