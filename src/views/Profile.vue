<template>
  <main class="view profile">

    <section class="profile-head">
      {{ display_name }}
    </section>

    <section class="posts">
      <div class="post" v-for="post in posts" :key="post._id">

        <img :src="post.image" :alt="post.desc" class="post-image" />

      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      display_name: '',
      posts: []
    }
  },
  methods: {
    getProfile () {
      this.$http.post(this.$store.state.api_url + 'user/getprofile', {
        auth_token: localStorage.getItem('jwt')
      })
      .then(({ data }) => {
        this.display_name = data.details.display_name
        this.posts = data.details.posts
      })
    }
  },
  beforeMount () {
    this.getProfile()
  }
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;

  .profile-head {
    background: white;
    padding: 15px;
    box-sizing: border-box;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 5px;

    .post {
      padding: 0;
      .post-image {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
