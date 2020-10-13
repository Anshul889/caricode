import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import { Spring, config } from 'react-spring/renderprops'

const getImages = graphql`
  {
    banner: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Banner = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className="banner">
      <Image
        fluid={data.banner.childImageSharp.fluid}
        style={{ height: '100%', opacity: 0.3 }}
      />
      <div className="bannercontent">
        <h2>We Build, Deploy and Manage Progressive Web Apps</h2>
        <div className="hero-feature-border" ></div>
        <p>
          Take the online presence
          <br />
          of your business to the next level
        </p>
       <Link to="/#section2"><button>Get Started</button></Link>
       
      </div>
    </div>
  )
}
export default Banner
