<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-3 text-center">Developer Skills</h1>
      </v-col>
    </v-row>

    <v-divider class="my-5"></v-divider>

    <v-row>
      <v-col>
        <h2>Languages</h2>

        <v-list v-for="(category, categoryIdx) in languages" :key="categoryIdx">
          <v-subheader>
            <h3>{{ category.name }}</h3>
          </v-subheader>

          <v-divider></v-divider>

          <v-list-item v-for="(item, itemIdx) in category.items" :key="itemIdx">
            <v-list-item-content>
              {{ item }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col>
        <h2>Frameworks</h2>

        <v-list
          v-for="(category, categoryIdx) in frameworks"
          :key="categoryIdx"
        >
          <v-subheader>
            <h3>{{ category.name }}</h3>
          </v-subheader>

          <v-divider></v-divider>

          <v-list-item v-for="(item, itemIdx) in category.items" :key="itemIdx">
            <v-list-item-content>{{ item }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col>
        <h2>Databases</h2>

        <v-list>
          <v-list-item
            v-for="(database, databaseIdx) in databases"
            :key="databaseIdx"
          >
            <v-list-item-content>{{ database }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col>
        <h2>Others</h2>

        <v-list v-for="(category, categoryIdx) in others" :key="categoryIdx">
          <v-subheader>
            <h3>{{ category.name }}</h3>
          </v-subheader>

          <v-divider></v-divider>

          <v-list-item v-for="(item, itemIdx) in category.items" :key="itemIdx">
            <v-list-item-content>{{ item }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      frameworks: [
        { name: 'Front-end', items: ['Bootstrap', 'Vue', 'Vuetify', 'Nuxt'] },
        { name: 'Back-end', items: ['Laravel'] }
      ],

      languages: [
        { name: 'Programming', items: ['C/C++', 'Java', 'JavaScript'] },
        { name: 'Spoken', items: ['Indonesia', 'English'] },
        { name: 'Others', items: ['HTML', 'Markdown', 'SQL'] }
      ],

      databases: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite'],

      others: [
        { name: 'Cloud', items: ['Firebase', 'Heroku'] },
        { name: 'IDE', items: ['JetBrain IDEs', 'Visual Studio Code'] },
        { name: 'Productivity', items: ['Adobe Xd', 'Microsoft Office 365'] },
        { name: 'Collaboration', items: ['Basecamp', 'Microsoft Teams'] }
      ]
    }
  },

  head() {
    return {
      title: 'Skills'
    }
  }
}
</script>
