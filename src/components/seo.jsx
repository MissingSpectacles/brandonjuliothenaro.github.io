import Helmet from "react-helmet"
import React, { memo } from "react"
import { connect } from "react-redux"
import { graphql, useStaticQuery } from "gatsby"

import { mapStateToProps, THEME } from "../state/createStore"

export default connect(mapStateToProps)(
  memo(({ structuredData, theme, title }) => {
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
      query SiteMetadata {
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

    const tabTitle = title ? title : name
    const structuredDatas = Array.isArray(structuredData)
      ? `[${[structured_data, ...structuredData]}]`
      : structuredData
      ? `[${[structured_data, JSON.stringify(structuredData)]}]`
      : structured_data

    return (
      <Helmet titleTemplate={`%s | ${name}`}>
        <html lang="en" />
        <body
          className={`${theme === THEME.DARK ? "bg-dark text-light" : ""}`}
        />

        <title>{tabTitle}</title>

        {/* JSON-LD */}
        <script type="application/ld+json">
          {structuredDatas}
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
        <meta
          name="twitter:image"
          content="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="An image of a dog, which is a popular meme under the name of 'doge'."
        />

        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={name} />
        <meta property="og:title" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
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
  })
)
