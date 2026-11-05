import { createFileRoute } from '@tanstack/react-router'
import styles from './collegeHIstory.module.css'
import {useTranslation} from "react-i18next";
import {usePageTitle} from "@/components/usePageTitile.tsx";

export const Route = createFileRoute('/collegeHistory/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('collegeHistory');
    usePageTitle('История колледжа');
    return (
        <>
            <div className={styles.headContent}>
                <div className={styles.headContentHashtag}>
                    <h1>{t('collegeHistory')}</h1>
                </div>
            </div>
            <body className={styles.backGround}>
            <div className={styles.container}>
                {/* HEADER */}
                <header className={styles.pageHeader}>
                    <h1>{t('collegeHistory')}</h1>
                    <div className={styles.scrollHint}>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 5V19M12 19L7 14M12 19L17 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </header>
                <section className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>1965</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('oldHistory1965')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/1984.png' alt='Фото'/>
                                    <h5 className={styles.timelineContentSubtitleImg}>{t('oldBuild')}</h5>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/teacher-staff.png' alt='Фото'/>
                                    <h5 className={styles.timelineContentSubtitleImg}>{t('firstTeachers')}</h5>
                                </div>
                                <p>{t('fisrtLeader')}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>1969</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <div className={styles.contentTitle}>
                                    <h3>{t('graduates')}</h3>
                                    <p>{t('graduatesDesc')}</p>
                                </div>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.timelineContentImage} src='/img/history/graduates.png'
                                         alt='Фото'/>
                                    <h5 className={styles.timelineContentSubtitleImg}>{t('firstGraduates')}</h5>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <div className={styles.contentTitle}>
                                    <h1>{t('veteranTeachers')}</h1>
                                    <h2>{t('veteranTeachersDesc')}</h2>
                                    <h4>{t('ourCollege')}</h4>
                                    <h5 dangerouslySetInnerHTML={{__html: t('specials')}}/>
                                    <h5>{t('dopSpecials')}</h5>
                                    <h5>{t('studentsJob')}</h5>
                                    <h5>{t('employer')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2010</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/2010.png' alt='Фото'/>
                                </div>
                                <h4 className={styles.newBlockText}>{t('newBuild')}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2013</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <h4>{t('collegeNow')}</h4>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/2013.png' alt='Фото' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2015</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2015Desc')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/1.png' alt='Фото'/>
                                    <h5 className={styles.timelineContentSubtitleImg}>{t('year2015Photo')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2017</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <div className={styles.contentTitle}>
                                    <h3>{t('year2017Title')}</h3>
                                    <p>{t('year2017Desc')}</p>
                                </div>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/2.jpeg' alt='Фото'/>
                                    <img className={styles.contentImage} src='/img/history/3.jpeg' alt='Фото'/>
                                    <h5 className={styles.timelineContentSubtitleImg}>{t('year2017Photo')}</h5>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2017Teacher')}</p>
                                <p>{t('year2017Accred')}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2021</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2021Desc')}</p>

                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2022</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <div className={styles.contentTitle}>
                                    <h3>{t('year2022Title')}</h3>
                                </div>
                                <p>{t('year2022Desc')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/4.jpeg' alt='Фото'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2024</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2024Teacher1')}</p>
                                <p>{t('year2024Teacher2')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/5.jpeg' alt='Фото'/>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2024Workshop')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/6.jpeg' alt='Фото'/>
                                    <h5 className={styles.timelineContentSubtitleImg}>{t('year2024WorkshopCaption')}</h5>
                                </div>
                                <p>{t('year2024Internship')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/7.jpeg' alt='Фото'/>
                                </div>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/8.jpeg' alt='Фото'/>
                                </div>
                                <p>{t('year2024Meeting')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/9.jpeg' alt='Фото'/>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2024WorldSkills')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/11.jpg' alt='Фото'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2025</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2025Accred')}</p>

                            </div>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2025EuroSkills')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/12.jpg' alt='Фото'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>2026</div>
                        <div className={styles.timelineLine}>
                            <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2026Sports')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/13.jpeg' alt='Фото'/>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2026Shanghai')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/14.jpg' alt='Фото'/>
                                </div>
                                <p>{t('year2026Conference')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/15.jpeg' alt='Фото'/>
                                    <img className={styles.contentImage} src='/img/history/16.jpeg' alt="Фото"/>
                                </div>
                            </div>
                            <div className={styles.timelineContentBlock}>
                                <p>{t('year2026Dosti')}</p>
                                <div className={styles.timelineContentImage}>
                                    <img className={styles.contentImage} src='/img/history/17.jpeg' alt='Фото'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            </body>
        </>
)
}
