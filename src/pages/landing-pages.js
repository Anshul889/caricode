import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './landingpage.module.css'
import logoreact from '../images/react.svg'

const getImages = graphql`
  {
    image9: file(relativePath: { eq: "image9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LandingPages = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <div className={styles.landinghero}>
        <h1>Landing Pages</h1>
        <p>Get up and running with everything you need in 5 days</p>
        <div className={styles.landingheroimage}>
          <Image fluid={data.image9.childImageSharp.fluid} style={{borderRadius: '4px'}}/>
        </div>
        <div className={styles.heroicons}>
          <img className={styles.icons} src={logoreact}/>
        </div>
      </div>
      <h3>Price &#x20B9; 3000 per month</h3>
      <h3>animations</h3>
      <h3>Seo Features</h3>
      <h3>Comparison with competition</h3>
      <p>professional ui and ux(user exprience)</p>
    </Layout>
  )
}

export default LandingPages
