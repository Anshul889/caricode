import SEO from '../components/SEO'
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'


const getImages = graphql`
  {
    image8: file(relativePath: { eq: "image8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CustomidedFunctionality = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO
        title={'Customised Functionality'}
        description="At CariCode we develop your website so it can be accessed seamlessly
       across different devices: phones, qphablets, tablets,
       laptops, desktops, and more."
        pathname="/customised-functionality"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <div className="main">
      <div className="maininside">
        <div className="headermajor">
          <h1>Customised Functionality</h1>
        </div>
        <div className="contentpage">
          <div className="customfuncicon">
          </div>
          <div className="pees">
            <p>We want you to have a successful online presence which means more than just a website. We offer a range of additional solutions customised to suit your needs.</p>
            <h4>Two of our key features are detailed below:</h4>
            <h5>Blogs</h5>
            <p>1. Blogging Helps Your Business to Compete: blogging is important to let consumers know how you are different.</p>
            <p>2. Blogging is Statistically Proven to Help Businesses<br /><br/> The custom content from blogs warms prospective customers up to your business. Businesses that blog generate more leads than businesses that don’t. Blogging can sometimes be just as effective in promoting your company than through advertisements.</p>
            <p>3. A Blog Provides a Channel of Communication with Customers: Creates a two-way interaction with your target audience. You can personalize your content and create a conversation with your customer</p>
            <p>4. A Blog Offers Insight Into Your Audience: Track user interaction such as likes, clicks, shares with your blog to get deeper insight on your customer. Customers can provide important feedback through your blog</p>
            <p>5. A Blog Can Improve Your SEO: Blogs improve your search engine ranking</p>
            <p>6. Blog Posts Provide Social Media Content</p>
            <p>7. A Business Blog Can Generate Leads: The blog layout we offer is optimized for actions that are important to your business.</p>
            <h5>Offline Support</h5>
            <p>Offline support and reliable performance is a critical feature of all the websites we built. Progressive Web Apps offer the most reliable offline support. This provides a significantly better user experience no matter where your customer is accessing your website.</p>
            <p>The quality of a network connection can be affected by a number of factors. Our goal is to provide a good experience that lessens the impact of changes in connectivity.</p>
          </div>
        </div>
        <div className="sidebar">
          <div className="side1">
            <Link to="/progressive-web-apps"><Image
                  fluid={data.image8.childImageSharp.fluid}
                  style={{ marginBottom: '14px', borderRadius: '4px 4px 0 0' }}
                /></Link>
            <h3><Link to="/progressive-web-apps">Progressive Web Apps</Link></h3>
            <p>A high-quality Progressive Web App has incredible benefits, making it easy to delight your users, grow engagement and increase conversions.</p>
          </div>
          <div className="side1">
            <Link to="/web-performance"><Image
                  fluid={data.image3.childImageSharp.fluid}
                  style={{ marginBottom: '14px', borderRadius: '4px 4px 0 0' }}
                /></Link>
            <h3><Link to="/web-performance">Web Performance</Link></h3>
            <p>Performance plays a significant role in the success of any online venture, as highly performing sites engage and retain users better than poorly performing ones.</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default CustomidedFunctionality
