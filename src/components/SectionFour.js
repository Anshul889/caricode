import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring, config } from 'react-spring/renderprops'

const getImages = graphql`
  {
    image3: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "image4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "image5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "image6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "image7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "image8.jpg" }) {
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
      <h3>ETIAM SED TELLUS
      <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px', marginTop: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
      </h3>
      <div className="inner">
        <div className="section4grid">
          <div className="infopost">
            <div className="infodiv">
            <Link to="/web-performance/">
              <Image
                fluid={data.image3.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              /></Link>
              <div className="infocontentdiv">
                <h3>
                  <Link to="/web-performance/">Web Performance</Link>
                </h3>
                <p>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                  Performance plays a significant role in the success of any
                  online venture, as highly performing sites engage and retain
                  users better than poorly performing ones.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
            <Link to="/multi-device-support/"><Image
                fluid={data.image4.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              /></Link>
              <div className="infocontentdiv">
                <h3>
                  <Link to="/multi-device-support/">Multi Device Support</Link>
                </h3>
                <p>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                   Screen sizes are always changing, so it's
                  important that your site can adapt to any screen size, today
                  or in the future.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
            <Link to="/base-technologies"><Image
                fluid={data.image5.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              /></Link>
              <div className="infocontentdiv">
                <h3>
                  <Link to="/base-technologies">Base Technologies</Link>
                </h3>
                <p>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                  Built with React JS, a scalable technology developed and
                  maintained by Facebook. Used by all major technology firms,
                  Uber, Twitter, Netlfix and Airbnb.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
            <Link to="/clean-design"><Image
                fluid={data.image6.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              /></Link>
              <div className="infocontentdiv">
                <h3>
                  <Link to="/clean-design">Clean Design</Link>
                </h3>
                <p>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                  Mobile users are very goal-oriented. They expect to be able to
                  get what they need, immediately, and on their own terms.
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
            <Link to="/customised-functionality/" ><Image
                fluid={data.image7.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              /></Link>
              <div className="infocontentdiv">
                <h3>
                  <Link
                    style={{ fontSize: '16px' }}
                    to="/customised-functionality/"
                  >
                    Customised Functionality
                  </Link>
                </h3>
                <p>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                  Custom Navigation for the Web and Mobile, Authentications,
                  Blog, Offline support, Easily manage your content
                </p>
              </div>
            </div>
          </div>
          <div className="infopost">
            <div className="infodiv">
            <Link to="/progressive-web-apps/"><Image
                fluid={data.image8.childImageSharp.fluid}
                style={{ marginBottom: '14px' }}
              /></Link>
              <div className="infocontentdiv">
                <h3>
                  <Link to="/progressive-web-apps/">Progressive Web Apps</Link>
                </h3>
                <p>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ width: '1px', marginBottom: '20px'}}
                      to={{
                        width: isVisible ? '50px' : '1px',
                        marginBottom: '20px',
                      }}
                      config={config.slow}
                      delay={800}
                    >
                      {props => (
                        <div
                          className="hero-feature-border"
                          style={props}
                        ></div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
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
