<template>
  <div class="page-home">
    <first-screen :slider="page.content"></first-screen>
  </div>
</template>

<script>
import FirstScreen from '../components/pages/FirstScreen'
export default {
  name: 'Index',
  middleware: ['darkTheme', 'hideFooter'],
  components: {
    FirstScreen
  },
  async asyncData({ app, error }) {
    try {
      const page = await app.$axios.get('/page/index')
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
