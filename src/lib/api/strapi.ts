const BASE = 'https://api.ahpc.edu.kz/api'

export interface Appeal {
    id: number
    documentId: string
    senderName: string
    email: string
    phone: string | null
    category: string | null
    message: string
    answer: string | null
    showOnBlog: boolean
    createdAt: string
    updatedAt: string
}

function authHeaders(jwt: string): HeadersInit {
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
    }
}

async function handle<T>(res: Response): Promise<T> {
    if (res.status === 401) {
        sessionStorage.removeItem('director_jwt')
        window.location.replace('/directorAdmin/login')
        throw new Error('Unauthorized')
    }
    if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error?.message ?? `HTTP ${res.status}`)
    }
    return res.json() as Promise<T>
}

export async function strapiLogin(identifier: string, password: string) {
    const res = await fetch(`${BASE}/auth/local`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
    })
    if (!res.ok) throw new Error('Invalid credentials')
    return res.json() as Promise<{ jwt: string; user: { id: number; email: string; username: string } }>
}

export async function verifyToken(jwt: string): Promise<{ id: number; email: string; username: string }> {
    const res = await fetch(`${BASE}/users/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
    })
    return handle(res)
}

export async function getAppeals(jwt: string): Promise<{ data: Appeal[] }> {
    const res = await fetch(
        `${BASE}/appeals?sort=createdAt:desc&pagination[pageSize]=200`,
        { headers: authHeaders(jwt) }
    )
    return handle(res)
}

export async function updateAppeal(
    jwt: string,
    documentId: string,
    data: Partial<Pick<Appeal, 'answer' | 'showOnBlog'>>
): Promise<{ data: Appeal }> {
    const res = await fetch(`${BASE}/appeals/${documentId}`, {
        method: 'PUT',
        headers: authHeaders(jwt),
        body: JSON.stringify({ data }),
    })
    return handle(res)
}

export async function deleteAppeal(jwt: string, documentId: string): Promise<void> {
    const res = await fetch(`${BASE}/appeals/${documentId}`, {
        method: 'DELETE',
        headers: authHeaders(jwt),
    })
    return handle(res)
}

export async function submitAppeal(payload: {
    senderName: string
    email: string
    phone?: string
    category?: string
    message: string
}): Promise<void> {
    const res = await fetch(`${BASE}/appeals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: payload }),
    })
    if (!res.ok) throw new Error('Failed to submit')
}

export async function sendEmailReply(jwt: string, documentId: string): Promise<void> {
    const res = await fetch(`${BASE}/appeals/${documentId}/send-reply`, {
        method: 'POST',
        headers: authHeaders(jwt),
    })
    return handle(res)
}

export async function getPublishedAnswers(): Promise<{ data: Appeal[] }> {
    const params = new URLSearchParams({
        'filters[showOnBlog][$eq]': 'true',
        'filters[answer][$notNull]': 'true',
        'fields[0]': 'senderName',
        'fields[1]': 'category',
        'fields[2]': 'message',
        'fields[3]': 'answer',
        'fields[4]': 'updatedAt',
        'sort': 'updatedAt:desc',
        'pagination[pageSize]': '20',
    })
    const res = await fetch(`${BASE}/appeals?${params}`)
    return handle(res)
}
