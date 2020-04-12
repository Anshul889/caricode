module.exports = {
  siteMetadata: {
    title: 'Caricode',
    description:
      'We design, build, deploy and manage web applications. Powered by Google Cloud.',
    url: 'https://www.caricode.co', // No trailing slash allowed!
    image: '/images/image3.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@caricode',
    date: '2020-01-28'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-124272763-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caricode`,
        short_name: `Caricode`,
        start_url: `/`,
        background_color: `#16212c`,
        theme_color: `#16212c`,
        display: `standalone`,
      },
    },
  ],
}
