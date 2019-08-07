<template>
  <div id="app">
    <Header v-if="authenticated" />
    <router-view/>
    <Footer v-if="authenticated"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    authenticated () {
      return true
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
