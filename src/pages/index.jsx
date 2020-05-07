import React, { memo } from "react"
import { graphql } from "gatsby"

import { Layout, Link, Spacer, Text } from "../components"

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"

import {
  Database,
  LanguageJava,
  LanguageJavascript,
  Laravel,
  React as ReactIcon,
  Vuejs,
} from "mdi-material-ui"

const programmingLanguages = [
  { label: "Java", Icon: props => <LanguageJava {...props} /> },
  { label: "JavaScript", Icon: props => <LanguageJavascript {...props} /> },
  { label: "SQL", Icon: props => <Database {...props} /> },
]

const frameworks = [
  { label: "Laravel", Icon: props => <Laravel {...props} /> },
  { label: "React", Icon: props => <ReactIcon {...props} /> },
  { label: "Vue", Icon: props => <Vuejs {...props} /> },
]

const Index = ({ data }) => (
  <Layout>
    <article>
      <section>
        <header>
          <Text variant="h2">About Me</Text>
        </header>

        <Text>
          Junior web developer since 2019.
          <br />
          Student at <Link to="https://binus.ac.id/">
            Binus University
          </Link>{" "}
          since 2019.
        </Text>

        <Text variant="caption">
          <em>coincidence?</em>
        </Text>

        <Spacer />

        <Link
          to="https://1drv.ms/b/s!AkMBCpXItqPVynO3k6qkjUQ-rdS0"
          variant="outlined"
        >
          My Resume (PDF)
        </Link>
      </section>

      <Spacer />

      <section>
        <header>
          <Text variant="h2">Developer Skills</Text>
        </header>

        <Grid container justify="center" spacing={4}>
          <Grid item component="section" xs>
            <header>
              <Text variant="h3">Programming Languages</Text>
            </header>

            <List>
              {programmingLanguages.map(({ label, Icon }) => {
                return (
                  <ListItem key={label}>
                    <ListItemText>
                      <Text>
                        <Icon /> {label}
                      </Text>
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
          </Grid>

          <Grid item component="section" xs>
            <header>
              <Text variant="h3">Frameworks</Text>
            </header>

            <List>
              {frameworks.map(({ label, Icon }) => (
                <ListItem key={label}>
                  <ListItemText>
                    <Text>
                      <Icon /> {label}
                    </Text>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Spacer />

        <Link to="/skills" variant="outlined">
          Full list of my developer skills.
        </Link>
      </section>

      <Spacer />

      <section>
        <header>
          <Text variant="h2">GitHub Projects</Text>
        </header>

        <Text>The following table shows my repositories on GitHub.</Text>

        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {["#", "Name", "Description", "Last Updated"].map(header => (
                  <TableCell key={header} scope="col">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.githubData.data.viewer.repositories.nodes.map(
                ({ name, url, description, updatedAt }, index) => (
                  <TableRow hover key={name}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <Link to={url}>{name}</Link>
                    </TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{new Date(updatedAt).toDateString()}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </article>
  </Layout>
)

export default memo(Index)

// GraphQL query matches localhost:8000/___graphql
export const query = graphql`
  query GitHubAPI {
    githubData {
      data {
        viewer {
          repositories {
            nodes {
              description
              name
              updatedAt
              url
            }
          }
        }
      }
    }
  }
`
