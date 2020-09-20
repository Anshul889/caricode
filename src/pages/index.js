import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Contact from '../components/contact'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SEO from '../components/SEO'
import 'react-vis/dist/style.css';

export default () => (
 
  <Layout>
    <SEO />
    <Banner />
    <SectionThree />
    <SectionFour />
    <Contact />
  </Layout>
)
