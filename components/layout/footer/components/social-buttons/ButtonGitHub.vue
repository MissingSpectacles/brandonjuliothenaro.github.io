<template>
  <app-button-external-link
    aria-label="GitHub"
    href="https://github.com/brandon-julio-t"
    icon
  >
    <v-icon large>{{ mdiGithub }}</v-icon>
  </app-button-external-link>
</template>

<script>
import { mdiGithub } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonGitHub',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiGithub
    }
  }
}
</script>
