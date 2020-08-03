import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import { useEffect, useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import logoreact from '../images/react.svg'
import logogoogle from '../images/googlefa.svg'
import logosearch from '../images/search.svg'
import browser from '../images/browser.svg'
import styles from '../pages/landingpage.module.css'
import { Spring, config } from 'react-spring/renderprops'

const getImages = graphql`
  {
    image9: file(relativePath: { eq: "image9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image10: file(relativePath: { eq: "image10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image11: file(relativePath: { eq: "image11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image15: file(relativePath: { eq: "image15.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image16: file(relativePath: { eq: "image16.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image12: file(relativePath: { eq: "image12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Webappbanner = () => {
  const data = useStaticQuery(getImages)
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  useEffect(() => {
    setTimeout(() => set(true), 3000)
  })
  return (
    <div className={styles.landinghero}>
      <img src={browser} className={styles.browser} />
      <h1>Web applications</h1>
      <p>(Line about retention using apps)</p>
      <Link to="#firstheader"><button >Get Started</button></Link>
      {/* <div className={styles.dlandingheroimage}>
        <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          {!flipped && (
            <Image
              fluid={data.image10.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
          )}
        </a.div>
        <a.div
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          {flipped && (
            <Image
              fluid={data.image9.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
              alt=""
              loading={'eager'}
            />
          )}
        </a.div>
      </div> */}
      {/* <div className={styles.mlandingheroimage}>
        <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          {!flipped && (
            <Image
              fluid={data.image11.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
          )}
        </a.div>
        <a.div
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          {flipped && (
            <Image
              fluid={data.image15.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
              alt=""
              loading="eager"
            />
          )}
        </a.div>
      </div>
      <div className={styles.heroicons}>
        <div className={styles.icons}>
          <img src={logoreact} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={logogoogle} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={logosearch} alt="" />
        </div>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1500}>
          {props => (
            <div className={styles.icontext} style={props}>
              REACT
            </div>
          )}
        </Spring>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1800}>
          {props => (
            <div className={styles.icontext} style={props}>
              GCP
            </div>
          )}
        </Spring>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={2100}>
          {props => (
            <div className={styles.icontext} style={props}>
              SEO
            </div>
          )}
        </Spring>
      </div> */}
    </div>
  )
}

export default Webappbanner
