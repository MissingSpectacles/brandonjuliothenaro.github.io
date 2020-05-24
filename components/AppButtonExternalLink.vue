<template>
  <v-btn
    :href="href"
    :icon="icon"
    :text="!icon"
    :x-large="icon"
    rel="noopener noreferrer"
    target="_blank"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'AppButtonExternalLink',

  props: {
    href: {
      type: String,
      required: true
    },

    icon: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
