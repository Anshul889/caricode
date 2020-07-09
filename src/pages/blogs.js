import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from './blogs.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import Image from 'gatsby-image'
import {
  RadialChart,
  LineSeries,
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
} from 'react-vis'

const getImages = graphql`
  {
    image17: file(relativePath: { eq: "image17.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Ecommerce = () => {
  const myData = [
    { angle: 1, label: 'Paid' },
    { angle: 4, label: 'Organic' },
  ]
  const mysearchData = [
    { angle: 1, label: 'Other' },
    { angle: 9, label: 'Search Engine' },
  ]

  const ctrdata = [
    { x: 1, y: 31 },
    { x: 2, y: 24 },
    { x: 3, y: 18 },
    { x: 4, y: 13 },
    { x: 5, y: 9 },
    { x: 6, y: 6 },
    { x: 7, y: 4 },
    { x: 8, y: 3 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
  ]
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/ecommerce/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <div className={styles.main}>
        <div>
          <h1>
            Want more traffic to your website ? Organic search is the golden
            ticket.
          </h1>
          <h2>93% of online experiences begin with a search engine.</h2>
          <div className={styles.organicclicks}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  from={{ opacity: 0 }}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                  config={config.molasses2}
                  delay={800}
                >
                  {props => (
                    <RadialChart
                      data={mysearchData}
                      animation={{ damping: 40, stiffness: 120 }}
                      width={300}
                      height={300}
                      showLabels
                      style={props}
                    />
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <h2>95% of users don’t scroll past the 5th result.</h2>
          <FlexibleWidthXYPlot margin={{ left: 30, right: 30 }} height={300}>
            <XAxis title="Position" />
            <YAxis title={'Click Through Rate'} yDomain={[0, 100]} />
            <LineSeries
              curve={'curveMonotoneX'}
              yDomain={[0, 100]}
              data={ctrdata}
            />
          </FlexibleWidthXYPlot>
          <h2>
            70-80% of people ignore paid search results, choosing to only click
            on organic listings.
          </h2>
          <div className={styles.organicclicks}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  from={{ opacity: 0 }}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                  config={config.molasses}
                  delay={800}
                >
                  {props => (
                    <RadialChart
                      data={myData}
                      animation={{ damping: 40, stiffness: 120 }}
                      width={300}
                      height={300}
                      showLabels
                      style={props}
                    />
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <h2>CTR changes based on position</h2>
          <table>
            <tr>
              <th>Position Change</th>
              <th>CTR Change</th>
            </tr>
            <tr>
              <td>2 &#8594; 1</td>
              <td className={styles.increase}>&#8593; 28.4%</td>
            </tr>
            <tr>
              <td>3 &#8594; 2</td>
              <td className={styles.increase}>&#8593; 32.4%</td>
            </tr>
            <tr>
              <td>4 &#8594; 3</td>
              <td className={styles.increase}>&#8593; 37.2%</td>
            </tr>
            <tr>
              <td>5 &#8594; 4</td>
              <td className={styles.increase}>&#8593; 43.1%</td>
            </tr>
            <tr>
              <td>6 &#8594; 5</td>
              <td className={styles.increase}>&#8593; 53.2%</td>
            </tr>
            <tr>
              <td>7 &#8594; 6</td>
              <td className={styles.increase}>&#8593; 49.3%</td>
            </tr>
            <tr>
              <td>8 &#8594; 7</td>
              <td className={styles.increase}>&#8593; 33%</td>
            </tr>
          </table>
        </div>
        <h3>5 things you can do for ranking higher on SEO</h3>
        <div>
          Good content marketing provides the following: Ideas Inspiration Tips
          and tricks Education.
                    <br />
          Consumers want transparency. They want to see who you really are.<br />
          Customers want to interact and get to know a brand. A company’s blog (or social accounts) can help show consumers who they really are.
        </div>
        <div className={styles.snippets}>
          <h3>Rich Snippets</h3>
          <Image
            fluid={data.image17.childImageSharp.fluid}
            style={{ borderRadius: '10px' }}
          />
          Studies show that having a rich snippet can increase click-through
          rates (CTR) by 677% and drive 20-40% more traffic than product links
          without them.
        </div>
        <div>Importance of social sharing</div>
        <div>Blogs need constant updates to stay ahead of the competition</div>
        <div>search algorithm updates</div>
      </div>
    </Layout>
  )
}

export default Ecommerce
