import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from './store'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/newpost',
      name: 'post',
      component: Post,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// this is correct
// currently prevents post-sign-in header and footer from showing. (isAuthenticated false)
// router.onReady(() => {
//   store.commit('isAuthenticated')
// })

router.onReady(() => {
  axios.get(store.state.api_url + 'post/getposts')
    .then(response => {
      store.commit('getFeed', response.data)
    })
    .catch(err => {
      if (err) throw err
    })
})

// Checks auth to protect from getting to requiresAuth routes if not logged in (redirects to login)
router.beforeEach((to, from, next) => {
  // works but in wrong place
  store.commit('isAuthenticated')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    if (localStorage.getItem('jwt') != null) {
      next({
        path: '/',
        params: { nextUrl: '/' }
      })
    } else {
      next()
    }
  }
})

export default router
