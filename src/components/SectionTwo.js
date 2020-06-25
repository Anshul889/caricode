import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring, config } from 'react-spring/renderprops'
import {
  FlexibleWidthXYPlot,
  LineMarkSeries,
  XAxis,
  YAxis,
} from 'react-vis'

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image2.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const datamf = [
  { x: new Date('Jan 1 2020').getTime(), y: 0 },
  { x: new Date('February 1 2020').getTime(), y: 5 },
  { x: new Date('March 1 2020').getTime(), y: 6 },
  { x: new Date('Apr 1 2020').getTime(), y: 2 },
  { x: new Date('May 1 2020').getTime(), y: 7 },
  { x: new Date('June 1 2020').getTime(), y: 3 },
  { x: new Date('July 1 2020').getTime(), y: 9 },
  { x: new Date('August 1 2020').getTime(), y: 3 },
  { x: new Date('September 1 2020').getTime(), y: 4 },
  { x: new Date('October 1 2020').getTime(), y: 4 },
  { x: new Date('November 1 2020').getTime(), y: 10 },
  { x: new Date('December 1 2020').getTime(), y: 5 },
]

const SectionTwo = () => {
  const data = useStaticQuery(getImages)
  return (
    <section id="section2">
      <div className="inner">
        <div className="section2grid">
          <div>
            <h2>
              Are you struggling to build an online presence
            </h2>
            <FlexibleWidthXYPlot margin={{ left: 60, right: 30 }} height={300}>
            <XAxis xType="time" />
            <YAxis title={'Users'}  yDomain={[0, 100]} />
            <LineMarkSeries
              curve={'curveMonotoneX'}
              yDomain={[0, 100]}
              data={datamf}
            />
          </FlexibleWidthXYPlot>
            <VisibilitySensor>
                {({ isVisible }) => (
            <Spring
            from={{ width: '1px', marginBottom: '20px' }}
            to={{ width: isVisible ?  '50px' : '1px', marginBottom: '20px' }}
            config={config.slow}
            delay={500}
          >
            {props => <div className="hero-feature-border" style={props}></div>}
          </Spring>
             )}
             </VisibilitySensor>
              <ul>
                <li>the whole first page is about how and why they're struggling online</li>
                <li>solutions to the problem</li>
                <li>high expactations of users of the web </li>
                <li>slow dev time</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
