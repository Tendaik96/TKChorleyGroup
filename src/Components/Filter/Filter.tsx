import React, { useState } from 'react'
import styles from './Filter.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


export default function Filter() {
const [filterOpen, setFilterOpen] = useState(false)

  function handleFilterOpen() {
    setFilterOpen(current => !current)
  }

  return (
    <div className={styles.dashboardFilter}>
            <div className={styles.dashboardContainer}>
              <h3 className={styles.dashboardTitle}>DASHBOARD</h3>
              {/* <h4>REFINED BY</h4> */}
    
              <div className={styles.filter}>
                <div className={styles.default} onClick={handleFilterOpen}>
                  <h4>FILTER</h4>
    
                  <div className={filterOpen ? styles.arrowsUp : styles.arrowsDown}>
                    <FontAwesomeIcon icon={faAngleDown} className={styles.head} />
                    <FontAwesomeIcon icon={faAngleDown} className={styles.head} />
                  </div>
                </div>
    
                <div className={filterOpen ? styles.filterOptions : styles.filterClosed}>
                  <div>
                    <h5>Sales</h5> <input type="checkbox" />{" "}
                  </div>
                  <div>
                    <h5> Customer experience</h5> <input type="checkbox" />
                  </div>
                  <div>
                    <h5> Marketing</h5>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <h5>Inventory</h5>
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
  )
}
