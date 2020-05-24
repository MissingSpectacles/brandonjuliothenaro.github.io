<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      v-if="isMobile"
      aria-label="open navigation drawer"
      @click="$emit('toggle-drawer')"
    />

    <div v-else>
      <v-btn
        v-for="(page, index) in pages"
        :key="index"
        :to="page.to"
        exact
        text
        class="mx-2"
      >
        <v-icon left>{{ page.icon }}</v-icon>
        {{ page.title }}
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      aria-label="toggle theme"
      class="mx-2"
      icon
      @click.stop="toggleTheme"
    >
      <v-icon>
        {{ isDarkTheme ? 'mdi-brightness-7' : 'mdi-brightness-3' }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    pages: {
      type: Array,
      required: true
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isDarkTheme() {
      return this.$vuetify.theme.dark
    }
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDark', this.$vuetify.theme.dark)
    }
  }
}
</script>
