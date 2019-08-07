<template>
  <main class="feed">

    <article class="post" v-for="post in feed" :key="post.id">
      <section class="post-user">{{ post.display_name }}</section>
      <section class="post-image">
        <img class="post-picture" :src="post.image" :alt="post.desc" />
      </section>
      <footer class="post-desc">
        {{ post.display_name + ': ' + post.desc }}
      </footer>
    </article>

    <button @click="logout">Logout</button>
  </main>
</template>

<script>
export default {
  computed: {
    feed () {
      return this.$store.state.feed
    }
  },
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
