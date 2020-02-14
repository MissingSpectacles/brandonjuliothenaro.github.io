import React, { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ExternalLink from "./external_link"
import { graphql, useStaticQuery } from "gatsby"

export default memo(() => {
  const {
    site: {
      siteMetadata: {
        email,
        facebook_url,
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
          github_url
          instagram_url
          linkedin_url
          twitter_url
        }
      }
    }
  `)

  return (
    <footer>
      <div className="row">
        <section className="col">
          <header>
            <h2>Contact</h2>
          </header>

          <ul className="list-unstyled d-flex justify-content-around">
            <li>
              <ExternalLink to={facebook_url}>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to={twitter_url}>
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to={instagram_url}>
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to={github_url}>
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to={linkedin_url}>
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </ExternalLink>
            </li>
          </ul>
          <p>
            Email:{" "}
            <ExternalLink
              to={`mailto:${email}`}
              className="text-light text-center"
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
              <ExternalLink to="https://www.gatsbyjs.org">Gatsby</ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://www.jetbrains.com">
                JetBrains
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://www.netlify.com">Netlify</ExternalLink>
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
  )
})
