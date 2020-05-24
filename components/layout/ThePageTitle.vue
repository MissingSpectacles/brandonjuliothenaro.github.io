<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <h1 class="display-3 text-center">
          {{ this.$store.state.currentPageTitle }}
        </h1>
      </v-col>
    </v-row>

    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'ThePageTitle'
}
</script>
