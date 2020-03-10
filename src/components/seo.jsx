import Helmet from "react-helmet"
import React, { memo } from "react"
import { connect } from "react-redux"
import { graphql, useStaticQuery } from "gatsby"

import { mapStateToProps, THEME } from "../state/createStore"
// import StructuredData from "../../static/structured_data"

export default connect(mapStateToProps)(
  memo(({ theme }) => {
    const {
      site: {
        siteMetadata: {
          description,
          name,
          siteUrl,
          twitter_id,
          structured_data,
        },
      },
    } = useStaticQuery(graphql`
      query name {
        site {
          siteMetadata {
            name
            description
            name
            siteUrl
            twitter_id
            structured_data
          }
        }
      }
    `)

    return (
      <Helmet>
        <html lang="en" />
        <body
          className={`container px-md-5 py-5 my-md-1 ${
            theme === THEME.DARK ? "bg-dark text-light" : ""
          }`}
        />

        <title>Brandon Julio Thenaro</title>

        {/* JSON-LD */}
        <script type="application/ld+json">
          {structured_data}
        </script>

        {/* Search Engine */}
        <meta name="description" content={description} />
        <meta name="author" content="Brandon Julio Thenaro" />

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
)
