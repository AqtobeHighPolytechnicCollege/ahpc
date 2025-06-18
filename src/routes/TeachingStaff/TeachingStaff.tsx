import React, { useEffect, useRef, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import styles from "@/routes/TeachingStaff/TeachingStaff.module.css";

export const Route = createFileRoute('/TeachingStaff/TeachingStaff')({
  component: RouteComponent,
});

function Tabs() {
  const { t, i18n } = useTranslation('departments');
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);

  // Получаем названия табов из локализации
  const tabs = t('tabs', { returnObjects: true });

  // Перемещает индикатор к активной вкладке
  const moveIndicator = (index) => {
    const el = tabsRef.current[index];
    if (el && indicatorRef.current) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      const left = rect.left - parentRect.left;
      const width = rect.width;
      indicatorRef.current.style.left = left + "px";
      indicatorRef.current.style.width = width + "px";
    }
  };

  useEffect(() => {
    moveIndicator(activeIndex);
    const handleResize = () => moveIndicator(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  return { tabs, activeIndex, setActiveIndex, indicatorRef, tabsRef, moveIndicator };
}

function DepartmentContent({ departmentIndex }) {
  const { t } = useTranslation('departments');

  // Получаем данные для конкретного отделения
  const department = t(`departments.${departmentIndex}`, { returnObjects: true });

  if (!department) return null;

  return (
      <>
        <div className={styles.departmentHeader}>
          <h1 className={styles.departmentTitle}>{department.title}</h1>
          <h2 className={styles.departmentSubtitle}>{department.subtitle}</h2>
        </div>

        <div className={styles.departmentInfoCard}>
          <div className={styles.infoTextSection}>
            <h1 className={styles.sectionTitle}>{department.about.title}</h1>
            <p className={styles.sectionDescription}>
              {department.about.description}
            </p>
            <div className={styles.statisticsWrapper}>
              {department.statistics.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className={`lucide ${stat.icon} h-8 w-8 text-blue-600 mx-auto mb-2`}
                         dangerouslySetInnerHTML={{ __html: stat.iconPath }}
                    />
                    <h3 className={styles.statNumber}>{stat.number}</h3>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
              ))}
            </div>
          </div>
          <img src={department.image} alt={department.imageAlt} className={styles.departmentImage}/>
        </div>

        {/* Кабинеты */}
        <div className={styles.classroomsSection}>
          <h1 className={styles.sectionTitle}>{department.classrooms.title}</h1>
          <div className={styles.classroomsList}>
            {department.classrooms.list.map((classroom, index) => (
                <div key={index} className={styles.classroomCard}>
                  <img className={styles.classroomImage} src={classroom.image} alt={classroom.alt}/>
                  <h3 className={styles.classroomTitle}>{classroom.title}</h3>
                </div>
            ))}
          </div>
        </div>

        {/* Заведующий отделением */}
        <div className={styles.headOfDepartmentSection}>
          <h1 className={styles.sectionTitle}>{department.head.title}</h1>
          <div className={styles.headCard}>
            <div className={styles.headCardContent}>
              <img className={styles.headImage} src={department.head.image}/>
              <div className={styles.headInfo}>
                <p><strong>{department.head.education.label}:</strong> {department.head.education.value}</p>
                <p><strong>{department.head.graduation.label}:</strong> {department.head.graduation.value}</p>
                <p><strong>{department.head.specialization.label}:</strong> {department.head.specialization.value}</p>
                <p><strong>{department.head.degree.label}:</strong> {department.head.degree.value}</p>
              </div>
            </div>
            <div className={styles.headAchievements}>
              <h2>{department.head.achievements.title}</h2>
              <ul>
                {department.head.achievements.list.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Преподавательский состав */}
        <h1 className={styles.teachersTitle}>{department.teachers.title}</h1>
        <div className={styles.teachersList}>
          {department.teachers.list.map((teacher, index) => (
              <div key={index} className={styles.teacherCard}>
                <div className={styles.teacherHeader}>
                  <img className={styles.teacherImage} src={teacher.image} alt={teacher.alt}/>
                  <h1 className={styles.teacherName}>{teacher.name}</h1>
                  <h2 className={styles.teacherPost}>{teacher.position}</h2>
                  <div className={styles.teacherDetails}>
                    <p className={styles.teacherSubjectsLabel}>{teacher.subjects.label}:</p>
                    <div className={styles.teacherSubjects}>
                      {teacher.subjects.list.map((subject, subIndex) => (
                          <span key={subIndex} className={styles.subjectItem}>{subject}</span>
                      ))}
                    </div>
                    <p className={styles.teacherExperience}>{teacher.experience}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </>
  );
}

function RouteComponent() {
  const { t } = useTranslation('departments');
  const { tabs, activeIndex, setActiveIndex, indicatorRef, tabsRef } = Tabs();

  return (
      <>
        <div className={styles.headContent}>
          <div className={styles.headContentHashtag}>
            <h1>{t('pageTitle')}</h1>
          </div>
        </div>

        <div className={styles.container}>
          {/* Табы */}
          <div className={styles.tabsWrapper}>
            {tabs.map((label, idx) => (
                <div
                    key={idx}
                    ref={el => tabsRef.current[idx] = el}
                    className={`${styles.tabItem} ${idx === activeIndex ? styles.active : ""}`}
                    onClick={() => setActiveIndex(idx)}
                >
                  {label}
                </div>
            ))}
            <div className={styles.tabIndicator} ref={indicatorRef} />
          </div>

          {/* Контент отделения */}
          <DepartmentContent departmentIndex={activeIndex} />
        </div>
      </>
  );
}