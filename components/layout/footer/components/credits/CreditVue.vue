<template>
  <div>
    Powered by
    <app-button-external-link href="https://vuejs.org/" text>
      <v-icon left>{{ mdiVuejs }}</v-icon>
      Vue
    </app-button-external-link>
  </div>
</template>

<script>
import { mdiVuejs } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'CreditVue',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiVuejs
    }
  }
}
</script>
