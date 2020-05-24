<template>
  <app-button-external-link
    aria-label="Instagram"
    href="https://www.instagram.com/brandon.julio.t"
    icon
  >
    <v-icon large>{{ mdiInstagram }}</v-icon>
  </app-button-external-link>
</template>

<script>
import { mdiInstagram } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonInstagram',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiInstagram
    }
  }
}
</script>
