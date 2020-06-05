/* eslint-disable */
<template>
  <div class="navigation">
    <main-header :theme="'dark'"></main-header>
    <div class="navigation__center">
      <div class="wrapper">
        <div class="navigation__wrap">
          <navigation-list></navigation-list>
          <menu-form></menu-form>
        </div>
      </div>
    </div>
    <div class="navigation__footer">
      <div class="wrapper wrapper_big">
        <div class="navigation__wrap">
          <ul class="navigation__social">
            <li v-for="(item, index) in setting.social" :key="index">
              <a :href="item.link" target="_blank">
                <span v-html="item.icon"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sanitizeHtml from 'sanitize-html'
import { mapGetters } from 'vuex'
import MainHeader from '../header/MainHeader'
import NavigationList from './MenuList'
import MenuForm from './MenuForm'
export default {
  components: {
    MainHeader,
    NavigationList,
    MenuForm
  },
  computed: {
    ...mapGetters({
      setting: 'getSetting'
    })
  },
  methods: {
    sanitize(icon) {
      return sanitizeHtml(icon, {
        allowedTags: false,
        allowedAttributes: false
      })
    }
  }
}
</script>
