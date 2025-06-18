// src/routes/NotFoundPage/NotFoundPage.tsx

import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import styles from './NotFoundPage.module.css'

export const Route = createFileRoute('/NotFoundPage/NotFoundPage')({
    component: RouteComponent,
})

export default function NotFoundPage() {
    return (
        <div className={styles.container}>
            <div className={styles.illustration}>
                <span className={styles.circle} />
                <span className={styles.triangle} />
            </div>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>Страница не найдена</p>
            <Link to="/" className={styles.button}>
                Вернуться на главную
            </Link>
        </div>
    )
}
