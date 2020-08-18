<template>
  <div class="page-team">
    <div class="wrapper">
      <div class="wrapper_team">
        <h1 class="title title_white title_page">Команда</h1>
        <div class="wrapper_content">
          <div class="team__wrap">
            <h2 class="title title_white title_second">Ключевые лица</h2>
            <div class="team__content">
              <team-item
                v-for="item in team"
                :key="item._id"
                :team="item"
              ></team-item>
            </div>
          </div>
        </div>
      </div>
    </div>
    <instagram></instagram>
  </div>
</template>
<script>
import Instagram from '../../components/pages/Instagram'
import TeamItem from '../../components/pages/team/TeamItem'
export default {
  name: 'Team',
  components: {
    Instagram,
    TeamItem
  },
  async asyncData({ app, error }) {
    try {
      const page = await app.$axios.get('/page/team')
      const team = await app.$axios.get('/team')
      if (page.status === 200) {
        return {
          team: team.data,
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
  },
  middleware: ['darkTheme', 'showFooter']
}
</script>
