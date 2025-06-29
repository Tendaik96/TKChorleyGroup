import React from 'react'
import { useReportsValue } from '../../Context/reports';
import styles from "./FilterOptions.module.css";
import Card from '../Card/Card';

export default function FilterOptions({ isSales, isMarketing, isInventory, isCustomer }: any) {
  const reports = useReportsValue();

   /*  SALES */

   const filteredReports = reports.filter((report) => {
     return (
       (isSales && report.category === "Sales") ||
       (isMarketing && report.category === "Marketing") ||
       (isInventory && report.category === "Inventory") ||
       (isCustomer && report.category === "Customer Experience")
     );
   });

  return (
    <div className={styles.cardContainer}>
    
      {filteredReports.map((item: any) => {
        return (
          <div>
            <Card key={item.id} reports={item} />
          </div>
        );
      })}
    </div>
  );
}
