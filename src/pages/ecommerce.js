import React from 'react'
import Layout from '../components/layout'
import styles from './ecommerce.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import EcommerceHero from '../components/EcommerceHero'
import EcommerceSelect from '../components/EcommerceSelect'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "handshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fashion: file(relativePath: { eq: "fashion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jewellery: file(relativePath: { eq: "jewellery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beauty: file(relativePath: { eq: "beauty.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    food: file(relativePath: { eq: "food.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sports: file(relativePath: { eq: "sports.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Ecommerce = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <div className={styles.ecombody}>
        <EcommerceHero />
        <div className={styles.carouselcontainer}>
          <h4>Deliver an amazing ecommerce experience to your customers. A small selection of our work</h4>
          <div className={styles.ecomcarousel}>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.fashion.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Fashion</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.jewellery.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Jewellery</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.beauty.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Beauty</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.food.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Food</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.home.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Home</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.sports.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Sports</p>
            </div>
            <div className={styles.nothing}></div>
          </div>
        </div>
        <div className={styles.cardsection}>
          <h4>Get started with 3 easy steps</h4>
          <div className={styles.card}>
            <h4>Base Features</h4>
            <p>
              Starter pack with base features including a responsive website to
              feature unlimited products with payment support
            </p>
            <button>More</button>
          </div>
          <div className={styles.card}>
            <h4>Choose Additional Features</h4>
            <p>
              To take your ecommerce app to the next level choose from a range
              from of features including Email Marketing, Search Engine
              Optimization and Social
            </p>
            <button>More</button>
          </div>
          <div className={styles.card}>
            <h4>Hit Submit</h4>
            <p>
              Confirm your order and we take care of the rest, providing end to
              end support
            </p>
            <button>More</button>
          </div>
        </div>
        <EcommerceSelect />
      </div>
    </Layout>
  )
}

export default Ecommerce
