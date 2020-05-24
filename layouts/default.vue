<template>
  <v-app>
    <TheAppNavbar :is-loading="isLoading" />

    <v-content>
      <ThePageTitle />

      <Nuxt />
    </v-content>

    <TheAppFooter :is-loading="isLoading" />
  </v-app>
</template>

<script>
import TheAppFooter from '~/components/layout/footer/TheFooter'
import TheAppNavbar from '~/components/layout/navbar/TheNavbar'
import ThePageTitle from '~/components/layout/ThePageTitle'

export default {
  components: {
    ThePageTitle,
    TheAppNavbar,
    TheAppFooter
  },

  data() {
    return {
      isLoading: true
    }
  },

  mounted() {
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
