export const state = () => ({
  setting: {
    phone: '+7 (978) 745-33-41'
  },
  firstLoader: true,
  theme: 'dark'
})
export const getters = {
  getFirstLoader(state) {
    return state.firstLoader
  },
  getTheme(state) {
    return state.theme
  },
  getSetting(state) {
    return state.setting
  }
}
export const mutations = {
  changeFirtstLoader(state, payload) {
    return (state.firstLoader = payload)
  },
  changeTheme(state, payload) {
    return (state.theme = payload)
  }
}
export const actions = {}
