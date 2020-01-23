import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image2.jpg" }) {
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
    <section className="section2">
      <div className="inner">
        <div className="section2grid">
          <div>
            <h2>Powered By Google Cloud Platform</h2>
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
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
