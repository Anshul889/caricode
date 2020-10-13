import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "./layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import SEO from "./SEO"
import styles from "./post-template.module.css"
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

const Posttemplate = ({ data }) => {
  const {
    title,
    date,
    image,
    description,
    seoimage,
    tags,
    slug,
  } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid
  const relatedposts = data.allMdx.edges
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        date={date}
        image={seoimage}
        pathname={"/" + slug}
      />
      <div className={styles.main}>
        <div className={styles.post}>
          <div className={styles.titlearea}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.date}>{date}</div>
          </div>
          <div className={styles.imagecontainer}>
           <img src='https://www.caricode.co/images/image3.jpg' style={{width: '100%'}}></img>
          </div>
          <div className={styles.cardshare}>
            <div className={styles.cardshareshare}>Share:</div>
            <FacebookShareButton
              url={`https://www.caricode.co/${slug}`}
              style={{ height: "24px" }}
            >
              <FacebookIcon size={24} round bgStyle={{ fill: " #484459" }} />
            </FacebookShareButton>
            <EmailShareButton
              url={`https://www.caricode.co/${slug}`}
              style={{ height: "24px" }}
            >
              <EmailIcon size={24} round bgStyle={{ fill: " #484459" }} />
            </EmailShareButton>
            <WhatsappShareButton
              url={`https://www.caricode.co/${slug}`}
              style={{ height: "24px" }}
            >
              <WhatsappIcon size={24} round bgStyle={{ fill: " #484459" }} />
            </WhatsappShareButton>
            <TwitterShareButton
              url={`https://www.caricode.co/${slug}`}
              style={{ height: "24px" }}
            >
              <TwitterIcon size={24} round bgStyle={{ fill: " #484459" }} />
            </TwitterShareButton>
          </div>
          <div className={styles.tags}>
            Tags : {tags.map(tag => {
              return <Link to={`/tags/${tag}`}className={styles.tag}>{tag}</Link>
            })}
          </div>
          <div className={styles.mdxcontainer}>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
        <div className={styles.sidebar}>
          {relatedposts.map(({ node }, index) => {
            return (
              <div className={styles.sidebaritem} key={index}>
                <Link to={node.frontmatter.slug}>
                  <Image fluid={node.frontmatter.image.childImageSharp.fluid} />
                </Link>
                <Link to={node.frontmatter.slug}>
                  <div className={styles.sidebartitle}>
                    {node.frontmatter.title}
                  </div>
                </Link>
                <div className={styles.sidebardate}>
                  {node.frontmatter.date}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        seoimage
        description
        date(formatString: "MMMM Do YYYY")
        author
        tags
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Posttemplate