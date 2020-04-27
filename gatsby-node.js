exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: slug,
      component: require.resolve('./src/components/post-template.js'),
      context: { slug: slug },
    })
  })

  const postsPerPage = 1

  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve('./src/components/blog-template.js'),
      context: {
        length: posts.length,
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })
  const tagresults = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const tags = tagresults.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: require.resolve('./src/components/tags-template.js'),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
