<template>
  <div>
    Built with
    <app-button-external-link href="https://nuxtjs.org/">
      <v-icon left>{{ mdiNuxt }}</v-icon>
      Nuxt
    </app-button-external-link>
  </div>
</template>

<script>
import { mdiNuxt } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'CreditNuxt',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiNuxt
    }
  }
}
</script>
