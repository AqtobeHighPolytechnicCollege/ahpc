import { createFileRoute } from '@tanstack/react-router'
import styles from './contestResults.module.css'
import {usePageTitle} from "@/components/usePageTitile.tsx";
import { DonutChart } from '@mantine/charts';
import '@mantine/charts/styles.css';

export const Route = createFileRoute('/contestResults/contestResults')({
  component: RouteComponent,
})

function RouteComponent() {
  usePageTitle('Результаты конкурса')
  return (
      <>
          <div className={styles.headContent}>
              <div className={styles.headContentHashtag}>
                  <h1>Результаты конкурса</h1>
              </div>
          </div>
          <div className={styles.container}>
              <DonutChart
                  data={[
                      {name: 'Команда A', value: 45, color: '#47d6ab'},
                      {name: 'Команда B', value: 25, color: '#845ef7'},
                      {name: 'Команда C', value: 30, color: '#f59f00'},
                  ]}
                  withLabels
                  size={300}
                  thickness={40}
                  label={({name, value, percent}) => `${name}: ${percent.toFixed(1)}%`}
              />
          </div>
      </>
  );
}
