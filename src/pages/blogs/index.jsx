import React, { memo } from "react"
import slugify from "slugify"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout/layout"
import Link from "../../components/link"
import { connect } from "react-redux"
import { mapStateToProps, THEME } from "../../state/createStore"

export default connect(mapStateToProps)(
  memo(({ location, theme }) => {
    const {
      allMdx: { nodes },
    } = useStaticQuery(graphql`
      query AllBlogs {
        allMdx(sort: { order: DESC, fields: frontmatter___date }) {
          nodes {
            body
            excerpt(pruneLength: 128)
            fileAbsolutePath
            timeToRead
            frontmatter {
              date
              thumbnail_alt
              thumbnail_src
            }
            headings(depth: h1) {
              value
            }
          }
        }
      }
    `)

    const blogStructuredData = getBlogStructuredDataTemplate()

    nodes.forEach(node => {
      const blogPostingStructuredData = createBlogPostStructuredData(
        location,
        node
      )

      blogStructuredData.blogPosts.push(blogPostingStructuredData)
    })

    return (
      <Layout
        location={location}
        title="Blog"
        additionalStructuredData={blogStructuredData}
        className="card-columns"
      >
        {nodes.map(
          ({
            id,
            excerpt,
            headings,
            timeToRead,
            frontmatter: { date, thumbnail_alt, thumbnail_src },
          }) => {
            const title = headings[0].value
            const uri = `blogs/${slugify(title, { lower: true, strict: true })}`

            return (
              <div
                className={`card shadow-sm ${
                  theme === THEME.DARK ? "bg-dark text-light" : ""
                }`}
                key={id}
              >
                <Link to={uri} className="text-reset text-decoration-none">
                  <img
                    src={thumbnail_src}
                    alt={thumbnail_alt}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{excerpt}</p>
                    <small>{`${new Date(
                      date
                    ).toDateString()} • ${timeToRead} min read`}</small>
                  </div>
                </Link>
              </div>
            )
          }
        )}
      </Layout>
    )
  })
)

function getBlogStructuredDataTemplate() {
  return {
    "@schema": "https://schema.org/",
    "@type": "Blog",
    "@id": "https://www.brandonjuliothenaro.my.id/blogs",
    identification: "https://www.brandonjuliothenaro.my.id/blogs",
    identifier: "https://www.brandonjuliothenaro.my.id/blogs",
    url: "https://www.brandonjuliothenaro.my.id/blogs",
    name: "Brandon Julio Thenaro's Blogs",

    editor: "https://www.brandonjuliothenaro.my.id",
    accountablePerson: "https://www.brandonjuliothenaro.my.id",
    author: "https://www.brandonjuliothenaro.my.id",
    creator: "https://www.brandonjuliothenaro.my.id",
    maintainer: "https://www.brandonjuliothenaro.my.id",
    producer: "https://www.brandonjuliothenaro.my.id",
    publisher: "https://www.brandonjuliothenaro.my.id",

    copyrightYear: new Date().getFullYear(),
    dateCreated: new Date("2020-02-12"),
    datePublished: new Date("2020-02-12"),
    sdDatePublished: new Date("2020-02-12"),

    copyrightHolder: "https://www.mit.edu/",
    license: "https://opensource.org/licenses/MIT",
    sdLicense: "https://opensource.org/licenses/MIT",
    sdPublisher: "https://www.brandonjuliothenaro.my.id",

    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
    image: "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",

    about: "Brandon Julio Thenaro's Blogs",
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    pageEnd: 1,
    pageStart: 1,
    pagination: "1-1",
    accessMode: "visual",
    accessModeSufficient: ["textual", "visual", "textOnVisual"],
    discussionUrl: "https://www.brandonjuliothenaro.my.id/blogs",
    headline: "Brandon Julio Thenaro's Blogs",
    inLanguage: "en",

    blogPosts: [],
  }
}
function createBlogPostStructuredData(
  location,
  { headings, frontmatter: { date, thumbnail_src } }
) {
  const title = headings[0].value
  const url = `${location.href}/${slugify(title, {
    lower: true,
  })}`
  const validDate = new Date(date)

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

    copyrightYear: validDate.getFullYear(),
    dateCreated: validDate,
    datePublished: validDate,
    sdDatePublished: validDate,

    copyrightHolder: "https://www.mit.edu/",
    license: "https://opensource.org/licenses/MIT",
    sdLicense: "https://opensource.org/licenses/MIT",
    sdPublisher: "https://www.brandonjuliothenaro.my.id",

    thumbnailUrl: thumbnail_src,
    image: thumbnail_src,

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
