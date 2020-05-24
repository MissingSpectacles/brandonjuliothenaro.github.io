<template>
  <div>
    Built with
    <app-button-external-link href="https://nuxtjs.org/">
      <v-icon left>mdi-nuxt</v-icon>
      Nuxt
    </app-button-external-link>
  </div>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'CreditNuxt',

  components: { AppButtonExternalLink }
}
</script>
