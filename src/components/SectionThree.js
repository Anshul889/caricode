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
              <div style={{fontSize: '10px', textAlign: 'center', paddingBottom: '20px'}}>Improve conversions</div>
              <h3>
                <Link to="/landing-pages">Landing Pages</Link>
              </h3>
              <VisibilitySensor>
                {({ isVisible }) => (
            <Spring
            from={{ width: '1px', marginBottom: '20px' }}
            to={{ width: isVisible ?  '50px' : '1px', marginBottom: '20px' }}
            config={config.slow}
            delay={500}
          >
            {props => <div className="hero-feature-border" style={props}></div>}
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
                      from={{ transform: 'translateX(-80px)' }}
                      config={config.slow}
                      delay={1000}
                      to={{
                        transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
                      }}
                    >
                      {props => 
              <img src={cart} alt="" style={props}/>}
              </Spring>
               )}
               </VisibilitySensor>
              <h3><Link to="/landing-pages">Ecommerce</Link></h3>
              <VisibilitySensor>
                {({ isVisible }) => (
            <Spring
            from={{ width: '1px', marginBottom: '20px' }}
            to={{ width: isVisible ?  '50px' : '1px', marginBottom: '20px' }}
            config={config.slow}
            delay={500}
          >
            {props => <div className="hero-feature-border" style={props}></div>}
          </Spring>
             )}
             </VisibilitySensor>
              <p>
               high converting ecommerce
              </p>
            </div>
          </div>
          <div
            className="contentpost"
            style={{ paddingRight: '0px', borderRight: 'none' }}
          >
            <div className="postdiv">
              <h3>Finance Applications</h3>
              <VisibilitySensor>
                {({ isVisible }) => (
            <Spring
            from={{ width: '1px', marginBottom: '20px' }}
            to={{ width: isVisible ?  '50px' : '1px', marginBottom: '20px' }}
            config={config.slow}
            delay={500}
          >
            {props => <div className="hero-feature-border" style={props}></div>}
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
