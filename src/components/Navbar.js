import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'gatsby'
import home from '../images/home.svg'
import contact from '../images/contact.svg'
import blog from '../images/blog.svg'
import invest from '../images/invest.svg'

const Navbar = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.dnavigation}>
        <Link to="/" className={styles.logo}>
          <span style={{ color: 'hsla(210, 33%, 55%, 1)' }}>CARI</span>
          <span style={{ color: 'hsla(0, 0%, 75%, 1)' }}>CODE</span>
        </Link>
        <ul className={styles.leftdnav}>
          <li className={styles.dItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={styles.dItem}>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <ul className={styles.rightdnav}>
          <a href="/#section3">
            <button>Get Started</button>
          </a>
        </ul>
      </div>
      <div className={styles.MobileNav}>
        <Link className={styles.mItem} activeStyle={{ filter: 'grayscale(0%)'}} to="/">
          <img className={styles.mnavimg} src={home} alt="logo" />
          <div className={styles.mText}>Home</div>
        </Link>
        <Link className={styles.mItem} to="/blog">
          <img className={styles.mnavimg} src={blog} alt="logo" />
          <div className={styles.mText}>Blog</div>
        </Link>
        <a className={styles.mItem} href="/#contact">
          <img className={styles.mnavimg} src={contact} alt="logo" />
          <div className={styles.mText}>Contact</div>
        </a>
        <Link className={styles.mItem} to="/cart">
          <img className={styles.mnavimg} src={invest} alt="cart" />
          <div className={styles.mText}>Start Investing</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
