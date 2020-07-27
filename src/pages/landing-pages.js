import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
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
          style={{ backgroundColor: '#805E73' }}

        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />
         <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: '#805E73' }}

        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
        />
        </Parallax>

        
    </Layout>
  )
}

export default LandingPages
