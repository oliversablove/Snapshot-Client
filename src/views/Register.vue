<template>
  <div class='register-page'>
    <header>
      <h3>Snap<span>shot</span></h3>
      <h4>Register</h4>
    </header>
    <main>
      <div class='form-group'>
        <input type='text' v-model='firstname' placeholder='first name' />
        <input type='text' v-model='lastname' placeholder='last name' />
        <input type='text' v-model='email' placeholder='email' :class="(hasErrors) ? 'err' : ''"/>
        <input type='password' v-model='password' placeholder='password'/>
        <button class='login-btn' @click='register'>Register</button>
        <div class='error_msg' v-if='hasErrors'>
          {{ error }}
        </div>
      </div>
    </main>
    <footer>
      <p>
        Already Have an Account? <router-link class='link' to ='/login'>Login</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        hasErrors: false,
        error: ''
      }
    },
    methods: {
      register () {
        let api_url = this.$store.state.api_url
        // change alert to something else
        if (this.firstname == '' ||
            this.lastname == '' ||
            this.email == '' ||
            this.password == ''
         ) {
            return alert('Please fill in all fields')
           }

        this.$http.post(api_url + 'user/register', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        }).then(response => {
          if (response.data.auth) {
            localStorage.setItem('jwt', response.data.token)
            this.$router.push('/')
          } else {
            this.error = response.data.msg
            this.hasErrors = true
          }
        }).catch(err => {
          this.hasErrors = true
          this.error = err
        })
      }
    }
  }
</script>
