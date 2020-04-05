import React, { memo } from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { connect } from "react-redux"

import Layout from "../../components/layout/layout"
import { mapStateToProps, THEME } from "../../state/createStore"

export default connect(mapStateToProps)(
  memo(({ theme, location, pageContext: { body, frontmatter } }) => (
    <Layout location={location} title={frontmatter.title}>
      <article>
        <small>Created at: {new Date(frontmatter.date).toDateString()}</small>
        <MDXProvider
          components={{
            h1: () => <></>, // `h1` is delegated to `header.jsx` via `<Layout />`
            a: memo(props => (
              <a {...props} target="_blank" rel="noreferrer noopener" />
            )),
            pre: memo(props => (
              <pre
                {...props}
                className={`${props.className} ${
                  theme === THEME.DARK ? "text-light" : ""
                }`}
              />
            )),
            img: memo(props => (
              <img
                className="img-fluid my-4 rounded mx-auto d-block"
                src={props.src}
                alt={props.alt}
                title={props.title}
              />
            )),
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  ))
)
