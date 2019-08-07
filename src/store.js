import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated (state) {
      if (localStorage.getItem('jwt') != null) state.isAuthenticated = true
      else state.isAuthenticated = false
    },
    login (state) {
      state.isAuthenticated = true
      // supposed to work
      // localStore.setItem('jwt', response.data.token)
      // this.$router.push('/')
    },
    logout (state) {
      state.isAuthenticated = false
      // supposed to work
      // localStorage.removeItem('jwt')
      // this.$router.push('/login')
    }
  }
})
