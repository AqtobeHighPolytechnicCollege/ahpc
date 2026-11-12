import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import {
    verifyToken,
    getAppeals,
    updateAppeal,
    deleteAppeal,
    sendEmailReply,
    type Appeal,
} from '@/lib/api/strapi'
import styles from './DirectorAdmin.module.css'

const JWT_KEY = 'director_jwt'

export const Route = createFileRoute('/directorAdmin/')({
    beforeLoad: async () => {
        const jwt = sessionStorage.getItem(JWT_KEY)
        if (!jwt) throw redirect({ to: '/directorAdmin/login' })
        try {
            await verifyToken(jwt)
        } catch (e) {
            if ((e as { isRedirect?: boolean }).isRedirect) throw e
            sessionStorage.removeItem(JWT_KEY)
            throw redirect({ to: '/directorAdmin/login' })
        }
    },
    component: DirectorAdminPage,
})

type Status = 'all' | 'new' | 'answered'

function getStatus(a: Appeal): 'new' | 'answered' {
    return a.answer ? 'answered' : 'new'
}

function StatusBadge({ appeal }: { appeal: Appeal }) {
    const s = getStatus(appeal)
    const cls = s === 'answered' ? styles.badgeAnswered : styles.badgeNew
    const label = s === 'answered' ? 'Отвечено' : 'Новое'
    return (
        <span className={`${styles.badge} ${cls}`}>
            <span className={styles.badgeDot} />
            {label}
        </span>
    )
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('ru-RU', {
        day: '2-digit', month: '2-digit', year: 'numeric',
    })
}

function formatPhone(phone: string): string {
    const digits = phone.replace(/\D/g, '')
    return digits.startsWith('8') ? '7' + digits.slice(1) : digits
}

function ExpandedRow({
    appeal,
    jwt,
    onUpdated,
    onDeleted,
}: {
    appeal: Appeal
    jwt: string
    onUpdated: (a: Appeal) => void
    onDeleted: (id: string) => void
}) {
    const [answerText, setAnswerText] = useState(appeal.answer ?? '')
    const [saving, setSaving] = useState(false)
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
    const [confirmDelete, setConfirmDelete] = useState(false)

    const handleSave = async () => {
        if (!answerText.trim()) return
        setSaving(true)
        try {
            const res = await updateAppeal(jwt, appeal.documentId, { answer: answerText.trim() })
            onUpdated(res.data)
        } finally {
            setSaving(false)
        }
    }

    const handleWhatsApp = () => {
        if (!answerText.trim() || !appeal.phone) return
        const phone = formatPhone(appeal.phone)
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(answerText.trim())}`
        window.open(url, '_blank')
    }

    const handleEmail = async () => {
        if (!answerText.trim()) return
        setSaving(true)
        setEmailStatus('sending')
        try {
            const res = await updateAppeal(jwt, appeal.documentId, { answer: answerText.trim() })
            onUpdated(res.data)
            await sendEmailReply(jwt, appeal.documentId)
            setEmailStatus('sent')
        } catch {
            setEmailStatus('error')
        } finally {
            setSaving(false)
        }
    }

    const handleDelete = async () => {
        setSaving(true)
        try {
            await deleteAppeal(jwt, appeal.documentId)
            onDeleted(appeal.documentId)
        } finally {
            setSaving(false)
        }
    }

    return (
        <tr className={styles.expandRow}>
            <td colSpan={7}>
                <div className={styles.expandContent}>
                    <div className={styles.expandSection}>
                        <h4>Обращение</h4>
                        <p className={styles.messageText}>{appeal.message}</p>
                        <div className={styles.contactInfo}>
                            <span>Email: {appeal.email}</span>
                            {appeal.phone && <span>Телефон: {appeal.phone}</span>}
                        </div>
                    </div>

                    <div className={styles.expandSection}>
                        <h4>Ответ директора</h4>
                        {appeal.answer && (
                            <p className={styles.answerText}>{appeal.answer}</p>
                        )}
                        <textarea
                            className={styles.replyTextarea}
                            placeholder="Введите ответ..."
                            value={answerText}
                            onChange={e => setAnswerText(e.target.value)}
                            disabled={saving}
                        />
                        <div className={styles.expandActions}>
                            <button
                                className={styles.btnPrimary}
                                onClick={handleSave}
                                disabled={saving || !answerText.trim()}
                            >
                                Сохранить
                            </button>

                            <button
                                className={styles.btnWhatsapp}
                                onClick={handleWhatsApp}
                                disabled={saving || !answerText.trim() || !appeal.phone}
                                title={!appeal.phone ? 'Телефон не указан в обращении' : ''}
                            >
                                WhatsApp
                            </button>

                            <button
                                className={styles.btnEmail}
                                onClick={handleEmail}
                                disabled={saving || !answerText.trim() || emailStatus === 'sending'}
                            >
                                {emailStatus === 'sending'
                                    ? 'Отправка...'
                                    : emailStatus === 'sent'
                                    ? '✓ Отправлено'
                                    : 'Отправить на email'}
                            </button>

                            {!confirmDelete ? (
                                <button
                                    className={styles.btnDanger}
                                    onClick={() => setConfirmDelete(true)}
                                    disabled={saving}
                                >
                                    Удалить
                                </button>
                            ) : (
                                <div className={styles.deleteConfirm}>
                                    <span>Удалить безвозвратно?</span>
                                    <button className={styles.btnDanger} onClick={handleDelete} disabled={saving}>
                                        Да
                                    </button>
                                    <button className={styles.btnOutline} onClick={() => setConfirmDelete(false)}>
                                        Отмена
                                    </button>
                                </div>
                            )}
                        </div>

                        {emailStatus === 'error' && (
                            <p className={styles.sendError}>
                                Ошибка отправки. Убедитесь, что email-плагин настроен в Strapi.
                            </p>
                        )}
                    </div>
                </div>
            </td>
        </tr>
    )
}

function DirectorAdminPage() {
    const navigate = useNavigate()
    const jwt = sessionStorage.getItem(JWT_KEY) ?? ''
    const userRef = useRef<{ email: string } | null>(null)

    const [appeals, setAppeals] = useState<Appeal[]>([])
    const [loading, setLoading] = useState(true)
    const [expanded, setExpanded] = useState<string | null>(null)
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState<Status>('all')

    useEffect(() => {
        verifyToken(jwt).then(u => { userRef.current = u })
        getAppeals(jwt)
            .then(res => setAppeals(res.data))
            .finally(() => setLoading(false))
    }, [jwt])

    const handleLogout = () => {
        sessionStorage.removeItem(JWT_KEY)
        navigate({ to: '/directorAdmin/login' })
    }

    const handleUpdated = (updated: Appeal) => {
        setAppeals(prev => prev.map(a => a.documentId === updated.documentId ? updated : a))
    }

    const handleDeleted = (documentId: string) => {
        setAppeals(prev => prev.filter(a => a.documentId !== documentId))
        setExpanded(null)
    }

    const filtered = appeals.filter(a => {
        const matchSearch =
            !search ||
            a.senderName.toLowerCase().includes(search.toLowerCase()) ||
            a.email.toLowerCase().includes(search.toLowerCase())
        const matchStatus = statusFilter === 'all' || getStatus(a) === statusFilter
        return matchSearch && matchStatus
    })

    const counts = {
        total: appeals.length,
        new: appeals.filter(a => !a.answer).length,
        answered: appeals.filter(a => !!a.answer).length,
    }

    if (loading) {
        return <div className={styles.loadingPage}>Загрузка...</div>
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <span className={styles.headerLogo}>АҚТӨБЕ ЖПК</span>
                <div className={styles.headerRight}>
                    <span className={styles.headerUser}>{userRef.current?.email}</span>
                    <button className={styles.logoutBtn} onClick={handleLogout}>Выйти</button>
                </div>
            </header>

            <div className={styles.body}>
                <h1 className={styles.pageTitle}>Панель управления директора</h1>

                <div className={styles.stats}>
                    <div className={styles.statCard}>
                        <p className={styles.statLabel}>Всего</p>
                        <p className={styles.statValue}>{counts.total}</p>
                    </div>
                    <div className={styles.statCard}>
                        <p className={styles.statLabel}>Новых</p>
                        <p className={styles.statValue}>{counts.new}</p>
                    </div>
                    <div className={styles.statCard}>
                        <p className={styles.statLabel}>Отвечено</p>
                        <p className={styles.statValue}>{counts.answered}</p>
                    </div>
                </div>

                <div className={styles.filters}>
                    <input
                        className={styles.searchInput}
                        placeholder="Поиск по имени или email..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <select
                        className={styles.filterSelect}
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value as Status)}
                    >
                        <option value="all">Все статусы</option>
                        <option value="new">Новые</option>
                        <option value="answered">Отвечено</option>
                    </select>
                    <span className={styles.resultsCount}>{filtered.length} записей</span>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Имя</th>
                                <th>Email</th>
                                <th>Тема</th>
                                <th>Обращение</th>
                                <th>Статус</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={7}>
                                        <div className={styles.empty}>Обращений не найдено</div>
                                    </td>
                                </tr>
                            )}
                            {filtered.map(appeal => (
                                <>
                                    <tr
                                        key={appeal.documentId}
                                        className={`${styles.tableRow} ${expanded === appeal.documentId ? styles.active : ''}`}
                                        onClick={() => setExpanded(
                                            expanded === appeal.documentId ? null : appeal.documentId
                                        )}
                                    >
                                        <td style={{ whiteSpace: 'nowrap' }}>{formatDate(appeal.createdAt)}</td>
                                        <td>{appeal.senderName}</td>
                                        <td>{appeal.email}</td>
                                        <td>{appeal.category ?? '—'}</td>
                                        <td><span className={styles.msgPreview}>{appeal.message}</span></td>
                                        <td><StatusBadge appeal={appeal} /></td>
                                        <td style={{ color: '#888', fontSize: 18, userSelect: 'none' }}>
                                            {expanded === appeal.documentId ? '▲' : '▼'}
                                        </td>
                                    </tr>
                                    {expanded === appeal.documentId && (
                                        <ExpandedRow
                                            key={`exp-${appeal.documentId}`}
                                            appeal={appeal}
                                            jwt={jwt}
                                            onUpdated={handleUpdated}
                                            onDeleted={handleDeleted}
                                        />
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
