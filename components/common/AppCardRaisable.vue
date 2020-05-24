<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 8 : 2">
      <slot></slot>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'AppCardRaisable'
}
</script>
