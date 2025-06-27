import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
      <div className={styles.header}>
          <div className={styles.hamburger}>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <h1 className={styles.title}>BI SYSTEM PROJECT</h1>
    </div>
  )
}
