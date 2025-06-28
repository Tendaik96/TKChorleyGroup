import React, { useState } from 'react'
import styles from './Header.module.css'
import Menu from '../Menu/Menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  function handleMenuOpen() {
    setMenuOpen(current => !current)
    /* console.log(menuOpen) */
  }

  return (
    <>
      <div className={menuOpen ? styles.oneItem : styles.header}>
        {!menuOpen && (
          <div className={styles.hamburger} onClick={handleMenuOpen}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <h1 className={styles.title}>BI SYSTEM PROJECT</h1>
      </div>

      <Menu menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
    </>
  );
}
