<template>
  <header class="header">
    <h3 class='title'>Snap<span>shot</span></h3>
    <button class="logout-btn" @click="logout">
      <i class="material-icons">power_off</i>
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    logout () {
      // supposed to work, doesn't properly
      // this.$store.commit('logout')

      // previous code (supposed to be global in store.js mutations)
      localStorage.removeItem('jwt')
      this.$router.push('/login')
    }
  }
}
</script>
