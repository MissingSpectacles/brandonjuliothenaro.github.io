<template>
  <v-btn
    :href="href"
    :icon="icon"
    :text="text"
    :large="large"
    :x-large="xLarge"
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
    },

    large: {
      type: Boolean,
      default: false,
      required: false
    },

    medium: {
      type: Boolean,
      default: false,
      required: false
    },

    text: {
      type: Boolean,
      default: false,
      required: false
    },

    xLarge: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
