import React from 'react'
import styles from './Card.module.css'

type Reports = {
  id: number;
  name: string;
  category: string;
  createdAt: string;
};

export default function Card({ reports }: { reports: Reports }) {
  return (
    <div className={styles.card} >
      <h4>{reports.name}</h4>
          <h6>{reports.category}</h6>
          <h6>{reports.createdAt}</h6>
    </div>
  )
}
