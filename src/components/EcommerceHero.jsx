import React from 'react'
import styles from './EcommerceHero.module.css'
import { Keyframes, Spring } from 'react-spring/renderprops'
import delay from 'delay'

const EcommerceHero = () => {
  return (
    <div className={styles.upperbanner}>
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <h2>Build, deploy and manage your online business</h2>
          <p>
            Digitally transform your enterprise. We create ecommerce web
            applications backed by robust, scalable technology to deliver
            customer engagement and return on your investment
          </p>
          <div>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 450,
                  left: 0,
                  behavior: 'smooth',
                })
              }
              className={styles.getmbutton}
            >
              Get Started
            </button>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 400,
                  left: 0,
                  behavior: 'smooth',
                })
              }
              className={styles.getdbutton}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcommerceHero
