<template>
  <div class='login-page'>
    <header>
      <h3>Snap<span>shot</span></h3>
      <h4>Login</h4>
    </header>
    <main>
      <div class='form-group'>
        <input type='text' v-model='email' placeholder='email' :class="(emailError) ? 'err' : ''"/>
        <input type='password' v-model='password' placeholder='password' :class="(passError) ? 'err' : ''"/>
        <button class='login-btn' @click='login'>Login</button>
        <div class='error_msg' v-if='hasErrors'>
          {{ error }}
        </div>
      </div>
    </main>
    <footer>
      <p>
        Need an Account? <router-link class='link' to ='/register'>Sign Up</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        hasErrors: false,
        emailError: false,
        passError: false,
        error: ''
      }
    },
    methods: {
      login () {
        let api_url = this.$store.state.api_url
        // change alert to something else
        if (this.email == '' || this.password == '') return alert('Please fill in all fields')

        this.$http.post(api_url + 'user/login', {
          email: this.email,
          password: this.password
        }).then(response => {
          if (response.data.auth) {
            // should work but probably doesn't (can't test until login works)
            // this.$store.commit('login', response.data.token)
            // previous code (supposed to be in global store.js)
            localStore.setItem('jwt', response.data.token)
            this.$router.push('/')
          } else {

            if (response.data.mailError) {
              this.emailError = true
            } else {
              this.emailError = false
            }

            if (response.data.passError) {
              this.passError = true
            } else {
              this.passError = false
            }

            this.error = response.data.msg
            this.hasErrors = true
          }
        }).catch(err => {
          console.log('Error ', err)
        })
      }
    }
  }
</script>
