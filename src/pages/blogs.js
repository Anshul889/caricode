import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styles from './blogs.module.css'

const Ecommerce = () => {
  return (
    <Layout>
      <SEO
        title={'Get the best ecomm'}
        description="At CariCode, we build all our web applications with React JS, a
       scalable technology developed and maintained by Facebook."
        pathname="/ecommerce/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <div className={styles.main}>
        <Parallax className={styles.parallaxcontainer} style={{height: 'calc(100vh - 56px)'}} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#805E73' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
          />

          <ParallaxLayer offset={0.2} speed={0.5} style={{textAlign: 'center'}}>
            Hey
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.1} style={{textAlign: 'center'}}>
            Hey 2
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1} style={{textAlign: 'center'}}>
            Hey 3
          </ParallaxLayer>
        </Parallax>
      </div>
    </Layout>
  )
}

export default Ecommerce
