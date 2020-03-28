const path = require(`path`)
const slugify = require(`slugify`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/pages/blogs/template.jsx`)

  const result = await graphql(`
    query AllMdx {
      allMdx {
        nodes {
          body
          frontmatter {
            date
            title
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.nodes.forEach(({ body, frontmatter }) => {
    createPage({
      path: `blogs/${slugify(frontmatter.title, { lower: true })}`,
      component: blogTemplate,
      context: {
        body: body,
        frontmatter: frontmatter,
      },
    })
  })
}
