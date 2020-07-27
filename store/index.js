import Cookie from 'js-cookie'
import _ from 'lodash'
export const state = () => ({
  setting: {},
  firstLoader: true,
  theme: 'dark',
  footer: true,
  menu: false,
  callback: false,
  successForm: false,
  cookie: Cookie.get('cookie')
})
export const getters = {
  getFirstLoader(state) {
    return state.firstLoader
  },
  getCookie(state) {
    return state.cookie
  },
  getTheme(state) {
    return state.theme
  },
  getSetting(state) {
    return (index) => {
      const val = _.find(state.setting, (item) => {
        return item.name === index
      })
      return val.value
    }
  },
  getMenu(state) {
    return state.menu
  },
  getCallback(state) {
    return state.callback
  },
  getSuccessForm(state) {
    return state.successForm
  },
  getFooter(state) {
    return state.footer
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
  },
  changeSuccessForm(state, payload) {
    return (state.successForm = payload)
  },
  changeCookie(state) {
    this.dispatch('cookieTrue')
    return (state.cookie = true)
  },
  changeFooter(state, payload) {
    return (state.footer = payload)
  },
  changeConfig(state, payload) {
    return (state.setting = payload)
  }
}
export const actions = {
  async nuxtServerInit({ commit }, { app, error }) {
    try {
      if (this.$cookies.get('cookie')) {
        await commit('changeCookie')
      }
      const config = await this.$axios.get('/config')
      await commit('changeConfig', config.data)
    } catch (err) {
      error({
        statusCode: 500,
        message: err
      })
    }
  },
  cookieTrue(app) {
    Cookie.set('cookie', true, {
      expires: 365
    })
  }
}
