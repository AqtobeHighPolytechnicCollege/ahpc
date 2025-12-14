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
        <p className={styles.wskChronology__2022__Subtitle}>В 2022 году студенты нашего колледжа приняли участие в
          региональном чемпионате «WorldSkills Актобе-2022» и стали победителями Гран-при по 10 компетенциям и получили
          путевку на национальный чемпионат.
          «WorldSkills Kazakhstan 2022» на VII республиканском чемпионате профессионального мастерства в 2022 году
          колледж принял участие по 9 компетенциям. По итогам национального чемпионата стали победителями в 5
          компетенциях и добился следующих успехов: 1 золотая медаль, 2 бронзовая медаль, 3 медальон «Лучший специалист»
          Благодаря этим результатам колледж занял 1-е место по области, а Актюбинская область поднялась на 6-е место на
          республиканском уровне.
        </p>
        <div className={styles.wskChronology__2022__PlaceBlock__Container}>
          <div className={styles.wskChronology__2022__PlaceBlock}>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/image231.png" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>1 место по компетенции
                  «Мобильная робототехника»</p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Убниев Бекзат, Койшыбаев
                  Багыжан</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/image333.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>3 место по компетенции
                  «Инженерная графика CAD» </p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Чабанов Кирилл</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/image321.png" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}> 3 место по компетенции
                  «Электроника» </p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Муслиев Сержан</h2>
              </div>
            </div>

            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/ramzan.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}> Обладатель медальона «Лучший
                  специалист»
                  по компетенции «ІТ решение для бизнеса»
                </p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Абдуллин Рамзан</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/beka.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}> Обладатель медальона «Лучший
                  специалист»
                  по компетенции «Сетевое и системное администрирование»
                </p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Күшербаев Бекзат</h2>
              </div>
            </div>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/roma.jpg" alt="WorldSkills2022"/>
              <div className={styles.wskChronology__2022__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Place}>Обладатель медальона «Лучший специалист»
                  по компетенции  «Графический дизайн»
                </p>
                <h2 className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>Соколов Роман</h2>
              </div>
            </div>
          </div>
          <div className={styles.wskChronology__2022__PlaceBlock}>
            <div className={styles.wskChronology__2022__PlaceBlock__Item}>
              <img src="/img/WorldSkills/wsk22.jpg" alt="WorldSkills2022"/>
              <p className={styles.wskChronology__2022__PlaceBlock__Item__Text__Name}>«WorldSkills Kazakhstan 2022» на VII республиканском чемпионате участники с директором колледжа</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2023}>
        <h1 className={styles.wskChronology__2023__Title}>2023</h1>
        <p className={styles.wskChronology__2023__Subtitle}>В 2023 году студенты нашего колледжа приняли участие в региональном чемпионате "WorldSkills Актобе-2023" и стали победителями Гран-при по 15 компетенциям и получили путевку на национальный чемпионат.
          «WorldSkills Kazakhstan 2023» на VIIІ республиканском чемпионате профессионального мастерства в 2023 году колледж принял участие по 9 компетенциям. По итогам национального чемпионата 3 участника были награждены медальоном «Лучший специалист».
        </p>
        <div className={styles.wskChronology__2023__PlaceBlock}>
          <div className={styles.wskChronology__2023__PlaceBlock__Item}>
            <img src="/img/WorldSkills/erasim&nugrali.png" alt="WorldSkills2023"/>
            <div className={styles.wskChronology__2023__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Place}>Обладатель медальона «Лучший
                специалист»
                по компетенции «Мобильная робототехника»
              </p>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Name}>Ерсайм Әділет, Нургали Аян</p>
            </div>
          </div>
          <div className={styles.wskChronology__2023__PlaceBlock__Item}>
            <img src="/img/WorldSkills/daniel.jpg" alt="WorldSkills2023"/>
            <div className={styles.wskChronology__2023__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Place}>Обладатель медальона «Лучший
                специалист»
                по компетенции «Разработка мобильных приложений»
              </p>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Name}>Уразбаев Даниэль</p>
            </div>
          </div>
          <div className={styles.wskChronology__2023__PlaceBlock__Item}>
            <img src="/img/WorldSkills/shiraz.jpg" alt="WorldSkills2023"/>
            <div className={styles.wskChronology__2023__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Place}>Обладатель медальона «Лучший специалист»
                по компетенции «Графический дизайн».
              </p>
              <p className={styles.wskChronology__2023__PlaceBlock__Item__Text__Name}>Муратов Шираз</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wskChronology__2024}>
        <h1 className={styles.wskChronology__2024__Title}>2024</h1>
        <p className={styles.wskChronology__2024__Subtitle}>В 2024 году студенты нашего колледжа приняли участие в региональном чемпионате «WorldSkills Актобе-2024» и стали победителями Гран-при по 10 компетенциям и получили путевку на национальный чемпионат.
          «WorldSkills Kazakhstan 2024» на республиканском чемпионате профессионального мастерства в 2024 году колледж принял участие по 9 компетенциям. По итогам национального чемпионата стали победителями в 2 компетенциях и добился следующих успехов: 1 золотая медаль, 1 серебряная медаль.
        </p>
        <div className={styles.wskChronology__2024__PlaceBlock}>
          <div className={styles.wskChronology__2024__PlaceBlock__Item}>
            <img src="/img/WorldSkills/nurtai.png" alt="WorldSkills2024"/>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Place}>1 место по компетенции
                «ИТ-решения для бизнеса»
              </p>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Name}>Казиев Нуртай</p>
            </div>
          </div>
          <div className={styles.wskChronology__2024__PlaceBlock__Item}>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__image}>
              <img src="/img/WorldSkills/bagzhan.png" alt="WorldSkills2024"/>
              <img src="/img/WorldSkills/bagzhan1.png" alt="WorldSkills2024"/>
            </div>
              <div className={styles.wskChronology__2024__PlaceBlock__Item__Text}>
                <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Place}>2 место по компетенции «Графический дизайн».
                  Участник Международного чемпионата «Eurо skills-2025»
                </p>
                <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Name}>Койшыбаев Багыжан</p>
              </div>
          </div>
        </div>
        <div className={styles.wskChronology__2024__PlaceBlock}>
          <div className={styles.wskChronology__2024__PlaceBlock__Item}>
            <img src="/img/WorldSkills/wsk24.png" alt="WorldSkills2024"/>
            <div className={styles.wskChronology__2024__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2024__PlaceBlock__Item__Text__Name}>«WorldSkills Kazakhstan 2024» на республиканском чемпионате победители с директором колледжа</p>
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
        <p className={styles.wskChronology__2025__Subtitle}>В 2025 году студенты нашего колледжа приняли участие в
          региональном чемпионате «WorldSkills Актобе-2025» и стали победителями Гран-при по 22 компетенциям и получили
          путевку на национальный чемпионат.
          «WorldSkills Kazakhstan 2025» на Х республиканском чемпионате профессионального мастерства в 2025 году колледж
          принял участие по 9 компетенциям. По итогам национального чемпионата стали победителями в 3 компетенциях и
          добился следующих успехов: 1 серебряная медаль, 1 бронзовая медаль,
        </p>
        <div className={styles.wskChronology__2025__PlaceBlock}>
          <div className={styles.wskChronology__2025__PlaceBlock__Item}>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__image}>
              <img src="/img/WorldSkills/ayana.jpg" alt="WorldSkills2025"/>
              <img src="/img/WorldSkills/ayana1.jpg" alt="WorldSkills2025"/>
            </div>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Place}>2 место по компетенции
                «Графический дизайн»
              </p>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Name}>Ұлықпанова Аяна Жанболатқызы</p>
            </div>
          </div>
          <div className={styles.wskChronology__2025__PlaceBlock__Item}>
            <img src="/img/WorldSkills/akmarzhan.jpg" alt="WorldSkills2025"/>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Place}>3 место по компетенции
                Автоматизация бизнес процессов
                на платформе 1 С
              </p>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Name}>Тілеубаева Ақмаржан Көбесқызы</p>
            </div>
          </div>
          <div className={styles.wskChronology__2025__PlaceBlock__Item}>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__image}>
              <img src="/img/WorldSkills/kemaladin.png" alt="WorldSkills2025"/>
              <img src="/img/WorldSkills/kemaladin1.png" alt="WorldSkills2025"/>
            </div>
            <div className={styles.wskChronology__2025__PlaceBlock__Item__Text}>
              <p className={styles.wskChronology__2025__PlaceBlock__Item__Text__Place}>Обладатель медальона «Лучший
                специалист»
                по компетенции «3D моделирование в компьютерных играх».
              </p>
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
    </section>
  </>
}