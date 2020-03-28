import React, { memo } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../../components/layout/layout"

export default memo(({ location, pageContext: { body, frontmatter } }) => {
  return (
    <Layout location={location} title={frontmatter.title}>
      <article>
        <small>Created at: {new Date(frontmatter.date).toDateString()}</small>
        <MDXProvider
          components={{
            h1: props => <></>, // `h1` is delegated to `header.jsx` via `<Layout />`
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
  )
})
