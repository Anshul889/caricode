import SEO from '../components/SEO'
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'

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

const CleanDesign = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO
        title={'Clean Design'}
        description="48% of people determine the
        credibility of a business by its website design. Mobile users are
        goal-oriented. Speed is important and they expect to get what they
        need, instantaneously."
        pathname="/clean-design"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>Clean Design</h1>
          </div>
          <div className="contentpage">
            <p>
              At CariCode we believe simple designs are better. According to
              research published by Blue Corona, 48% of people determine the
              credibility of a business by its website design. Mobile users are
              goal-oriented. Speed is important and they expect to get what they
              need, instantaneously.
            </p>
            <h3>
              At CariCode every website we create is based on these important
              principles:
            </h3>
            <h4>1. Home page and site navigation</h4>
            <div className="designimages">
              <Image
                fluid={data.image10.childImageSharp.fluid}
                style={{ marginBottom: '14px',  gridColumn: '1 / span 2' }}
              />
            </div>
            <p>
              Make secondary tasks available through menus or “below the fold”
              Your mobile homepage should be focused on connecting users to the
              content they’re looking for. Our goal while designing navigation
              us for new and returning users to be able to figure out how to
              reach your digital product easily and efficiently.
            </p>
            <h4>2. Keep Menus Short and Sweet</h4>
            <div className="designimages">
              <Image
                fluid={data.image9.childImageSharp.fluid}
                style={{ marginBottom: '14px',  gridColumn: '1 / span 2' }}
              />
            </div>
            <p>
              Mobile users don’t like to scroll through a long list of options
              to find what they want. Reorganize your menu to use as few items
              as possible, while maintaining key functionality
            </p>
            <h4>3. Make it easy to get back to the home page</h4>
            <div className="designimages">
              <Image
                fluid={data.image10.childImageSharp.fluid}
                style={{ marginBottom: '14px', gridColumn: '1 / span 2' }}
              />
            </div>
            <p>
              Users expect to go back to the homepage when they tap the logo in
              the top-left of a mobile page, and they become frustrated when it
              isn’t available or doesn’t work.
            </p>
            <h4>4. Commerce and Conversion</h4>
            <div className="designimages" style={{width: '70%'}}>
              <Image
                fluid={data.image11.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <Image
                fluid={data.image12.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
            </div>
            <p>
              Understand your customer journeys and let users convert on their
              own terms.Let users explore before they commit
            </p>
            <h4>5. Calls to Action</h4>
            <div className="designimages" style={{width: '70%'}}>
              <Image
                fluid={data.image13.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <Image
                fluid={data.image14.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
            </div>

            <p>Keep calls to action front and center.</p>
          </div>
          <div className="sidebar">
            <div className="side1">
              <Link to="/customised-functionality">
                <Image
                  fluid={data.image7.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/customised-functionality">
                  Customised Functionality
                </Link>
              </h3>
              <p>
                Custom Navigation for the Web and Mobile, Authentications, Blog,
                Offline support, Easily manage your content
              </p>
            </div>
            <div className="side1">
              <Link to="progressive-web-apps/">
                <Image
                  fluid={data.image8.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="progressive-web-apps/">Progressive Web Apps</Link>
              </h3>
              <p>
                A high-quality Progressive Web App has incredible benefits,
                making it easy to delight your users, grow engagement and
                increase conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CleanDesign
