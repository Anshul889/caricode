import React, { useState } from 'react'
import styles from '../pages/ecommerce.module.css'
import { Spring } from 'react-spring/renderprops'
import axios from 'axios'

const EcommerceSelect = () => {
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
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  let message =
    (isOneChecked && `Sign up forms `) +
    (isTwoChecked && `, custom email design `) +
    (isThreeChecked && `, email statistics `) +
    (isFourChecked && `, email testing `) +
    (isFiveChecked && `, email marketing automation `) +
    (isSixChecked && `, list management `) +
    (isSevenChecked && `, rich snippets `) +
    (isEightChecked && `, google analytics `) +
    (isNineChecked && `, blog `) +
    (isTenChecked && `, review prompt `) +
    (isElevenChecked && `, wishlist`) +
    (isTwelveChecked && `, one click upsell `) +
    (isThirteenChecked && `, related items `) +
    (isFourteenChecked && `, social login `) +
    (isFifteenChecked && `, loyalty program `) +
    (isSixteenChecked && `, referral program `) +
    (isSeventeenChecked && `, countdown timer `) +
    (isEighteenChecked && `, social sharing `)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setInputfield(false)
      const response = await axios.post(
        `https://us-central1-annies-recipes.cloudfunctions.net/app/api/caricode`,
        {
          name,
          email,
          message: message.replace(/false/g, ``).replace(/0/, ''),
        }
      )
      if (response.data === 'SUbmitted') {
        setLoading(false)
        setSubmitted(true)
        setPopup(false)
      }
    } catch (e) {
      console.log(e)
      setInputfield(true)
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
    <div className={styles.formupper}>
      <div className={styles.form}>
        <h4>Premium Additional Features Starting at Rs. 900 / month each</h4>
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
            Engage contacts with automated, recurring emails or drip series in
            the time it takes to create 1-to-many emails.
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
            Capture new signups, confirm opt-in, and add them directly to lists
            in Marketing Campaigns.
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
            Get a complete picture of each email’s performance with analytics
            that help you make informed, data-based decisions.
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
            Run inbox rendering previews, spam testing, and link validation so
            you know every email is ready before you ‘Send.’
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
            Google Analytics lets you measure your advertising ROI as well as
            track your Flash, video, and social networking sites and
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
            checked={isTenChecked}
            id="ten"
            name="ten"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => checkTen()} for="ten">
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
            checked={isElevenChecked}
            id="eleven"
            name="eleven"
            style={{ padding: '0px' }}
          ></input>
          <label onClick={() => checkEleven()} for="eleven">
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
            (more expensive) item when they add a product to their cart or reach
            the checkout page
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
            Related products are a popular ecommerce site feature for one simple
            reason. They work. Customers like related products because they
            remind them that they need or may want, say, batteries for a camera,
            extra memory for a new laptop, or shoes that match a new dress.
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
            Reward your customers for continuing to shop with you. Give them the
            option to sign up for a loyalty program. Common programs include one
            point for every dollar spent, points earned for sharing on social
            media, or points earned for referring friends.
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
            Consumers are 4x more likely to purchase something when referred by
            a friend. Word of mouth marketing is believed to be behind 20-50% of
            all purchasing decisions.
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
            Build urgency, boost conversions, and get customers to the checkout
            faster by adding a promotion bar that counts down in real time.
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
            Social network providers can give you additional information about
            users, such as location, interests, birthday, and more. Using this
            data, you can target personalized content to the user.
          </p>
        </div>
      </div>
      <div className={styles.orderedupper}>
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
          {(isOneChecked && 900) +
            (isTwoChecked && 900) +
            (isThreeChecked && 900) +
            (isFourChecked && 900) +
            (isFiveChecked && 900) +
            (isSixChecked && 900) +
            (isSevenChecked && 900) +
            (isEightChecked && 900) +
            (isNineChecked && 900) +
            (isTenChecked && 900) +
            (isElevenChecked && 900) +
            (isTwelveChecked && 900) +
            (isThirteenChecked && 900) +
            (isFourteenChecked && 900) +
            (isFifteenChecked && 900) +
            (isSixteenChecked && 900) +
            (isSeventeenChecked && 900) +
            (isEighteenChecked && 900)}
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
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label onSelect={() => setInputfield(true)}>
            <div className="formitem">Email</div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        {loading && (
          <p
            style={{
              width: '90%',
              margin: '0 auto',
              maxWidth: '1080px',
            }}
          >
            Loading...
          </p>
        )}
        {submitted && (
          <p
            style={{
              width: '90%',
              margin: '0 auto',
              maxWidth: '1080px',
            }}
          >
            Thank you! We will get back to you shortly
          </p>
        )}
        <div style={{ maxWidth: '1080px', margin: '0 auto', width: '90%' }}>
          {inputField && isFeatureSelected ? (
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
          <Spring from={{ bottom: 0 }} to={{ bottom: 50 }}>
            {props => (
              <div className={styles.featureupper} style={props}>
                <div className={styles.featureselected}>
                  <div className={styles.mfeatures}>
                    Features :{' '}
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
                  <div className={styles.mtotal}>
                    Total: Rs{' '}
                    {(isOneChecked && 900) +
                      (isTwoChecked && 900) +
                      (isThreeChecked && 900) +
                      (isFourChecked && 900) +
                      (isFiveChecked && 900) +
                      (isSixChecked && 900) +
                      (isSevenChecked && 900) +
                      (isEightChecked && 900) +
                      (isNineChecked && 900) +
                      (isTenChecked && 900) +
                      (isElevenChecked && 900) +
                      (isTwelveChecked && 900) +
                      (isThirteenChecked && 900) +
                      (isFourteenChecked && 900) +
                      (isFifteenChecked && 900) +
                      (isSixteenChecked && 900) +
                      (isSeventeenChecked && 900) +
                      (isEighteenChecked && 900)}
                    /mo
                  </div>
                  <div
                    onClick={() =>
                      window.scrollTo({ top: 9000, behavior: 'smooth' })
                    }
                    className={styles.checkout}
                  >
                    Checkout
                  </div>
                </div>
              </div>
            )}
          </Spring>
        )}
        {isFeatureSelected && (
          <Spring from={{ bottom: -50 }} to={{ bottom: 0 }}>
            {props => (
              <div className={styles.dfeatureupper} style={props}>
                <div className={styles.featureselected}>
                  <div className={styles.mfeatures}>
                    Features :{' '}
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
                  <div className={styles.mtotal}>
                    Total: Rs{' '}
                    {(isOneChecked && 900) +
                      (isTwoChecked && 900) +
                      (isThreeChecked && 900) +
                      (isFourChecked && 900) +
                      (isFiveChecked && 900) +
                      (isSixChecked && 900) +
                      (isSevenChecked && 900) +
                      (isEightChecked && 900) +
                      (isNineChecked && 900) +
                      (isTenChecked && 900) +
                      (isElevenChecked && 900) +
                      (isTwelveChecked && 900) +
                      (isThirteenChecked && 900) +
                      (isFourteenChecked && 900) +
                      (isFifteenChecked && 900) +
                      (isSixteenChecked && 900) +
                      (isSeventeenChecked && 900) +
                      (isEighteenChecked && 900)}
                    /mo
                  </div>
                  <div
                    onClick={() =>
                      window.scrollTo({ top: 9000, behavior: 'smooth' })
                    }
                    className={styles.checkout}
                  >
                    Checkout
                  </div>
                </div>
              </div>
            )}
          </Spring>
        )}
      </div>
    </div>
  )
}

export default EcommerceSelect