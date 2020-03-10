require("dotenv").config({
  path: `.env`,
})

const path = require(`path`)

const site_url = `https://www.brandonjuliothenaro.my.id`

module.exports = {
  siteMetadata: {
    description: `Mom, I'm on the internet!`,
    name: `Brandon Julio Thenaro`,
    site_url: site_url,
    twitter_id: `@brandon_julio_t`,

    facebook_url: `${site_url}/facebook`,
    freeCodeCamp_url: `${site_url}/freecodecamp`,
    github_url: `${site_url}/github`,
    instagram_url: `${site_url}/instagram`,
    linkedin_url: `${site_url}/linkedin`,
    twitter_url: `${site_url}/twitter`,
  },

  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preact`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: site_url,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#343a40`,
        display: `fullscreen`,
        icon: `src/images/favicon.webp`,
        lang: `en`,
        name: `Brandon Julio Thenaro's Website`,
        short_name: `Brandon Julio Thenaro's Website`,
        start_url: `/`,
        theme_color: `#343a40`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/skills`],
      },
    },

    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/createStore",
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: site_url,
        sitemap: `${site_url}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        // https://developer.github.com/v4/explorer/
        // Used in index.jsx:99
        graphQLQuery: `
          query {
            viewer {
              repositories(first: 5, orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                  url
                  name
                  description
                }
              }
            }
          }
        `,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
}
