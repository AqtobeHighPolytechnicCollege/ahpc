import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { useState, useRef } from 'react'
import { strapiLogin, verifyToken } from '@/lib/api/strapi'
import styles from './DirectorAdmin.module.css'

const MAX_ATTEMPTS = 5
const LOCKOUT_SECONDS = 60
const STORAGE_KEY = 'director_jwt'
const ATTEMPTS_KEY = 'da_attempts'
const LOCKOUT_KEY = 'da_lockout_until'

export const Route = createFileRoute('/directorAdmin/login')({
    beforeLoad: async () => {
        const jwt = sessionStorage.getItem(STORAGE_KEY)
        if (!jwt) return
        try {
            await verifyToken(jwt)
            throw redirect({ to: '/directorAdmin' })
        } catch (e) {
            if ((e as { isRedirect?: boolean }).isRedirect) throw e
            sessionStorage.removeItem(STORAGE_KEY)
        }
    },
    component: LoginPage,
})

function getRemainingLockout(): number {
    const until = Number(sessionStorage.getItem(LOCKOUT_KEY) ?? 0)
    return Math.max(0, Math.ceil((until - Date.now()) / 1000))
}

function getAttempts(): number {
    return Number(sessionStorage.getItem(ATTEMPTS_KEY) ?? 0)
}

function recordFailedAttempt() {
    const attempts = getAttempts() + 1
    sessionStorage.setItem(ATTEMPTS_KEY, String(attempts))
    if (attempts >= MAX_ATTEMPTS) {
        sessionStorage.setItem(LOCKOUT_KEY, String(Date.now() + LOCKOUT_SECONDS * 1000))
        sessionStorage.setItem(ATTEMPTS_KEY, '0')
    }
}

function clearAttempts() {
    sessionStorage.removeItem(ATTEMPTS_KEY)
    sessionStorage.removeItem(LOCKOUT_KEY)
}

function LoginPage() {
    const navigate = useNavigate()
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [countdown, setCountdown] = useState(getRemainingLockout)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const startCountdown = (secs: number) => {
        setCountdown(secs)
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current!)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const remaining = getRemainingLockout()
        if (remaining > 0) {
            startCountdown(remaining)
            return
        }

        if (!identifier.trim() || !password) {
            setError('Введите логин и пароль')
            return
        }

        setLoading(true)
        try {
            const { jwt } = await strapiLogin(identifier.trim(), password)
            clearAttempts()
            sessionStorage.setItem(STORAGE_KEY, jwt)
            navigate({ to: '/directorAdmin' })
        } catch {
            recordFailedAttempt()
            const rem = getRemainingLockout()
            if (rem > 0) {
                startCountdown(rem)
            } else {
                const left = MAX_ATTEMPTS - getAttempts()
                setError(`Неверный логин или пароль. Осталось попыток: ${left}`)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <p className={styles.loginLogo}>АҚТӨБЕ ЖПК</p>
                <h1 className={styles.loginTitle}>Вход</h1>
                <p className={styles.loginSubtitle}>Панель управления директора</p>

                {countdown > 0 && (
                    <div className={styles.loginLockout}>
                        Слишком много попыток. Повторите через {countdown} сек.
                    </div>
                )}

                {error && !countdown && (
                    <div className={styles.loginError}>{error}</div>
                )}

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className={styles.loginGroup}>
                        <label className={styles.loginLabel}>Email / Логин</label>
                        <input
                            className={styles.loginInput}
                            type="text"
                            value={identifier}
                            onChange={e => setIdentifier(e.target.value)}
                            autoComplete="username"
                            disabled={loading || countdown > 0}
                            spellCheck={false}
                        />
                    </div>
                    <div className={styles.loginGroup}>
                        <label className={styles.loginLabel}>Пароль</label>
                        <input
                            className={styles.loginInput}
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                            disabled={loading || countdown > 0}
                        />
                    </div>
                    <button
                        className={styles.loginSubmit}
                        type="submit"
                        disabled={loading || countdown > 0}
                    >
                        {loading ? 'Проверка...' : 'Войти'}
                    </button>
                </form>
            </div>
        </div>
    )
}
