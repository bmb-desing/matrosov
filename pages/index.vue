<template>
  <div class="page-home">
    <first-screen></first-screen>
  </div>
</template>

<script>
import FirstScreen from '../components/pages/FirstScreen'
export default {
  name: 'Index',
  middleware: ['darkTheme', 'hideFooter'],
  components: {
    FirstScreen
  }
}
</script>
