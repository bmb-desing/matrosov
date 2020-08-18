<template>
  <div class="page-team">
    <div class="wrapper wrapper_big">
      <div class="wrapper_team wrapper_team-page">
        <div class="wrapper_content">
          <div class="team__wrap">
            <div class="team__photo">
              <img v-lazy="team.content.image" :alt="team.name" />
            </div>
            <div class="team__content">
              <h1 class="title title_white title_team">{{ team.name }}</h1>
              <div class="team__job">{{ team.job }}</div>
              <div class="team__text" v-html="team.content.text"></div>
              <div class="team__rewards">
                <div
                  v-for="(item, index) in team.content.works"
                  :key="'works_' + index"
                  class="team__reward"
                >
                  <div class="team__year">{{ item.year }}</div>
                  <div class="team__items">
                    <div
                      v-for="(val, key) in item.list"
                      :key="'works_' + index + '_' + key"
                      class="team__item"
                    >
                      {{ val }}
                    </div>
                  </div>
                </div>
              </div>
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
export default {
  components: {
    Instagram
  },
  async asyncData({ app, error, params }) {
    try {
      const alias = params.alias
      const team = await app.$axios.get('/team/' + alias)
      if (team.status === 200) {
        return {
          team: team.data
        }
      }
    } catch (err) {
      return error(err)
    }
  },
  head() {
    return {
      title: this.team.head.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.team.head.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.team.head.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.team.head.title
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.team.head.image
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.team.head.keywords
        }
      ]
    }
  },
  middleware: ['darkTheme', 'showFooter']
}
</script>
