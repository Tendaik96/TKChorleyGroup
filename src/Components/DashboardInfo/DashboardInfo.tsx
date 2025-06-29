import React from 'react'
import styles from './DashboardInfo.module.css'
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

export default function DashboardInfo() {
    return (
     
        
        <div className={styles.info}>
          <Section2/>
        <Section3/>
        </div>
        
      
    );
}
