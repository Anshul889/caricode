import React from 'react'
import Layout from '../components/layout'
import styles from './webapplications.module.css'
import user from '../images/user.svg'
import shoppingcart from '../images/shopping-cart.svg'
import usertie from '../images/user-tie.svg'
import cashregister from '../images/register.svg'
import thumbs from '../images/thumbsup.svg'
import users from '../images/users.svg'
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

const WebApplications = () => {
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
            <div>
              Retained customers buy more often and spend more than newer
              customers. They've learned the value of a product or service and
              keep coming back, again and again.
            </div>
            <div className={styles.loyalty}>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ transform: 'translate(-100px, 0px)' }}
                    to={{
                      transform: isVisible
                        ? 'translate(0, 0)'
                        : 'translate(-100px, 0px)',
                    }}
                    config={config.molasses}
                    delay={1500}
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
          </div>
        </div>
        <div className={styles.why}>
          <div className={styles.inner}>
            <div>
              <b>Referrals</b>: Satisfied, loyal customers are more likely to
              sing a company's praises and refer their friends and family —
              bringing in new customers, free of charge.
            </div>
            <div className={styles.referralanimation}>
              <img src={users} />
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ opacity: 0 }}
                    to={{
                      opacity: isVisible ? 1 : 0,
                    }}
                    config={config.molasses}
                    delay={3000}
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
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ transform: 'translate(100px, 0px)' }}
                    to={{
                      transform: isVisible
                        ? 'translate(10px, 0)'
                        : 'translate(100px, 0px)',
                    }}
                    config={config.molasses}
                    delay={1500}
                  >
                    {props => <img src={user} style={props} />}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.inner}>
            <h2>how you can implement customer retention in theory</h2>
            <ul>
              <li>subscription based with free 6 months</li>
              <li>incentivise customers to login and keep coming back</li>
              <li>email marketing</li>
              <li>make it easy for them to get what they want quickly </li>
              <li>offer incentives to share your product</li>
              <li>customers want value</li>
              <li>customers want to use their preffered payment system</li>
              <li>security</li>
              <li>create customer loyalty programs</li>
              <li>
                focus of improving customer experience for existing customers
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.inner}>
            <h2>what i'll offer</h2>
            <table></table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebApplications
