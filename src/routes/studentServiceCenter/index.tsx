// studentServiceCenter/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import styles from "@/routes/studentServiceCenter/studentServiceCenter.module.css"
import { useTranslation } from "react-i18next";
import { usePageTitle } from "@/components/usePageTitile.tsx";

export const Route = createFileRoute('/studentServiceCenter/')({
  component: RouteComponent,
})

/* ---------- Данные (не переводятся) ---------- */

const CONTACT = {
  phoneHref: "tel:+77132560979",
  email: "polytech1965@mail.ru",
}

const REGISTRARS = [
  { name: "Боранбай Гүлнур Қарағұлқызы", email: "mura12345679@mail.ru", phone: "87784112383" },
  { name: "Казкеева Арайлым Руслановна", email: "araishok_k@mail.ru", phone: "87058397585" },
]

type AcceptKey = "college" | "gov" | "branches" | "egov" | "portal"
type FormKey = "paper" | "electronicPaper" | "auto"
type BasisKey = "standard" | "standardRegulation"

type ServiceConfig = {
  key: string            // ключ в JSON: services.<key>
  accept: AcceptKey[]
  form: FormKey
  basis: BasisKey
  free: boolean
}

const services: ServiceConfig[] = [
  { key: "duplicate",   accept: ["gov", "college", "egov"],          form: "auto",            basis: "standard",           free: false },
  { key: "transfer",    accept: ["college"],                         form: "paper",           basis: "standardRegulation", free: true },
  { key: "certificate", accept: ["branches", "college"],             form: "paper",           basis: "standardRegulation", free: true },
  { key: "meals",       accept: ["branches", "college", "portal"],   form: "electronicPaper", basis: "standardRegulation", free: true },
  { key: "dormitory",   accept: ["college"],                         form: "paper",           basis: "standardRegulation", free: true },
  { key: "leave",       accept: ["branches", "college"],             form: "paper",           basis: "standardRegulation", free: true },
  { key: "attestation", accept: ["branches", "college"],             form: "paper",           basis: "standardRegulation", free: true },
  { key: "admission",   accept: ["portal", "college"],               form: "electronicPaper", basis: "standardRegulation", free: true },
]

type DocItem = { text: string; note?: string }
type TermItem = { label?: string; value: string; text?: string }



function RouteComponent() {
  const { t, i18n } = useTranslation('studentServiceCenter');
  usePageTitle(t('pageTitle'), [i18n.language, t]);

  return (
      <>
        {/* ---------- Hero ---------- */}
        <div className={styles.headContent}>
          <div className={styles.headContentHashtag}>
            <h1>{t('hero.title')}</h1>
          </div>
        </div>

        {/* ---------- О центре ---------- */}
        <section className={styles.section}>
          <div className={styles.intro}>
            <div className={styles.aboutBlock}>
              <img
                  className={styles.photoWide}
                  src="/img/studentServiceCenter/1.png"
                  alt={t('hero.title')}
              />
              <p className={styles.aboutText}>{t('about.text')}</p>
              <div className={styles.goal}>
                <h3 className={styles.goalTitle}>{t('about.goalTitle')}</h3>
                <p className={styles.goalText}>{t('about.goal')}</p>
              </div>
            </div>

            <aside className={styles.contactCard}>
              <img
                  className={styles.photoPortrait}
                  src="/img/studentServiceCenter/Kostanova_B.jpg"
                  alt={t('contact.name')}
              />
              <p className={styles.contactRole}>{t('contact.role')}</p>
              <h2 className={styles.contactName}>{t('contact.name')}</h2>
              <ul className={styles.contactList}>
                <li>{t('contact.office')}</li>
                <li><a href={CONTACT.phoneHref}>{t('contact.phone')}</a></li>
                <li>
                  {t('contact.email')}:{" "}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ---------- Уведомление + регистраторы ---------- */}
        <section className={styles.section}>
          <div className={styles.notice}>
            <h2 className={styles.noticeTitle}>{t('notice.title')}</h2>
            <p className={styles.noticeText}>
              {t('notice.line1')}{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <br />
              {t('notice.line2')}
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                <tr>
                  <th>{t('notice.colNumber')}</th>
                  <th>{t('notice.colName')}</th>
                  <th>{t('notice.colRole')}</th>
                  <th>{t('notice.colLogin')}</th>
                  <th>{t('notice.colPhone')}</th>
                </tr>
                </thead>
                <tbody>
                {REGISTRARS.map((r, idx) => (
                    <tr key={r.email}>
                      <td>{idx + 1}</td>
                      <td>{r.name}</td>
                      <td>{t('notice.role')}</td>
                      <td><a href={`mailto:${r.email}`}>{r.email}</a></td>
                      <td><a href={`tel:+7${r.phone.slice(1)}`}>{r.phone}</a></td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>

            <p className={styles.egovNote}>
              {t('egovNote')}{" "}
              <a href="http://www.egov.kz" target="_blank" rel="noreferrer">www.egov.kz</a>
            </p>
          </div>
        </section>

        {/* ---------- Перечень услуг ---------- */}
        <section className={styles.section}>
          <h2 className={styles.servicesTitle}>{t('servicesTitle')}</h2>



          <div className={styles.servicesList}>
            {services.map((s, idx) => {
              const theme = idx % 2 === 0 ? styles.dark : styles.light
              const docs = t(`services.${s.key}.docs`, { returnObjects: true }) as DocItem[]
              const terms = t(`services.${s.key}.terms`, { returnObjects: true }) as TermItem[]

              return (
                  <article
                      key={s.key}
                      id={`service-${s.key}`}
                      className={`${styles.serviceCard} ${theme}`}
                  >
                    {/* Заголовок */}
                    <header className={styles.serviceHeader}>
                      <span className={styles.serviceLabel}>{t('labels.stateService')}</span>
                      <h2 className={styles.serviceTitle}>{t(`services.${s.key}.title`)}</h2>
                    </header>

                    {/* Блок 1: кто принимает / форма / основание */}
                    <div className={styles.metaGrid}>
                      <div className={styles.tile}>
                        <h4 className={styles.tileTitle}>{t('labels.accepts')}</h4>
                        <ul className={styles.chips}>
                          {s.accept.map((a) => (
                              <li key={a} className={styles.chip}>{t(`accept.${a}`)}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.tile}>
                        <h4 className={styles.tileTitle}>{t('labels.form')}</h4>
                        <p className={styles.tileValue}>{t(`form.${s.form}`)}</p>
                        {s.free && <span className={styles.freeBadge}>{t('labels.free')}</span>}
                      </div>

                      <div className={styles.tile}>
                        <h4 className={styles.tileTitle}>{t('labels.basis')}</h4>
                        <p className={styles.tileValue}>{t(`basis.${s.basis}`)}</p>
                      </div>
                    </div>

                    <div className={styles.flowArrow} aria-hidden="true" />

                    {/* Блок 2: документы */}
                    <div className={styles.docsBlock}>
                      <h3 className={styles.blockTitle}>{t('labels.documents')}</h3>
                      <ol className={styles.docsGrid}>
                        {docs.map((d, i) => (
                            <li key={i} className={styles.docItem}>
                              <span className={styles.docNumber}>{i + 1}</span>
                              <div>
                                <p className={styles.docText}>{d.text}</p>
                                {d.note && <p className={styles.docNote}>{d.note}</p>}
                              </div>
                            </li>
                        ))}
                      </ol>
                    </div>

                    <div className={styles.flowArrow} aria-hidden="true" />

                    {/* Блок 3: сроки */}
                    <div className={styles.termsBlock}>
                      <h3 className={styles.termsTitle}>{t('labels.terms')}</h3>
                      <div className={styles.termsGrid}>
                        {terms.map((term, i) => (
                            <div key={i} className={styles.term}>
                              {term.label && <p className={styles.termLabel}>{term.label}</p>}
                              <p className={styles.termValue}>{term.value}</p>
                              {term.text && <p className={styles.termText}>{term.text}</p>}
                            </div>
                        ))}
                      </div>
                    </div>
                  </article>
              )
            })}
          </div>
        </section>

        {/* ---------- Дополнительные услуги ---------- */}
        <section className={styles.section}>
          <div className={styles.extra}>
            <h2 className={styles.extraTitle}>{t('extra.title')}</h2>
            <ul className={styles.extraList}>
              {(t('extra.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.extraInfo}>{t('extra.info')}</p>
          </div>
        </section>
      </>
  )
}