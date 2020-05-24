<template>
  <v-app>
    <TheNavbar />

    <v-content>
      <ThePageTitle />

      <Nuxt />
    </v-content>

    <TheAppFooter :is-loading="isLoading" />
  </v-app>
</template>

<script>
import { mdiBrightness3, mdiBrightness7, mdiMenu } from '@mdi/js'
import colors from 'vuetify/lib/util/colors'

import TheAppFooter from '~/components/layout/footer/TheFooter'
import ThePageTitle from '~/components/layout/ThePageTitle'
import TheNavbar from '~/components/layout/navbar/TheNavbar'

export default {
  components: {
    TheNavbar,
    ThePageTitle,
    TheAppFooter
  },

  data() {
    return {
      isLoading: true,
      colors,
      mdiBrightness3,
      mdiBrightness7,
      mdiMenu,

      openDrawer: false
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isDarkTheme() {
      return this.$vuetify.theme.dark
    },

    allPages() {
      return this.$store.state.allPages
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
  },

  methods: {
    toggleAndSaveTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDark', this.$vuetify.theme.dark)
    }
  }
}
</script>
