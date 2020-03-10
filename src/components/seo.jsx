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
        siteMetadata: { description, name, siteUrl, twitter_id },
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
          {`{
  "@context": "https://schema.org/",
  "@id": "https://www.brandonjuliothenaro.my.id",
  "@type": "Person",
  "name": "Brandon Julio Thenaro",
  "birthDate": "2001-07-07",
  "gender": "male",
  "workLocation": "Jakarta",
  "identifier": "https://www.brandonjuliothenaro.my.id",
  "url": "https://www.brandonjuliothenaro.my.id",
  "jobTitle": "Undergraduate Student",
  "telephone": "+62-851-5522-8431",
  "email": [
    "brandon.julio.t@icloud.com",
    "bandut2036@gmail.com",
    "brandon.thenaro@binus.ac.id"
  ],
  "affiliation": {
    "@type": "Organization",
    "@id": "https://binus.ac.id",
    "name": "BINUS UNIVERSITY",
    "brand": "Binus University",
    "email": "pmb@binus.edu",
    "identifier": "https://binus.ac.id",
    "legalName": "Bina Nusantara University",
    "url": "https://binus.ac.id",
    "telephone": [
      "+62-21-534-5830",
      "+62-21-535-0660"
    ],
    "alternateName": [
      "Bina Nusantara University",
      "BINUS University",
      "Binus University"
    ],
    "address": {
      "@type": "PostalAddress",
      "@id": "https://binus.ac.id",
      "postalCode": "11480",
      "streetAddress": "Jl. K. H. Syahdan No. 9, Kemanggisan, Palmerah",
      "identifier": "https://binus.ac.id",
      "addressCountry": [
        "Indonesia",
        "ID"
      ]
    }
  }
}
`}
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
