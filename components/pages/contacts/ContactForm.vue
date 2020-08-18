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
          :class="'form__item_textarea'"
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
            :class="
              showError && errors.first(item.name) ? 'form__value_error' : ''
            "
          />
          <input
            v-else-if="item.type == 'input'"
            v-model="item.value"
            v-validate="item.validate"
            type="text"
            :name="item.name"
            class="form__value form__value_input"
            :placeholder="item.placeholder"
            :class="
              showError && errors.first(item.name) ? 'form__value_error' : ''
            "
          />
          <textarea
            v-else-if="item.type == 'textarea'"
            v-model="item.value"
            v-validate="item.validate"
            :name="item.name"
            :placeholder="item.placeholder"
            class="form__value form__value_textarea"
            rows="10"
            :class="
              showError && errors.first(item.name) ? 'form__value_error' : ''
            "
          ></textarea>
          <span v-if="showError && errors.first(item.name)" class="form__error">
            Обязательно для заполнения
          </span>
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
import { mapMutations } from 'vuex'
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
          validate: 'required|min:18|max:18',
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
    ...mapMutations({
      changeMenu: 'changeMenu',
      changeSuccessForm: 'changeSuccessForm'
    }),
    sendForm() {
      const data = {
        name: this.form.name.value,
        phone: this.form.phone.value,
        text: this.form.text.value,
        routes: this.$router
      }
      // @TODO Отправка формы
      return data
    },
    clearForm() {
      this.form.name.value = ''
      this.form.phone.value = ''
      this.form.text.value = ''
      return this
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.sendForm()
          this.clearForm()
          this.changeMenu(false)
          this.changeSuccessForm(true)
          return this
        } else {
          this.showError = true
        }
      })
    }
  }
}
</script>
