import { useTranslation } from 'react-i18next';
import './Navbar.css';
import '/img/logo.png';
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from 'react';

const langs = {
    "ru-RU": "RU",
    "kk": "KZ",
    "en": "EN",
};

export default function Header() {
    const { i18n: i18 } = useTranslation();
    const { t, i18n } = useTranslation('navbar');
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
            <li><Link to="/contestResults">{t('contestResult')}</Link></li>
            <li><Link to="/admissionRules">{t('admissionRules')}</Link></li>
            <li><Link to="/Dormitory">{t('dormitory')}</Link></li>
            <li><Link to="/Specials">{t('specials')}</Link></li>
        </ul>
    );

    const studentLinks = (
        <ul onClick={toggleMenu}>
            <li><Link to="/schedule">{t('schedule')}</Link></li>
            <li><Link to="/examInfo">{t('examInfo')}</Link></li>
            <li><Link to="/scholarship">{t('sholarship')}</Link></li>
            <li><Link to="/studentLive">{t('studentLive')}</Link></li>
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
                        <img src="/img/logo.png" alt="Logoh"/>
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
                            <li><Link to="/CollegeManagement">{t('collegeManagement')}</Link></li>
                            <li><Link to="/companyReviews">{t('companyReviews')}</Link></li>
                            <li><Link to="/Symbols">{t('symbols')}</Link></li>
                            <li><Link to="/Contacts">{t('contacts')}</Link></li>
                            <li><Link to="/charter">{t('charter')}</Link></li>
                            <li><Link to="/collegeHistory">{t('collegeHistory')}</Link></li>
                            <li><Link to="/counteringCorruption">{t('counteringCorruption')}</Link></li>
                            <li><Link to="/graduatesReviews">{t('graduatesReviews')}</Link></li>
                            <li><Link to="/media">{t('media')}</Link></li>
                            <li><Link to="/orders">{t('orders')}</Link></li>
                            <li><Link to="/TeachingStaff">{t('teachingStaff')}</Link></li>
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
                            <li><Link to="/distanceLearning">{t('distanceLearning')}</Link></li>
                            <li><Link to="/dualEducation">{t('dualEducation')}</Link></li>
                            <li><Link to="/correspondence">{t('correspodence')}</Link></li>
                            <li><Link to="/license">{t('license')}</Link></li>
                        </ul>
                    </div>

                    <div className="menu-section">
                        <h2>Трудоустройство</h2>
                        <ul onClick={toggleMenu}>
                            <li><Link to="/WorldSkills">{t('worldSkills')}</Link></li>
                            <li><Link to="/employment">{t('employment')}</Link></li>
                            <li><Link to="/practice">{t('practice')}</Link></li>
                            <li><Link to="/ourGraduates">{t('ourGraduates')}</Link></li>
                            <li><Link to="/alumniAssociation">{t('alumniAssoctiation')}</Link></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </>
    );
}
