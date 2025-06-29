import React from 'react'
import styles from './Menu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

interface MenuProps {
  menuOpen: boolean;
  handleMenuOpen: () => void;
}

export default function Menu({ menuOpen, handleMenuOpen }: MenuProps) {
  return (
    <div className={menuOpen ? styles.menuOpen : styles.menuClosed}>
      <div className={styles.arrows} onClick={handleMenuOpen}>
        <FontAwesomeIcon icon={faAngleDown} className={styles.head} />
        <FontAwesomeIcon icon={faAngleDown} className={styles.head} />
        <FontAwesomeIcon icon={faAngleDown} className={styles.head} />
      </div>
      <ul className={styles.menuList}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#E91E63 ",
                  textUnderlineOffset: "8px",
                  textDecorationThickness: "2px",
                }
              : { color: "#fff", textDecoration: 'none' };
          }}
        >
          <li>Dashboard</li>
        </NavLink>  
          <li>Reports</li>
        
        <li>Sales Analytics</li>
        <li>Customer Insights</li>
        <li>Product Development</li>
        <li>Inventory & Logistics</li>
        <li>Setting</li>
      </ul>
    </div>
  );
}
