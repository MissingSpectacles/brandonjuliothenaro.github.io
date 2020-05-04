import React, { memo } from "react"

import Layout from "../components/layout"
import Text from "../components/text"

import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core"

const stringSorter = (s1, s2) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  if (s1 < s2) {
    return -1
  } else if (s1 > s2) {
    return 1
  } else {
    return 0
  }
}
const skills = {
  languages: {
    programming: ["C/C++", "Java", "JavaScript", "Python"].sort(stringSorter),
    spoken: ["Indonesia", "English"].sort(stringSorter),
    others: ["HTML", "SQL", "Markdown"].sort(stringSorter),
  },

  frameworks: {
    frontend: [
      "Bootstrap",
      "Gatsby",
      "React",
      "Material UI",
      "Vue",
      "Vuetify",
    ].sort(stringSorter),
    backend: ["Laravel", "Spring Boot", "Flask"].sort(stringSorter),
    desktop: ["Java Swing", "JavaFX"].sort(stringSorter),
  },

  databases: ["MySQL", "PostgreSQL", "SQL Server", "SQLite", "H2"].sort(
    stringSorter
  ),

  others: {
    cloudProviders: ["Firebase", "Heroku"].sort(stringSorter),
    developmentSoftware: [
      "JetBrain IDEs",
      "SQL Server Management Studio",
      "Visual Studio Code",
      "Visual Studio IDE",
    ].sort(stringSorter),
    productivitySoftware: [
      "Adobe Xd",
      "GitHub Desktop",
      "Microsoft Office 365",
    ].sort(stringSorter),
    collaborationSoftware: ["Basecamp", "Microsoft Teams"].sort(stringSorter),
  },
}

export default memo(({ location }) => (
  <Layout location={location} title="Developer Skills">
    <Grid container component="article" spacing={4}>
      <Grid item component="section" xs>
        <header>
          <Text variant="h4" component="h2">
            Languages
          </Text>
        </header>

        <List subheader={<ListSubheader>Programming</ListSubheader>}>
          {skills.languages.programming.map(pl => (
            <ListItem key={pl}>
              <ListItemText>
                <Text>{pl}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Spoken</ListSubheader>}>
          {skills.languages.spoken.map(sl => (
            <ListItem key={sl}>
              <ListItemText>
                <Text>{sl}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Others</ListSubheader>}>
          {skills.languages.others.map(ol => (
            <ListItem key={ol}>
              <ListItemText>
                <Text>{ol}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item component="section" xs>
        <header>
          <Text variant="h4" component="h2">
            Frameworks
          </Text>
        </header>

        <List subheader={<ListSubheader>Front-end</ListSubheader>}>
          {skills.frameworks.frontend.map(ff => (
            <ListItem key={ff}>
              <ListItemText>
                <Text>{ff}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Back-end</ListSubheader>}>
          {skills.frameworks.backend.map(bf => (
            <ListItem key={bf}>
              <ListItemText>
                <Text>{bf}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Desktop Application</ListSubheader>}>
          {skills.frameworks.desktop.map(df => (
            <ListItem key={df}>
              <ListItemText>
                <Text>{df}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item component="section" xs>
        <header>
          <Text variant="h4" component="h2">
            Database
          </Text>
        </header>

        <List>
          {skills.databases.map(db => (
            <ListItem key={db}>
              <ListItemText>
                <Text>{db}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item component="section" xs>
        <header>
          <Text variant="h4" component="h2">
            Others
          </Text>
        </header>

        <List subheader={<ListSubheader>Cloud</ListSubheader>}>
          {skills.others.cloudProviders.map(cp => (
            <ListItem key={cp}>
              <ListItemText key={cp}>
                <Text>{cp}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Development Software</ListSubheader>}>
          {skills.others.developmentSoftware.map(ds => (
            <ListItem key={ds}>
              <ListItemText key={ds}>
                <Text>{ds}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Productivity Software</ListSubheader>}>
          {skills.others.productivitySoftware.map(ps => (
            <ListItem key={ps}>
              <ListItemText key={ps}>
                <Text>{ps}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>Collaboration Software</ListSubheader>}>
          {skills.others.collaborationSoftware.map(cs => (
            <ListItem key={cs}>
              <ListItemText key={cs}>
                <Text>{cs}</Text>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </Layout>
))
