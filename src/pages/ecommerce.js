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
  const [isOneChecked, setIsOneChecked] = useState(false)
  const [isTwoChecked, setIsTwoChecked] = useState(false)
  const [isThreeChecked, setIsThreeChecked] = useState(false)
  const [isFourChecked, setIsFourChecked] = useState(false)
  const [isFiveChecked, setIsFiveChecked] = useState(false)
  const [isSixChecked, setIsSixChecked] = useState(false)

  return (
    <Layout>
      {/* <div className={styles.ecommvp}> */}
      {/* <div className={styles.inner}>
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
      </div> */}
      <div className={styles.form}>
        <h4>Email Marketing</h4>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="five"
            name="five"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsFiveChecked(!isFiveChecked)} for="five">
            Email Marketing Automation
          </label>
          <p>
            Engage contacts with automated, recurring emails or drip series in
            the time it takes to create 1-to-many emails.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="one"
            name="one"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsOneChecked(!isOneChecked)} for="one">
            Signup Forms
          </label>
          <p>
            Capture new signups, confirm opt-in, and add them directly to lists
            in Marketing Campaigns.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="two"
            name="two"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsTwoChecked(!isTwoChecked)} for="two">
            Custom Email Design
          </label>
          <p>
            Beautiful, responsive campaigns with drag & drop, HTML, or both!
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="three"
            name="three"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsThreeChecked(!isThreeChecked)} for="three">
            Email Statistics
          </label>
          <p>
            Get a complete picture of each email’s performance with analytics
            that help you make informed, data-based decisions.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="four"
            name="four"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsFourChecked(!isFourChecked)} for="four">
            Email Testing
          </label>
          <p>
            Run inbox rendering previews, spam testing, and link validation so
            you know every email is ready before you ‘Send.’
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="six"
            name="six"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsSixChecked(!isSixChecked)} for="six">
            List Management
          </label>
          <p>
            Segment your recipients to send targeted, personal messages that
            improve engagement and deliverability.
          </p>
        </div>
      </div>
      <div style={{ marginBottom: '50px' }}>
        {isOneChecked && <div>Signup forms</div>}
        {isTwoChecked && <div>Custom Email Design</div>}
        {isThreeChecked && <div>Email Statistics</div>}
        {isFourChecked && <div> Email Testing</div>}
        {isFiveChecked && <div> Email Marketing Automation</div>}
        {isSixChecked && <div> List Management</div>}
      </div>
    </Layout>
  )
}

export default Ecommerce
