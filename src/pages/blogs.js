import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styles from './blogs.module.css'

const Ecommerce = () => {
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/ecommerce/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <div className={styles.main}>
        Are you tired of writing content that no one reads or even shares on the social web?
      </div>
    </Layout>
  )
}

export default Ecommerce
