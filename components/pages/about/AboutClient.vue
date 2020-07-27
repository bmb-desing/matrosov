<template>
  <div class="client">
    <img
      v-lazy="client.image"
      :alt="client.name"
      class="client__image"
      :title="client.name"
    />
  </div>
</template>
<script>
export default {
  props: {
    client: {
      type: Object,
      required: true
    }
  }
}
</script>
