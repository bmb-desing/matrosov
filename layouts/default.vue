<template>
  <div class="page">
    <transition name="lightSpeed">
      <first-loader v-if="firstLoad"></first-loader>
    </transition>
    <main-header :theme="theme" :fixed="true"></main-header>
    <transition name="lightSpeed">
      <main-navigation v-if="menu"></main-navigation>
    </transition>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
  }
}
</script>
