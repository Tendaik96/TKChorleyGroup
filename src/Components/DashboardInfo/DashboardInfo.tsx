import React from 'react'
import styles from './DashboardInfo.module.css'
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Card from '../Card/Card';

export default function DashboardInfo() {
    return (
      <div className={styles.dashboardInfo}>
        <Section1/>
        <Section2/>
            <section className={styles.dashSection3}>
                <Card/>
        </section>
      </div>
    );
}
