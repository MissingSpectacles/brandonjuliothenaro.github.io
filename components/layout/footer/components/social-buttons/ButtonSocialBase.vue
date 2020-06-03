<template>
  <app-button-external-link :aria-label="label" :href="href" icon large>
    <v-icon :large="isMobile" :x-large="!isMobile">{{ icon }}</v-icon>
  </app-button-external-link>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'ButtonSocialBase',

  components: { AppButtonExternalLink },

  props: {
    label: { type: String, required: true },
    href: { type: String, required: true },
    icon: { type: String, required: true }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
