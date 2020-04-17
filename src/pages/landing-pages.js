import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './landingpage.module.css'
import logoreact from '../images/react.svg'
import logogoogle from '../images/google.svg'
import logosearch from '../images/search.svg'
import { useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import TextTransition from '../components/TextTransition'
import DraggableList from '../components/DraggableList'
import ParallaxComponent from '../components/ParallaxComponent'
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share'

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
          ...GatsbyImageSharpFluid
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

const LandingPages = () => {
  const data = useStaticQuery(getImages)
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  useEffect(() => {
    setTimeout(() => set(true), 2000)
  })
  return (
    <Layout>
      <SEO
        title={'We build landing pages'}
        description="Get a landing page that actually works"
        pathname="/landing-pages/"
        image="/images/image3.jpg"
        article={true}
        date={'2020-04-17'}
      />
      <div className={styles.container}>
        <div className={styles.landinghero}>
          <h1>Landing Pages</h1>
          <p>Get up and running with everything you need in 5 days</p>
          <div className={styles.dlandingheroimage}>
            <a.div
              style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
            >
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
                />
              )}
            </a.div>
          </div>
          <div className={styles.mlandingheroimage}>
            <a.div
              style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
            >
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
                />
              )}
            </a.div>
          </div>
          <div className={styles.heroicons}>
            <div className={styles.icons}>
              <img src={logoreact} />
            </div>
            <div className={styles.icons}>
              <img src={logogoogle} style={{ height: '30px', width: '30px' }} />
            </div>
            <div className={styles.icons}>
              <img src={logosearch} style={{ height: '30px', width: '30px' }} />
            </div>
          </div>
        </div>
        <div className={styles.sectionanimation}>
          <div className={styles.inner}>
            Get custom built animations and parallax effects
            <TextTransition />
            <div className={styles.mblock}>
              <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />
            </div>
          </div>
        </div>
        <div className={styles.parallaxsnap}>
          <h2>Parallax</h2>
          <ParallaxComponent />
        </div>
        <div style={{ position: 'relative', top: '80vh' }}>
          <div className={styles.sectionseo}>
            <div className={styles.inner}>
              <h2>Seo Features</h2>
              <h3>Meta tags for google search</h3>
              <Image
                fluid={data.image16.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <h3>Social media meta tags</h3>
              <Image
                fluid={data.image12.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque tempore earum voluptate nulla debitis minus vero
                nobis nemo ipsam repellendus ipsum excepturi, sapiente eius
                dicta assumenda eaque laudantium fuga fugit?
              </p>
              <h3>Share buttons</h3>
              <div>
                <FacebookShareButton url={'www.caricode.co/landing-pages/'}>
                  <FacebookIcon  size={40} round={true}/>
                </FacebookShareButton>
                <EmailShareButton subject={'Best site I have ever seen'} url={'www.caricode.co/landing-pages/'} body={'omgad check this site out'} style={{paddingLeft: '20px'}}>
                  <EmailIcon  size={40} round={true} />
                </EmailShareButton>
                <TwitterShareButton url={'www.caricode.co/landing-pages/'} title={'gary vee'} style={{paddingLeft: '20px'}}>
                  <TwitterIcon  size={40} round={true}/>
                </TwitterShareButton>
                <WhatsappShareButton url={'www.caricode.co/landing-pages/'} style={{paddingLeft: '20px'}}>
                  <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <h3>Price &#x20B9; 5000 per month</h3>
          <h3>Comparison with competition</h3>
          <p>professional ui and ux(user exprience)</p>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPages
