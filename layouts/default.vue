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
      colors,
      mdiBrightness3,
      mdiBrightness7,
      mdiMenu,

      isLoading: true,
      openDrawer: false
    }
  },

  computed: {
    allPages() {
      return this.$store.state.allPages
    },

    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isDarkTheme() {
      return this.$vuetify.theme.dark
    }
  },

  mounted() {
    const savedIsDark = localStorage.getItem('isDark')
    this.$vuetify.theme.dark = savedIsDark
      ? savedIsDark === 'true'
      : matchMedia('(prefers-color-scheme: dark)').matches

    this.isLoading = false
  },

  methods: {
    getNow() {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: this.isMobile ? 'medium' : 'full'
      }).format(new Date())
    },

    toggleAndSaveTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDark', this.$vuetify.theme.dark)
    },

    updateNow() {
      this.now = this.getNow()
    }
  }
}
</script>
