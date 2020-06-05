<template>
  <section>
    <h2 class="text-center display-1 my-5">Certificates</h2>

    <v-row>
      <v-col
        v-for="(certificate, index) in allCertificates"
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
  </section>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'
import AppCardRaisable from '~/components/common/AppCardRaisable'

import APIsAndMicroservicesCertificate from '~/assets/certificates/APIs and Microservices.png'
import FrontEndLibrariesCertificate from '~/assets/certificates/Front End Libraries.png'
import JavaScriptAlgorithmsAndDataStructureCertificate from '~/assets/certificates/JavaScript Algorithms and Data Structures.png'
import ResponsiveWebDesignCertificate from '~/assets/certificates/Responsive Web Design.png'
import TokopediaSTARTSummitCertificate from '~/assets/certificates/Tokopedia START Summit Certificate of Participation.png'
import TypingCertificate from '~/assets/certificates/Typing Certificate.png'

export default {
  name: 'IndexCertificates',

  components: { AppButtonExternalLink, AppCardRaisable },

  data() {
    return {
      mdiOpenInNew,

      allCertificates: [
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
      ]
    }
  }
}
</script>
