import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import type { FC } from 'react'
import { submitAppeal } from '@/lib/api/strapi'
import styles from './DirectorBlog.module.css'

export const Route = createFileRoute('/directorBlog/')({
    component: DirectorBlogPage,
})

const faqKeys = [
    { q: 'faq1Question', a: 'faq1Answer' },
    { q: 'faq2Question', a: 'faq2Answer' },
    { q: 'faq3Question', a: 'faq3Answer' },
    { q: 'faq4Question', a: 'faq4Answer' },
    { q: 'faq5Question', a: 'faq5Answer' },
    { q: 'faq6Question', a: 'faq6Answer' },
]

const FaqItem: FC<{ questionKey: string; answerKey: string }> = ({ questionKey, answerKey }) => {
    const { t } = useTranslation('directorBlog')
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
                <span className={styles.faqQuestionText}>{t(questionKey)}</span>
                <span className={`${styles.faqToggle} ${open ? styles.open : ''}`}>+</span>
            </button>
            <div className={`${styles.faqAnswer} ${open ? styles.open : ''}`}>
                <p className={styles.faqAnswerText}>{t(answerKey)}</p>
            </div>
        </div>
    )
}

function DirectorBlogPage() {
    const { t } = useTranslation('directorBlog')

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', category: '', message: '',
    })
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [fieldError, setFieldError] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setFieldError(false)
        setSubmitError('')
    }

    const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitError('')

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setFieldError(true)
            return
        }
        if (!validateEmail(formData.email)) {
            setSubmitError(t('formInvalidEmail'))
            return
        }

        setSubmitting(true)
        try {
            await submitAppeal({
                senderName: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim() || undefined,
                category: formData.category || undefined,
                message: formData.message.trim(),
            })
            setSubmitted(true)
            setFormData({ name: '', email: '', phone: '', category: '', message: '' })
        } catch {
            setSubmitError(t('formSendError'))
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <>
            {/* Hero */}
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('pageTitle')}</h1>
                </div>
            </div>

            {/* Director profile + greeting */}
            <section className={styles.profileSection}>
                <div className={styles.profileLayout}>
                    <div className={styles.profileLeft}>
                        <img
                            className={styles.profilePhoto}
                            src="/img/collegeManagement/Zhetkergenkyzy_Nurgul.png"
                            alt={t('directorName')}
                        />
                        <div className={styles.profileMeta}>
                            <p className={styles.profileName}>{t('directorName')}</p>
                            <p className={styles.profilePosition}>{t('directorPosition')}</p>
                            <p className={styles.profileDegree}>{t('directorDegree')}</p>
                        </div>
                    </div>

                    <div className={styles.profileRight}>
                        <p className={styles.greetingLabel}>{t('greetingTitle')}</p>
                        <h2 className={styles.greetingTitle}>{t('pageTitle')}</h2>
                        <div className={styles.greetingBody}>
                            <p className={styles.greetingText}>{t('greetingText1')}</p>
                            <p className={styles.greetingText}>{t('greetingText2')}</p>
                            <p className={styles.greetingText}>{t('greetingText3')}</p>
                        </div>
                        <span className={styles.signatureName}>— {t('directorName')}</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <div className={styles.faqInner}>
                    <h2 className={styles.sectionHeading}>{t('faqTitle')}</h2>
                    <div className={styles.faqList}>
                        {faqKeys.map(({ q, a }) => (
                            <FaqItem key={q} questionKey={q} answerKey={a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className={styles.formSection}>
                <div className={styles.formInner}>
                    <div className={styles.formLeft}>
                        <h2>{t('formTitle')}</h2>
                        <p>{t('formSubtitle')}</p>
                        <div className={styles.formContacts}>
                            <div className={styles.formContactItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                ahpc_aktobe@mail.ru
                            </div>
                            <div className={styles.formContactItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.76a16 16 0 006.29 6.29l1.1-1.1a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                                +7 (7132) 54-18-61
                            </div>
                        </div>
                    </div>

                    <form className={styles.formRight} onSubmit={handleSubmit} noValidate>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    {t('formName')}<span className={styles.formRequired}>*</span>
                                </label>
                                <input
                                    className={styles.formInput}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('formNamePlaceholder')}
                                    maxLength={200}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    {t('formEmail')}<span className={styles.formRequired}>*</span>
                                </label>
                                <input
                                    className={styles.formInput}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('formEmailPlaceholder')}
                                    maxLength={200}
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{t('formPhone')}</label>
                                <input
                                    className={styles.formInput}
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t('formPhonePlaceholder')}
                                    maxLength={50}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{t('formCategory')}</label>
                                <select
                                    className={styles.formSelect}
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value="">{t('formCategoryPlaceholder')}</option>
                                    <option value="Поступление">{t('categoryAdmission')}</option>
                                    <option value="Учебный процесс">{t('categoryStudyProcess')}</option>
                                    <option value="Общежитие">{t('categoryDormitory')}</option>
                                    <option value="Стипендии">{t('categoryScholarship')}</option>
                                    <option value="Трудоустройство">{t('categoryEmployment')}</option>
                                    <option value="Другое">{t('categoryOther')}</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                                {t('formMessage')}<span className={styles.formRequired}>*</span>
                            </label>
                            <textarea
                                className={styles.formTextarea}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('formMessagePlaceholder')}
                                maxLength={2000}
                            />
                        </div>

                        {fieldError && <p className={styles.errorMessage}>{t('formError')}</p>}
                        {submitError && <p className={styles.errorMessage}>{submitError}</p>}

                        <button className={styles.submitBtn} type="submit" disabled={submitting || submitted}>
                            {submitting ? t('formSubmitting') : t('formSubmit')}
                        </button>

                        {submitted && (
                            <div className={styles.successMessage}>
                                <p className={styles.successText}>{t('formSuccess')}</p>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    )
}

export default DirectorBlogPage
