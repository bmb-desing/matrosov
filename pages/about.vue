<template>
  <div class="page-about">
    <div
      v-lazy:background-image="page.content.firstScreen.background"
      class="first-screen__content first-screen__content_cover"
    >
      <div class="first-screen__slider">
        <div class="first-screen__letter">
          <svg
            width="425"
            height="322"
            viewBox="0 0 425 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H132.083L205.02 174.319L134.654 322L0 0Z"
                fill="white"
                fill-opacity="0.12"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M288.008 0H425V322H288.008V0Z"
                fill="white"
                fill-opacity="0.12"
              />
            </g>
            <defs>
              <filter
                id="filter0_b"
                x="-8"
                y="-8"
                width="441"
                height="338"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div class="first-screen">
        <div class="first-screen__top"></div>
        <div class="first-screen__center first-screen__center_about">
          <div class="wrapper">
            <h1 class="first-screen__title">
              {{ page.content.firstScreen.title }}
            </h1>
            <div class="first-screen__desc">
              <p>
                {{ page.content.firstScreen.text }}
              </p>
            </div>
            <div class="first-screen__quote">
              {{ page.content.firstScreen.target }}
            </div>
          </div>
        </div>
        <div class="first-screen__bottom"></div>
      </div>
    </div>
    <section class="section section_white section_padb6">
      <div class="about__text">
        <div class="wrapper">
          <h2 class="title title_second title_dark">
            {{ page.content.secondScreen.title }}
          </h2>
          <div class="about__wrap">
            <p class="about__light">
              {{ page.content.secondScreen.text }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="wrapper">
      <hr class="about__line" />
    </div>
    <section class="section section_white">
      <div class="about__text">
        <div class="wrapper wrapper_counter">
          <h2 class="title title_second title_dark">
            {{ page.content.thirdScreen.title }}
          </h2>
          <div class="about__wrap text text_dark">
            <b>{{ page.content.thirdScreen.subtitle }}</b>
            <ul>
              <li
                v-for="(item, index) in page.content.thirdScreen.items"
                :key="'projects-' + index"
              >
                {{ item }}
              </li>
            </ul>
            <div class="about__counter">
              <counter
                v-for="(item, index) in page.content.thirdScreen.counter"
                :key="'count-' + index"
                :count="item"
              ></counter>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section_dark">
      <div class="about__text">
        <div class="wrapper">
          <h2 class="title title_second title_white">
            {{ page.content.fourthScreen.title }}
          </h2>
          <div class="about__reward">
            <transition-group name="zoom">
              <reward
                v-for="item in rewards"
                :key="'reward-' + item._id"
                :reward="item"
              ></reward>
            </transition-group>
            <div
              v-if="rewards.length < rewardsCount"
              class="about__changereward"
              @click="getRewards"
            >
              Показать еще +
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section_white">
      <div class="about__text">
        <div class="wrapper">
          <h2 class="title title_second title_dark">
            {{ page.content.fivethScreen.title }}
          </h2>
          <div
            class="about__wrap"
            v-html="page.content.fivethScreen.text"
          ></div>
        </div>
      </div>
    </section>
    <section class="section section_dark">
      <div class="about__text about__text_image">
        <div class="wrapper">
          <div class="about__content">
            <div class="about__team">
              {{ page.content.sixthScreen.text }}
            </div>
            <h3 class="title title_third title_white">
              {{ page.content.sixthScreen.title }}
            </h3>
            <div class="about__desc">
              {{ page.content.sixthScreen.desc }}
            </div>
          </div>
          <div class="about__image">
            <img
              v-lazy="page.content.sixthScreen.image"
              :alt="page.content.sixthScreen.title"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section section_dark section_padb0">
      <div class="about__text">
        <div class="wrapper">
          <h2 class="title title_second title_white">
            {{ page.content.seventhScreen.title }}
          </h2>
          <div class="about__wrap">
            <div class="about__clients">
              <about-client
                v-for="item in clients"
                :key="'client-' + item._id"
                :client="item"
              ></about-client>
            </div>
            <p class="about__normal text-white">
              {{ page.content.seventhScreen.text }}
            </p>
            <div class="about__button">
              <button @click="changeMenu">Начать проект</button>
            </div>
            <hr class="about__line about__line_white" />
          </div>
        </div>
      </div>
    </section>
    <instagram></instagram>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Counter from '../components/pages/about/Counter'
import Reward from '../components/pages/about/Reward'
import AboutClient from '../components/pages/about/AboutClient'
import Instagram from '../components/pages/Instagram'
export default {
  middleware: ['darkTheme', 'showFooter'],
  name: 'About',
  components: {
    Counter,
    Reward,
    AboutClient,
    Instagram
  },
  async asyncData({ app, error }) {
    try {
      const page = await app.$axios.get('/page/about')
      const clients = await app.$axios.get('/clients')
      if (page.status === 200) {
        return {
          page: page.data,
          clients: clients.data
        }
      } else {
        return error(404, 'Страница не найдена')
      }
    } catch (err) {
      return error(404, 'Страница не найдена')
    }
  },
  data() {
    return {
      page: {},
      rewardsCount: 3,
      rewards: [
        {
          _id: 1,
          reward: '1',
          project: {
            name: '1',
            link: '1'
          }
        },
        {
          _id: 2,
          reward: '1',
          project: {
            name: '1',
            link: '1'
          }
        }
      ],
      clients: [
        {
          image: '/clients/1.png',
          name: '1',
          _id: 1
        },
        {
          image: '/clients/2.png',
          name: '1',
          _id: 2
        },
        {
          name: '1',
          image: '/clients/3.png',
          _id: 3
        },
        {
          name: '1',
          image: '/clients/4.png',
          _id: 4
        },
        {
          image: '/clients/5.svg',
          name: '1',
          _id: 5
        }
      ]
    }
  },
  methods: {
    getRewards() {
      // @TODO Добавление наград с бд
      this.rewards.push({
        _id: 3,
        reward: '1',
        project: {
          name: '1',
          link: '1'
        }
      })
    },
    ...mapMutations({
      changeMenu: 'changeMenu'
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
  }
}
</script>
