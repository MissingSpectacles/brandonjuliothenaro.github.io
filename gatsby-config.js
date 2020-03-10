require("dotenv").config({
  path: `.env`,
})

const path = require(`path`)
const structured_data = require(`./static/structured_data`)

const siteUrl = `https://www.brandonjuliothenaro.my.id`

module.exports = {
  siteMetadata: {
    description: `Mom, I'm on the internet!`,
    name: `Brandon Julio Thenaro`,
    siteUrl: siteUrl,
    twitter_id: `@brandon_julio_t`,

    facebook_url: `https://www.facebook.com/profile.php?id=100008724798107`,
    freeCodeCamp_url: `https://www.freecodecamp.org/brandon-julio-thenaro`,
    github_url: `https://github.com/brandon-julio-t`,
    instagram_url: `https://www.instagram.com/`,
    linkedin_url: `https://www.linkedin.com/in/brandonjuliothenaro/`,
    twitter_url: `https://twitter.com/brandon_julio_t`,

    structured_data: JSON.stringify(structured_data),
  },

  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preact`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
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
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
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
