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
        <div className="hero-feature-border"></div>
        <p>
          Take the online presence
          <br />
          of your business to the next level
        </p>
        <div>
          <button
            onClick={() =>
              window.scrollTo({
                top: 700,
                left: 0,
                behavior: 'smooth',
              })
            }
            className="getmbutton"
          >
            Get Started
          </button>
          <button
            onClick={() =>
              window.scrollTo({
                top: 800,
                left: 0,
                behavior: 'smooth',
              })
            }
            className='getdbutton'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
export default Banner
