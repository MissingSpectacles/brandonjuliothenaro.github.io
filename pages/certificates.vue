<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(certificate, index) in certificates"
        :key="index"
        md="4"
        sm="6"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card :raised="hover">
            <v-img :src="certificate.dir">
              <v-overlay :value="hover" absolute>
                <app-button-external-link :href="certificate.url">
                  View Online
                  <v-icon right>{{ mdiOpenInNew }}</v-icon>
                </app-button-external-link>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

import APIsAndMicroservicesCertificate from '~/assets/certificates/APIs and Microservices.png'
import FrontEndLibrariesCertificate from '~/assets/certificates/Front End Libraries.png'
import JavaScriptAlgorithmsAndDataStructureCertificate from '~/assets/certificates/JavaScript Algorithms and Data Structures.png'
import ResponsiveWebDesignCertificate from '~/assets/certificates/Responsive Web Design.png'
import TokopediaSTARTSummitCertificate from '~/assets/certificates/Tokopedia START Summit Certificate of Participation.png'
import TypingCertificate from '~/assets/certificates/Typing Certificate.png'
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  components: { AppButtonExternalLink },
  data() {
    return {
      certificates: [
        {
          dir: ResponsiveWebDesignCertificate,
          url: 'https://bit.ly/35OoTpT'
        },
        {
          dir: JavaScriptAlgorithmsAndDataStructureCertificate,
          url: 'https://bit.ly/3dA7eFe'
        },
        {
          dir: FrontEndLibrariesCertificate,
          url: 'https://bit.ly/2YTCNpg'
        },
        {
          dir: APIsAndMicroservicesCertificate,
          url: 'https://bit.ly/301Cvx8'
        },
        {
          dir: TokopediaSTARTSummitCertificate,
          url: 'https://bit.ly/2xPxg83'
        },
        {
          dir: TypingCertificate,
          url: 'https://bit.ly/2WH3M4U'
        }
      ],

      mdiOpenInNew
    }
  },

  head() {
    return { title: 'Certificates' }
  }
}
</script>
