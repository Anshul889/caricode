import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styles from "./PostCard.module.css"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  TwitterIcon
} from "react-share";

const PostCard = ({ post }) => {
  const { title, date, slug, excerpt } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.cardimage}>
          <Image fluid={img} />
        </div>
        <div className={styles.cardcontent}>
          <h4>{title}</h4>
          <p>{excerpt}... </p>
          <div className={styles.cardactions}>
            <div className={styles.carddate}>{date}</div>
            <div className={styles.cardshare}>
              <div className={styles.cardshareshare}>Share:</div>
              <FacebookShareButton url={`https://mensfashion.netlify.app/${slug}`} style={{height: '24px'}}>
                <FacebookIcon size={24} round bgStyle={{fill: 'lightgray'}}/>
              </FacebookShareButton>
              <EmailShareButton url={`https://mensfashion.netlify.app/${slug}`} style={{height: '24px'}}>
                <EmailIcon size={24} round bgStyle={{fill: 'lightgray'}}/>
              </EmailShareButton>
              <WhatsappShareButton url={`https://mensfashion.netlify.app/${slug}`} style={{height: '24px'}}>
                <WhatsappIcon size={24} round bgStyle={{fill: 'lightgray'}}/>
              </WhatsappShareButton>
              <TwitterShareButton url={`https://mensfashion.netlify.app/${slug}`} style={{height: '24px'}}>
                <TwitterIcon size={24} round bgStyle={{fill: 'lightgray'}}/>
              </TwitterShareButton>
            </div>
            <Link to={slug} className={styles.cardbutton}>
              <button>Continue Reading</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard