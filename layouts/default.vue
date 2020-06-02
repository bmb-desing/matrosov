<template>
  <div class="page">
    <transition name="lightSpeed">
      <first-loader v-if="firstLoad"></first-loader>
    </transition>
    <main-header></main-header>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import FirstLoader from '../components/loaders/FirstLoader'
import MainHeader from '../components/header/MainHeader'
export default {
  name: 'LayoutDefault',
  components: {
    FirstLoader,
    MainHeader
  },
  computed: {
    ...mapGetters({
      firstLoad: 'getFirstLoader'
    })
  }
}
</script>
