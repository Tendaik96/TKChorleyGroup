import React from 'react'
import styles from './Section3.module.css'
import Card from '../../Card/Card'
import { useLoadingValue, useReportsValue } from '../../../Context/reports';

export default function Section3() {
  const reports = useReportsValue();

  //Please see /Context/reports
  const loading = useLoadingValue()

  return (
    <div className={styles.cardContainer}>
      {!loading ? (
        <p> Loading ....</p>
      ) : (
        reports.map((report) => {
          return <Card key={report.id} reports={report} />;
        })
      )}
    </div>
  );
}
