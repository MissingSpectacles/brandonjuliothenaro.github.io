import {
  mdiCertificate,
  mdiChat,
  mdiFileDocument,
  mdiHammerScrewdriver,
  mdiHome
} from '@mdi/js'

import APIsAndMicroservicesCertificate from '~/assets/certificates/APIs and Microservices.png'
import FrontEndLibrariesCertificate from '~/assets/certificates/Front End Libraries.png'
import JavaScriptAlgorithmsAndDataStructureCertificate from '~/assets/certificates/JavaScript Algorithms and Data Structures.png'
import ResponsiveWebDesignCertificate from '~/assets/certificates/Responsive Web Design.png'
import TokopediaSTARTSummitCertificate from '~/assets/certificates/Tokopedia START Summit Certificate of Participation.png'
import TypingCertificate from '~/assets/certificates/Typing Certificate.png'

export const state = () => ({
  currentPageTitle: 'Home'
})

export const getters = {
  allPages: () => [
    {
      icon: mdiHome,
      title: 'Home',
      to: '/'
    },
    {
      icon: mdiHammerScrewdriver,
      title: 'Skills',
      to: '/skills'
    },
    {
      icon: mdiCertificate,
      title: 'Certificates',
      to: '/certificates'
    },
    {
      icon: mdiFileDocument,
      title: 'CV',
      to: '/curriculum-vitae'
    },
    {
      icon: mdiChat,
      title: 'Contact',
      to: '/contact'
    }
  ],

  allCertificates: () => [
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

export const mutations = {
  setCurrentPageTitle(state, text) {
    state.currentPageTitle = text
  }
}
