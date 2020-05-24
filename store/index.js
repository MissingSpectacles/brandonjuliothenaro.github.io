import {
  mdiChat,
  mdiFileDocument,
  mdiHammerScrewdriver,
  mdiHome
} from '@mdi/js'

export const state = () => ({
  currentPageTitle: 'Home',

  allPages: [
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
      icon: mdiChat,
      title: 'Contact',
      to: '/contact'
    },
    {
      icon: mdiFileDocument,
      title: 'CV',
      to: '/cv'
    }
  ]
})

export const mutations = {
  setCurrentPageTitle(state, text) {
    state.currentPageTitle = text
  }
}
