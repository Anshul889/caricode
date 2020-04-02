import React from 'react'
import { Link } from 'gatsby'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring, config } from 'react-spring/renderprops'
import cart from '../images/shopping-cart.svg'

const SectionThree = () => {
  return (
    <div id="section3">
      <div className="inner">
        <div className="section3grid">
          <div className="contentpost" style={{ paddingLeft: '0px' }}>
            <div className="postdiv">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <svg height="100" width="100%">
                    <Spring
                      from={{ value: '0%', value2: '100%' }}
                      config={config.slow}
                      delay={1000}
                      to={{
                        value: isVisible ? '100%' : '0%',
                        value2: isVisible ? '0%' : '100%',
                      }}
                    >
                      {props => (
                        <line
                          x1="0"
                          y1="100"
                          x2={props.value}
                          y2={props.value2}
                          style={{
                            stroke: 'rgb(18, 147, 154)',
                            strokeWidth: '2',
                          }}
                        />
                      )}
                    </Spring>
                    )}
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100"
                      style={{ stroke: 'rgb(255, 255, 255)', strokeWidth: '2' }}
                    />
                    <line
                      x1="0"
                      y1="100"
                      x2="100%"
                      y2="100"
                      style={{ stroke: 'rgb(255, 255, 255)', strokeWidth: '2' }}
                    />
                  </svg>
                )}
              </VisibilitySensor>
              <div
                style={{
                  fontSize: '10px',
                  textAlign: 'center',
                  paddingBottom: '20px',
                }}
              >
                Boost Sales
              </div>
              <h3>
                <Link to="/landing-pages">Landing Pages</Link>
              </h3>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ width: '1px', marginBottom: '20px' }}
                    to={{
                      width: isVisible ? '50px' : '1px',
                      marginBottom: '20px',
                    }}
                    config={config.slow}
                    delay={500}
                  >
                    {props => (
                      <div className="hero-feature-border" style={props}></div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <p>
                Landing pages are critical in helping you to generate leads and
                convert them into prospects and customers. Studies show that
                marketers capture leads at a higher rate by sending them to
                dedicated landing pages, rather than sending traffic to the home
                page.
              </p>
            </div>
          </div>
          <div className="contentpost">
            <div className="postdiv">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ transform: 'translateX(-100px)' }}
                    config={config.slow}
                    delay={1000}
                    to={{
                      transform: isVisible
                        ? 'translateX(0)'
                        : 'translateX(-100px)',
                    }}
                  >
                    {props => <img src={cart} alt="" style={props} />}
                  </Spring>
                )}
              </VisibilitySensor>
              <h3>
                <Link to="/landing-pages">Ecommerce</Link>
              </h3>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ width: '1px', marginBottom: '20px' }}
                    to={{
                      width: isVisible ? '50px' : '1px',
                      marginBottom: '20px',
                    }}
                    config={config.slow}
                    delay={500}
                  >
                    {props => (
                      <div className="hero-feature-border" style={props}></div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <p>high converting ecommerce</p>
            </div>
          </div>
          <div
            className="contentpost"
            style={{ paddingRight: '0px', borderRight: 'none' }}
          >
            <div className="postdiv">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{
                      a: '20',
                      b: '350',
                      c: '80',
                      d: '250',
                      e: '140',
                      f: '275',
                      g: '200',
                      h: '200',
                      i: '260',
                      j: '250',
                    }}
                    to={{
                      a: isVisible ? '80' : '20',
                      b: isVisible ? '250' : '350',
                      c: isVisible ? '140' : '80',
                      d: isVisible ? '275' : '250',
                      e: isVisible ? '200' : '140',
                      f: isVisible ? '200' : '275',
                      g: isVisible ? '260' : '200',
                      h: isVisible ? '250' : '200',
                      i: isVisible ? '280' : '260',
                      j: isVisible ? '30' : '250',
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
                          paddingBottom: '38px',
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
                            x1="20"
                            y1="350"
                            x2={props.a}
                            y2={props.b}
                            style={{
                              stroke: 'rgb(18, 147, 154)',
                              strokeWidth: '4',
                            }}
                          />
                          <line
                            x1="80"
                            y1="250"
                            x2={props.c}
                            y2={props.d}
                            style={{
                              stroke: 'rgb(18, 147, 154)',
                              strokeWidth: '4',
                            }}
                          />
                          <line
                            x1="140"
                            y1="275"
                            x2={props.e}
                            y2={props.f}
                            style={{
                              stroke: 'rgb(18, 147, 154)',
                              strokeWidth: '4',
                            }}
                          />
                          <line
                            x1="200"
                            y1="200"
                            x2={props.g}
                            y2={props.h}
                            style={{
                              stroke: 'rgb(18, 147, 154)',
                              strokeWidth: '4',
                            }}
                          />
                          <line
                            x1="260"
                            y1="250"
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
                )}
              </VisibilitySensor>
              <h3>Finance Applications</h3>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    from={{ width: '1px', marginBottom: '20px' }}
                    to={{
                      width: isVisible ? '50px' : '1px',
                      marginBottom: '20px',
                    }}
                    config={config.slow}
                    delay={500}
                  >
                    {props => (
                      <div className="hero-feature-border" style={props}></div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <p>
                Duis vulputate sit amet metus quis facilisis. Sed dapibus neque
                erat fringilla tincidunt. Nullam sapien et sapien, iaculis ac
                varius ultrices nec metus. Aenean ultricies magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
