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

<style lang="scss" scoped>
.register-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;

  header {
    padding: 15px 25px;
    h3 {
      color: #171717;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      margin: 0;
      span {
        font-weight: 300;
      }
    }

    h4 {
      color: #888;
      font-size: 24px;
      text-align: center;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }

  footer {
    width: calc(100% - 50px);
    height: 40px;
    background-color: #eee;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
    padding: 15px 25px;
    position: fixed;
    bottom: 0;

    p {
      color: #888;
      font-size: 16px;
      line-height: 40px;
      margin: 0px;
      padding: 0px;
      text-align: center;
    }

    .link {
      color: #ffce00;
      text-decoration: none;
      font-weight: 700;
    }
  }
}
</style>
