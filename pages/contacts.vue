<template>
  <div class="page-contacts">
    <div class="wrapper">
      <div class="wrapper_contacts">
        <div class="contacts__top">
          <div class="contacts__left">
            <div class="contacts__wrap">
              <span>телефон</span>
              <a
                class="contacts__phone"
                :href="'tel:' + setting('phone').replace(/[\s()-]/g, '')"
                >{{ setting('phone') }}</a
              >
            </div>
            <div class="contacts__wrap">
              <span>почта</span>
              <a class="contacts__mail" :href="'mailto:' + setting('email')">{{
                setting('email')
              }}</a>
            </div>
          </div>
          <div class="contacts__center">
            <div class="contacts__wrap">
              <span>адрес</span>
              <p class="contacts__text" v-html="setting('address')"></p>
            </div>
            <div class="contacts__wrap">
              <span>время работы</span>
              <p class="contacts__text" v-html="setting('time')"></p>
            </div>
          </div>
          <div class="contacts__right">
            <ul class="contacts__social">
              <li
                v-for="(item, index) in setting('social')"
                :key="'social-' + index"
              >
                <a :href="item.link" target="_blank">
                  <span v-html="item.icon"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper wrapper_big">
      <div class="contacts__form">
        <div class="contacts__wrapper">
          <contact-form></contact-form>
        </div>
      </div>
    </div>
    <instagram></instagram>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Instagram from '../components/pages/Instagram'
import ContactForm from '../components/pages/contacts/ContactForm'
export default {
  components: {
    Instagram,
    ContactForm
  },
  async asyncData({ app, error }) {
    try {
      const page = await app.$axios.get('/page/contacts')
      if (page.status === 200) {
        return {
          page: page.data
        }
      } else {
        return error(404, 'Страница не найдена')
      }
    } catch (err) {
      return error(404, 'Страница не найдена')
    }
  },
  computed: {
    ...mapGetters({
      setting: 'getSetting'
    })
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.image
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.keywords
        }
      ]
    }
  },
  middleware: ['darkTheme', 'showFooter']
}
</script>
