<template>
  <app-button-external-link
    aria-label="Twitter"
    href="https://twitter.com/brandon_julio_t"
    icon
  >
    <v-icon x-large>{{ mdiTwitter }}</v-icon>
  </app-button-external-link>
</template>

<script>
import { mdiTwitter } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonTwitter',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiTwitter
    }
  }
}
</script>
