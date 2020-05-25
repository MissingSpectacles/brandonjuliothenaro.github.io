<template>
  <div>
    Designs by
    <app-button-external-link href="https://vuetifyjs.com/en/">
      <v-icon left>{{ mdiVuetify }}</v-icon>
      Vuetify
    </app-button-external-link>
  </div>
</template>

<script>
import { mdiVuetify } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'CreditVuetify',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiVuetify
    }
  }
}
</script>
