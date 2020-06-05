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
    <transition name="fade">
      <send-form v-if="sendForm"></send-form>
    </transition>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import ruRu from 'vee-validate/dist/locale/ru'
import FirstLoader from '../components/loaders/FirstLoader'
import MainHeader from '../components/header/MainHeader'
import MainNavigation from '../components/menu/MainNavigation'
import SendForm from '../components/SendForm'
export default {
  name: 'LayoutDefault',
  components: {
    FirstLoader,
    MainHeader,
    MainNavigation,
    SendForm
  },
  computed: {
    ...mapGetters({
      firstLoad: 'getFirstLoader',
      menu: 'getMenu',
      theme: 'getTheme',
      sendForm: 'getSuccessForm'
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
  mounted() {
    this.$validator.localize('ru_RU', ruRu)
  },
  methods: {
    ...mapMutations({
      changeMenu: 'changeMenu'
    })
  }
}
</script>
