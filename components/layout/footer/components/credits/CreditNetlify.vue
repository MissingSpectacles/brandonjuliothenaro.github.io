<template>
  <a href="https://www.netlify.com" rel="noopener noreferrer" target="_blank">
    <v-img :src="netlifyBadge" alt="Deploys by Netlify"></v-img>
  </a>
</template>

<script>
import NetlifyDark from '~/assets/logos/netlify-dark.svg'
import NetlifyLight from '~/assets/logos/netlify-light.svg'

export default {
  name: 'CreditNetlify',

  data() {
    return { NetlifyDark, NetlifyLight }
  },

  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark
    },

    netlifyBadge() {
      return this.isDarkTheme ? NetlifyDark : NetlifyLight
    }
  }
}
</script>
