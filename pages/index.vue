<template>
  <div>
    <no-ssr>
      <movement-system>
        <mass-object
          :rv0="{ x: 2, y: 2 }"
          :v0="{ x: 10 }"
          :f="{ x: -3, y: -2 }"
          :m="1"
        >
          <cube texture="cobblestone" :size="1"></cube>
        </mass-object>
        <mass-object
          :rv0="{ x: 2, z: 2 }"
          :v0="{ z: 20 }"
          :f="{ y: -1, z: -8 }"
          :m="1.2"
        >
          <cube texture="diamond" :size="1.2"></cube>
        </mass-object>
      </movement-system>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'Index',
  middleware: ['darkTheme']
}
</script>
