import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruHome from '../locales/ru/home.json'
import ruNews from '../locales/ru/news.json'
import ruReviews from '../locales/ru/reviews.json'
import ruPartners from '../locales/ru/partners.json'
import ruFooter from '../locales/ru/footer.json'
import ruDepartments from '../locales/ru/departments.json'
import kzHome from '../locales/kz/home.json'
import kzNews from '../locales/kz/news.json'
import kzReviews from '../locales/kz/reviews.json'
import kzPartners from '../locales/kz/partners.json'
import kzFooter from '../locales/kz/footer.json'
import kzDepartments from '../locales/kz/departments.json'
import enHome from '../locales/en/home.json'
import enNews from '../locales/en/news.json'
import enReviews from '../locales/en/reviews.json'
import enPartners from '../locales/en/partners.json'
import enFooter from '../locales/en/footer.json'
import enDepartments from '../locales/en/departments.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            'ru-RU': {
                home: ruHome,
                news: ruNews,
                reviews: ruReviews,
                partners: ruPartners,
                footer: ruFooter,
                departments: ruDepartments,
            },
            'kk': {
                home: kzHome,
                news: kzNews,
                reviews: kzReviews,
                partners: kzPartners,
                footer: kzFooter,
                departments: kzDepartments,
            },
            en: {
                home: enHome,
                news: enNews,
                reviews: enReviews,
                partners: enPartners,
                footer: enFooter,
                departments: enDepartments,
            }
        },
        lng: 'ru-RU',
        fallbackLng: 'kk',
        ns: ['home', 'about', 'reviews', 'partners', 'footer', 'departments'],
        defaultNS: 'home',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
