import React from 'react'
import styles from './DashboardInfo.module.css'
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Card from '../Card/Card';
import Section3 from './Section3/Section3';

export default function DashboardInfo() {
    return (
      <div className={styles.dashboardInfo}>
        <Section1 />
        <div className={styles.info}>
          <Section2/>
        <Section3/>
        </div>
        
      </div>
    );
}
