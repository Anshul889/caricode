import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import question from '../images/question.svg'
import user from '../images/user-white.svg'
import commentsmile from '../images/comment-smile.svg'
import addresscard from '../images/address-card-duotone.svg'
import briefcase from '../images/briefcase-duotone.svg'
import building from '../images/building-duotone.svg'
import chartbar from '../images/chart-bar-duotone.svg'
import coffee from '../images/coffee-duotone.svg'
import pencil from '../images/pencil-duotone.svg'
import phoneoffice from '../images/phone-office-duotone.svg'
import usertie from '../images/user-tie-duotone.svg'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './landingpage.module.css'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import product from '../images/gift.svg'
import tv from '../images/tv.svg'
import mobile from '../images/mobileproduct.svg'
import watch from '../images/watch.svg'
import VisibilitySensor from 'react-visibility-sensor'
import window from '../images/window.svg'
import { Spring } from 'react-spring/renderprops'
import Banner from '../components/banner'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "book.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "pic01.jpg" }) {
      childImageSharp {
        fluid {
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
      <SEO
        title={'We build landing pages'}
        description="Get a landing page that actually works"
        pathname="/landing-pages/"
        image="/images/image3.jpg"
        article={true}
        date={'2020-04-17'}
      />
      <Parallax
        className="parallaxcontainer"
        style={{ width: '100%', height: '90vh' }}
        pages={5}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ backgroundColor: '#484459' }}
        />
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ backgroundColor: '#5eadbb' }}
        />
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{ backgroundColor: '#757575' }}
        />
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{ backgroundColor: '#5eadbb' }}
        />
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{ backgroundColor: '#7b749a' }}
        />
        <ParallaxLayer offset={0} speed={0} factor={5} />

        {/* svgs and text */}

        <ParallaxLayer offset={0.12} speed={0.5}>
          <div>
            <img className={styles.windowsvg} src={window} />
            <div className={styles.userhappy}>
              <div className={styles.empty}></div>
              <Spring
                from={{ transform: 'translate(0px, 100px)' }}
                to={{ transform: 'translate(0, 20px)' }}
                delay={800}
              >
                {props => (
                  <img className={styles.usersvg} src={user} style={props} />
                )}
              </Spring>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1800}>
                {props => (
                  <img
                    className={styles.commentsvg}
                    src={commentsmile}
                    style={props}
                  />
                )}
              </Spring>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.1}>
          <h4 className={styles.paragraph}>
            Want to improve conversions on your website ?
          </h4>
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={-0.2}>
          <div className={styles.products}>
            <img src={product} />
            <img src={mobile} />
            <img src={tv} />
            <img src={watch} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={0.1}>
          <VisibilitySensor offset={{ bottom: 375 }}>
            {({ isVisible }) => (
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: isVisible ? 1 : 0 }}
                delay={1000}
              >
                {props => (
                  <img
                    src={question}
                    className={styles.questionimg}
                    style={props}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ParallaxLayer>
        <ParallaxLayer offset={1.42} speed={0.1}>
          <img src={user} className={styles.specificuser} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.58} speed={0}>
          <h4 className={`${styles.paragraph} ${styles.specific}`}>
            Be specific
          </h4>
        </ParallaxLayer>
        <ParallaxLayer offset={1.65} speed={0}>
          <p className={`${styles.paragraph} ${styles.specific}`}>
            The paradox of choice reveals that less is more. Too many options
            will often hinder people from making a choice. If your landing page
            design is focused on a single purpose, you’re helping your customers
            make the right decisions and you will increase conversion rates.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0.2}>
          <div className={styles.visuals}>
            <img
              src={addresscard}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={briefcase}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={building}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={chartbar}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={coffee}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={pencil}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={phoneoffice}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
            <img
              src={usertie}
              style={{
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0}>
          <h4 style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            High quality visuals
          </h4>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0}>
          <p className={styles.paragraph}>
            The design of a website is what drives our first impression 94% of
            the time. Because it only takes us fractions of a second to take it
            all in. We subconsciously decide whether we want to stick around or
            not in the blink of an eye.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.1}>
          <div className={styles.testimonial1}>
            <img src="https://randomuser.me/api/portraits/women/71.jpg" />
            <h4>Elaine Ryan</h4>
            <p>Great website ! The parallax effect is so good</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.57} speed={0}>
          <h4 style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            Use testimonials
          </h4>
        </ParallaxLayer>
        <ParallaxLayer offset={3.65} speed={0}>
          <p className={styles.paragraph}>
            People don’t go looking for testimonials. Instead, they want to see
            them when making a critical decision. That means testimonials should
            be everywhere. They should be one of the first things people see on
            your homepage.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={4.07} speed={-0.1}>
          <div className={styles.leadmagnet}>
            <div className={styles.leadmagnetimg}>
              <Image
                fluid={data.image.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
            </div>
            <div className={styles.freecourse}>
              <i>Get our full course 100% free</i>
            </div>
            <VisibilitySensor offset={{ bottom: 350 }}>
              {({ isVisible }) => (
                <Spring
                  from={{ opacity: 0 }}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                  delay={500}
                >
                  {props => (
                    <div className={styles.refform} style={props}>
                      <input
                        placeholder={'Email'}
                        className={styles.referralinput}
                      />
                      <button className={styles.refinvite}>SIGN UP</button>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.57} speed={0}>
          <h4 className={styles.paragraph}>Create a lead magnet</h4>
        </ParallaxLayer>
        <ParallaxLayer offset={4.65} speed={0}>
          <p className={styles.paragraph}>
            You need to give away valuable content for free
          </p>
        </ParallaxLayer>
      </Parallax>
      <div className={styles.dlanding}>
        <Banner />
        <div className={styles.odditem}>
          <div className={styles.colorbg1}>
            <h3>Be specific</h3>
          </div>
          <div className={styles.oddimage}>
            <Image fluid={data.image2.childImageSharp.fluid} />
          </div>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                from={{ transform: 'translateX(-10%)' }}
                to={{
                  transform: isVisible
                    ? 'translateX(-30%)'
                    : 'translateX(-10%)',
                }}
                delay={800}
              >
                {props => (
                  <div className={styles.oddcontent} style={props}>
                    <p>
                      The paradox of choice reveals that less is more. Too many
                      options will often hinder people from making a choice. If
                      your landing page design is focused on a single purpose,
                      you’re helping your customers make the right decisions and
                      you will increase conversion rates.
                    </p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className={styles.evenitem}>
          <div className={styles.evenimage}>
            <Image fluid={data.image2.childImageSharp.fluid} />
          </div>
          <div className={styles.colorbg2}>
            <h3>High quality visuals</h3>
          </div>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                from={{ transform: 'translateX(10%)' }}
                to={{
                  transform: isVisible ? 'translateX(30%)' : 'translateX(10%)',
                }}
                delay={800}
              >
                {props => (
                  <div className={styles.evencontent} style={props}>
                    <p>
                      The design of a website is what drives our first
                      impression 94% of the time. Because it only takes us
                      fractions of a second to take it all in. We subconsciously
                      decide whether we want to stick around or not in the blink
                      of an eye.
                    </p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className={styles.odditem}>
          <div className={styles.colorbg1}>
            <h3>Testimonials</h3>
          </div>
          <div className={styles.oddimage}>
            <Image fluid={data.image2.childImageSharp.fluid} />
          </div>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                from={{ transform: 'translateX(-10%)' }}
                to={{
                  transform: isVisible
                    ? 'translateX(-30%)'
                    : 'translateX(-10%)',
                }}
                delay={800}
              >
                {props => (
                  <div className={styles.oddcontent} style={props}>
                    <p>
                      People don’t go looking for testimonials. Instead, they
                      want to see them when making a critical decision. That
                      means testimonials should be everywhere. They should be
                      one of the first things people see on your homepage.
                    </p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className={styles.evenitem}>
          <div className={styles.evenimage}>
            <Image fluid={data.image2.childImageSharp.fluid} />
          </div>
          <div className={styles.colorbg2}>
            <h3>Lead Magnet</h3>
          </div>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                from={{ transform: 'translateX(10%)' }}
                to={{
                  transform: isVisible ? 'translateX(30%)' : 'translateX(10%)',
                }}
                delay={800}
              >
                {props => (
                  <div className={styles.evencontent} style={props}>
                    <p>You need to give away valuable content for free</p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPages
