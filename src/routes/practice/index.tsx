import { createFileRoute } from '@tanstack/react-router'
import styles from './practice.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/practice/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t, i18n } = useTranslation('practice');
  usePageTitle(t('practice'),[i18n.language, t]);
  return <>
    <div className={styles.headContent}>
      <div className={styles.headContentHashtag}>
        <h1>{t('practice')}</h1>
      </div>
    </div>
    <div className={styles.container}>
      <section className={styles.educationalPractice}>
        <div className={styles.educationalPractice__Info}>
          <div className={styles.educationalPractice__Info__Text}>
            <h1 className={styles.educationalPractice__Info__Text__Title}>{t('educationPractice')}</h1>
            <p className={styles.educationalPractice__Info__Text__Description}>{t('educationPracticeDesc')}</p>
          </div>
          <img src='/img/educationalPractice/educationalPractice.png' alt='Учебная практика' />
        </div>
        <div className={styles.educationalPractice__ImageBLocks}>
          <div className={styles.educationalPractice__ImageBlock}>
            <img src='/img/educationalPractice/image%20364.jpg' alt='Фото прохождения учебной практики'/>
            <img src='/img/educationalPractice/image%20365.jpg' alt='Фото прохождения учебной практики'/>
            <img src='/img/educationalPractice/image%20366.jpg' alt='Фото прохождения учебной практики'/>
          </div>
          <div className={styles.educationalPractice__ImageBlock}>
            <img src='/img/educationalPractice/image%20367.jpg' alt='Фото прохождения учебной практики'/>
            <img src='/img/educationalPractice/image%20368.jpg' alt='Фото прохождения учебной практики'/>
          </div>
        </div>
        <div className={styles.educationalPractice__Word}>
          <p className={styles.educationalPractice__Word__Text}>{t('practiceWord1')}</p>
          <p className={styles.educationalPractice__Word__Text}>{t('practiceWord2')}</p>
          <p className={styles.educationalPractice__Word__Text}>{t('practiceWord3')}</p>
        </div>
      </section>
      <section className={styles.pregraduatePractice}>
        <h1 className={styles.pregraduatePractice__Title}>{t('pregraduatePractice')}</h1>
        <p className={styles.pregraduatePractice__Description}>{t('pregraduatePracticeDesc')}</p>
        <div className={styles.pregraduatePractice__Image}>
          <div className={styles.pregraduatePractice__Image__Item}>
            <img src='/img/educationalPractice/image%20362.jpg' alt='Фото преддипломной практики студентов'/>
            <p className={styles.pregraduatePractice__Image__Subtitle}>{t('prePracticeWord1')}</p>
          </div>
          <div className={styles.pregraduatePractice__Image__Item}>
            <img src='/img/educationalPractice/image%20363.jpg' alt='Фото преддипломной практики студентов'/>
            <p className={styles.pregraduatePractice__Image__Subtitle}>{t('prePracticeWord2')}</p>
          </div>
        </div>
      </section>
    </div>
  </>
}