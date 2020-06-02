<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :raised="hover">
      <slot></slot>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'AppCardRaisable'
}
</script>
