require("dotenv").config({
  path: `.env`,
})

const path = require(`path`)

const siteUrl = `https://www.brandonjuliothenaro.my.id`

module.exports = {
  siteMetadata: {
    description: `Mom, I'm on the internet!`,
    email: `brandon.julio.t@icloud.com`,
    name: `Brandon Julio Thenaro`,
    siteUrl: siteUrl,
    twitter_id: `@brandon_julio_t`,

    facebook_url: `${siteUrl}/facebook`,
    freeCodeCamp_url: `${siteUrl}/freecodecamp`,
    github_url: `${siteUrl}/github`,
    instagram_url: `${siteUrl}/instagram`,
    linkedin_url: `${siteUrl}/linkedin`,
    twitter_url: `${siteUrl}/twitter`,
  },

  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

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
  ],
}
