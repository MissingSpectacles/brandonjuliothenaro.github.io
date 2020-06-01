<template>
  <nav>
    <TheSystemBar />
    <TheAppNavigationDrawer v-if="isMobile" :open-drawer.sync="openDrawer" />
    <TheAppBar @toggle-drawer="toggleDrawer" />
  </nav>
</template>

<script>
import TheAppBar from '~/components/layout/navbar/components/TheAppBar'
import TheAppNavigationDrawer from '~/components/layout/navbar/components/TheNavigationDrawer'
import TheSystemBar from '~/components/layout/navbar/components/TheSystemBar'

export default {
  name: 'TheNavbar',

  components: {
    TheAppBar,
    TheAppNavigationDrawer,
    TheSystemBar
  },

  data() {
    return {
      openDrawer: false
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    allPages() {
      return this.$store.state.allPages
    }
  },

  methods: {
    toggleDrawer() {
      this.openDrawer = !this.openDrawer
    }
  }
}
</script>
