import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import './pagelayout.css'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const webperformance = () => {
  return (
    <Layout>
      <SEO
        title={'Web Performance'}
        description="Performance plays a significant role in the
        success of any online venture, as high performing sites engage and
        retain users better than poorly performing ones."
        pathname="/web-performance"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>WEB PERFORMANCE</h1>
          </div>
          <div className="contentpage">
            <p>
              At CariCode we believe web performance is crucial for your
              business and fundamental to good user experience. It is crucial
              that your sites user experience is fast and responsive to
              users.Performance is critical for users accessing your site using
              their mobile device. Mobile users make up a large portion of
              global internet users. Many of these users access the web over
              varying networks.
            </p>
            <p>
              Performance is one of the key challenges faced by most businesses
              on the web. Websites and apps are richer in functionality than
              ever before. As a result, they've become more demanding of network
              and device resources. Businesses need to achieve a high level of
              performance on their websites across a variety of network
              conditions and devices.
            </p>
            <p>
              Performance issues range from small issues like slow sites and
              applications with slight delays that hinder users for only brief
              moments to completely inaccessible websites.
            </p>
            <h3>Web Performance is key in retaining users</h3>
            <p>
              At Caricode we want your users to interact meaningfully with what
              we build for you. Performance plays a significant role in the
              success of any online venture, as high performing sites engage and
              retain users better than poorly performing ones.
            </p>
            <p>
              Because business is highly competitive, we want you to be
              knowledgeable of how your competitors are doing online. In a
              Google study it was found that sites loading within 5 seconds had
              70% longer sessions, 35% lower bounce rates, and 25% higher ad
              viewability than sites taking nearly four times longer at 19
              seconds. To get a idea of how your site's performance compares
              with the competition, check out the Speed Scorecard tool.
            </p>
            <p>
              Here's a snapshot of how our site Caricode scores on the same tool
            </p>
            <p>
              <b>Web Performance is key to improving conversions.</b> Retaining
              users is crucial to improving your conversions. If you run an
              online business, conversions are the goal and performance is very
              critical. The speed of your site has an impact on your revenue.
              Here are some examples of how performance has played a role on the
              financials of a business
            </p>
            <div className="pwaexamplediv">
              <div className="pwaexampleheader">
                <h4>
                  A number of companies have succeeded with improving the speed
                  of a website
                </h4>
              </div>
              <div className="pwaexamples">
                <div className="pwaexample">
                  <h5>Mobify</h5>
                  <p>
                    Every 100ms decrease in homepage load speed worked out to a
                    1.11% increase in session-based conversion, yielding an
                    average annual revenue increase of nearly $380,000.
                    Additionally, a 100ms decrease in checkout page load speed
                    amounted to a 1.55% increase in session-based conversion,
                    which in turn yielded an average annual revenue increase of
                    nearly $530,000.
                  </p>
                </div>
                <div className="pwaexample">
                  <h5>AutoAnything</h5>
                  <p>
                    When AutoAnything reduced page load time by half, they saw a
                    boost of 12-13% in sales.
                  </p>
                </div>
                <div className="pwaexample">
                  <h5>Pinterest</h5>
                  <p>
                    Pinterest rebuilt their pages for performance realizing a
                    40% reduction in perceived wait times, thus increasing both
                    search engine traffic and sign-ups by 15%.
                  </p>
                </div>
                <div className="pwaexample">
                  <h5>COOK</h5>
                  <p>
                    By cutting average page load time by 850 milliseconds, COOK
                    found they were able to increase conversions by 7%, decrease
                    bounce rates by 7%, and increase pages per session by 10%.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="side1">
              {/* <Link to="/multi_device_support"><img src={pic03} alt=''/></Link> */}
              <h3>
                <Link to="/multi_device_support">Multi Device Support</Link>
              </h3>
              <p>
                Our responsive designs work behind-the-scenes to give a user a
                seamless experience no matter what device they choose.
              </p>
            </div>
            <div className="side1">
              {/* <Link to="/base_technologies"><img src={pic04} alt='' /></Link> */}
              <h3>
                <Link to="/base_technologies">Base Technologies</Link>
              </h3>
              <p>
                At CariCode, we build all our web applications with React JS, a
                scalable technology developed and maintained by Facebook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default webperformance
