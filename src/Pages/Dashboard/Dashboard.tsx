import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Filter from '../../Components/Filter/Filter';
import styles from './Dashboard.module.css'
import DashboardInfo from '../../Components/DashboardInfo/DashboardInfo';

export default function Dashboard() {
  


  return (
    <>
      <Header />
      <div className={styles.dashboard}>
        <Filter />
        <DashboardInfo />
      </div>
    </>
  );
}
