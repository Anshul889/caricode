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

const getImages = graphql`
  {
    image: file(relativePath: { eq: "handshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "calendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
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
        <h2>why you need customer retention</h2>
        <div className={styles.why}>
          <div className={styles.inner}>
            <div>
              <h2>Cost Effective</h2>
              It's{' '}
              <a
                href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'rgb(18, 147, 154)',
                  textDecoration: 'underline',
                }}
              >
                5-25X more expensive
              </a>{' '}
              to acquire a new customer than it is to retain an existing
              customer.
            </div>
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
          </div>
        </div>
        <div className={styles.why}>
          <div className={styles.inner}>
            <h2>ROI</h2>A{' '}
            <a
              href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'rgb(18, 147, 154)',
                textDecoration: 'underline',
              }}
            >
              5% increase in customer retention
            </a>{' '}
            can increase company revenue by 25-95%.
            <FlexibleWidthXYPlot margin={{ left: 70, right: 30 }} height={300}>
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
              <YAxis title={'Revenue'} yDomain={[0, 300000]} tickTotal={6} />
              <LineSeries curve={'curveMonotoneX'} data={retentionrevenue} />
              <LineSeries data={acquisitionrevenue} />
            </FlexibleWidthXYPlot>
          </div>
        </div>
        <div className={styles.why}>
          <div className={styles.inner}>
            <h2>Loyalty</h2>
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
                        <img className={styles.refcart} src={shoppingcart} />
                      </div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <img className={styles.refcart} src={cashregister} />
              <img src={usertie} />
            </div>
            <div>
              Retained customers buy more often and spend more than newer
              customers. They've learned the value of a product or service and
              keep coming back, again and again.
            </div>
          </div>
        </div>
        <div className={styles.why}>
          <div className={styles.inner}>
            <h2>Referrals</h2>
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
                    from={{ transform: 'translate(100px, 0px)' }}
                    to={{
                      transform: isVisible
                        ? 'translate(0px, 0)'
                        : 'translate(100px, 0px)',
                    }}
                    config={config.molasses}
                    delay={500}
                  >
                    {props => <img src={user} style={props} />}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
            <div>
              Satisfied, loyal customers are more likely to sing a company's
              praises and refer their friends and family — bringing in new
              customers, free of charge.
            </div>
          </div>
        </div>
        <div className={styles.how}>
          <div>
            <div className={styles.inner}>
              <h2>how I will implement customer retention</h2>
            </div>
          </div>
          <div className={styles.customerexperience}>
            <div className={styles.inner}>
              <div className={styles.customerimage}>
                <img src={google} />
              </div>
              <h4>Improve customer experience</h4>
              <p>
                Delight users with a fast, responsive and visually stable
                website built with React and Google Cloud Platform. make it easy
                for them to get what they want quickly
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
              <p>Create a loyalty programme</p>
            </div>
          </div>
          <div>
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
          <div><div className={styles.inner}>
              <div className={styles.auth}>
                <button className={styles.googleauth}>Login with Google</button>
                <button className={styles.facebookauth}>Login with Facebook</button>
              </div>
              <h4>Authentication</h4>
            <p>incentivise customers to login and keep coming back</p>
            </div>
          </div>
          <li>offer incentives to share your product</li>
          <li>customers want value</li>
          <li>customers want to use their preffered payment system</li>
          <li>security</li>
        </div>
      </div>
      <div>
        <div className={styles.inner}>
          <h2>what i'll offer</h2>
          <table></table>
        </div>
      </div>
    </Layout>
  )
}

export default WebApplications
