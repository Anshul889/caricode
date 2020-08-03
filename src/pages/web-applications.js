import React from 'react'
import Layout from '../components/layout'
import styles from './webapplications.module.css'
import user from '../images/user.svg'
import shoppingcart from '../images/shopping-cart.svg'
import usertie from '../images/user-tie.svg'
import cashregister from '../images/register.svg'
import thumbs from '../images/thumbsup.svg'
import users from '../images/users.svg'
import comment from '../images/comment.svg'
import google from '../images/google.svg'
import sg from '../images/sg.png'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring, config } from 'react-spring/renderprops'
import {
  HorizontalBarSeries,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
  LineSeries,
  DiscreteColorLegend,
} from 'react-vis'
import SEO from '../components/SEO'
import Webappbanner from '../components/webappbanner'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "handshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "calendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "payment.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "functions.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WebApplications = () => {
  const data = useStaticQuery(getImages)
  const retentioncost = [
    { x: 95, y: 'Acquisition' },
    { x: 5, y: 'Retention' },
  ]
  const retentionrevenue = [
    { x: 10, y: 5000 },
    { x: 20, y: 12000 },
    { x: 30, y: 22000 },
    { x: 40, y: 47000 },
    { x: 50, y: 110000 },
    { x: 60, y: 290000 },
  ]

  const acquisitionrevenue = [
    { x: 10, y: 5000 },
    { x: 20, y: 10000 },
    { x: 30, y: 15000 },
    { x: 40, y: 20000 },
    { x: 50, y: 25000 },
    { x: 60, y: 30000 },
  ]
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/web-appications/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <div>
        <Webappbanner />
        <div className={styles.firstheader}>
          <h4>
            Customer retention is a strong predictor of a firm's financial
            success
          </h4>
        </div>
        <div className={styles.whycontainer}>
          <div className={styles.whyinner}>
            <div className={styles.why}>
              <div className={styles.inner}>
                <div>
                  <FlexibleWidthXYPlot
                    margin={{ left: 70, right: 30 }}
                    height={100}
                    yType="ordinal"
                  >
                    <XAxis xDomain={[0, 120]} title={'Cost'} />
                    <YAxis tickTotal={2} />
                    <HorizontalBarSeries
                      barWidth={0.7}
                      xDomain={[0, 120]}
                      data={retentioncost}
                    />
                  </FlexibleWidthXYPlot>
                  <h4 className={styles.costeffectiveh}>Cost Effective</h4>
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <Spring
                        from={{ width: '1px', marginBottom: '20px' }}
                        to={{
                          width: isVisible ? '50px' : '1px',
                          marginBottom: '20px',
                        }}
                        config={config.slow}
                        delay={500}
                      >
                        {props => (
                          <div
                            className="hero-feature-border"
                            style={props}
                          ></div>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <p>
                    It's{' '}
                    <a
                      href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#7c759a',
                        textDecoration: 'underline',
                      }}
                    >
                      5-25X more expensive
                    </a>{' '}
                    to acquire a new customer than it is to retain an existing
                    customer.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.why2}>
              <div className={styles.inner}>
                <FlexibleWidthXYPlot
                  margin={{ left: 70, right: 30 }}
                  height={300}
                >
                  <DiscreteColorLegend
                    style={{
                      position: 'absolute',
                      left: '100px',
                      top: '10px',
                      opacity: '1',
                    }}
                    orientation="horizontal"
                    items={[
                      {
                        title: 'Repeat Customers',
                        color: '#12939A',
                      },
                      {
                        title: 'Without',
                        color: '#79C7E3',
                      },
                    ]}
                  />
                  <XAxis title={'Time(months)'} />
                  <YAxis
                    title={'Revenue'}
                    yDomain={[0, 300000]}
                    tickTotal={6}
                  />
                  <LineSeries
                    curve={'curveMonotoneX'}
                    data={retentionrevenue}
                  />
                  <LineSeries data={acquisitionrevenue} />
                </FlexibleWidthXYPlot>
                <h4>ROI</h4>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px' }}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={500}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                A{' '}
                <a
                  href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#7c759a',
                    textDecoration: 'underline',
                  }}
                >
                  5% increase in customer retention
                </a>{' '}
                can increase company revenue by 25-95%.
              </div>
            </div>
            <div className={styles.why}>
              <div className={styles.inner}>
                <div className={styles.loyalty}>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ transform: 'translate(-100px, 0px)' }}
                        to={{
                          transform: isVisible
                            ? 'translate(0, 0)'
                            : 'translate(-100px, 0px)',
                        }}
                        config={config.molasses}
                        delay={500}
                      >
                        {props => (
                          <div className={styles.usercart} style={props}>
                            <img src={user} />
                            <img
                              className={styles.refcart}
                              src={shoppingcart}
                            />
                          </div>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <img className={styles.refcart} src={cashregister} />
                  <img src={usertie} />
                </div>
                <h4>Loyalty</h4>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px' }}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={500}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                <p>
                  Retained customers buy more often and spend more than newer
                  customers. They've learned the value of a product or service
                  and keep coming back, again and again.
                </p>
              </div>
            </div>
            <div className={styles.why}>
              <div className={styles.inner}>
                <div className={styles.referralanimation}>
                  <img src={users} />
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        config={config.molasses}
                        delay={2800}
                      >
                        {props => (
                          <img
                            className={styles.refthumb}
                            src={thumbs}
                            style={props}
                          />
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        config={config.molasses}
                        delay={1700}
                      >
                        {props => (
                          <img
                            src={comment}
                            style={props}
                            className={styles.comment}
                          />
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ transform: 'translate(80px, 0px)' }}
                        to={{
                          transform: isVisible
                            ? 'translate(0px, 0)'
                            : 'translate(80px, 0px)',
                        }}
                        config={config.molasses}
                        delay={500}
                      >
                        {props => <img src={user} style={props} />}
                      </Spring>
                    )}
                  </VisibilitySensor>
                </div>
                <h4>Referrals</h4>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px' }}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={500}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>

                <p>
                  Satisfied, loyal customers are more likely to sing a company's
                  praises and refer their friends and family — bringing in new
                  customers, free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h4
          style={{
            textAlign: 'center',
            padding: '38px 0',
            borderBottom: '1px solid white',
          }}
        >
          <div className={styles.inner}>Single case study of why</div>
        </h4>
        <div className={styles.secondheader}>
        <h4>
            How customer retention can be implemented for the web
        </h4>
        </div>
        <div className={styles.howcontainer}>
          <div className={styles.howinner}>
            <div className={styles.customerexperience}>
              <div className={styles.inner}>
                <div className={styles.customerimage}>
                  <img src={google} />
                </div>
                <h4>Improve customer experience</h4>
                <p>
                  Delight users with a fast, responsive and visually stable
                  website built with React and Google Cloud Platform. make it
                  easy for them to get what they want quickly
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <img src={sg} />
                </div>
                <h4>Email Automation</h4>
                <p>
                  Automate email newsletters, promotional emails, shipping
                  notifications with send grid. Partner with the email service
                  trusted by developers and marketers for time-savings,
                  scalability, and delivery expertise.
                </p>
              </div>
            </div>
            <div className={styles.loyaltyhow}>
              <div className={styles.inner}>
                <div className={styles.loyaltyimage}>
                  <Image
                    fluid={data.image.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </div>
                <h4>Loyalty Programme</h4>
                <p>
                  Reward your customers for continuing to shop with you. Give
                  them the option to sign up for a loyalty program. However you
                  want to structure the program is fine, just make sure the
                  rules are clear. Common programs include one point for every
                  dollar spent, points earned for sharing on social media, or
                  points earned for referring friends.
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.loyaltyimage}>
                  <Image
                    fluid={data.image1.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </div>
                <h4>Subscription based with 6 months trial</h4>
                <p>
                  Automate email newsletters, promotional emails, shipping
                  notifications with send grid. Partner with the email service
                  trusted by deve
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.auth}>
                  <button className={styles.googleauth}>
                    Login with Google
                  </button>
                  <button className={styles.facebookauth}>
                    Login with Facebook
                  </button>
                </div>
                <h4>Authentication</h4>
                <p>incentivise customers to login and keep coming back</p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.howrefer}>
                  <VisibilitySensor offset={{ bottom: 150 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        delay={800}
                      >
                        {props => (
                          <div className={styles.reftext} style={props}>
                            Refer a friend
                          </div>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        delay={1500}
                      >
                        {props => (
                          <div style={props}>
                            Get 10% off on your next purchase
                          </div>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        delay={2000}
                      >
                        {props => (
                          <div className={styles.refform} style={props}>
                            <input
                              placeholder={'Email'}
                              className={styles.referralinput}
                            />
                            <button className={styles.refinvite}>Invite</button>
                          </div>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                </div>
                <h4>Reward you Referrals</h4>
                <p>
                  <a
                    href="https://www.disruptiveadvertising.com/marketing/referral-marketing/#:~:text=Consumers%20are%204x%20more%20likely,than%20those%20who%20don't."
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'rgb(18, 147, 154)',
                      textDecoration: 'underline',
                    }}
                  >
                    Consumers are 4x more likely
                  </a>{' '}
                  to purchase something when referred by a friend. Word of mouth
                  marketing is believed to be behind 20-50% of all purchasing
                  decisions. B2B businesses with referral programs have 69%
                  faster closing times on sales and approximately 70% higher
                  conversion rates than those who don't.
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.loyaltyimage}>
                  <Image
                    fluid={data.image2.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </div>
                <h4>Payments</h4>
                <p>
                  Making it as easy as possible for your customers to pay is
                  essential for increasing conversions and sales. This is why
                  your checkout page is critical. It’s the final stop for people
                  shopping on your website. It’s the place where they hand over
                  their credit card information and finally part with their
                  hard-earned cash.
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.loyaltyimage}>
                  <Image
                    fluid={data.image3.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </div>
                <h4>Security</h4>
                <p>
                  In many cases, application logic is best controlled on the
                  server to avoid tampering on the client side. Cloud Functions
                  is fully insulated from the client, so you can be sure its
                  functions are private and secure and can’t be reverse
                  engineered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.inner}>
          <h4>what i'll offer</h4>
          <table></table>
        </div>
      </div>
    </Layout>
  )
}

export default WebApplications
