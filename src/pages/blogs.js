import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from './blogs.module.css'
import './pagelayout.css'
import BlogHero from '../components/BlogHero'
import BlogBody from '../components/BlogBody'


const Ecommerce = () => {
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/blogs/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <div className={styles.main}>
        <BlogHero />
        <BlogBody />
      </div>
    </Layout>
  )
}

export default Ecommerce
