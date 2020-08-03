import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'gatsby'
import home from '../images/home.svg'
import contact from '../images/contact.svg'
import blog from '../images/blog.svg'
import landingpage from '../images/landingpage.svg'
import mobilenav from '../images/mobile-nav.svg'

const Navbar = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.dnavigation}>
        <Link to="/" className={styles.logo}>
          <span style={{ color: '#7c759a' }}>CARI</span>
          <span style={{ color: 'hsla(0, 0%, 75%, 1)' }}>CODE</span>
        </Link>
        <ul className={styles.leftdnav}>
          <li className={styles.dItem}>
            <Link activeStyle={{ color: '#7c759a' }} to="/blogs">
              Blogs
            </Link>
          </li>
          <li className={styles.dItem}>
            <Link
              activeStyle={{ color: '#7c759a' }}
              to="/landing-pages/"
            >
              Landing Pages
            </Link>
          </li>
          <li className={styles.dItem}>
            <Link
              activeStyle={{ color: '#7c759a' }}
              to="/web-applications/"
            >
              Applications
            </Link>
          </li>
        </ul>
        <ul className={styles.rightdnav}>
          <Link to="/contact/">
            <button>Contact</button>
          </Link>
        </ul>
      </div>
      <div className={styles.MobileNav}>
        <Link
          className={styles.mItem}
          activeStyle={{ filter: 'grayscale(0%)' }}
          to="/"
        >
          <img className={styles.mnavimg} src={home} alt="logo" />
          <div className={styles.mText}>Home</div>
        </Link>
        <Link
          className={styles.mItem}
          activeStyle={{ filter: 'grayscale(0%)' }}
          to="/blogs/"
        >
          <img className={styles.mnavimg} src={blog} alt="blogs" />
          <div className={styles.mText}>Blogs</div>
        </Link>
        <Link
          className={styles.mItem}
          activeStyle={{ filter: 'grayscale(0%)' }}
          to="/landing-pages/"
        >
          <img className={styles.mnavimg} src={landingpage} alt="logo" />
          <div className={styles.mText}>Landing</div>
        </Link>
        <Link
          className={styles.mItem}
          activeStyle={{ filter: 'grayscale(0%)' }}
          to="/web-applications/"
        >
          <img className={styles.mnavimg} src={mobilenav} alt="applications" />
          <div className={styles.mText}>Apps</div>
        </Link>
        <Link
          className={styles.mItem}
          activeStyle={{ filter: 'grayscale(0%)' }}
          to="/contact/"
        >
          <img className={styles.mnavimg} src={contact} alt="logo" />
          <div className={styles.mText}>Contact</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
