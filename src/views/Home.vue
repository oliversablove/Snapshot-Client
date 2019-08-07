<template>
  <div class="feed">
    Hello, World duuuh!
    <button @click="logout">Logout</button>
  </div>
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
