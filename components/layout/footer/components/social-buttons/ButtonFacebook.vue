<template>
  <app-button-external-link
    aria-label="Facebook"
    href="https://www.facebook.com/profile.php?id=100008724798107"
    icon
  >
    <v-icon x-large>{{ mdiFacebook }}</v-icon>
  </app-button-external-link>
</template>

<script>
import { mdiFacebook } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonFacebook',

  components: { AppButtonExternalLink },

  data() {
    return {
      mdiFacebook
    }
  }
}
</script>
