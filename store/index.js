export const state = () => ({
  currentPageTitle: 'Home',

  allPages: [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/'
    },
    {
      icon: 'mdi-hammer-screwdriver',
      title: 'Skills',
      to: 'skills'
    },
    {
      icon: 'mdi-chat',
      title: 'Contact',
      to: 'contact'
    },
    {
      icon: 'mdi-file-document',
      title: 'CV',
      to: 'cv'
    }
  ]
})

export const mutations = {
  setCurrentPageTitle(state, text) {
    state.currentPageTitle = text
  }
}
