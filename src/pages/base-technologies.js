import SEO from '../components/SEO'
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'

import mobile from '../images/mobile-duotone.svg'

const getImages = graphql`
  {
    image6: file(relativePath: { eq: "image6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "image7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BaseTechnologies = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO
        title={'Base Technologies'}
        description="At CariCode, we build all our web applications with React JS, a
        scalable technology developed and maintained by Facebook."
        pathname="/base-technologies"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
        <div className="maininside">
          <div className="headermajor">
            <h1>BASE TECHNOLOGIES</h1>
          </div>
          <div className="contentpage">
            <img src={mobile} alt="" height={100} />
            <p>
              At CariCode, we build all our web applications with React JS, a
              scalable technology developed and maintained by Facebook.
            </p>
            <h3>Advantages of Reactjs versus a CMS system like Wordpress</h3>
            <p>
              <b>Design:</b> With Wordpress you are constrained in the design
              and the way you organize your website. That is why all Wordpress
              sites look similar, and it becomes quickly expensive if you wish
              to create something unique.
            </p>
            <p>
              <b>Speed:</b> Websites built using React JS are often 10 times
              faster than a site built with a legacy CMS like Wordpress.
              Additionally, the sites we build can be hosted on a CDN, you can
              serve it from whichever node is closest to your users. Someone
              viewing your site in a coffee shop in Vienna pulls from a European
              server, not a server in Silicon Valley.
            </p>
            <p>
              <b>Security:</b> Google Cloud Platform offers superior security
              unlike Wordpress which has significant security flaws. By
              conservative estimate, 70% of all WordPress installs are
              vulnerable to known security exploits. With a site built on GCP,
              you don’t have to worry about malicious code being injected into
              your site when users visit it. Our sites are built on a production
              machine by static site generators, which take your code and spit
              out flat HTML files with CSS and JavaScript. When a user requests
              a page from your site, the server just sends them the file for
              that page, instead of building that page from various assets each
              time. No build process means standard hacking attacks like
              scripting or database security exploits just don’t work.
            </p>
            <p>
              <b>Updates:</b> Updates with Wordpress are a big issue. There are
              breaking changes and some plugins stop working. Most of the
              plugins are developed by people in their free time and not by
              professional programmers — and do not meet a professional, secure
              standard.
            </p>
            <p>
              <b>Smaller Footprint:</b> Your WordPress install is a medley of
              cobbled together software and hardware, including: a machine
              running Linux, a web server, PHP with its associated extensions
              and web server configurations, MySQL, WordPress, all the plugins
              you need, your theme and template code
            </p>
            <p>
              A React JS site by contrast, when generated, is capable of being
              hosted on any web server that can return HTML files (which gives
              you a whole range of options).
            </p>
            <p>
              <b>Reliability:</b> React JS is extremely reliable with no
              database errors and can be hosted anywhere and everywhere
            </p>
            <p>
              <b>Scalability</b> As you grow your business and when you have to
              scale, the right technology matters. Websites built with CMS
              solutions like Wordpress will need to access the server with every
              page request especially as you grow and need more complex code.
              With React JS, scalability is barely an issue. Increased requests
              mean increased pages served, but no extra work in building those
              pages.
            </p>
            <p>
              <b>Flexibility</b> Your basic site built with WordPress starts out
              as a one-size-fits-all solution that is then customized by bolting
              on plugins. A lot of plugins. With a React JS sites, you can get
              lean and mean, with a tool that does exactly what you need it to
            </p>
            <h3>
              React JS is Used by all major technology firms including Uber,
              Twitter, Netflix and Airbnb.
            </h3>
            <h4>Examples of Companies Using React</h4>
            <h5>Netflix</h5>
            <p>
              There are two reasons why Netflix decided to go into React:
              performance, code simplicity and modularity. You can read about
              that in details on Netflix Techblog.
            </p>
            <h5>
              Atlassian - the creators of Jira, BitBucket, HipChat and many more
            </h5>
            <p>
              HipChat is one of the most popular team-communication tools in the
              World. Its team has been recently rebuilding their web version to
              React. Atlassian developers were deciding between Angular, Ember
              and React. After prototyping HipChat client in all of these
              technologies, they picked React. They summed up the main benefits
              of React in their blogpost using phrase from Tom Ochino’s talk
            </p>
            <h5>Khan Academy</h5>
            <p>
              Many parts of Khan Academy are working on React right now. Joel
              Burget, who was a developer in Khan Academy, shared his experience
              about migrating from Backbone to React. He mentions one of the
              most the best features of React - it manages how the elements on
              the page must change in the efficient way. React avoids
              unnecessary re-renders.
            </p>
          </div>
          <div className="sidebar">
            <div className="side1">
              <Link to="/clean-design/">
                <Image
                  fluid={data.image6.childImageSharp.fluid}
                  style={{ marginBottom: '14px' }}
                />
              </Link>
              <h3>
                <Link to="/clean-design">Clean Design</Link>
              </h3>
              <p>
                Mobile users are very goal-oriented. They expect to be able to
                get what they need, immediately, and on their own terms.
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BaseTechnologies
