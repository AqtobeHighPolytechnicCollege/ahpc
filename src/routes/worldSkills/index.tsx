import { createFileRoute } from '@tanstack/react-router'
import styles from './worldSkills.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/worldSkills/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t, i18n } = useTranslation('worldSkills');
  usePageTitle(t('worldSkills'),[i18n.language, t]);
  return <>
    <div className={styles.headContent}>
      <div className={styles.headContentHashtag}>
        <h1>{t('worldSkills')}</h1>
      </div>
    </div>
    <div className={styles.container}>
      <section className={styles.wskInfoSection}>
        <div className={styles.wskInfo2014}>
          <img src='/img/WorldSkills/WSKkz.png' alt='WorldSkillsKazahstan2014 AHPC' />
          <div className={styles.wskInfo2014__Text}>
            <h1 className={styles.wskInfo2014__Text__Title}>{t('wsk2014')}</h1>
            <p className={styles.wskInfo2014__Text__Description}>{t('assoctiationWsk')}</p>
          </div>
        </div>
        <div className={styles.wskGoal}>
          <div className={styles.wskGoal__Text}>
            <p className={styles.wskGoal__Text__Info}>{t('purpose')}</p>
            <p className={styles.wskGoal__Text__Info}>{t('wskMetodic')}</p>
          </div>
          <img src='/img/WorldSkills/wskGoal.png' alt='Цель чемпеоната WorldSKills' />
        </div>
        <div className={styles.wskQuote}>
          <p className={styles.wskQuote__Title}>{t('studentsWsk')}</p>
        </div>
      </section>
    </div>
    <section className={styles.wskChronology}>
      <section className={styles.wskChronology__2015}>
        <h1 className={styles.wskChronology__2015__Title}>2015</h1>
        <div className={styles.wskChronology__2015__Info}>
          <div className={styles.wskChronology__2015__Info__Block}>
            <img src='/img/WorldSkills/image%20342.png' alt='Апрель 2015, победа Ишангалиева Раймбека на WSK по компетенции IT административные сети' />
            <p className={styles.wskChronology__2015__Info__Description}>{t('april2015')}</p>
          </div>
          <div className={styles.wskChronology__2015__Info__Block}>
            <p className={styles.wskChronology__2015__Info__Description}>{t('april2015Info')}</p>
            <img src='/img/WorldSkills/image%20345.png' alt='3 место в августе на мировом чемпионате в Сан - Паулу' />
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2017}>
        <h1 className={styles.wskChronology__2017__Title}>2017</h1>
        <p className={styles.wskChronology__2017__Description}>{t('2015Info')}</p>
        <div className={styles.wskChronology__2017__Diplomas}>
          <div className={styles.wskChronology__2017__Diploma}>
            <img src='/img/WorldSkills/Web_Design.jpg' alt='Диплом за 2 место по компетенции Веб дизайн'/>
            <div className={styles.wskChronology__2017__Diploma__Text}>
              <h2 className={styles.wskChronology__2017__Diploma__Text__Competence}>{t('webDisign')}</h2>
              <p className={styles.wskChronology__2017__Diploma__Text__Name}>{t('contestant1')}</p>
              <p className={styles.wskChronology__2017__Diploma__Text__Place}>{t('2st')}</p>
            </div>
          </div>
          <div className={styles.wskChronology__2017__Diploma}>
            <img src='/img/WorldSkills/Electro_Job.jpg' alt='Диплом за 3 место по компетенции Электромонтажные работы'/>
            <div className={styles.wskChronology__2017__Diploma__Text}>
              <h2 className={styles.wskChronology__2017__Diploma__Text__Competence}>{t('electroMontage')}</h2>
              <p className={styles.wskChronology__2017__Diploma__Text__Name}>{t('contestant2')}</p>
              <p className={styles.wskChronology__2017__Diploma__Text__Place}>{t('3st')}</p>
            </div>
          </div>
          <div className={styles.wskChronology__2017__Diploma}>
            <img src='/img/WorldSkills/Building.jpg' alt='Диплом за 3 место по компетенции Кладка кирпича'/>
            <div className={styles.wskChronology__2017__Diploma__Text}>
              <h2 className={styles.wskChronology__2017__Diploma__Text__Competence}>{t('bricklayding')}</h2>
              <p className={styles.wskChronology__2017__Diploma__Text__Name}>{t('contestant3')}</p>
              <p className={styles.wskChronology__2017__Diploma__Text__Place}>{t('3st')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2018}>
        <div className={styles.wskChronology__2018__Info}>
          <h1 className={styles.wskChronology__2018__Info__Title}>2018</h1>
          <p className={styles.wskChronology__2018__Info__Subtitle}>{t('2018Info')}</p>
          <div className={styles.wskChronology__2018__Info__PlaceBlock}>
            <h2 className={styles.wskChronology__2018__Info__PlaceBlock__Text}>{t('1st2018')}</h2>
            <h2 className={styles.wskChronology__2018__Info__PlaceBlock__Text}>{t('2st2018')}</h2>
            <h2 className={styles.wskChronology__2018__Info__PlaceBlock__Text}>{t('3st2018')}</h2>
            <h2 className={styles.wskChronology__2018__Info__PlaceBlock__Text}>{t('medalion2018')}</h2>
          </div>
        </div>
        <img src='/img/WorldSkills/WSK_place.png' alt='WorldSkills2018'/>
      </section>
      <section className={styles.wskChronology__2018__Image}>
        <div className={styles.wskChronology__2018__Image__Block}>
          <div className={styles.wskChronology__2018__Image__Block__LittleImage}>
            <img src='/img/WorldSkills/image%20349.jpg' alt='WSK2018'/>
            <img src='/img/WorldSkills/image%20350.jpg' alt='WSK2018'/>
          </div>
          <img src='/img/WorldSkills/image%20351.png' alt='WSK2018' />
        </div>
      </section>
      <section className={styles.wskChronology__2019}>
        <h1 className={styles.wskChronology__2019__Title}>2019</h1>
        <p className={styles.wskChronology__2019__Subtitle}>{t('2019Info')}</p>
        <div className={styles.wskChronology__2019__PlaceBlock}>
          <div className={styles.wskChronology__2019__PlaceBlock__Item}>
            <img src='/img/WorldSkills/Group%20604.png' alt='Сантехника и отопление 2 место'/>
            <div className={styles.wskChronology__2019__PlaceBlock__Item__Text}>
              <h2 className={styles.wskChronology__2019__PlaceBlock__Item__Text__Name}>{t('contestant4')}</h2>
              <p className={styles.wskChronology__2019__PlaceBlock__Item__Text__Competence}>{t('plumbing')}</p>
            </div>
          </div>
          <div className={styles.wskChronology__2019__PlaceBlock__Item}>
            <img src='/img/WorldSkills/Group%20606.png' alt='Сантехника и отопление 2 место'/>
            <div className={styles.wskChronology__2019__PlaceBlock__Item__Text}>
              <h2 className={styles.wskChronology__2019__PlaceBlock__Item__Text__Name}>{t('contsetant5')}</h2>
              <p className={styles.wskChronology__2019__PlaceBlock__Item__Text__Competence}>{t('graphDesign')}</p>
            </div>
          </div>
          <div className={styles.wskChronology__2019__PlaceBlock__Item}>
            <img className={styles.imageTT} src='/img/WorldSkills/Group%20614.png' alt='Сантехника и отопление 2 место'/>
            <div className={styles.wskChronology__2019__PlaceBlock__Item__Text}>
              <h2 className={styles.wskChronology__2019__PlaceBlock__Item__Text__Name}>{t('contestant6')}</h2>
              <p className={styles.wskChronology__2019__PlaceBlock__Item__Text__Competence}>{t('visualMerchandisign')}</p>
            </div>
          </div>
        </div>
        <div className={styles.wskChronology__2019__PlaceBlock}>
          <div className={styles.wskChronology__2019__PlaceBlock__Item}>
            <img src='/img/WorldSkills/Group%20617.png' alt='Сантехника и отопление 2 место'/>
            <div className={styles.wskChronology__2019__PlaceBlock__Item__Text}>
              <h2 className={styles.wskChronology__2019__PlaceBlock__Item__Text__Name}>{t('contestant7')}</h2>
              <p className={styles.wskChronology__2019__PlaceBlock__Item__Text__Competence}>{t('webDisign')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2021}>
        <h1 className={styles.wskChronology__2021__Title}>2021</h1>
        <p className={styles.wskChronology__2021__Subtitle}>{t('2021Info')}</p>
        <div className={styles.wskChronology__2021__PlaceBlock__Container}>
          <div className={styles.wskChronology__2021__PlaceBlock}>
            <div className={styles.wskChronology__2021__PlaceBlock__Item}>
              <img src='/img/WorldSkills/image%20356.jpg' alt='WSK 2 место по Графическому дизайну'/>
              <div className={styles.wskChronology__2021__PlaceBlock__Item__Text}>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Place}>{t('2st')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Competence}>{t('graphDesign')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Name}>{t('contestant8')}</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2021__PlaceBlock__Item}>
              <img src='/img/WorldSkills/image%20357.jpg' alt='WSK медальон по Электронике'/>
              <div className={styles.wskChronology__2021__PlaceBlock__Item__Text}>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Place}>{t('medalion')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Competence}>{t('electrical')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Name}>{t('contestant9')}</h2>
              </div>
            </div>
          </div>
          <div className={styles.wskChronology__2021__PlaceBlock}>
            <div className={styles.wskChronology__2021__PlaceBlock__Item}>
              <img src='/img/WorldSkills/image%20358.jpg' alt='WSK медальон по Веб дизайну'/>
              <div className={styles.wskChronology__2021__PlaceBlock__Item__Text}>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Place}>{t('medalion')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Competence}>{t('webDisign')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Name}>{t('contestant10')}</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2021__PlaceBlock__Item}>
              <img src='/img/WorldSkills/image%20359.jpg' alt='WSK медальнон по Инженерной графике CAD'/>
              <div className={styles.wskChronology__2021__PlaceBlock__Item__Text}>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Place}>{t('medalion')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Competence}>{t('cad')}</h2>
                <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Name}>{t('contestant11')}</h2>
              </div>
            </div>
          </div>
          <div className={styles.wskChronology__2021__PlaceBlock__Item}>
            <img src='/img/WorldSkills/image%20360.jpg' alt='WSK медальон по Электромонтажным работам'/>
            <div className={styles.wskChronology__2021__PlaceBlock__Item__Text}>
              <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Place}>{t('medalion')}</h2>
              <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Competence}>{t('electroMontage')}</h2>
              <h2 className={styles.wskChronology__2021__PlaceBlock__Item__Text__Name}>{t('contestant12')}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2022}>
        <h1 className={styles.wskChronology__2022__Title}>2022</h1>
        <p className={styles.wskChronology__2022__Subtitle}>{t('2022Info')}</p>
        <div className={styles.wskChronology__2022__PlaceBlock__Container}>
          <div className={styles.wskChronology__2022__PlaceBlock}>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/image231.png" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>{t('1st2022Robot')}</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Убниев Бекзат, Койшыбаев
                  Багыжан</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/image333.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>{t('place3rd_cad2022')}</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Чабанов Кирилл</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/image321.png" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>{t('place3rd_electronics2022')}</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Муслиев Сержан</h2>
              </div>
            </div>

            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/ramzan.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>{t('medalion_itBusiness2022')}</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Абдуллин Рамзан</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/beka.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>{t('medalion_networkAdmin2022')}</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Күшербаев Бекзат</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/roma.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>{t('medalion_graphDesign2022')}</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Соколов Роман</h2>
              </div>
            </div>
          </div>
          <div className={styles.wskChronology__2022__PlaceBlock}>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/wsk22.jpg" alt="WorldSkills2022"/>
              <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>{t('photo2022')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2023}>
        <h1 className={styles.wskChronology__2023__Title}>2023</h1>
        <p className={styles.wskChronology__2023__Subtitle}>{t('2023Info')}</p>
        <div className={styles.wskChronology__2023__PlaceBlock}>
          <div className={styles.wskChronology__2023__PlaceBlock__Item}>
            <img src="/img/WorldSkills/erasim&nugrali.png" alt="WorldSkills2023"/>
            <div className={styles.wskChronology__2023__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Place}>{t('medalion_mobileRobotics2023')}</p>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Name}>Ерсайм Әділет, Нургали Аян</p>
            </div>
          </div>
          <div className={styles.wskChronology__2023__PlaceBlock__Item}>
            <img src="/img/WorldSkills/daniel.jpg" alt="WorldSkills2023"/>
            <div className={styles.wskChronology__2023__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Place}>{t('medalion_mobileApps2023')}</p>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Name}>Уразбаев Даниэль</p>
            </div>
          </div>
          <div className={styles.wskChronology__2023__PlaceBlock__Item}>
            <img src="/img/WorldSkills/shiraz.jpg" alt="WorldSkills2023"/>
            <div className={styles.wskChronology__2023__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Place}>{t('medalion_graphDesign2023')}</p>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Name}>Муратов Шираз</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2024}>
        <h1 className={styles.wskChronology__2024__Title}>2024</h1>
        <p className={styles.wskChronology__2024__Subtitle}>{t('2024Info')}</p>
        <div className={styles.wskChronology__2024__PlaceBlock}>
          <div className={styles.wskChronology__2024__PlaceBlock__Item}>
            <img src="/img/WorldSkills/nurtai.png" alt="WorldSkills2024"/>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Place}>{t('1st_itBusiness2024')}</p>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Name}>Казиев Нуртай</p>
            </div>
          </div>
          <div className={styles.wskChronology__2024__PlaceBlock__Item}>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__image}>
              <img src="/img/WorldSkills/bagzhan.png" alt="WorldSkills2024"/>
              <img src="/img/WorldSkills/bagzhan1.png" alt="WorldSkills2024"/>
            </div>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Place}>{t('2nd_graphDesign2024')}</p>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Name}>Койшыбаев Багыжан</p>
            </div>
          </div>
        </div>
        <div className={styles.wskChronology__2024__PlaceBlock}>
          <div className={styles.wskChronology__2024__PlaceBlock__Item}>
            <img src="/img/WorldSkills/wsk24.png" alt="WorldSkills2024"/>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Name}>{t('photo2024')}</p>
            </div>
          </div>
        </div>
        <div className={styles.wskChronology__2024__PlaceBlock}>
          <img src="/img/WorldSkills/1.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/2.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/3.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/4.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/5.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/6.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/7.jpg" alt="WorldSkills2024"/>
          <img src="/img/WorldSkills/8.jpg" alt="WorldSkills2024"/>
        </div>
      </section>
      <section className={styles.wskChronology__2025}>
        <h1 className={styles.wskChronology__2025__Title}>2025</h1>
        <p className={styles.wskChronology__2025__Subtitle}>{t('2025Info')}</p>
        <div className={styles.wskChronology__2025__PlaceBlock}>
          <div className={styles.wskChronology__2025__PlaceBlock__Item}>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__image}>
              <img src="/img/WorldSkills/ayana.jpg" alt="WorldSkills2025"/>
              <img src="/img/WorldSkills/ayana1.jpg" alt="WorldSkills2025"/>
            </div>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Place}>{t('2nd_graphDesign2025')}</p>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Name}>Ұлықпанова Аяна Жанболатқызы</p>
            </div>
          </div>
          <div className={styles.wskChronology__2025__PlaceBlock__Item}>
            <img src="/img/WorldSkills/akmarzhan.jpg" alt="WorldSkills2025"/>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Place}>{t('3rd_businessAutomation2025')}</p>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Name}>Тілеубаева Ақмаржан Көбесқызы</p>
            </div>
          </div>
          <div className={styles.wskChronology__2025__PlaceBlock__Item}>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__image}>
              <img src="/img/WorldSkills/kemaladin.png" alt="WorldSkills2025"/>
              <img src="/img/WorldSkills/kemaladin1.png" alt="WorldSkills2025"/>
            </div>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Place}>{t('medalion_3dGaming2025')}</p>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Name}>Ораз Кемаладдин</p>
            </div>
          </div>
        </div>
        <div className={styles.wskChronology__2025__PlaceBlock}>
          <img src="/img/WorldSkills/11.png" alt="WorldSkills2025"/>
          <img src="/img/WorldSkills/12.png" alt="WorldSkills2025"/>
          <img src="/img/WorldSkills/13.png" alt="WorldSkills2025"/>
          <img src="/img/WorldSkills/14.png" alt="WorldSkills2025"/>
          <img src="/img/WorldSkills/15.png" alt="WorldSkills2025"/>
          <img src="/img/WorldSkills/16.png" alt="WorldSkills2025"/>
          <img src="/img/WorldSkills/17.png" alt="WorldSkills2025"/>

        </div>
      </section>
      <section className={styles.wskChronology__2026}>
        <h1 className={styles.wskChronology__2026__Title}>2026</h1>
        <div className={styles.wskChronology__2026__Intro}>
          <p className={styles.wskChronology__2026__Subtitle}>
            {t('2026Intro1_pre')}<strong>«WorldSkills-АНРС 2026»</strong>{t('2026Intro1_post')}
          </p>
          <p className={styles.wskChronology__2026__Subtitle}>{t('2026Intro2')}</p>
          <p className={styles.wskChronology__2026__Subtitle}>{t('2026Intro3')}</p>
          <p className={styles.wskChronology__2026__Subtitle}>{t('2026Intro4')}</p>
          <p className={styles.wskChronology__2026__Subtitle}>
            <strong>«WorldSkills-АНРС 2026»</strong>{t('2026Intro5')}
          </p>
          <p className={styles.wskChronology__2026__Subtitle}>{t('2026Intro6')}</p>
        </div>

        {/* Галерея 1: 10 фото — колледжішілік чемпионат "WorldSkills-АНРС 2026" */}
        <div className={styles.wskChronology__2026__Gallery}>
          <img src="/img/WorldSkills/2026/img1.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img2.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img3.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img4.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img5.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img6.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img7.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img8.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img9.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img10.png" alt="WorldSkills-АНРС 2026" />
        </div>

        <div className={styles.wskChronology__2026__Results}>
          <p className={styles.wskChronology__2026__Results__Lead}>{t('2026ResultsLead1')}</p>
          <p className={styles.wskChronology__2026__Results__Lead}>{t('2026ResultsLead2')}</p>

          <div className={styles.wskChronology__2026__Results__Group}>
            <h2 className={styles.wskChronology__2026__Results__Group__Title}>{t('2026_1stPlace')}</h2>
            <div className={styles.wskChronology__2026__Results__Group__List}>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_cabinetWorks')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Бахытбеков Темірлан, жетекшісі:
                  Таханова А.А.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_industrialDesign')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Аблқан Саян, жетекшісі Базылов
                  Д.Е.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_webTech')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Шейко Егор, жетекшісі Жалгасбаева
                  Э.Е</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_itBusiness')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Тыныштыққали Әділет, жетекшісі
                  Хибадуллина Э.М.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_3dGaming')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Ораз Кемаладдин, жетекшісі Жамалов
                  Т.Ж.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_businessAutomation1C')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Құспанов Мәулен, жетекшісі Сағындық
                  Б.С.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_oilGasOperator')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Ракимов Нургиса, жетекшісі Мусин
                  Нұрбек</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_cloudProgramming')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Нұрлыбек Батыржан, жетекшісі
                  Қойшығұл А.Е</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_prototyping')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Самат Диас, жетекшісі Мусит А.Қ.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_lightVehicle')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Едигеев Даулет, жетекшісі Рахат
                  Б.Т.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_floristry')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Жұман Диана, жетекшісі Сүйіндікова
                  А.Ж.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_mobileRobotics')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Жұмабай Нұржан, Эбзаева Зулихан,
                  жетекшісі Абдуллин Р.Ф.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_electronics')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Сұлтангереев Абылай, жетекшісі
                  Абдрахманова Ж.С.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_graphicDesign')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Габдуллин Азат, жетекшісі Сабит
                  Мадияр</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_visualMerchandising')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Танатарова Альбина, жетекшісі
                  Муратбаева А.К.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_videoProduction')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Тоқбаев Мақсат, жетекшісі
                  Албергенова А.Р.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_engineeringCad')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Серикбаев Али, жетекшісі Алмағазы
                  Т.Ә.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_ictInfrastructure')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Бөкеев Арафат, жетекшісі Төлегенов
                  М.Т.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_paintingDecorative')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Болатбекова Аида, жетекшісі
                  Аксенова И.А.</p>
              </div>
            </div>
          </div>

          <div className={styles.wskChronology__2026__Results__Group}>
            <h2 className={styles.wskChronology__2026__Results__Group__Title}>{t('2026_2ndPlace')}</h2>
            <div className={styles.wskChronology__2026__Results__Group__List}>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_networkAdmin')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Абдраманов Амир, жетекшісі
                  Кушербаев Б.А.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_mobileAppDev')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Байжан Мирас, жетекшісі Сайынов
                  Е.Е</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_infoSecurity')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Данабекұлы Айдарбек, Холостенко
                  Владислав, жетекшісі Насыров Ж.Ж.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_1cAccounting')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Макенова Жанерке, жетекшісі
                  Кенбейлова Г.А.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_hotelReceptionist')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Тыныштык Алия, жетекшісі
                  Мухамбетова С.М.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_electricalInstallation')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Абдраманов Нурали, жетекшісі
                  Ізімов Ғ.Қ.</p>
              </div>
            </div>
          </div>

          <div className={styles.wskChronology__2026__Results__Group}>
            <h2 className={styles.wskChronology__2026__Results__Group__Title}>{t('2026_3rdPlace')}</h2>
            <div className={styles.wskChronology__2026__Results__Group__List}>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_mechatronics')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Коннов Илья, Галиев Ердаулет,
                  жетекшісі Әбдуалиев Ә.Б.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_uavOperation')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Жарылғап Абат, жетекшісі
                  Габидулла С.Г.</p>
              </div>
            </div>
          </div>

          <div className={styles.wskChronology__2026__Results__Group}>
            <h2 className={styles.wskChronology__2026__Results__Group__Title}>{t('2026_bestSpecialist')}</h2>
            <div className={styles.wskChronology__2026__Results__Group__List}>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_labChemistry')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Қуанышбекова Аида, жетекшісі
                  Акпанова Л.Б.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_locksmithing')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Рахат Ерасыл, Қабиев Диар,
                  жетекшісі Аманжолов Е.Б.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_bricklaying')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Азамат Даниял, жетекшісі Сапаров
                  Д.Ж.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_plumbingHeating')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Айтишев Ақниет, жетекшісі
                  Көбенов А.Қ.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_occupationalSafety')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Сағынтай Санжар, жетекшісі
                  Сейлова Н.Х.</p>
              </div>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_mobilography')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Болатбек Айдын, жетекшісі Нурина
                  Ж.К.</p>
              </div>
            </div>
          </div>

          <div className={styles.wskChronology__2026__Results__Group}>
            <h2 className={styles.wskChronology__2026__Results__Group__Title}>{t('2026_gratitudeLetter')}</h2>
            <div className={styles.wskChronology__2026__Results__Group__List}>
              <div className={styles.wskChronology__2026__Results__Item}>
                <p className={styles.wskChronology__2026__Results__Item__Competence}>{t('2026_comp_weldingTech')}</p>
                <p className={styles.wskChronology__2026__Results__Item__Name}>Қаерберды Байрам, жетекшісі
                  Есмұқан А.С.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Галерея 2: 6 фото — облыстық чемпионат "WorldSkills Ақтөбе-2026" */}
        <div className={styles.wskChronology__2026__Gallery}>
          <img src="/img/WorldSkills/2026/img11.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img12.png" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img13.jpg" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img14.jpg" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img15.jpg" alt="WorldSkills-АНРС 2026" />
          <img src="/img/WorldSkills/2026/img16.jpg " alt="WorldSkills-АНРС 2026" />
        </div>
      </section>
    </section>
  </>
}