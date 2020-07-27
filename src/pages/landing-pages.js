import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import chart from '../images/chart-line.svg'
import question from '../images/question.svg'
import user from '../images/user.svg'
import addresscard from '../images/address-card-duotone.svg'
import briefcase from '../images/briefcase-duotone.svg'
import building from '../images/building-duotone.svg'
import chartbar from '../images/chart-bar-duotone.svg'
import coffee from '../images/coffee-duotone.svg'
import pencil from '../images/pencil-duotone.svg'
import phoneoffice from '../images/phone-office-duotone.svg'
import usertie from '../images/user-tie-duotone.svg'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './landingpage.module.css'
import { useEffect } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const LandingPages = () => {
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
          offset={1}
          speed={1}
          style={{ backgroundColor: '#3F51B5' }}
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

        <ParallaxLayer offset={0.2} speed={0.5}>
          <img
            src={chart}
            style={{
              display: 'block',
              width: '40%',
              margin: '0 auto',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.3}>
          <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            Boost Conversions - Get more sales with a pro landing page
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={0.3}>
          <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            Your landing page web design has only one purpose: To get people to
            act, usually with a CTA button or by filling in your opt-in-form.
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.1}>
          <img
            src={question}
            style={{
              display: 'block',
              width: '9%',
              margin: '0 auto',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.27} speed={0.1}>
          <img
            src={user}
            style={{
              display: 'block',
              width: '10%',
              margin: '0 auto',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.47} speed={0.2}>
          <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            “The paradox of choice reveals that less is more. Too many options
            will often hinder people from making a choice.”
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={0.5}>
          <div
            style={{
              width: '90%',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gap: '40px',
              placeItems: 'end',
              gridTemplateRows: '100px',
            }}
          >
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
          <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            The design of a website is what drives our first impression 94% of
            the time. Because it only takes us fractions of a second to take it
            all in. We subconsciously decide whether we want to stick around or
            not in the blink of an eye.
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.1}>
          <div className={styles.testimonial1}>
              <img src={user}/>
              <h3>Arti Anand</h3>
              <p>Great website ! The parallax effect is so good</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.27} speed={0.2}>
          <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            “Use testimonials ”
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.0} speed={0.1}>
          <img
            src={question}
            style={{
              display: 'block',
              width: '9%',
              margin: '0 auto',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4.07} speed={0.1}>
          <img
            src={user}
            style={{
              display: 'block',
              width: '10%',
              margin: '0 auto',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4.07} speed={0.2}>
          <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            “Use High quality images. People are visual creatures. The design of
            a website is what drives our first impression 94% of the time.”
          </div>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default LandingPages
