import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import PostCard from "./PostCard"
import styles from "./PostList.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Blogs = props => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/blog/` : `blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`
  return (
    <Layout>
      <div className={styles.list}>
        {data.allMdx.edges.map(({ node }) => {
          return <PostCard post={node} key={node.slug} />
        })}
      </div>

      <div className={styles.links}>
        {!isFirst ? <AniLink fade to={prevPage} className={styles.link}>Previous</AniLink> : <span className={styles.link}>Previous</span>}
        {Array.from({ length: numPages }, (_, i) => {
          return (
            <AniLink
              fade
              to={`/blog/${i === 0 ? "" : i + 1}`}
              className={
                i + 1 === currentPage
                  ? `${styles.active}`
                  : `${styles.link}`
              }
            >
              {i + 1}
            </AniLink>
          )
        })}
        {!isLast ? <AniLink fade to={nextPage} className={styles.link}>Next</AniLink> : <span className={styles.link}>Next</span>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            excerpt
            date(formatString: "MMMM Do YYYY")
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

export default Blogs