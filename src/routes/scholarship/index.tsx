import { createFileRoute } from '@tanstack/react-router'
import styles from  './scholarship.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/scholarship/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t, i18n } = useTranslation('scholarship');
  usePageTitle(t('scholarship'),[i18n.language, t]);
  return <>
    <div className={styles.headContent}>
      <div className={styles.headContentHashtag}>
        <h1>{t('scholarship')}</h1>
      </div>
    </div>
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('grantEducation.title')}</h2>
        <div className={styles.content}>
          <p>
            {t('grantEducation.paragraph1')}
          </p>
          <p>
            {t('grantEducation.paragraph2')}
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('typesOfScholarships.title')}</h2>
        <div className={styles.content}>
          <div className={styles.stipendCard}>
            <h3 className={styles.cardTitle}>{t('typesOfScholarships.academic.title')}</h3>
            <p>
              {t('typesOfScholarships.academic.description')}
            </p>
          </div>

          <div className={styles.stipendCard}>
            <h3 className={styles.cardTitle}>{t('typesOfScholarships.increased.title')}</h3>
            <p>
              {t('typesOfScholarships.increased.description')}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('lossOfScholarship.title')}</h2>
        <div className={styles.content}>
          <div className={styles.warningCard}>
            <p>
              <strong>{t('lossOfScholarship.warning.important')}</strong> {t('lossOfScholarship.warning.description')}
            </p>
            <p>
              {t('lossOfScholarship.recovery')}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('payments.title')}</h2>
        <div className={styles.content}>
          <div className={styles.paymentInfo}>
            <h3 className={styles.cardTitle}>{t('payments.schedule.title')}</h3>
            <p>
              {t('payments.schedule.description')}
            </p>

            <h3 className={styles.cardTitle}>{t('payments.bankCards.title')}</h3>
            <p>
              {t('payments.bankCards.description1')}
            </p>
            <p>
              {t('payments.bankCards.description2')}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('contacts.title')}</h2>
        <div className={styles.content}>
          <div className={styles.contactCard}>
            <p>
              {t('contacts.curator')}
            </p>
            <p>
              {t('contacts.accounting')}
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
}