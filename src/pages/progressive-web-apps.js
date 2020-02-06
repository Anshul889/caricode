import SEO from '../components/SEO'
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import { Spring, config } from 'react-spring/renderprops'

import mobile from '../images/mobile-duotone.svg'
import check from '../images/check.svg'
import cross from '../images/cross.svg'
import playstore from '../images/playstore.svg'
import chrome from '../images/chrome.svg'

const getImages = graphql`
  {
    image4: file(relativePath: { eq: "image4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProgressiveWebApp = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO
        title={'Progressive Web Apps'}
        description="Transitioning your business from a website to a Progressive Web App offers major benefits, most importantly, superior performance and increased conversions. Our Progressive Web Apps are responsive, fast, and connection-independent."
        pathname="/progressive-web-apps"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>PROGRESSIVE WEB APPS</h1>
          </div>
          <div className="contentpage">
            <p>
              A high-quality Progressive Web App has incredible benefits, making
              it easy to delight your users, grow engagement and increase
              conversions.
            </p>
            <p>
              User experience on the internet has transitioned from static
              websites, to dynamic websites (allowing users to have more
              interactions) to native mobile applications (smooth transitions
              between pages, and better offline experience that native apps
              offered) to web applications. The concept of website has become
              obsolete and the term Wep App has replaced it.
            </p>
            <div className="pwaimg">
              <div style={{ position: 'relative' }}>
                <img src={mobile} alt="" height={100} />
                <img className="pwaicon" src={check} alt="" />
                <img className="pwaappicon" src={chrome} alt=""/>
              </div>
              <div style={{ position: 'relative' }}>
                <img src={mobile} alt="" height={100} />
                <img className="pwaicon" src={cross} alt="" />
                <img className="pwaappicon" src={playstore} alt=""/>
              </div>
            </div>

            <p>
              For businesses globally
              <b>60-70 percent of traffic comes from mobile browsers</b>. Users
              don’t want to download and install a native app unless they feel
              they would use it every day. Globally businesses are transitioning
              from website to web apps which are being created on a daily basis
            </p>
            <p>
              The term <b>Progressive Web apps</b> is used to describe
              <b>
                web apps that use new features supported by modern browsers.
              </b>
            </p>
            <p>
              At Caricode we build progressive web apps that deliver
              <b>
                high performance, engaging, native-like experience, and the
                ability to work offline
              </b>
              . Users like apps that work, yet they like apps that work fast and
              provide the best experience even more.
            </p>
            <p>
              Transitioning your business from a website to a Progressive Web
              App offers major benefits, most importantly, superior performance
              and increased conversions. Our Progressive Web Apps are
              <b>responsive, fast, and connection-independent.</b>
            </p>
            <p>
              Other Advantages of building a progressive web app instead of a
              website for your business include:
            </p>
            <ul>
              <li>Ease of access compared to a website or native app</li>
              <li>SEO optimised and supported by Google</li>
              <li>Always up to date</li>
              <li>Scalable and efficient</li>
              <li>Offline support</li>
              <li>Push Notifications</li>
              <li>Geolocation Support</li>
              <li>
                Secure, each page has be served over HTTPS, which offer better
                encryption and is promoted by Google as an SEP
              </li>
              <li>Access to camera and Microphone</li>
            </ul>
              <div className="pwaexampleheader">
                <h4>
                  A number of companies have succeeded with Progressive Web
                  Apps:
                </h4>
                  <h5>Twitter</h5>
                  <p>
                    The Twitter Lite Progressive Web App became the default
                    mobile web experience for all users globally in April 2017,
                    which resulted in:
                  </p>
                  <ul>
                    <li>65% increase in pages per session</li>
                    <li>75% increase in Tweets sent</li>
                    <li>20% decrease in bounce rate</li>
                  </ul>

                  <h5>Flipkart</h5>
                  <p>
                    Flipkart, India’s largest e-commerce site, decided to
                    combine their web presence and native app into a Progressive
                    Web Application, resulting in a 70% increase in conversions.
                  </p>
                  <h5>Wego</h5>
                  <p>
                    After building a PWA, the travel company Wego noticed a 26%
                    increase in the number of users, a 95% increase in
                    conversions on Android, and a 50% increase on iOS.
                  </p>
                  <h5>BookMyShow</h5>
                  <p>
                    BookMyShow India’s largest ticketing firm, with 50+ million
                    monthly visitors, developed an improved version of their
                    mobile website using a Progressive Web App (PWA), delivering
                    an 80+% increase in conversions, which means more users
                    purchasing tickets.
                  </p>
            </div>
          </div>
          <div className="sidebar">
            <div className="side1">
              <Link to="/multi-device-support">
                <Image
                  fluid={data.image3.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/multi-device-support">Multi Device Support</Link>
              </h3>
              <p>
                A multitude of different screen sizes exist across phones,
                tablets, and PC's. Screen sizes are always changing, so it's
                important that your site can adapt to any screen size, today or
                in the future.
              </p>
            </div>
            <div className="side1">
              <Link to="/base-technologies">
                <Image
                  fluid={data.image4.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/base-technologies">Base Technologies</Link>
              </h3>
              <p>
                Built with React JS, a scalable technology developed and
                maintained by Facebook. Used by all major technology firms,
                Uber, Twitter, Netlfix and Airbnb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProgressiveWebApp
