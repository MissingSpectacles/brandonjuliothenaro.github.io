<template>
  <v-app-bar app max-width="100%">
    <v-app-bar-nav-icon
      v-if="isMobile"
      aria-label="open navigation drawer"
      @click="$emit('toggle-drawer')"
    />

    <span v-else>
      <v-btn
        v-for="(page, index) in allPages"
        :key="index"
        :to="page.to"
        class="mx-2"
        exact
        nuxt
        text
      >
        <v-icon left>{{ page.icon }}</v-icon>
        {{ page.title }}
      </v-btn>
    </span>

    <v-spacer></v-spacer>

    <v-switch
      :color="isDarkTheme ? colors.shades.white : colors.grey.darken2"
      :value="isDarkTheme"
      append-icon="mdi-brightness-3"
      aria-label="toggle theme button"
      hide-details
      prepend-icon="mdi-brightness-7"
      @change="toggleAndSaveTheme"
    ></v-switch>
  </v-app-bar>
</template>

<script>
import colors from 'vuetify/lib/util/colors'

export default {
  name: 'TheAppBar',

  data() {
    return {
      colors
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isDarkTheme() {
      return this.$vuetify.theme.dark
    },

    allPages() {
      return this.$store.state.allPages
    }
  },

  methods: {
    toggleAndSaveTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDark', this.$vuetify.theme.dark)
    }
  }
}
</script>
