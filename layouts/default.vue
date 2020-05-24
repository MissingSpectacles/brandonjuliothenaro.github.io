<template>
  <v-app>
    <app-navbar :is-loading="isLoading"></app-navbar>

    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col>
            <h1 class="display-3 text-center">
              {{ this.$store.state.pageTitle }}
            </h1>
          </v-col>
        </v-row>
      </v-container>

      <v-divider class="my-5"></v-divider>

      <nuxt />
    </v-content>

    <app-footer :is-loading="isLoading"></app-footer>
  </v-app>
</template>

<script>
import AppFooter from '~/components/layout/footer/AppFooter'
import AppNavbar from '~/components/layout/navbar/AppNavbar'

export default {
  components: {
    AppNavbar,
    AppFooter
  },

  data() {
    return {
      isLoading: true
    }
  },

  beforeMount() {
    const savedIsDark = localStorage.getItem('isDark')

    if (savedIsDark !== null) {
      this.$vuetify.theme.dark = savedIsDark === 'true'
    } else {
      this.$vuetify.theme.dark = matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
    }

    this.isLoading = false
  }
}
</script>
