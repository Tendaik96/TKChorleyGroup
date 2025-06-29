import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Section1.module.css";
import { useClickSearchFunction, useSearchFunction, useSearchValue } from '../../../Context/search';


export default function Section1() {
  const setSearch = useSearchFunction()
  const search = useSearchValue()

  const setClickSearch = useClickSearchFunction()
  console.log(search)

  // Track changes to input search 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(search);
  }

  function handleClickSearch() {
    setClickSearch(search)
  }

  return (
    <section className={styles.dashSection1}>
      <h3>Reports Overview</h3>{" "}
      <div>
        <div className={styles.section1Control}>
          {" "}
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="search"
              placeholder="Search Category . . ."
              onChange={handleChange}
              value={search}
            />
            <button onClick={handleClickSearch}>SEARCH</button>
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
  );
}
