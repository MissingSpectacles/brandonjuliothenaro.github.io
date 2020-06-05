<template>
  <v-row justify="center">
    <v-col>
      <h2>Certificates</h2>

      <v-row justify="center">
        <v-col lg="8">
          <app-card-raisable>
            <v-carousel
              :delimiter-icon="mdiCircle"
              :next-icon="mdiChevronRight"
              :prev-icon="mdiChevronLeft"
              continuous
              cycle
              height="auto"
            >
              <v-carousel-item
                v-for="(certificate, index) in allCertificates"
                :key="index"
              >
                <VImg :src="certificate.dir" />
              </v-carousel-item>
            </v-carousel>
          </app-card-raisable>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiCircle,
  mdiOpenInNew
} from '@mdi/js'

import AppCardRaisable from '~/components/common/AppCardRaisable'

export default {
  name: 'IndexCertificates',

  components: { AppCardRaisable },

  data() {
    return {
      mdiChevronLeft,
      mdiChevronRight,
      mdiCircle,
      mdiOpenInNew
    }
  },

  computed: {
    allCertificates() {
      return this.$store.getters.allCertificates
    }
  }
}
</script>
