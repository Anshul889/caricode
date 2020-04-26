import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring, config } from 'react-spring/renderprops'

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

const SectionTwo = () => {
  const data = useStaticQuery(getImages)
  return (
    <section id="section2">
      <div className="inner">
        <div className="section2grid">
          <div>
            <h2>
              Why the customer needs a strong online presence
            </h2>
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
