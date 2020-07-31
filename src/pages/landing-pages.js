import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import chart from '../images/chart-line.svg'
import question from '../images/question.svg'
import user from '../images/user.svg'
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
import { useEffect } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import product from '../images/gift.svg'
import tv from '../images/tv.svg'
import mobile from '../images/mobileproduct.svg'
import watch from '../images/watch.svg'
import VisibilitySensor from 'react-visibility-sensor'
import window from '../images/window.svg'
import { Spring, config } from 'react-spring/renderprops'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "book.jpg" }) {
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
          speed={1}
          style={{ backgroundColor: '#3F51B5' }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#FF7043' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#00897B' }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: '#673AB7' }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundColor: '#3F51B5' }}
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
        <ParallaxLayer offset={0.6} speed={0.3}>
          <div className={styles.paragraph}>
            this message tells the cumtomer i'll help them create an optimsed
            landing page
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={0.3}>
          <div className={styles.casestudy}>
            Your landing page web design has only one purpose: To get people to
            act, usually with a CTA button or by filling in your opt-in-form.
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.4}>
          <div className={styles.products}>
            <img src={product} />
            <img src={mobile} />
            <img src={tv} />
            <img src={watch} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={0.3}>
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
        <ParallaxLayer offset={1.42} speed={0.3}>
          <img
            src={user}
            style={{
              display: 'block',
              width: '10%',
              margin: '0 auto',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.58} speed={0.2}>
          <h3 className={`${styles.paragraph} ${styles.specific}`}>
            Be specific
          </h3>
        </ParallaxLayer>
        <ParallaxLayer offset={1.65} speed={0.4}>
          <p className={`${styles.paragraph} ${styles.specific}`}>
            “The paradox of choice reveals that less is more. Too many options
            will often hinder people from making a choice. If your landing page
            design is focused on a single purpose, you’re helping your customers
            make the right decisions and you will increase conversion rates.”
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.95} speed={0.3}>
          <div className={styles.casestudy}>
            Your landing page web design has only one purpose: To get people to
            act, usually with a CTA button or by filling in your opt-in-form.
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0.5}>
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
        <ParallaxLayer offset={2.5} speed={0.3}>
          <h3 style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            High quality visuals
          </h3>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4}>
          <div className={styles.paragraph}>
            The design of a website is what drives our first impression 94% of
            the time. Because it only takes us fractions of a second to take it
            all in. We subconsciously decide whether we want to stick around or
            not in the blink of an eye.
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.95} speed={0.3}>
          <div className={styles.casestudy}>
            Your landing page web design has only one purpose: To get people to
            act, usually with a CTA button or by filling in your opt-in-form.
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.1}>
          <div className={styles.testimonial1}>
            <img src="https://randomuser.me/api/portraits/women/71.jpg" />
            <h3>Elaine Ryan</h3>
            <p>Great website ! The parallax effect is so good</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.57} speed={0.2}>
          <h3 style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            Use testimonials
          </h3>
        </ParallaxLayer>
        <ParallaxLayer offset={3.65} speed={0.4}>
          <p className={styles.paragraph}>
            People don’t go looking for testimonials. Instead, they want to see
            them when making a critical decision. That means testimonials should
            be everywhere. They should be one of the first things people see on
            your homepage.
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={3.95} speed={0.3}>
          <div className={styles.casestudy}>
            Your landing page web design has only one purpose: To get people to
            act, usually with a CTA button or by filling in your opt-in-form.
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.07} speed={0.3}>
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
        <ParallaxLayer offset={4.57} speed={0.2}>
          <h3 className={styles.paragraph}>Create a lead magnet</h3>
        </ParallaxLayer>
        <ParallaxLayer offset={4.65} speed={0.2}>
          <p className={styles.paragraph}>
            You need to give away valuable content for free
          </p>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default LandingPages
