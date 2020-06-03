<template>
  <div class="navigation">
    <main-header :theme="'dark'"></main-header>
    <div class="navigation__center">
      <div class="wrapper">
        <div class="navigation__wrap">
          <navigation-list></navigation-list>
        </div>
      </div>
    </div>
    <div class="navigation__footer"></div>
  </div>
</template>
<script>
import MainHeader from '../header/MainHeader'
import NavigationList from './MenuList'
export default {
  components: {
    MainHeader,
    NavigationList
  }
}
</script>
