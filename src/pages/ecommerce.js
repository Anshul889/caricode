import React, { useState } from 'react'
import Layout from '../components/layout'
import styles from './ecommerce.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import { useTransition, animated } from 'react-spring'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "handshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "calendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "payment.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "functions.png" }) {
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
  const [isMorningChecked, setIsMorningChecked] = useState(false)
  const [isAfternoonChecked, setIsAfternoonChecked] = useState(false)
  const [isEveningChecked, setIsEveningChecked] = useState(false)
  return (
    <Layout>
      <div className={styles.ecommvp}>
        <div className={styles.inner}>
          <div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 2</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 3</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 4</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 5</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 6</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 7</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
					<div className={styles.feature}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ borderRadius: '4px' }}
            />
            <h4>Feature 8</h4>
            <p>
              We help you design and implement your loyalty programme. Reward
              your customers for continuing to shop with you. Give them the
              option to sign up for a loyalty program. However you want to
              structure the program is fine, just make sure the rules are clear.
              Common programs include one point for every dollar spent, points
              earned for sharing on social media, or points earned for referring
              friends.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <input
          type="checkbox"
          isChecked={isMorningChecked}
          onChange={() => setIsMorningChecked(!isMorningChecked)}
          name="scales"
          id="scales"
        />
        <label for="scales"> Morning</label>
        <input
          type="checkbox"
          isChecked={isAfternoonChecked}
          onChange={() => setIsAfternoonChecked(!isAfternoonChecked)}
        />
        <label>Afternoon</label>
        <input
          type="checkbox"
          isChecked={isEveningChecked}
          onChange={() => setIsEveningChecked(!isEveningChecked)}
        />
        <label>Evening </label>
      </div>
      <div>
        {isMorningChecked && <span>Morning</span>}
        {isAfternoonChecked && <span>Afternoon</span>}
        {isEveningChecked && <span>Evening</span>}
      </div>
    </Layout>
  )
}

export default Ecommerce
