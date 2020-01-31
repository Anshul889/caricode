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
              Get an app that looks like something Google or Facebook made
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
            <p>
              Cloud Firestore is a fast, fully managed, serverless, cloud-native
              NoSQL document database that simplifies storing, syncing, and
              querying data for your mobile, web, and IoT apps at global scale.
              Its client libraries provide live synchronization and offline
              support, while its security features and integrations with
              Firebase and Google Cloud Platform (GCP) accelerate building truly
              serverless apps.
            </p>
          </div>
          <div className="phone">
            <Image fluid={data.fluid.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
