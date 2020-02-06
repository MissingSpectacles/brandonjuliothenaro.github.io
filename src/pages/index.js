import React, { memo } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"

export default memo(() => (
  <Layout>
    <article>
      <header>
        <h2>About Me</h2>
      </header>

      <p>Hello, World!</p>
      <p>
        I am an average dude, interested in web and mobile development, striving
        to be software engineer.
      </p>
      <p>
        I am introverted, keeps everything to myself, code and learn new stuffs
        on spare time. Plays osu!, loves memes and movies such as Joker and John
        Wick, used to play games, mostly offline, currently on hiatus because of
        my weak hardware.
      </p>
      <p>
        Currently living in Jakarta, Indonesia to study Information System at{" "}
        <a
          href="https://binus.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          Binus University{" "}
          <small>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </small>
        </a>
        .
      </p>
      <p>Most loved programming languages: Python, Java.</p>
      <p>Most loved frameworks: Ruby on Rails, Gatsby, Flutter.</p>
      <p>
        <a href="./resume.pdf" className="text-white" target="_blank">
          My Resume (PDF) <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </p>

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
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="col">
          <header>
            <h3>Frameworks</h3>
          </header>

          <ul className="pl-3">
            <li>Ruby on Rails</li>
            <li>Laravel</li>
            <li>React</li>
          </ul>
        </section>
      </div>

      <p>
        <Link to="/skills" className="text-white">
          Read more <FontAwesomeIcon icon={faLink} />
        </Link>
      </p>

      <header>
        <h2>GitHub Projects</h2>
      </header>

      <table className="table table-dark table-responsive">
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
              {nodes.map((repository, index) => (
                <tr key={repository.name}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={repository.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      {repository.name + " "}
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </td>
                  <td>{repository.description}</td>
                </tr>
              ))}
            </tbody>
          )}
        />
      </table>
    </article>
  </Layout>
))
