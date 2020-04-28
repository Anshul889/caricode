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
          <div className={styles.address}>
            Address: Wework, C - 20, G Block Rd, G Block BKC, Bandra Kurla
            Complex, Mumbai, Maharashtra 400051
          </div>
          <div className={styles.getdirections}>
            <a href="https://www.google.com/maps/place/Caricode/@19.0587205,72.8629498,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c991b19ae605:0xe831624218e9e749!8m2!3d19.0587205!4d72.8651385">
              <button>Get Directions</button>
            </a>
          </div>
          <MapContainer />
        </div>
      </div>
    </Layout>
  )
}

export default contact
