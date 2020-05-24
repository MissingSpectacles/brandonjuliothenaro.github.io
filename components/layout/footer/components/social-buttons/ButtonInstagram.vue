<template>
  <app-button-external-link
    aria-label="Instagram"
    href="https://www.instagram.com/brandon.julio.t"
    icon
  >
    <v-icon>mdi-instagram</v-icon>
  </app-button-external-link>
</template>

<script>
import AppButtonExternalLink from '~/components/AppButtonExternalLink'

export default {
  name: 'ButtonInstagram',

  components: { AppButtonExternalLink }
}
</script>
