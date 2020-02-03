import SEO from '../components/SEO'
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'

import laptop from '../images/laptop.svg'
import mobile from '../images/mobile-duotone.svg'

const getImages = graphql`
  {
    image7: file(relativePath: { eq: "image7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "image8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
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
        description="At CariCode we develop your website so it can be accessed seamlessly
       across different devices: phones, qphablets, tablets,
       laptops, desktops, and more."
        pathname="/clean-design"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>CLEAN DESIGN</h1>
          </div>
          <div className="contentpage">
            <img src={mobile} alt="" height={100}/>
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
            <p>
              Make secondary tasks available through menus or “below the fold”
              Your mobile homepage should be focused on connecting users to the
              content they’re looking for. Our goal while designing navigation
              us for new and returning users to be able to figure out how to
              reach your digital product easily and efficiently.
            </p>
            <h4>2. Keep Menus Short and Sweet</h4>
            <p>
              Mobile users don’t like to scroll through a long list of options
              to find what they want. Reorganize your menu to use as few items
              as possible, while maintaining key functionality
            </p>
            <h4>3. Make it easy to get back to the home page</h4>
            <p>
              Users expect to go back to the homepage when they tap the logo in
              the top-left of a mobile page
            </p>
            <h4>4. Commerce and Conversion</h4>
            <p>
              Understand your customer journeys and let users convert on their
              own terms.Let users explore before they commit
            </p>
            <h4>5. Calls to Action</h4>
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
