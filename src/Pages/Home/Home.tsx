import React from 'react'
import Header from '../../Components/Header/Header'
import styles from './Home.module.css'
import Menu from '../../Components/Menu/Menu';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeBody}>
        <div>
          <h3>Welcome! I'm glad you're here.</h3>
          <p>
            I focused on the UX/UI for this project with the aim of creating
            something that closely resembles what you might experience in a real
            Business Intelligence (BI) system. From layout to interaction flow,
            I aimed to design a clean, intuitive interface that enhances
            usability and presents data in a professional, actionable format.
          </p>
          <p>
            This dataset contains 25 structured report entries from a fictional
            beauty company's BI system. Each report provides a snapshot of
            internal business operations, covering five essential areas:
          </p>
          <ul>
            <li>Sales</li>
            <li>Customer Experience</li>
            <li>Product Development</li>
            <li>Marketing</li>
            <li>Inventory</li>
          </ul>
          <p>Each entry includes:</p>
          <ul>
            <li>A unique ID</li>
            <li>A descriptive report name</li>
            <li>The associated category</li>
            <li>The creation date</li>
          </ul>

          <h4>📘 How to Use the App</h4>
          <p>
            This is the landing page — the home screen of the app. I chose to
            keep it minimal, as the primary focus of this project is on{" "}
            <strong>UI/UX design</strong>. You'll find a navigation menu with
            multiple options, but only the first — <strong>"Dashboard"</strong>{" "}
            — is currently functional. The rest are just for display.
          </p>
          <p>
            When you click the "Dashboard" link, you’ll be taken to the main
            page where the core functionality is located.
          </p>
          <p>
            On the <strong>Dashboard</strong>, you’ll find:
          </p>
          <ul>
            <li>
              <strong>Dashboard Controls:</strong> Filter reports by category
              (Sales, Marketing, Inventory, or Customer Experience).
            </li>
            <li>
              <strong>Overview:</strong> If no filters are applied, you’ll see a
              general summary of the data — presented in a table, pie chart, or
              as report cards.
            </li>
          </ul>
          <p>
            If you'd like to return to the homepage at any time, simply click
            the <strong>"BI SYSTEM PROJECT"</strong> title in the top-right
            corner.
          </p>
        </div>
      </div>
    </>
  );
}
