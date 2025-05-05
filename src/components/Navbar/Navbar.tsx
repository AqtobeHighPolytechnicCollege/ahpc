import { useTranslation } from 'react-i18next';
import './Navbar.css';
import '../../img/logo.png';
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from 'react';

const langs = {
    "ru-RU": "RU",
    "kk": "KZ",
    "en": "EN",
};

export default function Header() {
    const { i18n: i18 } = useTranslation();
    const currentLang = i18.language;
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lang: string) => {
        i18.changeLanguage(lang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll()

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [activeTab, setActiveTab] = useState("abiturient");

    const abiturientLinks = (
        <ul onClick={toggleMenu}>
            <li><Link to="/contest-results">Результаты конкурса</Link></li>
            <li><Link to="/admission-rules">Правила приема</Link></li>
            <li><Link to="/dormitory">Общежитие</Link></li>
            <li><Link to="/specialties">Специальности</Link></li>
            <li><Link to="/documents">Перечень документов</Link></li>
            <li><Link to="/requisites">Наши реквизиты</Link></li>
        </ul>
    );

    const studentLinks = (
        <ul onClick={toggleMenu}>
            <li><Link to="/schedule">Расписание занятий</Link></li>
            <li><Link to="/exam-info">Информация по экзаменам</Link></li>
            <li><Link to="/library">Электронная библиотека</Link></li>
            <li><Link to="/practice">Производственная практика</Link></li>
            <li><Link to="/scholarship">Стипендии и выплаты</Link></li>
            <li><Link to="/student-life">Студенческая жизнь</Link></li>
        </ul>
    );

    return (
        <>
            <nav className={scrolled ? 'scrolled' : ''}>
                <div className="hamburgerMenu" onClick={toggleMenu}>
                    <svg
                        width="59"
                        height="38"
                        viewBox="0 0 59 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
                    >
                        <path d="M55 8C57.2091 8 59 6.20914 59 4C59 1.79086 57.2091 0 55 0V8ZM0 4V8H55V4V0H0V4Z"
                              fill="#000E3B"/>
                        <path
                            d="M41 23C43.2091 23 45 21.2091 45 19C45 16.7909 43.2091 15 41 15V23ZM0 19V23H41V19V15H0V19Z"
                            fill="#000E3B"/>
                        <path
                            d="M30 38C32.2091 38 34 36.2091 34 34C34 31.7909 32.2091 30 30 30V38ZM0 34V38H30V34V30H0V34Z"
                            fill="#000E3B"/>
                    </svg>
                </div>

                <div className="logo">
                    <Link className="logo" to={`/`}>
                        <img src="/src/img/logo.png" alt="Logoh"/>
                    </Link>
                </div>

                <div className="lang-switch">
                    {Object.entries(langs).map(([lang, label]) => (
                        <span
                            key={lang}
                            className={currentLang === lang ? 'active' : ''}
                            onClick={() => changeLanguage(lang)}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </nav>

            <div className={`fullscreen-menu ${menuOpen ? 'show' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>×</button>
                {<div className="menu-content">
                    <div className="menu-section">
                        <div className='menu-section-header'>
                            <h2>О колледже</h2>
                            <div className="lang-switch burger-lang-switch">
                                {Object.entries(langs).map(([lang, label]) => (
                                    <span
                                        key={lang}
                                        className={currentLang === lang ? 'active' : ''}
                                        onClick={() => changeLanguage(lang)}
                                    >
                                     {label}
                                    </span>
                                ))}
                            </div>

                        </div>
                        <ul onClick={toggleMenu}>
                            <li><Link to="/leadership">Руководство колледжа</Link></li>
                            <li><Link to="/achievements">Достижения</Link></li>
                            <li><Link to="/company-reviews">Отзывы предприятий</Link></li>
                            <li><Link to="/symbols">Государственные символы</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                            <li><Link to="/charter">Устав</Link></li>
                            <li><Link to="/history">История колледжа</Link></li>
                            <li><Link to="/anti-corruption">Борьба с коррупцией</Link></li>
                            <li><Link to="/graduates-reviews">Отзывы выпускников</Link></li>
                            <li><Link to="/media">СМИ о нас</Link></li>
                            <li><Link to="/orders">Приказы</Link></li>
                        </ul>
                    </div>

                    <div className="menu-section">
                        <div className="menu-tabs">
                            <span
                                className={activeTab === "abiturient" ? "tab-active" : "tab"}
                                onClick={() => setActiveTab("abiturient")}
                            >
                                Абитуриенту
                            </span>
                            <span
                                className={activeTab === "student" ? "tab-active" : "tab"}
                                onClick={() => setActiveTab("student")}
                            >
                                Студенту
                            </span>
                        </div>
                        {activeTab === "abiturient" ? abiturientLinks : studentLinks}
                    </div>

                    <div className="menu-section">
                        <h2>Обучение</h2>
                        <ul onClick={toggleMenu}>
                            <li><Link to="/distance-learning">Дистанционное обучение</Link></li>
                            <li><Link to="/dual-education">Дуальное обучение</Link></li>
                            <li><Link to="/correspondence">Заочное обучение</Link></li>
                            <li><Link to="/licenses">Лицензии и аккредитации</Link></li>
                            <li><Link to="/awards">Грамоты</Link></li>
                        </ul>
                    </div>

                    <div className="menu-section">
                        <h2>Трудоустройство</h2>
                        <ul onClick={toggleMenu}>
                            <li><Link to="/worldskills">WorldSkills</Link></li>
                            <li><Link to="/employment">Трудоустройство</Link></li>
                            <li><Link to="/internship">Практика</Link></li>
                            <li><Link to="/graduates">Наши выпускники</Link></li>
                            <li><Link to="/alumni-association">Ассоциация выпускников</Link></li>
                            <li><Link to='https://www.youtube.com/watch?v=AiRq-1bp3js'>Дима соси хуй</Link></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </>
    );
}
