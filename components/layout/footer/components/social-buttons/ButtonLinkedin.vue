<template>
  <app-button-external-link
    aria-label="LinkedIn"
    href="https://www.linkedin.com/in/brandonjuliothenaro"
    icon
  >
    <v-icon x-large>{{ mdiLinkedin }}</v-icon>
  </app-button-external-link>
</template>

<script>
import { mdiLinkedin } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonLinkedin',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiLinkedin
    }
  }
}
</script>
