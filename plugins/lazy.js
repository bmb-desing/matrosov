import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import error from '../assets/svg/warning.svg'
import loading from '../assets/svg/load.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error,
  loading,
  attempt: 1
})
