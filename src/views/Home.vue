<template>
  <main class="feed">

    <article class="post" v-for="post in feed" :key="post.id">
      <section class="post-user">{{ post.display_name }}</section>
      <section class="post-image">
        <img class="post-picture" :src="post.image" :alt="post.desc" />
      </section>
      <footer class="post-desc">
        <p><strong>{{ post.display_name }}</strong> {{ post.desc }}</p>
        <p class="timestamp">{{ timestampToDate(post.timestamp) }}</p>
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
    },
    timestampToDate (timestamp) {
      let d = new Date(timestamp)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      if (month < 10) {
        month = "0" + month
      }
      let day = d.getDate()
      if (day < 10) {
        day = "0" + day
      }
      return month + '/' + day + '/' + year
    }
  }
}
</script>
