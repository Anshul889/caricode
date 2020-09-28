import React from 'react'
import { Spring, config } from 'react-spring/renderprops'
import styles from '../pages/blogs.module.css'
import window from '../images/window-white.svg'
import user from '../images/user.svg'


const BlogHero = () => {
  return (
    <div className={styles.hero}>
      <h1>Want more traffic to your website ?</h1>
      <div className={styles.heroimg}>
        <Spring
          from={{ transform: 'translate(-30px, -30px)' }}
          to={{ transform: 'translate(0, 0)' }}
          config={config.molasses}
          delay={800}
        >
          {props => <img className={styles.usersvg} src={user} style={props} alt="" />}
        </Spring>
        <Spring
          from={{ transform: 'translate(0px, -50px)' }}
          to={{ transform: 'translate(0, -20px)' }}
          config={config.molasses}
          delay={800}
        >
          {props => <img className={styles.usersvg} src={user} style={props} alt="" />}
        </Spring>
        <Spring
          from={{ transform: 'translate(30px, -30px)' }}
          to={{ transform: 'translate(0, 0px)' }}
          config={config.molasses}
          delay={800}
        >
          {props => <img className={styles.usersvg} src={user} style={props} alt="" />}
        </Spring>
        <img className={styles.windowsvg} src={window} alt="" />
        <Spring
          from={{ transform: 'translate(-30px, 30px)' }}
          to={{ transform: 'translate(0, 0px)' }}
          config={config.molasses}
          delay={800}
        >
          {props => <img className={styles.usersvg} src={user} style={props} alt="" />}
        </Spring>
        <Spring
          from={{ transform: 'translate(0px, 50px)' }}
          to={{ transform: 'translate(0, 20px)' }}
          config={config.molasses}
          delay={800}
        >
          {props => <img className={styles.usersvg} src={user} style={props} alt="" />}
        </Spring>
        <Spring
          from={{ transform: 'translate(30px, 30px)' }}
          to={{ transform: 'translate(0, 0px)' }}
          config={config.molasses}
          delay={800}
        >
          {props => <img className={styles.usersvg} src={user} style={props} alt="" />}
        </Spring>
      </div>
    </div>
  )
}

export default BlogHero
