import { createFileRoute } from '@tanstack/react-router'
import styles from "@/routes/Contacts/Contacts.module.css";
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/Contacts/')({
  component: RouteComponent,
})

function RouteComponent() {
    usePageTitle('Контакты');
    const { t, i18n } = useTranslation('contacts');
  return <>
      <div className={styles.headContent}>
          <div className={styles.headContentHashtag}>
              <h1>{t('contacts')}</h1>
          </div>
      </div>
      <div className={styles.container}>
          {/* Карточка телефонов */}
          <div className={styles.phoneCard}>
              <div className={styles.phoneCardTitle}>
                  <div className={styles.iconWrapper}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#000E3B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  <h2 className={styles.titleHeader}>{t('phones')}</h2>
              </div>
              <div className={styles.phoneCardInfo}>
                  <div className={styles.phoneItem}>
                      <span className={styles.phoneLabel}>{t('reception')}</span>
                      <a href="tel:+77132562051" className={styles.phoneNumber}>
                          +7 (7132) 562-051
                      </a>
                  </div>
                  <div className={styles.phoneItem}>
                      <span className={styles.phoneLabel}>{t('helplinePhone')}</span>
                      <a href="tel:+77132578491" className={styles.phoneNumber}>
                          +7 (7132) 578-491
                      </a>
                  </div>
              </div>
          </div>

          {/* Карточка Email */}
          <div className={styles.emailCard}>
              <div className={styles.emailCardTitle}>
                  <div className={styles.iconWrapper}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#000E3B" strokeWidth="2" fill="none"/>
                          <polyline points="22,6 12,13 2,6" stroke="#000E3B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  <h2 className={styles.titleHeader}>Email</h2>
              </div>
              <div className={styles.emailInfo}>
                  <a href="mailto:info@apk-edu.kz" className={styles.emailLink}>
                      info@apk-edu.kz
                  </a>
              </div>
          </div>

          {/* Карточка режима работы */}
          <div className={styles.scheduleCard}>
              <div className={styles.scheduleCardTitle}>
                  <div className={styles.iconWrapper}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="#000E3B" strokeWidth="2" fill="none"/>
                          <polyline points="12,6 12,12 16,14" stroke="#000E3B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  <h2 className={styles.titleHeader}>{t('workSchedule')}</h2>
              </div>
              <div className={styles.scheduleInfo}>
                  <div className={styles.scheduleItem}>
                      <span className={styles.scheduleDay}>{t('mon-fri')}</span>
                      <span className={styles.scheduleTime}>09:00 - 18:00</span>
                  </div>
                  <div className={styles.scheduleItem}>
                      <span className={styles.scheduleDay}>{t('saturday')}</span>
                      <span className={styles.scheduleTimeOff}>{t('weekend')}</span>
                  </div>
                  <div className={styles.scheduleItem}>
                      <span className={styles.scheduleDay}>{t('sunday')}</span>
                      <span className={styles.scheduleTimeOff}>{t('weekend')}</span>
                  </div>
              </div>
          </div>

          {/* Карточка местоположения */}
          <div className={styles.localeCard}>
              <div className={styles.localeCardInfo}>
                  <div className={styles.infoTitle}>
                      <div className={styles.iconWrapper}>
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#000E3B" strokeWidth="2" fill="none"/>
                              <circle cx="12" cy="10" r="3" stroke="#000E3B" strokeWidth="2" fill="none"/>
                          </svg>
                      </div>
                      <h2 className={styles.titleHeader}>{t('adress')}</h2>
                  </div>
                  <div className={styles.infoList}>
                      <div className={styles.addressItem}>
                          <span className={styles.addressLabel}>{t('republicOfKazakhstan')}</span>
                      </div>
                      <div className={styles.addressItem}>
                          <span className={styles.addressLabel}>{t('aqtobeRegion')}</span>
                      </div>
                      <div className={styles.addressItem}>
                          <span className={styles.addressLabel}>{t('aqtobeCity')}</span>
                      </div>
                      <div className={styles.addressItem}>
                          <span className={styles.addressLabel}>{t('astanaDistrict')}</span>
                      </div>
                      <div className={styles.addressItem}>
                          <span className={styles.addressMain}>{t('street')}</span>
                      </div>
                  </div>
              </div>
              <div className={styles.localeCardMap}>
                  <iframe
                      src="https://yandex.kz/map-widget/v1/?indoorLevel=1&ll=57.150072%2C50.288960&mode=search&oid=15849919993&ol=biz&z=17.03"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      title="Карта колледжа"
                  ></iframe>
              </div>
          </div>

          {/* Карточка социальных сетей */}
          <div className={styles.socialMediaCard}>
              <div className={styles.socialTitle}>
                  <div className={styles.iconWrapper}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="#000E3B" strokeWidth="2" fill="none"/>
                          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="#000E3B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  <h2 className={styles.titleHeader}>{t('social')}</h2>
                  <p className={styles.socialSubtitle}>{t('seeToNews')}</p>
              </div>
              <div className={styles.media}>
                  <a href="https://wa.me/77016480913" className={styles.socialLink} aria-label="WhatssApp">
                      <img src='/img/Contact/Mask%20group.svg' />
                  </a>
                  <a href="https://instagram.com/aktobe.polytech?igshid=6g9ayuf" className={styles.socialLink} aria-label="Instagram">
                      <svg width="48" height="48" viewBox="0 0 114 114" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M87.2812 0H26.7188C11.9624 0 0 11.9624 0 26.7188V87.2812C0 102.038 11.9624 114 26.7188 114H87.2812C102.038 114 114 102.038 114 87.2812V26.7188C114 11.9624 102.038 0 87.2812 0Z"
                              fill="url(#paint0_radial_1302_1194)"/>
                          <path
                              d="M87.2812 0H26.7188C11.9624 0 0 11.9624 0 26.7188V87.2812C0 102.038 11.9624 114 26.7188 114H87.2812C102.038 114 114 102.038 114 87.2812V26.7188C114 11.9624 102.038 0 87.2812 0Z"
                              fill="url(#paint1_radial_1302_1194)"/>
                          <path
                              d="M57.004 12.4688C44.9102 12.4688 43.3921 12.5217 38.6424 12.7377C33.9016 12.955 30.6656 13.7054 27.8343 14.8066C24.905 15.944 22.4206 17.4656 19.9455 19.9415C17.4683 22.417 15.9466 24.9014 14.8058 27.8294C13.7014 30.6615 12.9501 33.899 12.7368 38.6375C12.5244 43.3877 12.4688 44.9062 12.4688 57.0004C12.4688 69.0947 12.5222 70.6079 12.7377 75.3576C12.9559 80.0984 13.7063 83.3344 14.8066 86.1657C15.9449 89.095 17.4665 91.5794 19.9424 94.0545C22.417 96.5317 24.9014 98.0569 27.8285 99.1942C30.662 100.296 33.8985 101.046 38.6384 101.263C43.3886 101.479 44.9053 101.532 56.9987 101.532C69.0938 101.532 70.607 101.479 75.3567 101.263C80.0975 101.046 83.3371 100.296 86.1706 99.1942C89.0986 98.0569 91.5794 96.5317 94.0536 94.0545C96.5308 91.5794 98.052 89.095 99.1934 86.1671C100.288 83.3344 101.04 80.0975 101.262 75.3585C101.476 70.6087 101.531 69.0947 101.531 57.0004C101.531 44.9062 101.476 43.3886 101.262 38.6384C101.04 33.8976 100.288 30.662 99.1934 27.8307C98.052 24.9014 96.5308 22.417 94.0536 19.9415C91.5767 17.4647 89.0995 15.9431 86.168 14.8071C83.3291 13.7054 80.0912 12.9546 75.3504 12.7377C70.6003 12.5217 69.088 12.4688 56.9902 12.4688H57.004ZM53.0091 20.4937C54.195 20.4919 55.518 20.4937 57.004 20.4937C68.8943 20.4937 70.3033 20.5365 74.9986 20.7498C79.3404 20.9484 81.697 21.6738 83.2668 22.2834C85.345 23.0903 86.8266 24.0553 88.3843 25.6144C89.9429 27.173 90.9074 28.6572 91.7166 30.7355C92.3262 32.303 93.0525 34.6596 93.2502 39.0014C93.4635 43.6958 93.5098 45.1057 93.5098 56.9902C93.5098 68.8747 93.4635 70.285 93.2502 74.979C93.0516 79.3208 92.3262 81.6774 91.7166 83.2454C90.9097 85.3237 89.9429 86.8034 88.3843 88.3611C86.8257 89.9197 85.3459 90.8843 83.2668 91.6916C81.6988 92.3039 79.3404 93.0276 74.9986 93.2262C70.3042 93.4395 68.8943 93.4858 57.004 93.4858C45.1133 93.4858 43.7039 93.4395 39.0098 93.2262C34.668 93.0258 32.3114 92.3004 30.7404 91.6907C28.6625 90.8834 27.1779 89.9188 25.6193 88.3602C24.0607 86.8017 23.0961 85.321 22.287 83.2418C21.6774 81.6739 20.9511 79.3173 20.7533 74.9755C20.54 70.281 20.4973 68.8711 20.4973 56.9791C20.4973 45.087 20.54 43.6847 20.7533 38.9902C20.952 34.6484 21.6774 32.2918 22.287 30.7221C23.0944 28.6438 24.0607 27.1596 25.6197 25.601C27.1788 24.0424 28.6625 23.0774 30.7408 22.2687C32.3105 21.6564 34.668 20.9328 39.0098 20.7333C43.1178 20.5476 44.7098 20.4919 53.0091 20.4826V20.4937ZM80.7748 27.8877C77.8246 27.8877 75.431 30.279 75.431 33.2297C75.431 36.1799 77.8246 38.5734 80.7748 38.5734C83.725 38.5734 86.1185 36.1799 86.1185 33.2297C86.1185 30.2795 83.725 27.8859 80.7748 27.8859V27.8877ZM57.004 34.1314C44.3749 34.1314 34.1354 44.3709 34.1354 57.0004C34.1354 69.63 44.3749 79.8646 57.004 79.8646C69.6335 79.8646 79.8695 69.63 79.8695 57.0004C79.8695 44.3714 69.6326 34.1314 57.0031 34.1314H57.004ZM57.004 42.1564C65.2018 42.1564 71.8481 48.8018 71.8481 57.0004C71.8481 65.1982 65.2018 71.8445 57.004 71.8445C48.8063 71.8445 42.1604 65.1982 42.1604 57.0004C42.1604 48.8018 48.8058 42.1564 57.004 42.1564Z"
                              fill="white"/>
                          <defs>
                              <radialGradient id="paint0_radial_1302_1194" cx="0" cy="0" r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="translate(30.2812 122.78) rotate(-90) scale(112.982 105.083)">
                                  <stop stop-color="#FFDD55"/>
                                  <stop offset="0.1" stop-color="#FFDD55"/>
                                  <stop offset="0.5" stop-color="#FF543E"/>
                                  <stop offset="1" stop-color="#C837AB"/>
                              </radialGradient>
                              <radialGradient id="paint1_radial_1302_1194" cx="0" cy="0" r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="translate(-19.0954 8.21201) rotate(78.681) scale(50.5038 208.178)">
                                  <stop stop-color="#3771C8"/>
                                  <stop offset="0.128" stop-color="#3771C8"/>
                                  <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                              </radialGradient>
                          </defs>
                      </svg>
                  </a>
                  <a href="https://t.me/AHPC_Topbot" className={styles.socialLink} aria-label="Telegram">
                      <svg width="48" height="48" viewBox="0 0 114 114" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M57 0C41.8861 0 27.3778 6.00905 16.6992 16.6948C6.00969 27.3848 0.00305884 41.8824 0 57C0 72.1112 6.01172 86.6195 16.6992 97.3052C27.3778 107.991 41.8861 114 57 114C72.1139 114 86.6222 107.991 97.3008 97.3052C107.988 86.6195 114 72.1112 114 57C114 41.8888 107.988 27.3805 97.3008 16.6948C86.6222 6.00905 72.1139 0 57 0Z"
                              fill="url(#paint0_linear_1302_1198)"/>
                          <path
                              d="M25.8015 56.3972C42.4206 49.1582 53.4999 44.3857 59.0396 42.0795C74.8749 35.4951 78.1613 34.3516 80.3077 34.3128C80.7798 34.3053 81.8307 34.4219 82.5165 34.9764C83.0865 35.4439 83.2468 36.0763 83.327 36.5203C83.3982 36.9638 83.4962 37.9746 83.416 38.7637C82.561 47.7769 78.8471 69.6488 76.959 79.7441C76.1663 84.0155 74.5899 85.4476 73.067 85.5875C69.7538 85.892 67.2423 83.4001 64.036 81.2991C59.0218 78.01 56.1896 75.9634 51.3179 72.7544C45.6892 69.0459 49.3407 67.0072 52.547 63.6763C53.3842 62.8044 67.9726 49.5385 68.2487 48.3353C68.2843 48.1848 68.3199 47.6237 67.9815 47.328C67.652 47.0314 67.1621 47.1329 66.8059 47.2131C66.2982 47.3271 58.2915 52.6245 42.759 63.1045C40.4879 64.6667 38.4306 65.4282 36.5781 65.3881C34.5474 65.3444 30.6287 64.2374 27.7163 63.2915C24.1538 62.1311 21.3128 61.5174 21.5621 59.5465C21.6868 58.5205 23.1029 57.4704 25.8015 56.3972Z"
                              fill="white"/>
                          <defs>
                              <linearGradient id="paint0_linear_1302_1198" x1="5700" y1="0" x2="5700" y2="11400"
                                              gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#2AABEE"/>
                                  <stop offset="1" stop-color="#229ED9"/>
                              </linearGradient>
                          </defs>
                      </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCYQQIRoeXOzRZCEECYjsgLw" className={styles.socialLink} aria-label="YouTube">
                      <img src='/img/Contact/Mask%20group-1.svg'/>
                  </a>
              </div>
          </div>
      </div>
  </>
}
