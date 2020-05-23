<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <h1 class="text-center">Home</h1>
      </v-col>
    </v-row>

    <v-divider class="my-5"></v-divider>

    <v-row justify="center">
      <v-col>
        <h2>Developer Skills Overview</h2>

        <v-row>
          <v-col>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 8 : 2">
                <v-list>
                  <v-subheader>
                    <h3>Programming Languages</h3>
                  </v-subheader>

                  <v-list-item
                    v-for="(programmingLanguage, index) in programmingLanguages"
                    :key="index"
                  >
                    <v-list-item-icon>
                      <v-icon>
                        {{ programmingLanguage.icon }}
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{ programmingLanguage.label }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-hover>
          </v-col>

          <v-col>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 8 : 2">
                <v-list>
                  <v-subheader>
                    <h3>Frameworks</h3>
                  </v-subheader>

                  <v-list-item
                    v-for="(framework, index) in frameworks"
                    :key="index"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ framework.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{ framework.label }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-btn block to="skills">View More</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col>
        <h2>Pinned GitHub Projects</h2>

        <keep-alive>
          <v-skeleton-loader
            v-if="!myRawRepositoriesData"
            type="card"
          ></v-skeleton-loader>

          <v-card v-else-if="error !== null">
            <v-card-title>
              <h3>An Error Occurred</h3>
            </v-card-title>

            <v-card-subtitle>
              Please contact the website's administrator
            </v-card-subtitle>

            <v-card-text>{{ error }}</v-card-text>
          </v-card>

          <v-row v-else>
            <v-col
              v-for="(repository, repositoryIdx) in myRepositories"
              :key="repositoryIdx"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-card-title>
                    <h3>{{ toTitleCase(repository.name) }}</h3>
                  </v-card-title>

                  <v-card-subtitle>
                    Created at:
                    {{ extractMonthAndYearOnly(repository.createdAt) }}
                  </v-card-subtitle>

                  <v-card-text>
                    <div>
                      {{ repository.description }}
                    </div>

                    <v-chip-group column>
                      <v-chip
                        v-for="(programmingLanguage,
                        programmingLanguageIdx) in repository.languages.nodes"
                        :key="programmingLanguageIdx"
                      >
                        {{ programmingLanguage.name }}
                      </v-chip>
                    </v-chip-group>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      :href="repository.homepageUrl"
                      rel="noopener noreferrer"
                      target="_blank"
                      text
                    >
                      View Live
                      <v-icon right>mdi-launch</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      :href="repository.url"
                      rel="noopener noreferrer"
                      target="_blank"
                      icon
                    >
                      <v-icon>
                        mdi-github
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </keep-alive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      error: null,

      frameworks: [
        { label: 'Laravel', icon: 'mdi-laravel' },
        { label: 'React', icon: 'mdi-react' },
        { label: 'Vue', icon: 'mdi-vuejs' }
      ],

      myRawRepositoriesData: null,

      programmingLanguages: [
        { label: 'Java', icon: 'mdi-language-java' },
        { label: 'JavaScript', icon: 'mdi-language-javascript' },
        { label: 'SQL', icon: 'mdi-database' }
      ]
    }
  },

  computed: {
    myRepositories() {
      return this.myRawRepositoriesData.data.viewer.pinnedItems.nodes
    }
  },

  async mounted() {
    try {
      this.$axios.setToken(process.env.GITHUB_TOKEN, 'bearer')

      this.myRawRepositoriesData = await this.$axios.$post(
        'https://api.github.com/graphql',
        {
          query: `
          query {
            viewer {
              pinnedItems(first: 10) {
                nodes {
                  ... on Repository {
                    createdAt
                    description
                    homepageUrl
                    name
                    url
                    languages(first: 10) {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          `
        }
      )
    } catch (e) {
      this.error = e
    }
  },

  methods: {
    toTitleCase(text) {
      return text
        .split('-')
        .map((str) => str.charAt(0).toUpperCase() + str.substr(1))
        .join(' ')
    },

    extractMonthAndYearOnly(date) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
      return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(new Date(date))
    }
  },

  head() {
    return { title: 'Home' }
  }
}
</script>
