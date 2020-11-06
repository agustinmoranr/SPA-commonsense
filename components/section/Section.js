import React from 'react'
import styles from './Section.module.css'

const Section = ({ children, sectionTitle }) => {
  return (
    <div className={styles.container}>
      <div className="GridSection__title">
        <h1>{sectionTitle}</h1>
      </div>
      <section className={styles.section}>
        {children}
      </section>
    </div>
  )
}

export default Section
