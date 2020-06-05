import {
  mdiChat,
  mdiFileDocument,
  mdiHammerScrewdriver,
  mdiHome
} from '@mdi/js'



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
      icon: mdiFileDocument,
      title: 'CV',
      to: '/curriculum-vitae'
    },
    {
      icon: mdiChat,
      title: 'Contact',
      to: '/contact'
    }
  ]
}

export const mutations = {
  setCurrentPageTitle(state, text) {
    state.currentPageTitle = text
  }
}
