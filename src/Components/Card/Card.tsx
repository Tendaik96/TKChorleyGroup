import React from 'react'
import styles from './Card.module.css'

export default function Card() {
  return (
    <div className={styles.card}>
          <h4>Name</h4>
          <h5>Category</h5>
          <h5>Date</h5>
    </div>
  )
}
