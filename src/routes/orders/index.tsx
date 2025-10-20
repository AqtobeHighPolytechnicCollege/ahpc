import { createFileRoute } from '@tanstack/react-router'
import styles from  './orders.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/orders/')({
  component: RouteComponent,
})

function RouteComponent() {
  usePageTitle('Приказы');
  const { t } = useTranslation('orders');

  // Получаем данные из локализации с проверкой
  const ordersDataRaw = t('ordersData', { returnObjects: true });
  const ordersData = Array.isArray(ordersDataRaw) ? ordersDataRaw : [];

  const handleDownload = (fileName: string) => {
    // Создаём временную ссылку
    const link = document.createElement('a');
    link.href = fileName; // путь к файлу, например "/documents/orders/Order_41.pdf"
    link.download = fileName.split('/').pop() || 'document.pdf'; // имя файла
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return <>
    <div className={styles.headContent}>
      <div className={styles.headContentHashtag}>
        <h1>{t('orders')}</h1>
      </div>
    </div>

    <div className={styles.container}>
      {/* Вводный текст */}
      <div className={styles.introSection}>
        <h2>{t('officialDoc')}</h2>
        <p>
          {t('ordersInfo')}
        </p>
        <p>
          {t('ordersInfoText')}
        </p>
      </div>

      {/* Карточки приказов */}
      <div className={styles.ordersGrid}>
        {ordersData.length > 0 ? (
            ordersData.map((order: any) => (
                <div key={order.id} className={styles.orderCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.documentIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#0025A1"/>
                        <path d="M14 2V8H20" fill="#ffffff"/>
                      </svg>
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.date}>{order.date}</span>
                      <span className={styles.fileSize}>{order.size}</span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{order.title}</h3>
                    <p>{order.description}</p>
                  </div>

                  <div className={styles.cardActions}>
                    <button
                        className={styles.downloadBtn}
                        onClick={() => handleDownload(order.fileName)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15L7 10H11V3H13V10H17L12 15Z" fill="currentColor"/>
                        <path d="M20 18H4V20H20V18Z" fill="currentColor"/>
                      </svg>
                      {t('downloadButton')}
                    </button>
                  </div>
                </div>
            ))
        ) : (
            <p>Нет доступных приказов</p>
        )}
      </div>
    </div>
  </>
}