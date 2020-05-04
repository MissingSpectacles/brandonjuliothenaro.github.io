require("dotenv").config({
  path: `.env`,
})

const siteUrl = `https://www.brandonjuliothenaro.my.id`

module.exports = {
  siteMetadata: {
    description: `I am a programmer who can write code in multiple programming languages and frameworks for front-end, back-end, database, and CI/CD with best practices and code clarity in mind.`,
    name: `Brandon Julio Thenaro`,
    siteUrl: siteUrl,
    twitterId: `@brandon_julio_t`,

    facebookUrl: `https://www.facebook.com/profile.php?id=100008724798107`,
    freeCodeCampUrl: `https://www.freecodecamp.org/brandon-julio-thenaro`,
    githubUrl: `https://github.com/brandon-julio-t`,
    instagramUrl: `https://www.instagram.com/brandon.julio.t`,
    linkedinUrl: `https://www.linkedin.com/in/brandonjuliothenaro`,
    twitterUrl: `https://twitter.com/brandon_julio_t`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#fff`,
        display: `fullscreen`,
        icon: `src/images/favicon.webp`,
        lang: `en`,
        name: `Brandon Julio Thenaro's Website`,
        short_name: `Brandon Julio Thenaro's Website`,
        start_url: `/`,
        theme_color: `#fff`,
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        /*
         * https://developer.github.com/v4/explorer/
         * Used in index.jsx:99
         */
        graphQLQuery: `query {
          viewer {
            repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
              nodes {
                description
                name
                updatedAt
                url
              }
            }
          }
        }`,
      },
    },
  ],
}
