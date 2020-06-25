<template>
  <div class="reward">
    <div class="reward__left">
      {{ reward.reward }}
    </div>
    <div class="reward__right">
      <nuxt-link :to="reward.project.link">{{ reward.project.name }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reward: {
      type: Object,
      required: true
    }
  }
}
</script>
