<template>
  <app-button-external-link
    aria-label="LinkedIn"
    href="https://www.linkedin.com/in/brandonjuliothenaro"
    icon
  >
    <v-icon>mdi-linkedin</v-icon>
  </app-button-external-link>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonLinkedin',

  components: { AppButtonExternalLink }
}
</script>
