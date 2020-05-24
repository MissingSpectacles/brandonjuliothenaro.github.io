<template>
  <a href="https://www.netlify.com" rel="noopener noreferrer" target="_blank">
    <v-img
      :src="netlifyBadgeUrl"
      alt="Deploys by Netlify"
      eager
      max-height="51"
      max-width="114"
    />
  </a>
</template>

<script>
export default {
  name: 'CreditNetlify',

  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark
    },

    netlifyBadgeUrl() {
      return `https://www.netlify.com/img/global/badges/netlify-${
        this.isDarkTheme ? 'dark' : 'light'
      }.svg`
    }
  }
}
</script>
