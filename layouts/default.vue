<template>
  <div class="page">
    <transition name="lightSpeed">
      <first-loader v-if="firstLoad"></first-loader>
    </transition>
    <main-header :theme="theme" :fixed="true"></main-header>
    <transition
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <main-navigation v-show="menu"></main-navigation>
    </transition>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import FirstLoader from '../components/loaders/FirstLoader'
import MainHeader from '../components/header/MainHeader'
import MainNavigation from '../components/menu/MainNavigation'
export default {
  name: 'LayoutDefault',
  components: {
    FirstLoader,
    MainHeader,
    MainNavigation
  },
  computed: {
    ...mapGetters({
      firstLoad: 'getFirstLoader',
      menu: 'getMenu',
      theme: 'getTheme'
    })
  },
  watch: {
    $route() {
      if (this.menu) {
        this.changeMenu(false)
      }
    },
    menu() {
      const body = document.body
      if (this.menu) {
        body.classList.add('hidden')
      } else {
        body.classList.remove('hidden')
      }
    }
  },
  methods: {
    ...mapMutations({
      changeMenu: 'changeMenu'
    })
  }
}
</script>
