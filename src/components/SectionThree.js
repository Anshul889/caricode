import React from 'react'
import { Link } from 'gatsby'

const SectionThree = () => {
  return (
    <div id="section3">
      <div className="inner">
        <div className="section3grid">
          <div className="contentpost" style={{ paddingLeft: '0px' }}>
            <div className="postdiv">
              <h3>
                <Link to="/landing-pages">Landing Pages</Link>
              </h3>
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
              <h3><Link to="/landing-pages">Ecommerce</Link></h3>
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
