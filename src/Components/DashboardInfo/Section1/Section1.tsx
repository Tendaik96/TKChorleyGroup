import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Section1.module.css";


export default function Section1() {
  return (
    <section className={styles.dashSection1}>
              <h3>Reports Overview</h3>{" "}
              <div>
                <div className={styles.section1Control}>
                  {" "}
                  <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Search Category . . ." />
                    <div className={styles.searchUnderline}></div>
                  </div>
                  {/* <div className={styles.btn}>
                    <img src="./category.png" alt="category icon" />{" "}
                    <h6>VIEW CATEGORIES</h6>{" "}
                  </div> */}
                  <div className={styles.btn}>
                    <img src="./download.png" alt="download icon icon" />{" "}
                    <h6>DOWNLOAD</h6>{" "}
                  </div>
                </div>
              </div>
            </section>
  )
}
