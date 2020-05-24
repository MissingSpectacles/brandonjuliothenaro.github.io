export const state = () => ({
  pageTitle: 'Home'
})

export const mutations = {
  setPageTitle(state, text) {
    state.pageTitle = text
  }
}
