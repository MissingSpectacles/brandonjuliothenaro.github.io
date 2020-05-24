<template>
  <div>
    <app-navigation-drawer
      v-if="isMobile"
      :open-drawer.sync="openDrawer"
      :pages="pages"
    ></app-navigation-drawer>

    <app-bar :pages="pages" @toggle-drawer="openDrawer = !openDrawer"></app-bar>
  </div>
</template>

<script>
import AppBar from '~/components/layout/navbar/components/AppBar'
import AppNavigationDrawer from '~/components/layout/navbar/components/AppNavigationDrawer'

export default {
  name: 'AppNavbar',

  components: {
    AppBar,
    AppNavigationDrawer
  },

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  },

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
      openDrawer: false
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
