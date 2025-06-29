import React from 'react'
import styles from './Section3.module.css'
import Card from '../../Card/Card'
import { useReportsValue } from '../../../Context/reports';

export default function Section3() {
  const reports = useReportsValue();

  return (
    <div className={styles.cardContainer}>
      {reports.map((report) => {
        return <Card key={report.id} reports={report} />;
      })}
      
    </div>
  );
}
