import React from 'react'
import styles from './Section2.module.css'

export default function Section2() {
  return (
    <section className={styles.dashSection2}>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sale</td>
            <td>5</td>
          </tr>

          <tr>
            <td>Customer Experience</td>
            <td>8</td>
          </tr>

          <tr>
            <td>Marketing</td>
            <td>7</td>
          </tr>

          <tr>
            <td>Inventory</td>
            <td>5</td>
          </tr>
          <tr>
            <td>All</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.pieChart}>
        <img src="./pie.png" alt="reports pie chart" />
      </div>
    </section>
  );
}
