<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="auto">
        <app-card-raisable>
          <v-card-title>
            <h2 class="display-1">{{ error.message }}</h2>
          </v-card-title>

          <v-card-subtitle v-if="!is404">
            <h3>
              Try to refresh the page. If error persists, please contact the
              page administrator.
            </h3>
          </v-card-subtitle>

          <v-card-actions>
            <v-row justify="center">
              <v-col sm="auto">
                <v-btn to="/">
                  Return to Home page
                </v-btn>
              </v-col>
              <v-col sm="auto" v-if="!is404">
                <v-btn href="mailto:brandon.julio.t@icloud.com">
                  Contact Page Admin
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </app-card-raisable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCardRaisable from '~/components/common/AppCardRaisable'

export default {
  components: { AppCardRaisable },

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  computed: {
    is404() {
      return this.error.statusCode === 404
    }
  },

  mounted() {
    this.$store.commit('setCurrentPageTitle', `Error ${this.error.statusCode}`)
  },

  head() {
    return {
      title: this.error.statusCode
    }
  }
}
</script>
