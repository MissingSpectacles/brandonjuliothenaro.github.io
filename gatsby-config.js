require("dotenv").config({
  path: `.env`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://brandonjuliothenaro.my.id`,
    description: `Mom, I'm on the internet!`,
    name: `Brandon Julio Thenaro`,
    twitter_id: `@BThenaro`,
  },

  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://brandonjuliothenaro.my.id`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#343a40`,
        display: `standalone`,
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://brandonjuliothenaro.my.id",
        sitemap: "https://brandonjuliothenaro.my.id/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        // https://developer.github.com/v4/explorer/
        // Used in index.js:99
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
