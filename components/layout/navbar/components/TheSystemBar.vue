<template>
  <v-system-bar app>
    <v-spacer></v-spacer>
    {{ now }}
  </v-system-bar>
</template>

<script>
export default {
  name: 'TheSystemBar',

  data() {
    return {
      now: this.getNow(),
      updateNowIntervalId: null
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },

  mounted() {
    this.updateNowIntervalId = setInterval(this.updateNow, 250) // Ensure realtime second update
  },

  beforeDestroy() {
    clearInterval(this.updateNowIntervalId)
  },

  methods: {
    getNow() {
      return new Intl.DateTimeFormat(undefined, {
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        month: 'long',
        second: '2-digit',
        timeZoneName: this.isMobile ? undefined : 'long',
        weekday: 'long',
        year: 'numeric'
      }).format(new Date())
    },

    updateNow() {
      this.now = this.getNow()
    }
  }
}
</script>
