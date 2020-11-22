<template>
  <div class="home">
    <WelcomePage></WelcomePage>
  </div>
</template>

<script>
import WelcomePage from '../components/WelcomePage.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    WelcomePage
  }
}
</script>