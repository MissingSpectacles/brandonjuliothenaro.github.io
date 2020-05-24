<template>
  <nav>
    <TheAppNavigationDrawer v-if="isMobile" :open-drawer.sync="openDrawer" />
    <TheAppBar @toggle-drawer="toggleDrawer" />
  </nav>
</template>

<script>
import TheAppBar from '~/components/layout/navbar/components/TheAppBar'
import TheAppNavigationDrawer from '~/components/layout/navbar/components/TheNavigationDrawer'

export default {
  name: 'TheAppNavbar',

  components: {
    TheAppBar,
    TheAppNavigationDrawer
  },

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      openDrawer: false
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },

  methods: {
    toggleDrawer() {
      this.openDrawer = !this.openDrawer
    }
  }
}
</script>
