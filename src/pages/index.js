import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import SectionTwo from '../components/SectionTwo'
import Contact from '../components/contact'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SEO from '../components/SEO'

export default () => (
 
  <Layout>
    <SEO />
    <Banner />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <Contact />
  </Layout>
)
