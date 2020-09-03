import React, { useState } from 'react'
import Layout from '../components/layout'
import styles from './ecommerce.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import { useTransition, animated } from 'react-spring'
import axios from 'axios'
import EcommerceHero from '../components/EcommerceHero'

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
  const [isFeatureSelected, setPopup] = useState(false)
  const [inputField, setInputfield] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://us-central1-annies-recipes.cloudfunctions.net/app/api/caricode`,
        {
          name,
          email,
          message: `one: ${isOneChecked}, two: ${isTwoChecked}, three: ${isThreeChecked}, four: ${isFourChecked}, five: ${isFiveChecked}, six: ${isSixChecked}, seven: ${isSevenChecked}, eight: ${isEightChecked}, nine: ${isNineChecked}, ten: ${isTenChecked}, eleven: ${isElevenChecked}, twelve: ${isTwelveChecked}, thirteen: ${isThirteenChecked}, fourteen: ${isFourteenChecked}, fifteen: ${isFifteenChecked}, sixteen: ${isSixteenChecked}, seventeen: ${isSeventeenChecked}, eighteen: ${isEighteenChecked}`,
        }
      )
      if (response.data === 'SUbmitted') {
        setSubmitted(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const checkOne = async () => {
    await setIsOneChecked(!isOneChecked)
    await setPopup(true)
  }
  const checkTwo = async () => {
    await setIsTwoChecked(!isTwoChecked)
    await setPopup(true)
  }
  const checkThree = async () => {
    await setIsThreeChecked(!isThreeChecked)
    await setPopup(true)
  }
  const checkFour = async () => {
    await setIsFourChecked(!isFourChecked)
    await setPopup(true)
  }
  const checkFive = async () => {
    await setIsFiveChecked(!isFiveChecked)
    await setPopup(true)
  }
  const checkSix = async () => {
    await setIsSixChecked(!isSixChecked)
    await setPopup(true)
  }
  const checkSeven = async () => {
    await setIsSevenChecked(!isSevenChecked)
    await setPopup(true)
  }
  const checkEight = async () => {
    await setIsEightChecked(!isEightChecked)
    await setPopup(true)
  }
  const checkNine = async () => {
    await setIsNineChecked(!isNineChecked)
    await setPopup(true)
  }
  const checkTen = async () => {
    await setIsTenChecked(!isTenChecked)
    await setPopup(true)
  }
  const checkEleven = async () => {
    await setIsElevenChecked(!isElevenChecked)
    await setPopup(true)
  }
  const checkTwelve = async () => {
    await setIsTwelveChecked(!isTwelveChecked)
    await setPopup(true)
  }
  const checkThirteen = async () => {
    await setIsThirteenChecked(!isThirteenChecked)
    await setPopup(true)
  }
  const checkFourteen = async () => {
    await setIsFourteenChecked(!isFourteenChecked)
    await setPopup(true)
  }
  const checkFifteen = async () => {
    await setIsFifteenChecked(!isFifteenChecked)
    await setPopup(true)
  }
  const checkSixteen = async () => {
    await setIsSixteenChecked(!isSixteenChecked)
    await setPopup(true)
  }
  const checkSeventeen = async () => {
    await setIsSeventeenChecked(!isSeventeenChecked)
    await setPopup(true)
  }
  const checkEighteen = async () => {
    await setIsEighteenChecked(!isEighteenChecked)
    await setPopup(true)
  }

  return (
    <Layout>
      <div className={styles.ecombody}>
        <EcommerceHero />
        <div className={styles.carouselcontainer}>
          <h4>Get a Pixel Perfect Website tailored to your needs</h4>
          <div className={styles.ecomcarousel}>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.fashion.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <p>Fashion</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.jewellery.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <p>Jewellery</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.beauty.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <p>Beauty</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.food.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <p>Food</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.home.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
              <p>Home</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.sports.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
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
              Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
              Vestibulum blandit ex a elementum viverra. Sed quat diam, aliquet
              tempus felis nisl at lacus.
            </p>
            <button>More</button>
          </div>
          <div className={styles.card}>
            <h4>Choose the features</h4>
            <p>
              Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
              Vestibulum blandit ex a elementum viverra. Sed quat diam, aliquet
              tempus felis nisl at lacus.
            </p>
            <button>More</button>
          </div>
          <div className={styles.card}>
            <h4>Hit Submit</h4>
            <p>
              Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
              Vestibulum blandit ex a elementum viverra. Sed quat diam, aliquet
              tempus felis nisl at lacus.
            </p>
            <button>More</button>
          </div>
        </div>
        <div className={styles.formupper}>
          <div className={styles.form}>
            <h4>Ecommerce Features at Rs 750 per month</h4>
            <h4>Email Marketing</h4>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isFiveChecked}
                id="five"
                name="five"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkFive()} for="five">
                Email Marketing Automation
              </label>
              <p>
                Engage contacts with automated, recurring emails or drip series
                in the time it takes to create 1-to-many emails.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isOneChecked}
                id="one"
                name="one"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkOne()} for="one">
                Signup Forms
              </label>
              <p>
                Capture new signups, confirm opt-in, and add them directly to
                lists in Marketing Campaigns.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isTwoChecked}
                id="two"
                name="two"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkTwo()} for="two">
                Custom Email Design
              </label>
              <p>
                Beautiful, responsive campaigns with drag & drop, HTML, or both!
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isThreeChecked}
                id="three"
                name="three"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkThree()} for="three">
                Email Statistics
              </label>
              <p>
                Get a complete picture of each email’s performance with
                analytics that help you make informed, data-based decisions.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isFourChecked}
                id="four"
                name="four"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkFour()} for="four">
                Email Testing
              </label>
              <p>
                Run inbox rendering previews, spam testing, and link validation
                so you know every email is ready before you ‘Send.’
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isSixChecked}
                id="six"
                name="six"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkSix()} for="six">
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
                checked={isSevenChecked}
                id="seven"
                name="seven"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkSeven()} for="seven">
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
                checked={isEightChecked}
                id="eight"
                name="eight"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkEight()} for="eight">
                Google Analytics
              </label>
              <p>
                Google Analytics lets you measure your advertising ROI as well
                as track your Flash, video, and social networking sites and
                applications.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isNineChecked}
                id="nine"
                name="nine"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkNine()} for="nine">
                Blog
              </label>
              <p>
                Blogging helps boost SEO quality by positioning your website as
                a relevant answer to your customers' questions. Blog posts that
                specifically use a variety of on-page SEO tactics can give you
                more opportunities to rank in search engines and get customers
                to visit your site.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isTenChecked}
                id="ten"
                name="ten"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkTen()} for="ten">
                Review Prompt
              </label>
              <p>
                Incorporate a system that asks customers for their comments
                because 80% of reviews come shortly after the purchase. It's a
                good business practice to send a thank you note, use this
                opportunity to ask for feedback. Going from 25 reviews to 50
                increases conversion by another 18%.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isElevenChecked}
                id="eleven"
                name="eleven"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkEleven()} for="eleven">
                Wishlist
              </label>
              <p>
                The wish-list feature allows ecommerce customers to create a
                list of items they aren't ready to purchase yet, but hope to
                either buy for themselves or receive as a gift in the future.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isTwelveChecked}
                id="twelve"
                name="twelve"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkTwelve()} for="twelve">
                One Click Upsell
              </label>
              <p>
                Upselling is simply the act of offering your customers a better
                (more expensive) item when they add a product to their cart or
                reach the checkout page
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isThirteenChecked}
                id="thirteen"
                name="thirteen"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkThirteen()} for="thirteen">
                Related Items
              </label>
              <p>
                Related products are a popular ecommerce site feature for one
                simple reason. They work. Customers like related products
                because they remind them that they need or may want, say,
                batteries for a camera, extra memory for a new laptop, or shoes
                that match a new dress.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isFifteenChecked}
                id="fifteen"
                name="fifteen"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkFifteen()} for="fifteen">
                Loyalty Program
              </label>
              <p>
                Reward your customers for continuing to shop with you. Give them
                the option to sign up for a loyalty program. Common programs
                include one point for every dollar spent, points earned for
                sharing on social media, or points earned for referring friends.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isSixteenChecked}
                id="sixteen"
                name="sixteen"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkSixteen()} for="sixteen">
                Referral Program
              </label>
              <p>
                Consumers are 4x more likely to purchase something when referred
                by a friend. Word of mouth marketing is believed to be behind
                20-50% of all purchasing decisions.
              </p>
            </div>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isSeventeenChecked}
                id="seventeen"
                name="seventeen"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkSeventeen()} for="seventeen">
                Countdown Timer
              </label>
              <p>
                Build urgency, boost conversions, and get customers to the
                checkout faster by adding a promotion bar that counts down in
                real time.
              </p>
            </div>
            <h4>Social</h4>
            <div className={styles.formitem}>
              <input
                type="checkbox"
                checked={isEighteenChecked}
                id="eighteen"
                name="eighteen"
                style={{ padding: '0px' }}
              ></input>
              <label onClick={() => checkEighteen()} for="eighteen">
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
              <label onClick={() => checkFourteen()} for="fourteen">
                Social Login
              </label>
              <p>
                Social network providers can give you additional information
                about users, such as location, interests, birthday, and more.
                Using this data, you can target personalized content to the
                user.
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
          <div
            className="former"
            style={{ width: '90%', margin: '0 auto', maxWidth: '1080px' }}
          >
            <label onSelect={() => setInputfield(true)}>
              <div className="formitem">Name</div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label onSelect={() => setInputfield(true)}>
              <div className="formitem">Email</div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>
          {submitted && (
            <p
              style={{
                marginLeft: '5%',
                marginBottom: '20px',
                maxWidth: '1080px',
              }}
            >
              Thank you! We will get back to you shortly
            </p>
          )}
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            {inputField ? (
              <button
                onClick={() => handleSubmit()}
                className={styles.submitecom}
              >
                Submit
              </button>
            ) : (
              <button className={styles.submitecom} style={{ opacity: '0.5' }}>
                Submit
              </button>
            )}
          </div>
          {isFeatureSelected && (
            <div className={styles.featureselected}>
              <div>
                Features Selected :{' '}
                {(isOneChecked && 1) +
                  (isTwoChecked && 1) +
                  (isThreeChecked && 1) +
                  (isFourChecked && 1) +
                  (isFiveChecked && 1) +
                  (isSixChecked && 1) +
                  (isSevenChecked && 1) +
                  (isEightChecked && 1) +
                  (isNineChecked && 1) +
                  (isTenChecked && 1) +
                  (isElevenChecked && 1) +
                  (isTwelveChecked && 1) +
                  (isThirteenChecked && 1) +
                  (isFourteenChecked && 1) +
                  (isFifteenChecked && 1) +
                  (isSixteenChecked && 1) +
                  (isSeventeenChecked && 1) +
                  (isEighteenChecked && 1)}
              </div>
              <div>
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
              <div
                onClick={() =>
                  window.scrollTo(
                   {top: 9000,
                  behavior: 'smooth'}
                  )
                }
                className={styles.checkout}
              >
                Checkout
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Ecommerce
