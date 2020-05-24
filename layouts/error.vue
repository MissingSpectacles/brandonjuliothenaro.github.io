<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="auto">
        <app-card-raisable>
          <v-card-title class="d-flex justify-center">
            <h2 class="display-1 text-center">{{ error.message }}</h2>
          </v-card-title>

          <v-card-subtitle>
            <h3>
              Try to refresh the page. If error persists, please contact the
              page administrator.
            </h3>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text to="/">
              Home page
            </v-btn>
            <v-btn text href="mailto:brandon.julio.t@icloud.com">
              Contact Page Admin
            </v-btn>
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
