<template>
  <v-app>
    <v-navigation-drawer v-if="isMobile" v-model="openDrawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Navigation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          v-for="(page, index) in pages"
          :key="index"
          :to="page.to"
          exact
        >
          <v-list-item-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="page.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        v-if="isMobile"
        aria-label="open navigation drawer"
        @click.stop="toggleDrawer"
      />

      <div v-if="!isMobile">
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

    <v-content>
      <nuxt />
    </v-content>

    <v-footer absolute app padless>
      <v-row justify="center">
        <v-col class="text-center">
          <v-btn
            aria-label="GitHub"
            href="https://github.com/brandon-julio-t"
            icon
            rel="noopener noreferrer"
            target="_blank"
            x-large
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            aria-label="Twitter"
            href="https://twitter.com/brandon_julio_t"
            icon
            rel="noopener noreferrer"
            target="_blank"
            x-large
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            aria-label="Facebook"
            href="https://www.facebook.com/profile.php?id=100008724798107"
            icon
            rel="noopener noreferrer"
            target="_blank"
            x-large
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            aria-label="Instagram"
            href="https://www.instagram.com/brandon.julio.t"
            icon
            rel="noopener noreferrer"
            target="_blank"
            x-large
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/brandonjuliothenaro"
            icon
            rel="noopener noreferrer"
            target="_blank"
            x-large
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>

          <br />

          <v-btn
            text
            href="https://www.freecodecamp.org/brandon-julio-thenaro"
            rel="noopener noreferrer"
            target="_blank"
          >
            freeCodeCamp
          </v-btn>

          <v-divider class="my-5"></v-divider>

          <v-row justify="center" align="center">
            <v-col sm="auto">
              Built with
              <v-btn
                text
                href="https://nuxtjs.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-icon left>mdi-nuxt</v-icon>
                Nuxt
              </v-btn>

              <br />

              Designed with
              <v-btn
                text
                href="https://vuetifyjs.com/en/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-icon left>mdi-vuetify</v-icon>
                Vuetify
              </v-btn>

              <br />

              Powered by
              <v-btn
                text
                href="https://vuejs.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-icon left>mdi-vuejs</v-icon>
                Vue
              </v-btn>
            </v-col>

            <v-col v-if="!isLoading" sm="auto">
              <a
                href="https://www.netlify.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-img
                  :src="netlifyBadgeUrl"
                  alt="Deploys by Netlify"
                  eager
                  max-height="51"
                  max-width="114"
                />
              </a>
            </v-col>
          </v-row>

          <v-divider class="my-5"></v-divider>

          <p>
            Copyright &copy; {{ new Date().getFullYear() }} Brandon Julio
            Thenaro. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-hammer-screwdriver',
          title: 'Skills',
          to: 'skills'
        },
        {
          icon: 'mdi-chat',
          title: 'Contact',
          to: 'contact'
        },
        {
          icon: 'mdi-file-document',
          title: 'CV',
          to: 'cv'
        }
      ],
      isLoading: true,
      openDrawer: false,
      prefersDarkTheme: false
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isDarkTheme() {
      return this.$vuetify.theme.dark
    },

    netlifyBadgeUrl() {
      return `https://www.netlify.com/img/global/badges/netlify-${
        this.isDarkTheme ? 'dark' : 'light'
      }.svg`
    }
  },

  beforeMount() {
    const savedIsDark = localStorage.getItem('isDark')

    if (savedIsDark !== null) {
      this.$vuetify.theme.dark = savedIsDark === 'true'
    } else {
      this.$vuetify.theme.dark = matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
    }

    this.isLoading = false
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDark', this.$vuetify.theme.dark)
    },

    toggleDrawer() {
      this.openDrawer = !this.openDrawer
    }
  }
}
</script>
