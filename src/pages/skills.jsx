import React, { memo } from "react"

import Layout from "../components/layout/layout"
import ExternalLink from "../components/link"

export default memo(({ location }) => (
  <Layout location={location} title="Developer Skills">
    <article className="row">
      <section className="col">
        <header>
          <h2>Programming Languages</h2>
        </header>

        <ul>
          <li>C/C++</li>
          <li>Java</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>SQL</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Frameworks</h2>
        </header>

        <ul>
          <li>Frontend</li>
          <ul>
            <li>Bootstrap</li>
            <li>Gatsby</li>
            <li>React</li>
          </ul>
          <li>Backend</li>
          <ul>
            <li>Flask</li>
            <li>Laravel</li>
            <li>Ruby on Rails</li>
            <li>Spring Boot</li>
          </ul>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Database</h2>
        </header>

        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>SQL Server</li>
          <li>SQLite</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Tools</h2>
        </header>

        <ul>
          <li>Adobe Xd</li>
          <li>GitHub Desktop</li>
          <li>JetBrain IDEs</li>
          <li>Microsoft Office 365</li>
          <li>SQL Server Management Studio</li>
          <li>Visual Studio Code</li>
          <li>Visual Studio IDE</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Other</h2>
        </header>

        <ul>
          <li>
            <ExternalLink to="https://basecamp.com/">Basecamp</ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://chocolatey.org/">Chocolatey</ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://firebase.google.com/">
              Firebase
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://www.heroku.com/">Heroku</ExternalLink>
          </li>
          <li>Java Swing</li>
          <li>JavaFX</li>
        </ul>
      </section>
    </article>
  </Layout>
))
