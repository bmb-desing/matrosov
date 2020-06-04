<template>
  <div class="form">
    <form @submit.prevent="validateBeforeSubmit">
      <p class="form__text">
        Получите бесплатную консультацию по телефону или с выездом в удобное для
        Вас место:
      </p>
      <div class="form__wrap">
        <div
          v-for="(item, index) in form"
          :key="index"
          class="form__item"
          :class="'form__item_' + item.type"
        >
          <input
            v-if="item.type == 'input' && item.mask"
            v-model="item.value"
            v-validate="item.validate"
            v-mask="item.mask"
            type="text"
            :name="item.name"
            class="form__value form__value_input"
            :placeholder="item.placeholder"
          />
          <input
            v-else-if="item.type == 'input'"
            v-model="item.value"
            v-validate="item.validate"
            type="text"
            :name="item.name"
            class="form__value form__value_input"
            :placeholder="item.placeholder"
          />
          <textarea
            v-else-if="item.type == 'textarea'"
            v-model="item.value"
            v-validate="item.validate"
            :name="item.name"
            :placeholder="item.placeholder"
            class="form__value form__value_textarea"
            rows="10"
          ></textarea>
          <span v-if="showError" class="form__error">{{
            errors.first(item.name)
          }}</span>
        </div>
        <div class="form__button">
          <button>Получить</button>
        </div>
      </div>
      <p class="form__conf">
        Отправляя нам эту форму, вы соглашаетесь с
        <a href="politica.pdf" target="_blank">политикой конфиденциальности</a>
        и с
        <a href="personal.pdf" target="_blank"
          >обработкой ваших персональных данных</a
        >
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: {
          value: '',
          type: 'input',
          validate: 'required',
          placeholder: 'Ваше имя*',
          name: 'name'
        },
        phone: {
          value: '',
          type: 'input',
          validate: 'required',
          placeholder: 'Ваш телефон*',
          name: 'phone',
          mask: '+# (###) ##-##-###'
        },
        text: {
          value: '',
          name: 'text',
          type: 'textarea',
          placeholder: 'Сообщение'
        }
      },
      showError: false
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.showError = true
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!')
          return
        }

        alert('Correct them errors!')
      })
    }
  }
}
</script>
