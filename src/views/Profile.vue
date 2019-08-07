<template>
  <main class="view profile">

    <section class="profile-head">
      {{ display_name }}
    </section>

    <section class="posts">
      <div class="post" v-for="post in posts" :key="post._id">

        <img :src="post.image" :alt="post.desc" c;ass="post-image" />

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
  }
}
</script>
