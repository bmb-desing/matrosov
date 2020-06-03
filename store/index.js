export const state = () => ({
  setting: {
    phone: '+7 (978) 745-33-41',
    telegram: 'souris92'
  },
  firstLoader: true,
  theme: 'dark',
  menu: false,
  callback: false
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
  },
  getMenu(state) {
    return state.menu
  },
  getCallback(state) {
    return state.callback
  }
}
export const mutations = {
  changeFirtstLoader(state, payload) {
    return (state.firstLoader = payload)
  },
  changeTheme(state, payload) {
    return (state.theme = payload)
  },
  changeMenu(state, payload) {
    return (state.menu = payload)
  },
  changeCallback(state, payload) {
    return (state.callback = payload)
  }
}
export const actions = {}
