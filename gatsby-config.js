module.exports = {
  siteMetadata: {
    title: 'Caricode',
    description:
      'We design, build, deploy and manage web applications. Powered by Google Cloud.',
    url: 'https://www.caricode.co', // No trailing slash allowed!
    image: '/images/image3.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@caricode',
    date: '2020-01-28',
    siteUrl: `https://www.caricode.co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-124272763-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/static': ['cache-control: public, max-age=31536000, immutable'],
          '/images': ['cache-control: public, max-age=31536000, immutable'],
          '/page-data': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        // fonts: [
        //   `source sans pro\:0` // you can also specify font weights and styles
        // ],
        fonts: [
          {
            family: 'source sans pro',
            variants: [`300`, `400`, `700`, `900`],
          },
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caricode`,
        short_name: `Caricode`,
        start_url: `/`,
        background_color: `#484459`,
        theme_color: `#484459`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
