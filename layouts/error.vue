<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="auto">
        <app-card-raisable>
          <v-card-title>
            <h1 class="display-2 text-center">Error {{ error.statusCode }}</h1>
          </v-card-title>

          <v-card-subtitle>
            <h2 class="display-1 text-center">{{ error.message }}</h2>
          </v-card-subtitle>

          <v-card-text>
            <p>
              Try to refresh the page. If error persists, please contact the
              page administrator.
            </p>
          </v-card-text>

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

  head() {
    return {
      title: this.error.statusCode
    }
  }
}
</script>
