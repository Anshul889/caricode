import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './landingpage.module.css'
import logoreact from '../images/react.svg'
import logogoogle from '../images/google.svg'
import logosearch from '../images/search.svg'

const getImages = graphql`
  {
    image9: file(relativePath: { eq: "image9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image15: file(relativePath: { eq: "image15.png" }) {
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
        <div className={styles.dlandingheroimage}>
          <Image
            fluid={data.image9.childImageSharp.fluid}
            style={{ borderRadius: '4px', objectFit: 'fill' }}
          />
        </div>
        <div className={styles.mlandingheroimage}>
          <Image
            fluid={data.image15.childImageSharp.fluid}
            style={{ borderRadius: '4px', objectFit: 'fill' }}
          />
        </div>
        <div className={styles.heroicons}>
          <div className={styles.icons}>
            <img src={logoreact} />
          </div>
          <div className={styles.icons}>
            <img src={logogoogle} style={{height: '30px', width: '30px'}}/>
          </div>
          <div className={styles.icons}>
            <img src={logosearch} style={{height: '30px', width: '30px'}}/>
          </div>
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
