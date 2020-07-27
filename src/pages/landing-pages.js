import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import chart from '../images/chart-line.svg'
import question from '../images/question.svg'
import user from '../images/user.svg'
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
      <Parallax className='container' style={{width: '100%', height: '100vh'}} pages={5}>
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
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
        />

        {/* svgs and text */} 
        
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={chart} style={{display: 'block', width: '40%', margin: '0 auto', transform: 'translateY(-130px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.15} speed={0.3}>
          <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>Boost Conversions - Get more sales with a pro landing page</div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0.3}>
          <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>Your landing page web design has only one purpose: To get people to act, usually with a CTA button or by filling in your opt-in-form.</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.1}  >
          <img src={question} style={{display: 'block', width: '9%', margin: '0 auto',  transform: 'translateY(-95px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.07} speed={0.1}  >
          <img src={user} style={{display: 'block', width: '10%', margin: '0 auto',  transform: 'translateY(-100px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.07} speed={0.2}>
          <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>“The paradox of choice reveals that less is more. Too many options will often hinder people from making a choice.”</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.0} speed={0.1}  >
          <img src={question} style={{display: 'block', width: '9%', margin: '0 auto',  transform: 'translateY(-95px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.07} speed={0.1}  >
          <img src={user} style={{display: 'block', width: '10%', margin: '0 auto',  transform: 'translateY(-100px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.07} speed={0.2}>
          <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>“The paradox of choice reveals that less is more. Too many options will often hinder people from making a choice.”</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.0} speed={0.1}  >
          <img src={question} style={{display: 'block', width: '9%', margin: '0 auto',  transform: 'translateY(-95px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.07} speed={0.1}  >
          <img src={user} style={{display: 'block', width: '10%', margin: '0 auto',  transform: 'translateY(-100px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.07} speed={0.2}>
          <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>“The paradox of choice reveals that less is more. Too many options will often hinder people from making a choice.”</div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.0} speed={0.1}  >
          <img src={question} style={{display: 'block', width: '9%', margin: '0 auto',  transform: 'translateY(-95px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.07} speed={0.1}  >
          <img src={user} style={{display: 'block', width: '10%', margin: '0 auto',  transform: 'translateY(-100px)'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.07} speed={0.2}>
          <div style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>“The paradox of choice reveals that less is more. Too many options will often hinder people from making a choice.”</div>
        </ParallaxLayer>

        </Parallax>

        
    </Layout>
  )
}

export default LandingPages
