import React, { memo } from "react"
import { connect } from "react-redux"

import { Link, StaticQuery, graphql } from "gatsby"

import ExternalLink from "../components/external_link"
import Layout from "../components/layout"
import { mapStateToProps } from "../state/createStore"

export default connect(mapStateToProps)(
  memo(({ theme }) => (
    <Layout>
      <article>
        <section>
          <p className="lead">
            I write code for back-end and front-end, integrate databases, CI/CD,
            and deploy it to the cloud.
          </p>
        </section>

        <section>
          <header>
            <h2>About Me</h2>
          </header>

          <p>Hello, World!</p>
          <p>
            I am an average dude, interested in web and mobile development,
            striving to be software engineer.
          </p>
          <p>
            I am introverted, keeps everything to myself, code and learn new
            tech stack on spare time. Loves memes and movies such as Joker and
            John Wick, prefers to watch in IMAX. Used to play games, mostly
            offline, currently on hiatus because of my weak hardware.
          </p>
          <p>
            Currently living in Jakarta, Indonesia to study Information System
            at{" "}
            <ExternalLink to="https://binus.ac.id">
              Binus University
            </ExternalLink>
            .
          </p>
          <p>Most loved programming languages: Python, Java.</p>
          <p>Most loved frameworks: Ruby on Rails, Gatsby, Flutter.</p>
          <p>
            <ExternalLink to="/resume">My Resume (PDF)</ExternalLink>
          </p>
        </section>

        <section>
          <header>
            <h2>Developer Skills</h2>
          </header>

          <div className="row">
            <section className="col">
              <header>
                <h3>Programming Languages</h3>
              </header>

              <ul className="pl-3">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </section>

            <section className="col">
              <header>
                <h3>Frameworks</h3>
              </header>

              <ul className="pl-3">
                <li>Laravel</li>
                <li>React</li>
                <li>Ruby on Rails</li>
              </ul>
            </section>
          </div>

          <p>
            <Link
              to="/skills"
              className={theme === "dark" ? "text-light" : "text-dark"}
            >
              <u>Read more</u>
            </Link>
          </p>
        </section>

        <section>
          <header>
            <h2>GitHub Projects</h2>
          </header>

          <table
            className={`table table-responsive ${
              theme === "dark" ? "table-dark" : ""
            }`}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            {/* GraphQL query matches localhost:8000/___graphql */}
            <StaticQuery
              query={graphql`
                query GitHubAPI {
                  githubData {
                    data {
                      viewer {
                        repositories {
                          nodes {
                            url
                            name
                            description
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={({
                githubData: {
                  data: {
                    viewer: {
                      repositories: { nodes },
                    },
                  },
                },
              }) => (
                <tbody>
                  {nodes.map(({ name, url, description }, index) => (
                    <tr key={name}>
                      <td>{index + 1}</td>
                      <td>
                        <ExternalLink to={url}>
                          {name.replace(/[-]/gi, " ")}
                        </ExternalLink>
                      </td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            />
          </table>
        </section>
      </article>
    </Layout>
  ))
)
