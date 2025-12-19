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
          <img src='/img/educationalPractice/educationalPractice.png' alt='Учебная практика' />
        </div>
        <div className={styles.educationalPractice__ImageBLocks}>
          <div className={styles.educationalPractice__ImageBlock}>
            <img src='/img/educationalPractice/image%20364.jpg' alt='Фото прохождения учебной практики'/>
            <img src='/img/educationalPractice/image%20365.jpg' alt='Фото прохождения учебной практики'/>
            <img src='/img/educationalPractice/image%20366.jpg' alt='Фото прохождения учебной практики'/>
          </div>
          <div className={styles.educationalPractice__ImageBlock}>
            <img src='/img/educationalPractice/image%20367.jpg' alt='Фото прохождения учебной практики'/>
            <img src='/img/educationalPractice/image%20368.jpg' alt='Фото прохождения учебной практики'/>
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
            <img src='/img/educationalPractice/image%20362.jpg' alt='Фото преддипломной практики студентов'/>
            <p className={styles.pregraduatePractice__Image__Subtitle}>{t('prePracticeWord1')}</p>
          </div>
          <div className={styles.pregraduatePractice__Image__Item}>
            <img src='/img/educationalPractice/image%20363.jpg' alt='Фото преддипломной практики студентов'/>
            <p className={styles.pregraduatePractice__Image__Subtitle}>{t('prePracticeWord2')}</p>
          </div>
        </div>
      </section>
        <section className={styles.educationalPractice}>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Образовательная функция экскурсии заключается в активизации познавательного процесса, расширении кругозора, углублении теоретических знаний и развитии практических навыков. Одной из главных особенностей экскурсии является возможность преобразования теоретических знаний в наглядные, конкретные образы.

                        В отличие от традиционных форм обучения — уроков и лекций — экскурсия способствует более глубокому погружению в учебный процесс. Экскурсии делают знания более доступными и наглядными, повышают мотивацию к обучению и превращают их в неотъемлемый элемент образовательного процесса. В учебной деятельности просветительская и образовательная роль экскурсии занимает важное место, поскольку она предоставляет студентам уникальную возможность не только получать знания, но и глубже понимать изучаемые темы.

                        Экскурсия превращает процесс обучения в активное, живое и эмоционально насыщенное событие, способствуя развитию критического мышления, междисциплинарных связей и практических навыков.

                        Наша главная цель — сформировать у молодого поколения правильное отношение к труду и помочь в осознанном выборе профессионального направления.

                        Подобный опыт не только помогает подросткам осознанно выбрать будущую профессию, но и мотивирует их, повышает интерес к труду. Студенты осознали, насколько востребованы, престижны и перспективны рабочие профессии, а также ясно почувствовали значимость данной сферы для общества.

                        Студенты Актюбинского высшего политехнического колледжа посетили Актюбинский завод металлоконструкций с познавательной экскурсией.</p>
                </div>
                <img src="/img/educationalPractice/image1.jpg" alt="text" />
                <p className={styles.excourse__Text__Paragraph}>В ходе встречи на заводе молодёжь ознакомилась с производственным процессом, современным оборудованием и особенностями металлоконструкционного производства.</p>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image2.jpg" alt="text" />
                    <img src="/img/educationalPractice/image3.jpg" alt="text" />
                </div>
                <p className={styles.excourse__Text__Pragraph}>Для будущих специалистов производственная практика стала отличной возможностью совместить теоретические знания, полученные в ходе обучения, с реальной профессиональной деятельностью. В ходе экскурсии сотрудники завода разъяснили студентам значимость производственного процесса и поделились профессиональными рекомендациями, предназначенными для молодых специалистов.

                    Подобные мероприятия не только повышают интерес молодежи, но и укрепляют их уверенность в выбранной профессии, вдохновляя на будущую трудовую деятельность.

                    Такие инициативы вносят значительный вклад в профессиональную ориентацию молодежи и помогают им ближе познакомиться с реальными условиями современного рынка труда.</p>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image4.jpg" alt="text" />
                    <img src="/img/educationalPractice/image5.jpg" alt="text" />
                </div>
                <p className={styles.excourse__Text__Pragraph}>Будущие специалисты по специальности техник-механик ознакомились с производственным процессом, современными технологиями изготовления металлоконструкций и требованиями безопасности. Студенты смогли совместить теоретические знания с практикой, что способствовало повышению их интереса к будущей профессии.</p>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В рамках производственного обучения для группы 302 ЭЛ по модулю ПМ 03 «Монтаж кабелей, силовых линий и электрического оборудования» была организована учебно-производственная экскурсия на Актюбинский завод металлоконструкций.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image6.jpg" alt="text" />
                    <img src="/img/educationalPractice/image7.jpg" alt="text" />
                </div>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В ходе экскурсии студенты ознакомились с общей структурой завода, производственно-технологическими процессами, а также с особенностями системы электроснабжения предприятия.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image8.jpg" alt="text" />
                    <img src="/img/educationalPractice/image9.jpg" alt="text" />
                </div>
                <p className={styles.excourse__Text__Paragraph}>Студенты получили полную информацию о порядке эксплуатации электрического оборудования и электрических сетей, мерах безопасности, а также о принципах работы электроустановок на производственном объекте.</p>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В ходе производственной практики для группы 201 АТ по модулю КМ 02 «Техника безопасности и охрана окружающей среды» в рамках учебного результата «Соблюдение правил пожарной и электрической безопасности» была организована познавательная экскурсия в учебный центр Академии гражданской защиты имени М. Габдуллина Министерства по чрезвычайным ситуациям Республики Казахстан.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image10.jpg" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В ходе экскурсии обучающиеся ознакомились с особенностями работы спасателей, аварийно-спасательной техникой и учебно-тренировочной базой. На учебно-тренировочной площадке они также самостоятельно выполнили небольшие практические задания, соревновались между собой, проверяя свою ловкость и быстроту реакции.

                        Обучающиеся на практике освоили безопасные методы работы со специальным оборудованием и осознали, насколько важны профессиональные навыки спасателей.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image11.jpg" alt="text" />
                    <img src="/img/educationalPractice/image12.jpg" alt="text" />
                </div>
                <p className={styles.excourse__Text__Paragraph}>Данная экскурсия значительно повысила уровень культуры безопасности обучающихся и способствовала формированию навыков правильных действий в чрезвычайных ситуациях. Экскурсия, прошедшая в познавательной, насыщенной и полезной атмосфере, стала для обучающихся источником особой мотивации.</p>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В рамках недели ЦЭБ «Эксплуатация нефтяных и газовых месторождений» для студентов групп 201РМ и 203РМ была организована познавательная экскурсия на базе ТОО «АктюбНИГРИ».</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image13.jpg" alt="text" />
                    <img src="/img/educationalPractice/image14.jpg" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В ходе экскурсии студенты ознакомились с общей деятельностью предприятия, процессами разведки, разработки и эксплуатации нефтяных и газовых месторождений. Специалисты рассказали о работе бурового оборудования, требованиях промышленной безопасности, экологических нормах и применении современных технологий.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image15.jpg" alt="text" />

                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Экскурсия дополнила теоретические знания студентов и повысила их интерес к выбранной специальности.</p>
                </div>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В соответствии с результатом обучения ОН 2 «Металлы и металлические сплавы» модуля КМ 03 «Использование автомобильных материалов и слесарного инструмента» обучающиеся группы 203 АТ посетили познавательную экскурсию на ферросплавный завод АО ТНК «Казхром».</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image17.jpg" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Участники экскурсии прошли инструктаж по технике безопасности и были обеспечены специальными средствами (каска, радиогид, защитные очки). После этого они на автобусе ознакомились с основными плавильными цехами на территории завода.

                        Завод функционирует как единый механизм: все цеха, склады и газоочистные комплексы работают во взаимосвязи. Все технологические процессы по управлению крупногабаритным оборудованием полностью автоматизированы. Специалисты осуществляют непрерывный контроль производственных показателей и ведут мониторинг с помощью компьютерных систем.

                        Основной продукцией предприятия являются феррохромы с высоким, средним и низким содержанием углерода, а также низколегированные марки. Данная продукция широко применяется в производстве различных видов коррозионностойкой стали — от обычной нержавеющей до легированной и конструкционной.

                        Стратегическими партнёрами АО «АЗФ» являются ведущие компании Китая, Японии, Южной Кореи, Европы, США и стран СНГ.

                        В ходе производственного тура студенты получили возможность наблюдать процессы организации и управления производственно-хозяйственной деятельностью градообразующего предприятия не только в теории, но и на практике. Они ознакомились с производственными процессами в инновационном цехе № 4, работой инфраструктуры и стали свидетелями реальных этапов производства феррохрома.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image18.png" alt="text" />
                    <img src="/img/educationalPractice/image19.png" alt="text" />
                    <img src="/img/educationalPractice/image20.png" alt="text" />
                    <img src="/img/educationalPractice/image21.png" alt="text" />
                    <img src="/img/educationalPractice/image22.jpg" alt="text" />
                    <img src="/img/educationalPractice/image23.jpg" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Содержательная и познавательная экскурсия расширила профессиональный кругозор обучающихся и повысила их интерес к будущей профессии.</p>
                </div>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Экскурсия на производственную базу АО «Актобе ТЭЦ» для студентов группы 203 АС специальности 07140100 «Автоматизация и управление технологическими процессами», организованная в соответствии с заключённым договором.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image24.jpg" alt="text" />
                    <img src="/img/educationalPractice/image25.jpg" alt="text" />
                </div>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Цель экскурсии — наглядно продемонстрировать обучающимся работу АО «Актобе ТЭЦ», а также на практике показать принцип работы и автоматизацию газотурбинных установок с котлами, применяемых на базе предприятия.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image26.jpg" alt="text" />
                    <img src="/img/educationalPractice/image27.jpg" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>На предприятии студенты ознакомились с правилами техники безопасности. Они получили информацию о работе современного оборудования и передовых технологиях, позволяющих максимально автоматизировать производственные процессы. Студенты осознали значимость проведённого на предприятии экскурсионного занятия.</p>
                </div>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Студенты группы 201 Б специальности «Учёт и аудит» в ходе профессиональной практики ознакомились с финансово-хозяйственной деятельностью организаций, изучили современные методы ведения учёта, стандарты бухгалтерского учёта, налоговый учёт и на практике освоили основные принципы аудита.

                        Студенты проходили практику в реальных учреждениях, где выполняли работы по заполнению финансовых документов, ведению бухгалтерского учёта, работе с первичной документацией и подготовке отчётности.

                        В ходе защиты практики обучающиеся всесторонне представили результаты своей работы, привели конкретные примеры и продемонстрировали умение сочетать теоретические знания с практическими навыками. Презентации и отчётная документация были подготовлены на профессиональном уровне, на поставленные вопросы даны полные и точные ответы.

                        В результате было подтверждено, что студенты обладают высоким уровнем профессиональных компетенций и готовности к формированию себя как будущих специалистов.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image28.png" alt="text" />
                    <img src="/img/educationalPractice/image29.jpg" alt="text" />
                    <img src="/img/educationalPractice/image30.jpg" alt="text" />
                    <img src="/img/educationalPractice/image31.png" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Прохождение практики в Актюбинском высшем политехническом колледже является важной составляющей подготовки высококвалифицированных специалистов. В связи с этим в колледже проводится учебно-производственная практика.</p>
                    <p className={styles.excourse__Text__Paragraph}>Основными задачами учебно-производственной практики являются:</p>
                    <ul className={styles.excourse__Text__List}>
                        <li className={styles.excourse__Text__List__Item}>обеспечение связи теоретического обучения с современным производством;</li>
                        <li className={styles.excourse__Text__List__Item}>обеспечение обучающихся необходимыми знаниями и практическим опытом работы по специальности;</li>
                        <li className={styles.excourse__Text__List__Item}>развитие профессиональных навыков и сокращение периода адаптации студентов к профессиональной деятельности;</li>
                        <li className={styles.excourse__Text__List__Item}>создание условий для трудоустройства студентов после окончания колледжа.</li>
                    </ul>
                    <p className={styles.excourse__Text__Paragraph}>Учебная практика по специальности направлена на повышение уровня знаний обучающихся, а также необходима для прохождения начальной практики с целью освоения общих и профессиональных компетенций по выбранной специальности. Учебная практика проводится на базе колледжа и в учебных центрах.

                        Производственная практика осуществляется на предприятиях и в специализированных организациях по профилю специальности. Она проводится с целью формирования профессиональных компетенций студентов и приобретения практического опыта работы по специальности.</p>
                </div>
            </div>
            <div className={styles.excourse}>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>Студенты группы 401 АТ специальности «Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта» успешно прошли защиту по производственной практике. В ходе защиты обучающиеся продемонстрировали знания и практические навыки, полученные во время практики, и представили выполненные работы с соответствующими доказательствами. При защите всесторонне оценивались связь между учебным заведением и производством, уровень профессиональной подготовки и степень сформированности студентов как будущих специалистов.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image32.jpg" alt="text" />
                    <img src="/img/educationalPractice/image33.jpg" alt="text" />
                    <img src="/img/educationalPractice/image34.jpg" alt="text" />
                    <img src="/img/educationalPractice/image35.jpg" alt="text" />
                </div>
                <div className={styles.excourse__Text}>
                    <p className={styles.excourse__Text__Paragraph}>В период прохождения производственной практики за студентами закрепляется руководитель. Руководители практики обеспечивают взаимодействие между колледжем и руководством организации или предприятия, разрабатывают рабочую учебную программу практики и методические рекомендации, распределяют студентов по рабочим местам на предприятиях и в организациях, контролируют ход прохождения практики, а также оказывают методическую помощь студентам при возникновении трудностей в ходе отчётности. Во время практики студенты ведут практический дневник.

                        По завершении производственной практики студенты представляют отчёт о проделанной работе в виде презентационных материалов и оформленной документации с целью демонстрации результатов своей деятельности.</p>
                    <p className={styles.excourse__Text__Paragraph}>Организация производственного обучения и профессиональной практики на производстве в соответствии с утверждённым графиком учебного процесса и Положением о профессиональной практике обучающихся колледжа.

                        В соответствии с утверждённым графиком учебного процесса была проведена установочная конференция с целью определения мест прохождения производственного или профессионального обучения вне учебного заведения, уточнения перечня необходимых документов и разъяснения требований техники безопасности.

                        Приём, анализ и подведение итогов отчётов по практике, пройденной обучающимися на производственных предприятиях.</p>
                </div>
                <div className={styles.excourse__ImageBlock}>
                    <img src="/img/educationalPractice/image36.jpg" alt="text" />
                    <img src="/img/educationalPractice/image37.jpg" alt="text" />
                    <img src="/img/educationalPractice/image38.jpg" alt="text" />
                    <img src="/img/educationalPractice/image39.jpg" alt="text" />
                    <img src="/img/educationalPractice/image40.jpg" alt="text" />
                </div>
            </div>
        </section>
    </div>
  </>
}