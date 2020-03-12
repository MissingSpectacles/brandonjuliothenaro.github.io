import "prismjs/themes/prism-tomorrow.css"

import Layout from "../../components/layout/layout"
import React, { memo } from "react"
import { MDXProvider } from "@mdx-js/react"

import ResponsiveImg from "../../components/responsive_image"

export default memo(
  ({
    location,
    children,
    pageContext: {
      frontmatter: { date, thumbnail_src, thumbnail_alt },
    },
  }) => {
    const url = location.href
    const title = children[0].props.children // The '#' element from the '.mdx' file
    const validDate = new Date(date)
    const year = validDate.getFullYear()
    const thumbnailUrl = thumbnail_src
    const imageAlt = thumbnail_alt

    const blogPostStructuredData = JSON.stringify(createBlogPostStructuredData(
      url,
      title,
      year,
      validDate,
      thumbnailUrl
    ))

    return (
      <Layout
        location={location}
        title={title} // Pass post title up as the <h1> of the page
        structuredData={blogPostStructuredData}
      >
        <MDXProvider
          components={{
            img: props => <ResponsiveImg {...props} />,
            h1: () => null, // Hide <h1> because there is already a <h1>.
          }}
        >
          <ResponsiveImg src={thumbnailUrl} alt={imageAlt} />
          {children}
        </MDXProvider>
      </Layout>
    )
  }
)

function createBlogPostStructuredData(
  url,
  title,
  year,
  validDate,
  thumbnailUrl
) {
  return {
    "@schema": "https://schema.org/",
    "@type": "BlogPosting",
    "@id": url,
    identification: url,
    identifier: url,
    name: title,

    editor: "https://www.brandonjuliothenaro.my.id",
    accountablePerson: "https://www.brandonjuliothenaro.my.id",
    author: "https://www.brandonjuliothenaro.my.id",
    creator: "https://www.brandonjuliothenaro.my.id",
    maintainer: "https://www.brandonjuliothenaro.my.id",
    producer: "https://www.brandonjuliothenaro.my.id",
    publisher: "https://www.brandonjuliothenaro.my.id",

    copyrightYear: year,
    dateCreated: validDate,
    datePublished: validDate,
    sdDatePublished: validDate,

    copyrightHolder: "https://www.mit.edu/",
    license: "https://opensource.org/licenses/MIT",
    sdLicense: "https://opensource.org/licenses/MIT",
    sdPublisher: "https://www.brandonjuliothenaro.my.id",

    thumbnailUrl: thumbnailUrl,
    image: thumbnailUrl,

    about: title,
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    pageEnd: 1,
    pageStart: 1,
    pagination: "1-1",
    accessMode: "visual",
    accessModeSufficient: ["textual", "visual", "textOnVisual"],
    discussionUrl: url,
    headline: title,
    inLanguage: "en",
    url: url,
  }
}
