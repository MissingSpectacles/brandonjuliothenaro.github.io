<template>
  <v-btn
    aria-label="Email me"
    href="mailto:brandon.julio.t@icloud.com"
    icon
    x-large
  >
    <v-icon large>{{ mdiEmail }}</v-icon>
  </v-btn>
</template>

<script>
import { mdiEmail } from '@mdi/js'

export default {
  name: 'ButtonEmail',

  data() {
    return {
      mdiEmail
    }
  }
}
</script>
