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
    </section>
  </>
}