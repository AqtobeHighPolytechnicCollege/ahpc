import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruHome from '../locales/ru/home.json'
import ruNews from '../locales/ru/news.json'
import ruReviews from '../locales/ru/reviews.json'
import ruPartners from '../locales/ru/partners.json'
import ruFooter from '../locales/ru/footer.json'
import ruDepartments from '../locales/ru/departments.json'
import ruCollegeManagement from '../locales/ru/collegeManagement.json'
import ruSybmols from '../locales/ru/sybmols.json'
import ruContacts from '../locales/ru/contacts.json'
import ruCompanyReviews from '../locales/ru/companyReviews.json'
import ruCharter from '../locales/ru/charter.json'
import ruCollegeHistory from '../locales/ru/collegeHistory.json'
import ruCounteringCorruption from '../locales/ru/counteringCorruption.json'
import ruGraduateReviews from '../locales/ru/graduateReviews.json'
import ruMedia from '../locales/ru/media.json'
import ruOrders from '../locales/ru/orders.json'
import ruContestResult from '../locales/ru/contestResult.json'
import ruAdmissionRules from '../locales/ru/admissionRules.json'
import ruDormitory from '../locales/ru/dormitory.json'
import ruSpecials from '../locales/ru/specials.json'
import ruSchedule from '../locales/ru/schedule.json'
import ruExamInfo from '../locales/ru/examInfo.json'
import ruScholarship from '../locales/ru/scholarship.json'
import ruStudentLive from '../locales/ru/studentLive.json'
import ruDistancelLearning from '../locales/ru/distancelLearning.json'
import ruCorrespondence from '../locales/ru/correspondence.json'
import ruLicense from '../locales/ru/license.json'
import ruWorldSKills from '../locales/ru/worldSkills.json'
import ruEmployemnt from '../locales/ru/employemnt.json'
import ruDualEducation from '../locales/ru/dualEducation.json'
import ruPractice from '../locales/ru/practice.json'
import ruOurGraduates from '../locales/ru/ourGraduates.json'
import ruAlumniAssoctiation from '../locales/ru/alumniAssoctiation.json'
import ruNavbar from '../locales/ru/navbar.json'
import kzHome from '../locales/kz/home.json'
import kzNews from '../locales/kz/news.json'
import kzReviews from '../locales/kz/reviews.json'
import kzPartners from '../locales/kz/partners.json'
import kzFooter from '../locales/kz/footer.json'
import kzDepartments from '../locales/kz/departments.json'
import kzCollegeManagement from '../locales/kz/collegeManagement.json'
import kzSybmols from '../locales/kz/sybmols.json'
import kzContacts from '../locales/kz/contacts.json'
import kzCompanyReviews from '../locales/kz/companyReviews.json'
import kzCharter from '../locales/kz/charter.json'
import kzCollegeHistory from '../locales/kz/collegeHistory.json'
import kzCounteringCorruption from '../locales/kz/counteringCorruption.json'
import kzGraduateReviews from '../locales/kz/graduateReviews.json'
import kzMedia from '../locales/kz/media.json'
import kzOrders from '../locales/kz/orders.json'
import kzContestResult from '../locales/kz/contestResult.json'
import kzAdmissionRules from '../locales/kz/admissionRules.json'
import kzDormitory from '../locales/kz/dormitory.json'
import kzSpecials from '../locales/kz/specials.json'
import kzSchedule from '../locales/kz/schedule.json'
import kzExamInfo from '../locales/kz/examInfo.json'
import kzScholarship from '../locales/kz/scholarship.json'
import kzStudentLive from '../locales/kz/studentLive.json'
import kzDistancelLearning from '../locales/kz/distancelLearning.json'
import kzCorrespondence from '../locales/kz/correspondence.json'
import kzLicense from '../locales/kz/license.json'
import kzWorldSkills from '../locales/kz/worldSkills.json'
import kzEmployemnt from '../locales/kz/employemnt.json'
import kzDualEducation from '../locales/kz/dualEducation.json'
import kzPractice from '../locales/kz/practice.json'
import kzOurGraduates from '../locales/kz/ourGraduates.json'
import kzAlumniAssoctiation from '../locales/kz/alumniAssoctiation.json'
import kzNavbar from '../locales/kz/navbar.json'
import enHome from '../locales/en/home.json'
import enNews from '../locales/en/news.json'
import enReviews from '../locales/en/reviews.json'
import enPartners from '../locales/en/partners.json'
import enFooter from '../locales/en/footer.json'
import enDepartments from '../locales/en/departments.json'
import enCollegeManagement from '../locales/en/collegeManagement.json'
import enSybmols from '../locales/en/sybmols.json'
import enContacts from '../locales/en/contacts.json'
import enCompanyReviews from '../locales/en/companyReviews.json'
import enCharter from '../locales/en/charter.json'
import enCollegeHistory from '../locales/en/collegeHistory.json'
import enCounteringCorruption from '../locales/en/counteringCorruption.json'
import enGraduateReviews from '../locales/en/graduateReviews.json'
import enMedia from '../locales/en/media.json'
import enOrders from '../locales/en/orders.json'
import enContestResult from '../locales/en/contestResult.json'
import enAdmissionRules from '../locales/en/admissionRules.json'
import enDormitory from '../locales/en/dormitory.json'
import enSpecials from '../locales/en/specials.json'
import enSchedule from '../locales/en/schedule.json'
import enExamInfo from '../locales/en/examInfo.json'
import enScholarship from '../locales/en/scholarship.json'
import enStudentLive from '../locales/en/studentLive.json'
import enDistancelLearning from '../locales/en/distancelLearning.json'
import enCorrespondence from '../locales/en/correspondence.json'
import enLicense from '../locales/en/license.json'
import enWorldSkills from   '../locales/en/worldSkills.json'
import enEmployemnt from '../locales/en/employemnt.json'
import enDualEducation from '../locales/en/dualEducation.json'
import enPractice from '../locales/en/practice.json'
import enOurGraduates from '../locales/en/ourGraduates.json'
import enAlumniAssoctiation from '../locales/en/alumniAssoctiation.json'
import enNavbar from '../locales/en/navbar.json'

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
                collegeManagement: ruCollegeManagement,
                sybmols: ruSybmols,
                contacts: ruContacts,
                companyReviews: ruCompanyReviews,
                charter: ruCharter,
                collegeHistory: ruCollegeHistory,
                counteringCorruption: ruCounteringCorruption,
                graduateReviews: ruGraduateReviews,
                media: ruMedia,
                orders: ruOrders,
                contestResult: ruContestResult,
                admissionRules: ruAdmissionRules,
                dormitory: ruDormitory,
                specials: ruSpecials,
                schedule: ruSchedule,
                examInfo: ruExamInfo,
                scholarship: ruScholarship,
                studentLive: ruStudentLive,
                distancelLearning: ruDistancelLearning,
                correspondence:ruCorrespondence,
                license: ruLicense,
                worldSkills: ruWorldSKills,
                employemnt: ruEmployemnt,
                dualEducation: ruDualEducation,
                practice: ruPractice,
                ourGraduates: ruOurGraduates,
                alumniAssoctiation: ruAlumniAssoctiation,
                navbar: ruNavbar,
            },
            'kk': {
                home: kzHome,
                news: kzNews,
                reviews: kzReviews,
                partners: kzPartners,
                footer: kzFooter,
                departments: kzDepartments,
                collegeManagement: kzCollegeManagement,
                sybmols: kzSybmols,
                contacts: kzContacts,
                companyReviews: kzCompanyReviews,
                charter: kzCharter,
                collegeHistory: kzCollegeHistory,
                counteringCorruption: kzCounteringCorruption,
                graduateReviews: kzGraduateReviews,
                media: kzMedia,
                orders: kzOrders,
                contestResult: kzContestResult,
                admissionRules: kzAdmissionRules,
                dormitory: kzDormitory,
                specials: kzSpecials,
                schedule: kzSchedule,
                examInfo: kzExamInfo,
                scholarship: kzScholarship,
                studentLive: kzStudentLive,
                distancelLearning: kzDistancelLearning,
                correspondence: kzCorrespondence,
                license: kzLicense,
                worldSkills: kzWorldSkills,
                employemnt: kzEmployemnt,
                dualEducation: kzDualEducation,
                practice: kzPractice,
                ourGraduates: kzOurGraduates,
                alumniAssoctiation: kzAlumniAssoctiation,
                navbar: kzNavbar,
            },
            en: {
                home: enHome,
                news: enNews,
                reviews: enReviews,
                partners: enPartners,
                footer: enFooter,
                departments: enDepartments,
                collegeManagement: enCollegeManagement,
                sybmols: enSybmols,
                contacts: enContacts,
                companyReviews: enCompanyReviews,
                charter: enCharter,
                collegeHistory: enCollegeHistory,
                counteringCorruption: enCounteringCorruption,
                graduateReviews: enGraduateReviews,
                media: enMedia,
                orders: enOrders,
                contestResult: enContestResult,
                admissionRules: enAdmissionRules,
                dormitory: enDormitory,
                specials: enSpecials,
                schedule: enSchedule,
                examInfo: enExamInfo,
                scholarship: enScholarship,
                studentLive: enStudentLive,
                distancelLearning: enDistancelLearning,
                correspondence:enCorrespondence,
                license: enLicense,
                worldSkills: enWorldSkills,
                employemnt: enEmployemnt,
                dualEducation: enDualEducation,
                practice: enPractice,
                ourGraduates: enOurGraduates,
                alumniAssoctiation: enAlumniAssoctiation,
                navbar: enNavbar,
            }
        },
        lng: 'ru-RU',
        fallbackLng: 'kk',
        ns: ['home', 'about', 'reviews', 'partners', 'footer', 'departments', 'collegeManagement', 'sybmols','contacts','companyReviews','charter',
            'collegeHistory', 'counteringCorruption','graduateReviews','media','orders','contestResult','admissionRules', 'dormitory','specials',
        'schedule','examInfo', 'scholarship','studentLive','distancelLearning','correspondence','license','worldSkills','employemnt','dualEducation',
        'practice', 'ourGraduates','alumniAssoctiation', 'navbar'],

        defaultNS: 'home',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
