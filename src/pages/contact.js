import React from 'react'
import Contact from '../components/contact'
import Layout from '../components/layout'
import styles from './contact.module.css'
import MapContainer from '../components/MapContainer'

const contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Contact />
          <MapContainer />
        </div>
      </div>
    </Layout>
  )
}

export default contact
