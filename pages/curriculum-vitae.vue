<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="8">
        <app-card-raisable>
          <keep-alive>
            <iframe
              id="cv"
              src="https://onedrive.live.com/embed?cid=D5A3B6C8950A0143&resid=D5A3B6C8950A0143%219596&authkey=AMRg4MEOP4uG04M&em=2"
            ></iframe>
          </keep-alive>
        </app-card-raisable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCardRaisable from '~/components/common/AppCardRaisable'

export default {
  components: { AppCardRaisable },

  mounted() {
    this.$store.commit('setCurrentPageTitle', 'Curriculum Vitae')
  },

  head() {
    return { title: 'Curriculum Vitae' }
  }
}
</script>

<style scoped>
#cv {
  height: 75vh;
  width: 100%;
  border: inherit;
}
</style>
