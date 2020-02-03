import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './pagelayout.css'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { Spring, config } from 'react-spring/renderprops'
import check from '../images/check.svg'
import cross from '../images/cross.svg'
import { FlexibleWidthXYPlot, XAxis, YAxis, LineMarkSeries } from 'react-vis'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    image4: file(relativePath: { eq: "image4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "image5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const databounce = [
  { x: 0, y: 0 },
  { x: 3, y: 32 },
  { x: 5, y: 90 },
  { x: 6, y: 106 },
  { x: 10, y: 123 },
]

const WebPerformance = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO
        title={'Web Performance'}
        description="Performance plays a significant role in the
        success of any online venture, as high performing sites engage and
        retain users better than poorly performing ones."
        pathname="/web-performance"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>WEB PERFORMANCE</h1>
          </div>
          <div className="contentpage">
            <p>
              At CariCode we believe web performance is crucial for your
              business and fundamental to good user experience. It is crucial
              that your sites user experience is fast and responsive to users.
              Performance is critical for users accessing your site using their
              mobile device. Mobile users make up a large portion of global
              internet users. Many of these users access the web over varying
              networks.
            </p>
            <div className="speed">
              <div className="fast">
                <Spring
                  from={{
                    a: '40',
                    b: '40',
                    c: '40',
                    d: '100',
                    e: '40',
                    f: '160',
                    g: '40',
                    h: '220',
                    i: '40',
                    j: '280',
                  }}
                  to={{
                    a: '150',
                    b: '40',
                    c: '250',
                    d: '100',
                    e: '200',
                    f: '160',
                    g: '260',
                    h: '220',
                    i: '280',
                    j: '280',
                  }}
                  config={config.molasses}
                  delay={800}
                >
                  {props => (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="mobile"
                      class="svg-inline--fa fa-mobile fa-w-10"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      style={{
                        paddingBottom: '18px',
                        height: '100px',
                        margin: '0 auto',
                      }}
                    >
                      <g class="fa-group">
                        <path
                          class="fa-secondary"
                          fill="white"
                          d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                          opacity="0.4"
                        ></path>
                        <path
                          class="fa-primary"
                          fill="currentColor"
                          d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
                        ></path>
                        <line
                          x1="40"
                          y1="40"
                          x2={props.a}
                          y2={props.b}
                          style={{
                            stroke: 'rgb(18, 147, 154)',
                            strokeWidth: '4',
                          }}
                        />
                        <line
                          x1="40"
                          y1="100"
                          x2={props.c}
                          y2={props.d}
                          style={{
                            stroke: 'rgb(18, 147, 154)',
                            strokeWidth: '4',
                          }}
                        />
                        <line
                          x1="40"
                          y1="160"
                          x2={props.e}
                          y2={props.f}
                          style={{
                            stroke: 'rgb(18, 147, 154)',
                            strokeWidth: '4',
                          }}
                        />
                        <line
                          x1="40"
                          y1="220"
                          x2={props.g}
                          y2={props.h}
                          style={{
                            stroke: 'rgb(18, 147, 154)',
                            strokeWidth: '4',
                          }}
                        />
                        <line
                          x1="40"
                          y1="280"
                          x2={props.i}
                          y2={props.j}
                          style={{
                            stroke: 'rgb(18, 147, 154)',
                            strokeWidth: '4',
                          }}
                        />
                      </g>
                    </svg>
                  )}
                </Spring>
                <img src={check} height={25} alt="" />
              </div>
              <div className="slow">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="mobile"
                  class="svg-inline--fa fa-mobile fa-w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  style={{
                    paddingBottom: '18px',
                    height: '100px',
                    margin: '0 auto',
                  }}
                >
                  <g class="fa-group">
                    <path
                      class="fa-secondary"
                      fill="white"
                      d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                      opacity="0.4"
                    ></path>
                    <path
                      class="fa-primary"
                      fill="currentColor"
                      d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
                    ></path>
                  </g>
                </svg>
                <svg
                  style={{
                    margin: 'auto',
                    background: '#e0e0e0',
                    display: 'block',
                    'shape-rendering': 'auto',
                    position: 'absolute',
                    top: '10%',
                    left: '12px',
                  }}
                  width="40px"
                  height="40px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <g transform="rotate(0 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.9166666666666666s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(30 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.8333333333333334s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(60 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.75s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(90 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.6666666666666666s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(120 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5833333333333334s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(150 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(180 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.4166666666666667s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(210 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.3333333333333333s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(240 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.25s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(270 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.16666666666666666s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(300 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.08333333333333333s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                  <g transform="rotate(330 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#fe718d"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animate>
                    </rect>
                  </g>
                </svg>
                <img src={cross} height={25} alt="" />
              </div>
            </div>
            <p>
              Performance is one of the key challenges faced by most businesses
              on the web. Websites and apps are richer in functionality than
              ever before. As a result, they've become more demanding of network
              and device resources. Businesses need to achieve a high level of
              performance on their websites across a variety of network
              conditions and devices.
            </p>
            <p>
              Performance issues range from small issues like slow sites and
              applications with slight delays that hinder users for only brief
              moments to completely inaccessible websites.
            </p>
            <h3>Web Performance is key in retaining users</h3>
            <p>
              At Caricode we want your users to interact meaningfully with what
              we build for you. Performance plays a significant role in the
              success of any online venture, as high performing sites engage and
              retain users better than poorly performing ones.
            </p>
            <FlexibleWidthXYPlot margin={{ left: 60, right: 30 }} height={300}>
              <XAxis title={'loading time(s)'} />
              <YAxis title={'%increase in Bounce Rate'} />
              <LineMarkSeries
                animation={{ damping: 20, stiffness: 40 }}
                curve={'curveMonotoneX'}
                data={databounce}
              />
            </FlexibleWidthXYPlot>
            <p>
              Because business is highly competitive, we want you to be
              knowledgeable of how your competitors are doing online. In a
              Google study it was found that sites loading within 5 seconds had
              70% longer sessions, 35% lower bounce rates, and 25% higher ad
              viewability than sites taking nearly four times longer at 19
              seconds. To get a idea of how your site's performance compares
              with the competition, check out the Speed Scorecard tool.
            </p>
            <p>
              <b>Web Performance is key to improving conversions.</b> Retaining
              users is crucial to improving your conversions. If you run an
              online business, conversions are the goal and performance is very
              critical. The speed of your site has an impact on your revenue.
              Here are some examples of how performance has played a role on the
              financials of a business
            </p>
            <div className="pwaexamplediv">
              <div className="pwaexampleheader">
                <h4>
                  A number of companies have succeeded with improving the speed
                  of a website
                </h4>
              </div>
              <h5>Mobify</h5>
              <p>
                Every 100ms decrease in homepage load speed worked out to a
                1.11% increase in session-based conversion, yielding an average
                annual revenue increase of nearly $380,000. Additionally, a
                100ms decrease in checkout page load speed amounted to a 1.55%
                increase in session-based conversion, which in turn yielded an
                average annual revenue increase of nearly $530,000.
              </p>

              <h5>AutoAnything</h5>
              <p>
                When AutoAnything reduced page load time by half, they saw a
                boost of 12-13% in sales.
              </p>
              <h5>Pinterest</h5>
              <p>
                Pinterest rebuilt their pages for performance realizing a 40%
                reduction in perceived wait times, thus increasing both search
                engine traffic and sign-ups by 15%.
              </p>
              <h5>COOK</h5>
              <p>
                By cutting average page load time by 850 milliseconds, COOK
                found they were able to increase conversions by 7%, decrease
                bounce rates by 7%, and increase pages per session by 10%.
              </p>
            </div>
          </div>
          <div className="sidebar">
            <div className="side1">
              <Link to="/multi_device_support">
                <Image
                  fluid={data.image4.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/multi-device-support">Multi Device Support</Link>
              </h3>
              <p>
                Our responsive designs work behind-the-scenes to give a user a
                seamless experience no matter what device they choose.
              </p>
            </div>
            <div className="side1">
              <Link to="/base_technologies">
                <Image
                  fluid={data.image5.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/base_technologies">Base Technologies</Link>
              </h3>
              <p>
                At CariCode, we build all our web applications with React JS, a
                scalable technology developed and maintained by Facebook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebPerformance
