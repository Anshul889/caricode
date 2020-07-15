import React from 'react'
import Layout from '../components/layout'
import styles from './webapplications.module.css'
import { HorizontalBarSeries, XAxis, YAxis, FlexibleWidthXYPlot, LineSeries, DiscreteColorLegend } from 'react-vis'

const WebApplications = () => {
  const retentioncost = [
    {x: 95, y: 'Acquisition'},
    {x: 5, y: 'Retention'}
  ]
  const retentionrevenue = [
    {x: 10, y: 5000},
    {x: 20, y: 12000},
    {x: 30, y: 22000},
    {x: 40, y: 47000},
    {x: 50, y: 110000},
    {x: 60, y: 290000}
  ]

  const acquisitionrevenue =[
    {x: 10, y: 5000},
    {x: 20, y: 10000},
    {x: 30, y: 15000},
    {x: 40, y: 20000},
    {x: 50, y: 25000},
    {x: 60, y: 30000}
  ]
  return (
    <Layout>
      <div>
        <div className={styles.inner}>
          <h2>why you need customer retention</h2>
            <div>
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
            <FlexibleWidthXYPlot margin={{left: 70, right: 30 }} height={100} yType="ordinal">
            <XAxis xDomain={[0, 120]} title={'Cost'}/>
            <YAxis tickTotal={2}/>
              <HorizontalBarSeries barWidth={0.7} xDomain={[0, 120]} data={retentioncost}/>
            </FlexibleWidthXYPlot>
            <div>
              ROI: A <a
                href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'rgb(18, 147, 154)',
                  textDecoration: 'underline',
                }}
              >5% increase in customer retention</a> can increase company
              revenue by 25-95%.
              <FlexibleWidthXYPlot margin={{left: 70, right: 30 }} height={300}>
              <DiscreteColorLegend
            style={{position: 'absolute', left: '100px', top: '10px'}}
            orientation="horizontal"
            items={[
              {
                title: 'Repeat Customers',
                color: '#12939A'
              },
              {
                title: 'Without',
                color: '#79C7E3'
              }
            ]}
          />
            <XAxis  title={'Time(months)'}/>
            <YAxis title={'Revenue'} yDomain={[0, 300000]}  tickTotal={6} />
              <LineSeries curve={'curveMonotoneX'} data={retentionrevenue}/>
              <LineSeries  data={acquisitionrevenue}/>
            </FlexibleWidthXYPlot>
            </div>
            <li>
              Loyalty: Retained customers buy more often and spend more than
              newer customers. They've learned the value of a product or service
              and keep coming back, again and again.
            </li>
            <li>
              Referrals: Satisfied, loyal customers are more likely to sing a
              company's praises and refer their friends and family — bringing in
              new customers, free of charge.
            </li>
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
