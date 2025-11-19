

export async function fetchNewsList(locale: string) {
    console.log(locale)
    const response = await fetch(`/api/newss?locale=${locale}&populate=*&sort=createdAt:desc`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке новостей');
    }
    const data = await response.json();
    return data.data;
}


export async function fetchNewsItem(newsId: string | undefined, locale) {
    const response = await fetch(`/api/newss/${newsId}?locale=${locale}&populate=*`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке новости');
    }
    const data = await response.json();
    return data.data;
}





