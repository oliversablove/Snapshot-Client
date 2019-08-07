import Vue from 'vue'
import Vuex from 'vuex'
// import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: [
      {
        id: 0,
        user_id: 0,
        display_name: 'Gucci Meng',
        desc: 'Look at me chainz',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81Sh4%2BSTk-L._UY395_.jpg',
        timestamp: 1551052800000
      },
      {
        id: 0,
        user_id: 1,
        display_name: 'Gucci Womang',
        desc: 'Look at me washis',
        image: 'https://cdn2.chrono24.com/images/uhren/images_11/s3/8409311_xxl.jpg?v=1527789380503',
        timestamp: 1541052800000
      },
      {
        id: 0,
        user_id: 2,
        display_name: 'Gucci childmang',
        desc: 'I finna get minez',
        image: 'https://i1.sndcdn.com/artworks-000138449405-3p2bn6-t500x500.jpg',
        timestamp: 1531052800000
      }
    ]
  },
  mutations: {
    isAuthenticated (state) {
      if (localStorage.getItem('jwt') != null) state.isAuthenticated = true
      else state.isAuthenticated = false
    },
    login (state) {
      state.isAuthenticated = true
      // supposed to work
      // localStorage.setItem('jwt', token)
      // router.push('/')
    },
    logout (state) {
      state.isAuthenticated = false
      // supposed to work
      // localStorage.removeItem('jwt')
      // router.push('/login')
    }
  }
})
