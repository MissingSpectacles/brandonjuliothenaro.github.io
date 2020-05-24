<template>
  <app-button-external-link
    aria-label="Twitter"
    href="https://twitter.com/brandon_julio_t"
    icon
  >
    <v-icon>mdi-twitter</v-icon>
  </app-button-external-link>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonTwitter',

  components: { AppButtonExternalLink }
}
</script>
