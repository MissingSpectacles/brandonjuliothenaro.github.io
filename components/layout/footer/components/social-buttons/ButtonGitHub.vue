<template>
  <app-button-external-link
    aria-label="GitHub"
    href="https://github.com/brandon-julio-t"
    icon
  >
    <v-icon>mdi-github</v-icon>
  </app-button-external-link>
</template>

<script>
import AppButtonExternalLink from '~/components/AppButtonExternalLink'

export default {
  name: 'ButtonGithub',

  components: { AppButtonExternalLink }
}
</script>
