<template>
  <section class="instagram section section_dark">
    <div class="wrapper">
      <div class="instagram__content">
        <div class="wrapper wrapper_small">
          <div class="instagram__wrapper">
            <div class="instagram__left">
              <h2 class="title title_second title_white">Наш Instagram</h2>
              <div class="instagram__text">
                <p>
                  Следите за нами @MatrosovArchitects в Instagram и узнавайте
                  больше о нашей работе
                </p>
              </div>
              <div class="instagram__link">
                <a :href="getInstLink.instagram.link" target="_blank">
                  перейти
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0909 7L23.1616 7.94L26.8393 11.6667L3 11.6667L3 13L26.8393 13L23.1616 16.7267L24.0909 17.6667L29.3636 12.3333L24.0909 7Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="instagram__right">
              <div
                v-for="(item, index) in inst"
                :key="'instagram_' + index"
                class="instagram__item"
              >
                <a :href="item.link" target="_blank">
                  <img v-lazy="item.image" :alt="item.link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      inst: [
        {
          link: '/123',
          image: '/instagram/1.jpg'
        },
        {
          link: '/123',
          image: '/instagram/1.jpg'
        },
        {
          link: '/123',
          image: '/instagram/1.jpg'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      setting: 'getSetting'
    }),
    getInstLink() {
      return this.setting('social')
    }
  }
}
</script>
