import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    image7: file(relativePath: { eq: "image7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "image8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image9: file(relativePath: { eq: "image9.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image10: file(relativePath: { eq: "image10.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image11: file(relativePath: { eq: "image11.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image12: file(relativePath: { eq: "image12.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image13: file(relativePath: { eq: "image13.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image14: file(relativePath: { eq: "image14.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LandingPages = () => {
  const data = useStaticQuery(getImages)
  return (
    <div>
     <h2>Website up in 5 days</h2>
     <h2>Price &#x20B9; 3000 per month</h2>
     <h2>On Scroll animations</h2>
     <h2>Seo Tags</h2>
    </div>
  )
}

export default LandingPages
