import React from 'react'
import styles from './EcommerceHero.module.css'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import { Spring, config } from 'react-spring/renderprops'

const getImages = graphql`
  {
    banner: file(relativePath: { eq: "ebanner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const EcommerceHero = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={styles.banner}>
      <Image
        fluid={data.banner.childImageSharp.fluid}
        style={{ height: '100%', opacity: 0.3 }}
      />
      <div className={styles.bannercontent}>
        <h2>Build an online business—no matter what business you’re in</h2>
        <Spring
          from={{ width: '0px', marginBottom: '20px' }}
          to={{ width: '100px', marginBottom: '20px' }}
          delay={500}
        >
          {props => <div className="hero-feature-border" style={props}></div>}
        </Spring>
        <Spring
          from={{
            opacity: 0,
            transform: 'translateY(20px)',
            marginBottom: '20px',
          }}
          to={{
            opacity: 1,
            transform: 'translateY(0px)',
            marginBottom: '20px',
          }}
          delay={1000}
        >
          {props => (
            <p style={props}>
              Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.
            </p>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: 'translateY(10px)' }}
          to={{ opacity: 1, transform: 'translateY(0px)' }}
          delay={1200}
        >
          {props => (
            <Link to="/#section2">
              <button style={props}>Get Started</button>
            </Link>
          )}
        </Spring>
      </div>
    </div>
  )
}

export default EcommerceHero
