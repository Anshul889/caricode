import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    image3: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SectionFour = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className="section4">
      <h3>ETIAM SED TELLUS</h3>
      <div className="inner">
        <div className="section4grid">
          <div className="infopost">
            <div className="infodiv">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <div className="infocontentdiv">
                <h3>
                  <Link to="/web-performance">Web Performance</Link>
                </h3>
                <p>
                  Performance plays a significant role in the success of any
                  online venture, as highly performing sites engage and retain
                  users better than poorly performing ones.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <div className="infocontentdiv">
                <h3>
                  <Link to="/multi-device-support">Multi Device Support</Link>
                </h3>
                <p>
                  A multitude of different screen sizes exist across phones,
                  tablets, and PC's. Screen sizes are always changing, so it's
                  important that your site can adapt to any screen size, today
                  or in the future.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <div className="infocontentdiv">
                <h3>
                  <Link to="/base-technologies">Base Technologies</Link>
                </h3>
                <p>
                  Built with React JS, a scalable technology developed and
                  maintained by Facebook. Used by all major technology firms,
                  Uber, Twitter, Netlfix and Airbnb.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <div className="infocontentdiv">
                <h3>
                  <Link to="/clean-design">Clean Design</Link>
                </h3>
                <p>
                  Mobile users are very goal-oriented. They expect to be able to
                  get what they need, immediately, and on their own terms.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <div className="infocontentdiv">
                <h3>
                  <Link style={{fontSize: '16px'}} to="/customised-functionality">
                    Customised Functionality
                  </Link>
                </h3>
                <p>
                  Custom Navigation for the Web and Mobile, Authentications,
                  Blog, Offline support, Easily manage your content
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              />
              <div className="infocontentdiv">
                <h3>
                  <Link to="/progressive-web-app">Progressive Web Apps</Link>
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
      </div>
    </div>
  )
}

export default SectionFour
