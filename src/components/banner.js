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
        <h2>Build, Deploy and Manage Progressive Web Apps</h2>
        <Spring
          from={{ width: '0px', marginBottom: '20px' }}
          to={{ width: '100px', marginBottom: '20px' }}
          config={config.slow}
          delay={500}
        >
          {props => <div className="hero-feature-border" style={props}></div>}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: 'translateY(20px)', marginBottom: '20px' }}
          to={{ opacity : 1,transform: 'translateY(0px)', marginBottom: '20px' }}
          config={config.slow}
          delay={1000}
        >
          {props => <p style={props}>
          Take the online presence
          <br />
          of your finance business to the next level
        </p>}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: 'translateY(10px)' }}
          to={{ opacity : 1,transform: 'translateY(0px)' }}
          delay={1200}
        >
          {props => <Link to="/#section2"><button style={props}>Get Started</button></Link>}
        </Spring>
      </div>
    </div>
  )
}
export default Banner
