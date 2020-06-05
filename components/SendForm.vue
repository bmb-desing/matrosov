<template>
  <div class="send">
    <div class="send__wrap">
      <div class="send__top">
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M48 16.7031H0V47.9985H48V16.7031Z" fill="#FAC551" />
          <path d="M0 47.9999L24 32.3652L48 47.9999H0Z" fill="#F7C140" />
          <path
            opacity="0.1"
            d="M48 16.7031L24 37.2285L0 16.7031H48Z"
            fill="black"
          />
          <path d="M48 16.7031L24 35.8238L0 16.7031H48Z" fill="#FFD54F" />
          <g>
            <path
              d="M23.9021 25.1965C30.5717 25.1965 35.9785 19.7799 35.9785 13.0983C35.9785 6.41658 30.5717 1 23.9021 1C17.2325 1 11.8257 6.41658 11.8257 13.0983C11.8257 19.7799 17.2325 25.1965 23.9021 25.1965Z"
              fill="#27AE60"
            />
            <path
              d="M30.4024 10.3535L28.6634 8.61133L22.4842 14.8017L19.3274 11.6392L17.5884 13.3813L20.7452 16.5439L22.4842 18.286L24.2232 16.5439L30.4024 10.3535Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div class="send__text">
        <p>
          <b>Спасибо!</b>
          <span>Данные успешно отправлены.</span>
          <small>Мы свяжемся с Вами в ближайшее время!</small>
        </p>
      </div>
      <div class="send__close" @click="changeSend(false)">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0009 1.29917L14.7008 0L8.00095 6.70083L1.30012 0L0 1.29917L6.70083 8L0 14.7008L1.30012 16L8.00095 9.29917L14.7008 16L16.0009 14.7008L9.30012 8L16.0009 1.29917Z"
            fill="#191919"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  mounted() {
    const vm = this
    setTimeout(function() {
      vm.changeSend(false)
    }, 3000)
  },
  methods: {
    ...mapMutations({
      changeSend: 'changeSuccessForm'
    })
  }
}
</script>
