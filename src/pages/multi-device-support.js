import SEO from '../components/SEO'
import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'

import laptop from '../images/laptop.svg'
import mobile from '../images/mobile-duotone.svg'
import { RadialChart } from 'react-vis/dist'

const getImages = graphql`
  {
    image5: file(relativePath: { eq: "image5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "image6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const MultiDeviceSupport = () => {
  const data = useStaticQuery(getImages);
  const [myData, setData] = useState([{angle: 1, label:'Mobile'}, {angle: 1, label:'Desktop'}, {angle: 1, label:'Tablet'}]);
  useEffect(() => {
    setTimeout(() => setData([{angle: 5.1, label:'Mobile'}, {angle: 4.7, label:'Desktop'}, {angle: 0.2, label:'Tablet'}]), 300)
  })
  return (
    <Layout>
      <SEO
        title={'Multi Device Support'}
        description="At CariCode we develop your website so it can be accessed seamlessly
       across different devices: phones, phablets, tablets,
       laptops, desktops, and more."
        pathname="/multi-device-support"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>MULTI DEVICE SUPPORT</h1>
          </div>
          <div className="contentpage">
          <div style={{margin : '0 auto', maxWidth:"300px", textAlign:'center'}}>
          <RadialChart data={myData} width={300} height={300} animation='gentle'  showLabels />
          <p style={{fontSize: '12px', marginTop:'5px' }}>Web usage across devices</p>
          </div>
            <p>
              At Caricode we offer multi-device support for your website. Users
              are increasingly accessing the web through their mobile, however
              most of the web isn’t optimized for mobile devices. Mobile devices
              are often constrained by display size and require a different
              approach to how content is laid out on the screen.
            </p>
            <p>
              At CariCode we develop your website so it can be accessed
              seamlessly across different devices: phones, phablets, tablets,
              laptops, desktops, and more. Screen sizes are always changing, so
              its important to us that your site can adapt to any screen size,
              today or in the future.
            </p>

            {/* image of phone and laptop */}
            <p>
              All our web applications are built using Responsive web design.
              Originally defined by Ethan Marcotte in A List Apart, Responsive
              web design responds to the needs of the users and the devices
              theyre using. The layout changes based on the size and
              capabilities of the device. For example, on a phone users would
              see content shown in a single column view; a tablet might show the
              same content in two columns.
            </p>
            <p>
              We ensure your website is optimised across all devices. Our
              responsive designs work behind-the-scenes to give a user a
              seamless experience no matter what device they choose.
            </p>
          </div>
          <div className="sidebar">
            <div className="side1">
              <Link to="/base_technologies">
                <Image
                  fluid={data.image5.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/base-technologies/">Base Technologies</Link>
              </h3>
              <p>
                Built with React JS, a scalable technology developed and
                maintained by Facebook. Used by all major technology firms,
                Uber, Twitter, Netlfix and Airbnb.
              </p>
            </div>
            <div className="side1">
              <Link to="/clean-design">
                <Image
                  fluid={data.image6.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/clean-design">Clean Design</Link>
              </h3>
              <p>
                Mobile users are very goal-oriented. They expect to be able to
                get what they need, immediately, and on their own terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MultiDeviceSupport
