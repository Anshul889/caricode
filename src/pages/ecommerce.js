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
  const [isSevenChecked, setIsSevenChecked] = useState(false)
  const [isEightChecked, setIsEightChecked] = useState(false)
  const [isNineChecked, setIsNineChecked] = useState(false)
  const [isTenChecked, setIsTenChecked] = useState(false)
  const [isElevenChecked, setIsElevenChecked] = useState(false)
  const [isTwelveChecked, setIsTwelveChecked] = useState(false)
  const [isThirteenChecked, setIsThirteenChecked] = useState(false)
  const [isFourteenChecked, setIsFourteenChecked] = useState(false)
  const [isFifteenChecked, setIsFifteenChecked] = useState(false)
  const [isSixteenChecked, setIsSixteenChecked] = useState(false)
  const [isSeventeenChecked, setIsSeventeenChecked] = useState(false)
  const [isEighteenChecked, setIsEighteenChecked] = useState(false)
  const [inputField, setInputfield] = useState(null)

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
        <h4>Ecommerce Features at Rs 750 per month</h4>
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
        <h4>Search Engine Optimization</h4>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="seven"
            name="seven"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsSevenChecked(!isSevenChecked)} for="seven">
            Rich Snippets
          </label>
          <p>
            Rich snippets are visually more appealing search results with
            additional valuable information displayed alongside the title,
            description, and URL.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="eight"
            name="eight"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsEightChecked(!isEightChecked)} for="eight">
            Google Analytics
          </label>
          <p>
            Google Analytics lets you measure your advertising ROI as well as
            track your Flash, video, and social networking sites and
            applications.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="nine"
            name="nine"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsNineChecked(!isNineChecked)} for="nine">
            Blog
          </label>
          <p>
            Blogging helps boost SEO quality by positioning your website as a
            relevant answer to your customers' questions. Blog posts that
            specifically use a variety of on-page SEO tactics can give you more
            opportunities to rank in search engines and get customers to visit
            your site.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="ten"
            name="ten"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => setIsTenChecked(!isTenChecked)} for="ten">
            Review Prompt
          </label>
          <p>
            Incorporate a system that asks customers for their comments because
            80% of reviews come shortly after the purchase. It's a good business
            practice to send a thank you note, use this opportunity to ask for
            feedback. Going from 25 reviews to 50 increases conversion by
            another 18%.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="eleven"
            name="eleven"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsElevenChecked(!isElevenChecked)}
            for="eleven"
          >
            Wishlist
          </label>
          <p>
            The wish-list feature allows ecommerce customers to create a list of
            items they aren't ready to purchase yet, but hope to either buy for
            themselves or receive as a gift in the future.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="twelve"
            name="twelve"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsTwelveChecked(!isTwelveChecked)}
            for="twelve"
          >
            One Click Upsell
          </label>
          <p>
            Upselling is simply the act of offering your customers a better
            (more expensive) item when they add a product to their cart or reach
            the checkout page
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="thirteen"
            name="thirteen"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsThirteenChecked(!isThirteenChecked)}
            for="thirteen"
          >
            Related Items
          </label>
          <p>
            Related products are a popular ecommerce site feature for one simple
            reason. They work. Customers like related products because they
            remind them that they need or may want, say, batteries for a camera,
            extra memory for a new laptop, or shoes that match a new dress.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="fifteen"
            name="fifteen"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsFifteenChecked(!isFifteenChecked)}
            for="fifteen"
          >
            Loyalty Program
          </label>
          <p>
            Reward your customers for continuing to shop with you. Give them the
            option to sign up for a loyalty program. Common programs include one
            point for every dollar spent, points earned for sharing on social
            media, or points earned for referring friends.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="sixteen"
            name="sixteen"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsSixteenChecked(!isSixteenChecked)}
            for="sixteen"
          >
            Referral Program
          </label>
          <p>
            Consumers are 4x more likely to purchase something when referred by
            a friend. Word of mouth marketing is believed to be behind 20-50% of
            all purchasing decisions.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="seventeen"
            name="seventeen"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsSeventeenChecked(!isSeventeenChecked)}
            for="seventeen"
          >
            Countdown Timer
          </label>
          <p>
            Consumers are 4x more likely to purchase something when referred by
            a friend. Word of mouth marketing is believed to be behind 20-50% of
            all purchasing decisions.
          </p>
        </div>
        <h4>Social</h4>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="eighteen"
            name="eighteen"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsEighteenChecked(!isEighteenChecked)}
            for="eighteen"
          >
            Social Sharing
          </label>
          <p>
            Social share buttons give customers the ability to display their
            ecommerce purchases on Facebook, Twitter, Pinterest or other
            platforms.
          </p>
        </div>
        <div className={styles.formitem}>
          <input
            type="checkbox"
            id="fourteen"
            name="fourteen"
            style={{ padding: '0px' }}
          ></input>
          <label
            onClick={() => setIsFourteenChecked(!isFourteenChecked)}
            for="fourteen"
          >
            Social Login
          </label>
          <p>
            Social network providers can give you additional information about
            users, such as location, interests, birthday, and more. Using this
            data, you can target personalized content to the user.
          </p>
        </div>
      </div>
      <div className={styles.ordereditems}>
        {isOneChecked && <p>Signup forms</p>}
        {isTwoChecked && <p>Custom Email Design</p>}
        {isThreeChecked && <p>Email Statistics</p>}
        {isFourChecked && <p> Email Testing</p>}
        {isFiveChecked && <p> Email Marketing Automation</p>}
        {isSixChecked && <p> List Management</p>}
        {isSevenChecked && <p> Rich Snippets</p>}
        {isEightChecked && <p> Google Analytics</p>}
        {isNineChecked && <p> Blog</p>}
        {isTenChecked && <p> Review Prompt</p>}
        {isElevenChecked && <p> Wishlist</p>}
        {isTwelveChecked && <p> One Click Upsell</p>}
        {isThirteenChecked && <p> Related Items</p>}
        {isFourteenChecked && <p> Social Login</p>}
        {isFifteenChecked && <p> Loyalty Program</p>}
        {isSixteenChecked && <p> Referral Program</p>}
        {isSeventeenChecked && <p> Countdown Timer</p>}
        {isEighteenChecked && <p> Social Sharing</p>}
      </div>
      <div className={styles.total}>
        Total: Rs{' '}
        {(isOneChecked && 750) +
          (isTwoChecked && 750) +
          (isThreeChecked && 750) +
          (isFourChecked && 750) +
          (isFiveChecked && 750) +
          (isSixChecked && 750) +
          (isSevenChecked && 750) +
          (isEightChecked && 750) +
          (isNineChecked && 750) +
          (isTenChecked && 750) +
          (isElevenChecked && 750) +
          (isTwelveChecked && 750) +
          (isThirteenChecked && 750) +
          (isFourteenChecked && 750) +
          (isFifteenChecked && 750) +
          (isSixteenChecked && 750) +
          (isSeventeenChecked && 750) +
          (isEighteenChecked && 750)}
        /mo
      </div>
      <p className={styles.warning}>
        (You will only be charged once the site goes live)
      </p>
      <div className="former" style={{ width: '90%', margin: '0 auto' }}>
        <label onSelect={() => setInputfield(true)}>
          <div className="formitem">Name</div>
          <input type="text" name="name" />
        </label>
        <label onSelect={() => setInputfield(true)}>
          <div className="formitem">Email</div>
          <input type="email" name="email" />
        </label>
      </div>
      <div>
      {inputField ? (
        <button className={styles.submitecom}>Submit</button>
      ) : (
        <button className={styles.submitecom} style={{ opacity: '0.5' }}>Submit</button>
      )}
      </div>
    </Layout>
  )
}

export default Ecommerce
