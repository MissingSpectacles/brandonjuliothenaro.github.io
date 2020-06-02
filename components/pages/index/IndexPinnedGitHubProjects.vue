<template>
  <v-row justify="center">
    <v-col>
      <h2>Pinned GitHub Projects</h2>

      <keep-alive>
        <v-skeleton-loader
          v-if="!myRawPinnedRepositories"
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
            v-for="(repository, repositoryIdx) in myPinnedRepositories"
            :key="repositoryIdx"
            cols="12"
            sm="6"
            md="4"
          >
            <app-card-raisable>
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
                <app-button-external-link :href="repository.homepageUrl" text>
                  View Live
                  <v-icon right>{{ mdiLaunch }}</v-icon>
                </app-button-external-link>

                <v-spacer></v-spacer>

                <app-button-external-link
                  :href="repository.url"
                  aria-label="View this project on GitHub"
                  icon
                  medium
                >
                  <v-icon>
                    {{ mdiGithub }}
                  </v-icon>
                </app-button-external-link>
              </v-card-actions>
            </app-card-raisable>
          </v-col>
        </v-row>
      </keep-alive>
    </v-col>
  </v-row>
</template>

<script>
import { mdiGithub, mdiLaunch } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'
import AppCardRaisable from '~/components/common/AppCardRaisable'

export default {
  name: 'IndexPinnedGitHubProjects',

  components: {
    AppButtonExternalLink,
    AppCardRaisable
  },

  data() {
    return {
      error: null,
      myRawPinnedRepositories: null,
      mdiGithub,
      mdiLaunch
    }
  },

  computed: {
    myPinnedRepositories() {
      return this.myRawPinnedRepositories.data.viewer.pinnedItems.nodes
    }
  },

  async mounted() {
    try {
      this.$store.commit('setCurrentPageTitle', 'Home')

      this.$axios.setToken(process.env.GITHUB_GRAPHQL_API_TOKEN, 'bearer')

      this.myRawPinnedRepositories = await this.$axios.$post(
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
  }
}
</script>
