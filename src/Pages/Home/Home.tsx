import React from 'react'
import Header from '../../Components/Header/Header'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeBody}>
        <div>
          <h3>Welcome! I'm glad you're here.</h3>
          <p>
            I focused on the UX/UI for this project with the goal of creating
            something that closely resembles what you might experience in a real
            Business Intelligence (BI) system. From layout to interaction flow,
            I aimed to design a clean, intuitive interface that enhances
            usability and presents data in a professional, actionable format.
          </p>
          <p>
            This dataset contains 25 structured report entries from a fictional
            beauty company's BI system.
          
            Each report offers a snapshot of internal business operations,
            covering five essential areas:
          </p>
          <ul>
            <li>Sales</li>
            <li>Customer Experience </li>
            <li>Product Development</li>
            <li>Marketing Inventory</li>
            <li>Inventory</li>
          </ul>
          <p>Each entry includes:</p>
          <ul>
            <li>A unique ID</li>
            <li>A descriptive report name</li>
            <li>The associated category</li>
            <li>The creation date</li>
          </ul>
        </div>
      </div>
    </>
  );
}
