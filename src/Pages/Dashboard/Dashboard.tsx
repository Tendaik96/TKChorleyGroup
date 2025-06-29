import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Filter from '../../Components/Filter/Filter';
import styles from './Dashboard.module.css'
import DashboardInfo from '../../Components/DashboardInfo/DashboardInfo';
import Section1 from '../../Components/DashboardInfo/Section1/Section1';
import FilterOptions from '../../Components/FilterOptionPages/FilterOptions';

export default function Dashboard() {
  
  const [isSales, setIsSales] = useState<boolean>(false)
  const [isMarketing, setIsMarketing] = useState(false);
  const [isInventory, setIsInventory] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  //console.log(isSales)
  
  return (
    <>
      <Header />
      <div className={styles.dashboard}>
        <Filter
          setIsSales={setIsSales}
          setIsMarketing={setIsMarketing}
          setIsInventory={setIsInventory}
          setIsCustomer={setIsCustomer}
        />
        <div className={styles.dashboardInfo}>
          <Section1 />
          {!isSales && !isMarketing && !isInventory && !isCustomer && (
            <DashboardInfo />
          )}
          {(isSales || isMarketing || isInventory || isCustomer) && (
            <FilterOptions
              isSales={isSales}
              isMarketing={isMarketing}
              isCustomer={isCustomer}
              isInventory={isInventory}
            />
          )}
        </div>
      </div>
    </>
  );
}
