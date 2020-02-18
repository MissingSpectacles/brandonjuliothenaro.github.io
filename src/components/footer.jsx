import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"

import ExternalLink from "./external_link"

export default memo(() => {
  const {
    site: {
      siteMetadata: {
        email,
        facebook_url,
        freeCodeCamp_url,
        github_url,
        instagram_url,
        linkedin_url,
        twitter_url,
      },
    },
  } = useStaticQuery(graphql`
    query Contacts {
      site {
        siteMetadata {
          email
          facebook_url
          freeCodeCamp_url
          github_url
          instagram_url
          linkedin_url
          twitter_url
        }
      }
    }
  `)

  return (
    <>
      <hr className="bg-light" />

      <footer>
        <div className="row">
          <section className="col">
            <header>
              <h2>Contact</h2>
            </header>

            <ul className="list-unstyled d-flex justify-content-around">
              <li>
                <ExternalLink to={facebook_url}>
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    size="3x"
                  />
                </ExternalLink>
              </li>
              <li className="mx-1">
                <ExternalLink to={freeCodeCamp_url}>
                  <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="3x" />
                </ExternalLink>
              </li>
              <li className="mx-1">
                <ExternalLink to={github_url}>
                  <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                </ExternalLink>
              </li>
              <li className="mx-1">
                <ExternalLink to={instagram_url}>
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
                </ExternalLink>
              </li>
              <li className="mx-1">
                <ExternalLink to={linkedin_url}>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to={twitter_url}>
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
                </ExternalLink>
              </li>
            </ul>
            <p>
              Email:{" "}
              <ExternalLink
                to={`mailto:${email}`}
              >
                {email}
              </ExternalLink>
            </p>
          </section>

          <section className="col">
            <header>
              <h2>Credits</h2>
            </header>

            <ul className="list-unstyled">
              <li>
                <ExternalLink to="https://binus.ac.id">Binus</ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://fontawesome.com/">
                  Font Awesome
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://getbootstrap.com">
                  Bootstrap
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://www.gatsbyjs.org">
                  Gatsby
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://www.jetbrains.com">
                  JetBrains
                </ExternalLink>
              </li>
              <li>
                <ExternalLink to="https://www.netlify.com">
                  Netlify
                </ExternalLink>
              </li>
              <li>Mom &hearts; & Dad &hearts;</li>
              <li>And you, random citizen</li>
            </ul>
          </section>
        </div>

        <p className="text-muted">
          Copyright &copy; 2019 - {new Date().getFullYear()} Brandon Julio
          Thenaro. All rights reserved.
          <br />
          Developed with{" "}
          <ExternalLink to="https://www.gatsbyjs.org/" className="text-muted">
            Gatsby
          </ExternalLink>
          {" and "}
          <ExternalLink
            to="https://www.jetbrains.com/webstorm"
            className="text-muted"
          >
            WebStorm
          </ExternalLink>
        </p>
      </footer>
    </>
  )
})
