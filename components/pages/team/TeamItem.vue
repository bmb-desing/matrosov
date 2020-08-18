<template>
  <div class="team">
    <div class="team__image">
      <nuxt-link :to="'/team/' + team.alias">
        <img v-lazy="team.image" :alt="team.name" />
      </nuxt-link>
    </div>
    <h2 class="team__name title title_white title_third">
      <nuxt-link :to="'/team/' + team.alias">
        {{ team.name }}
      </nuxt-link>
    </h2>
    <div class="team__footer">
      <div class="team__job">{{ team.job }}</div>
      <div class="team__link">
        <nuxt-link :to="'/team/' + team.alias">
          узнать больше
          <span>+</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    team: {
      type: Object,
      required: true
    }
  }
}
</script>
