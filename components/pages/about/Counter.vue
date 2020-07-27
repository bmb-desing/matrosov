<template>
  <div class="counter">
    <h3 class="counter__title">{{ count.count }}</h3>
    <div class="counter__text">{{ count.text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Object,
      required: true
    }
  }
}
</script>
