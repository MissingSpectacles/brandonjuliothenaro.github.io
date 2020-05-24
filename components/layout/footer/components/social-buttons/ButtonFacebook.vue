<template>
  <app-button-external-link
    aria-label="Facebook"
    href="https://www.facebook.com/profile.php?id=100008724798107"
    icon
  >
    <v-icon>mdi-facebook</v-icon>
  </app-button-external-link>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonFacebook',

  components: { AppButtonExternalLink }
}
</script>
