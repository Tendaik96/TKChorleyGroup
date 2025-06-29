import React from 'react'
import styles from './Section.module.css'

export default function Section2() {
  return (
    <section className={styles.dashSection2}>
      <table>
        <th>
          <td>Category</td>
          <td>Total</td>
        </th>

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
      </table>
      <div></div>
    </section>
  );
}
