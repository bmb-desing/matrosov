<template>
  <div class="cookie">
    <div class="cookie__text">
      <p>
        Мы используем cookie-файлы для улучшения предоставляемых услуг.
        Продолжая навигацию по сайту, вы соглашаетесь с правилами использования
        cookie-файлов.
      </p>
    </div>
    <div class="cookie__button">
      <button @click="changeCookie">Принять</button>
    </div>
    <div class="cookie__close" @click="changeCookie">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.3343 11.5321L20.4675 10.666L16.001 15.1332L11.5337 10.666L10.667 11.5321L15.1342 15.9993L10.667 20.4666L11.5337 21.3327L16.001 16.8655L20.4675 21.3327L21.3343 20.4666L16.8671 15.9993L21.3343 11.5321Z"
          fill="black"
        />
        <circle cx="16" cy="16" r="15.5" stroke="#4F4F4F" />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      changeCookie: 'changeCookie'
    })
  }
}
</script>
