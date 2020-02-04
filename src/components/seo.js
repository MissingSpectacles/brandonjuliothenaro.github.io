import Helmet from "react-helmet"
import React, { memo } from "react"

import { graphql, useStaticQuery } from "gatsby"

export default memo(() => {
  const {
      site: {
        siteMetadata: { siteUrl, description, name, twitter_id },
      },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteUrl
          description
          name
          twitter_id
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="en" />
      <body className="bg-dark" />

      <title>{name}</title>

      {/* Search Engine */}
      <meta name="description" content={description} />

      {/* Schema.org for Google */}
      <meta itemProp="description" content={description} />
      <meta itemProp="name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitter_id} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitter_id} />
      <meta name="twitter:title" content={name} />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name="og:description" content={description} />
      <meta name="og:locale" content="en" />
      <meta name="og:site_name" content={name} />
      <meta name="og:title" content={name} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={siteUrl} />
    </Helmet>
  )
})
