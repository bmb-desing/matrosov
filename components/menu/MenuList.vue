<template>
  <div class="menu">
    <ul class="menu__list">
      <nuxt-link class="menu__item" :to="{ name: 'about' }" tag="li">
        <a class="menu__link">О нас</a>
      </nuxt-link>
      <nuxt-link class="menu__item" :to="{ name: 'dizajn-intererov' }" tag="li">
        <a class="menu__link">Дизайн интерьеров</a>
      </nuxt-link>
      <nuxt-link class="menu__item" tag="li" :to="{ name: 'arhitektura' }">
        <a class="menu__link">Архитектура</a>
      </nuxt-link>
      <nuxt-link
        class="menu__item"
        tag="li"
        :to="{ name: 'predmetnyj-dizajn' }"
      >
        <a class="menu__link">Предметный дизайн</a>
      </nuxt-link>
      <nuxt-link class="menu__item" tag="li" :to="{ name: 'team' }">
        <a class="menu__link">Команда</a>
      </nuxt-link>
      <nuxt-link class="menu__item" tag="li" :to="{ name: 'news' }">
        <a class="menu__link">Новости</a>
      </nuxt-link>
      <nuxt-link class="menu__item" tag="li" :to="{ name: 'contacts' }">
        <a class="menu__link">Контакты</a>
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
