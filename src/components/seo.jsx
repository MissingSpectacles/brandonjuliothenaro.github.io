import { Helmet } from "react-helmet"
import React, { memo } from "react"

import { useStaticQuery, graphql } from "gatsby"

import useTheme from "@material-ui/core/styles/useTheme"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  html: {
    backgroundColor: props => props.bgcolor,
  },
})

const SEO = ({ title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          name
          description
          name
          siteUrl
          twitterId
        }
      }
    }
  `)

  const classes = useStyles({ bgcolor: useTheme().palette.background.default })

  return (
    <Helmet titleTemplate={`%s | ${siteMetadata.name}`}>
      {/*
       |------------------------------------------------------------------------
       | Material UI
       |------------------------------------------------------------------------
       */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      {/*
       |------------------------------------------------------------------------
       | SEO
       |------------------------------------------------------------------------
       */}
      <html lang="en" className={classes.html} />

      <title>{title ? title : "Home"}</title>

      {/* Search Engine */}
      <meta name="description" content={siteMetadata.description} />
      <meta name="author" content="Brandon Julio Thenaro" />

      {/* Schema.org for Google */}
      <meta itemProp="description" content={siteMetadata.description} />
      <meta itemProp="name" content={siteMetadata.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.twitterId} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:site" content={siteMetadata.twitterId} />
      <meta name="twitter:title" content={siteMetadata.name} />
      <meta
        name="twitter:image"
        content="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="An image of a dog, which is a popular meme under the name of 'doge'."
      />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={siteMetadata.name} />
      <meta property="og:title" content={siteMetadata.name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta
        property="og:image"
        content="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
      />
      <meta
        property="og:image:alt"
        content="An image of a dog, which is a popular meme under the name of 'doge'."
      />

      <meta property="fb:app_id" content="440691499995681" />
    </Helmet>
  )
}

export default memo(SEO)
