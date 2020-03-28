import React, { memo } from "react"
import { graphql, StaticQuery } from "gatsby"
import slugify from "slugify"

import Layout from "../../components/layout/layout"
import Link from "../../components/link"
import { connect } from "react-redux"
import { mapStateToProps, THEME } from "../../state/createStore"

export default connect(mapStateToProps)(
  memo(({ location, theme }) => (
    <Layout location={location} title="Blogs" className="card-columns">
      <StaticQuery
        query={graphql`
          query AllMdx {
            allMdx(sort: { order: DESC, fields: frontmatter___date }) {
              nodes {
                id
                excerpt(pruneLength: 128)
                timeToRead
                frontmatter {
                  date
                  title
                  thumbnail_url
                }
              }
            }
          }
        `}
        render={({ allMdx: { nodes } }) =>
          nodes.map(({ id, excerpt, timeToRead, frontmatter }) => (
            <Link
              to={`blogs/${slugify(frontmatter.title, { lower: true })}`}
              className={`card text-reset text-decoration-none shadow ${
                theme === THEME.DARK ? "bg-dark" : ""
              }`}
              key={id}
            >
              <img
                className="card-img-top"
                src={frontmatter.thumbnail_url}
                alt={`Thumbnail of ${frontmatter.title}`}
              />

              <div className="card-body">
                <h2 className="card-title h5">{frontmatter.title}</h2>
                <p className="card-text">{excerpt}</p>
              </div>

              <div className="card-footer">
                <small className="card-text">
                  {`${new Date(
                    frontmatter.date
                  ).toDateString()} • ${timeToRead} min read`}
                </small>
              </div>
            </Link>
          ))
        }
      />
    </Layout>
  ))
)
