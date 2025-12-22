import { createFileRoute } from '@tanstack/react-router'
import styles from './practice.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/practice/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t, i18n } = useTranslation('practice');
    usePageTitle(t('practice'),[i18n.language, t]);
    return <>
        <div className={styles.headContent}>
            <div className={styles.headContentHashtag}>
                <h1>{t('practice')}</h1>
            </div>
        </div>
        <div className={styles.container}>
            <section className={styles.educationalPractice}>
                <div className={styles.educationalPractice__Info}>
                    <div className={styles.educationalPractice__Info__Text}>
                        <h1 className={styles.educationalPractice__Info__Text__Title}>{t('educationPractice')}</h1>
                        <p className={styles.educationalPractice__Info__Text__Description}>{t('educationPracticeDesc')}</p>
                    </div>
                    <img src='/img/educationalPractice/educationalPractice.png' alt={t('educationPractice')} />
                </div>
                <div className={styles.educationalPractice__ImageBLocks}>
                    <div className={styles.educationalPractice__ImageBlock}>
                        <img src='/img/educationalPractice/image%20364.jpg' alt={t('educationPractice')}/>
                        <img src='/img/educationalPractice/image%20365.jpg' alt={t('educationPractice')}/>
                        <img src='/img/educationalPractice/image%20366.jpg' alt={t('educationPractice')}/>
                    </div>
                    <div className={styles.educationalPractice__ImageBlock}>
                        <img src='/img/educationalPractice/image%20367.jpg' alt={t('educationPractice')}/>
                        <img src='/img/educationalPractice/image%20368.jpg' alt={t('educationPractice')}/>
                    </div>
                </div>
                <div className={styles.educationalPractice__Word}>
                    <p className={styles.educationalPractice__Word__Text}>{t('practiceWord1')}</p>
                    <p className={styles.educationalPractice__Word__Text}>{t('practiceWord2')}</p>
                    <p className={styles.educationalPractice__Word__Text}>{t('practiceWord3')}</p>
                </div>
            </section>
            <section className={styles.pregraduatePractice}>
                <h1 className={styles.pregraduatePractice__Title}>{t('pregraduatePractice')}</h1>
                <p className={styles.pregraduatePractice__Description}>{t('pregraduatePracticeDesc')}</p>
                <div className={styles.pregraduatePractice__Image}>
                    <div className={styles.pregraduatePractice__Image__Item}>
                        <img src='/img/educationalPractice/image%20362.jpg' alt={t('pregraduatePractice')}/>
                        <p className={styles.pregraduatePractice__Image__Subtitle}>{t('prePracticeWord1')}</p>
                    </div>
                    <div className={styles.pregraduatePractice__Image__Item}>
                        <img src='/img/educationalPractice/image%20363.jpg' alt={t('pregraduatePractice')}/>
                        <p className={styles.pregraduatePractice__Image__Subtitle}>{t('prePracticeWord2')}</p>
                    </div>
                </div>
            </section>
            <section className={styles.educationalPractice}>
                <div className={styles.excourse}>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionEducationalFunction')}</p>
                    </div>
                    <img src="/img/educationalPractice/image1.jpg" alt={t('practice')} />
                    <p className={styles.excourse__Text__Paragraph}>{t('excursionMetalPlant')}</p>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image2.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image3.jpg" alt={t('practice')} />
                    </div>
                    <p className={styles.excourse__Text__Pragraph}>{t('excursionPracticalExperience')}</p>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image4.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image5.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image6.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image7.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image8.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image9.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image10.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image11.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image12.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image13.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image14.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image15.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image16.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image17.png" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image18.png" alt={t('practice')} />
                        <img src="/img/educationalPractice/image19.png" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image20.png" alt={t('practice')} />
                        <img src="/img/educationalPractice/image21.png" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image22.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image23.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionExpandedHorizons')}</p>
                    </div>
                </div>
                <div className={styles.excourse}>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionAktobeCHP')}</p>
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image24.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image25.jpg" alt={t('practice')} />
                    </div>
                </div>
                <div className={styles.excourse}>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionCHPGoal')}</p>
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image26.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image27.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionCHPSafety')}</p>
                    </div>
                </div>
                <div className={styles.excourse}>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionAccountingAudit')}</p>
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image28.png" alt={t('practice')} />
                        <img src="/img/educationalPractice/image29.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image30.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image31.png" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionPracticeImportance')}</p>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionPracticeObjectives')}</p>
                        <ul className={styles.excourse__Text__List}>
                            <li className={styles.excourse__Text__List__Item}>{t('excursionObjective1')}</li>
                            <li className={styles.excourse__Text__List__Item}>{t('excursionObjective2')}</li>
                            <li className={styles.excourse__Text__List__Item}>{t('excursionObjective3')}</li>
                            <li className={styles.excourse__Text__List__Item}>{t('excursionObjective4')}</li>
                        </ul>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionEducationalPracticeGoal')}</p>
                    </div>
                </div>
                <div className={styles.excourse}>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionAutomotiveDefense')}</p>
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image32.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image33.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image34.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image35.jpg" alt={t('practice')} />
                    </div>
                    <div className={styles.excourse__Text}>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionSupervisorRole')}</p>
                        <p className={styles.excourse__Text__Paragraph}>{t('excursionProductionOrganization')}</p>
                    </div>
                    <div className={styles.excourse__ImageBlock}>
                        <img src="/img/educationalPractice/image36.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image37.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image38.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image39.jpg" alt={t('practice')} />
                        <img src="/img/educationalPractice/image40.jpg" alt={t('practice')} />
                    </div>
                </div>
            </section>
        </div>
    </>
}