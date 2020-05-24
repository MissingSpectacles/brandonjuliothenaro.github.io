<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <keep-alive>
          <iframe
            id="cv"
            src="https://onedrive.live.com/embed?cid=D5A3B6C8950A0143&resid=D5A3B6C8950A0143%219596&authkey=AMRg4MEOP4uG04M&em=2"
          ></iframe>
        </keep-alive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setPageTitle', 'CV')
  },

  head() {
    return {
      title: 'CV'
    }
  }
}
</script>

<style scoped>
#cv {
  height: 100vh;
  width: 100%;
}
</style>
