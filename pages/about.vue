<template>
  <div class="page-about">
    <div
      v-lazy:background-image="'/about.jpg'"
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
            <h1 class="first-screen__title">О нас</h1>
            <div class="first-screen__desc">
              <p>
                «Если в правильно спроектированном и правильно построенном доме
                учтено все, что дают нам солнце и природа, он обязательно будет
                только хорошим и светлым, даже если мы выбрали не самый дорогой
                вариант.»
              </p>
            </div>
            <div class="first-screen__quote">
              - Изд. Йожеф Косо
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
            Ведущее архитектурное дизайн-бюро Крыма
          </h2>
          <div class="about__wrap">
            <p class="about__light">
              Главным принципом работы «MATROSOV ARCHITECTS» является создание
              качественной среды, архитектура которой является актуальной в
              любом времени, неустаревающей через десятки лет, всегда ценной.
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
            Услуги
          </h2>
          <div class="about__wrap text text_dark">
            <b>Охватываем три направлениях:</b>
            <ul>
              <li>
                дизайн интерьеров
              </li>
              <li>архитектура</li>
              <li>предметный дизайн</li>
            </ul>
            <div class="about__counter">
              <counter
                v-for="(item, index) in counter"
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
          <h2 class="title title_second title_white">Награды</h2>
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
            Наша философия
          </h2>
          <div class="about__wrap">
            <p class="about__normal">
              В отличие от многих проектных организаций, в наших работах мы
              применяем комплексный архитектурный подход, начиная с ландшафта,
              формируя соответствующее среде здание, его интерьер или предмет в
              его интерьере. Мы стремимся создать среду в виде
              объемно-пространственной композиции, которую можно наполнить
              деталями и необходимыми предметами интерьера, при этом суть самого
              пространства останется неизменной.
            </p>
            <p class="about__normal">
              Мы уважительно относимся к природе и создаем соответствующую
              среду, используя соответствующие этой среде натуральные материалы
              и цвета: дерево, стекло, бетон, металл, камень, лен, глину и т.д.
              Обрабатываем материалы сохраняя их фактуры, чтобы можно было не
              только зрительно, но и тактильно, на ощупь ощутить тепло
              деревянной поверхности или легкую прохладу камня. Мы создаем
              пространство, которое будет жить вне времени.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section_dark">
      <div class="about__text about__text_image">
        <div class="wrapper">
          <div class="about__content">
            <div class="about__team">
              «Качественная архитектура — это внимание каждой детали, это
              удобство и комфорт для жизни, работы и отдыха.»
            </div>
            <h3 class="title title_third title_white">Павел Матросов</h3>
            <div class="about__desc">
              Основатель и руководитель «MATROSOV ARCHITECTS».
            </div>
          </div>
          <div class="about__image">
            <img v-lazy="'/about.png'" alt="Павел Матросов" />
          </div>
        </div>
      </div>
    </section>
    <section class="section section_dark">
      <div class="about__text">
        <div class="wrapper">
          <h2 class="title title_second title_white">Клиенты</h2>
          <div class="about__wrap">
            <p class="about__normal text-white">
              В отличие от многих проектных организаций, в наших работах мы
              применяем комплексный архитектурный подход, начиная с ландшафта,
              формируя соответствующее среде здание, его интерьер или предмет в
              его интерьере. Мы стремимся создать среду в виде
              объемно-пространственной композиции, которую можно наполнить
              деталями и необходимыми предметами интерьера, при этом суть самого
              пространства останется неизменной.
            </p>
            <hr class="about__line about__line_white" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Counter from '../components/pages/about/Counter'
import Reward from '../components/pages/about/Reward'
export default {
  middleware: ['darkTheme'],
  name: 'About',
  components: {
    Counter,
    Reward
  },
  data() {
    return {
      counter: [
        {
          title: '10',
          text: 'лет на рынке'
        },
        {
          title: '4',
          text: 'сотрудника'
        },
        {
          title: '25',
          text: 'наград'
        },
        {
          title: '300+',
          text: 'реализованных проектов'
        }
      ],
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
    }
  }
}
</script>
