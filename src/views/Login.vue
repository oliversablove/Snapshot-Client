<template>
  <div class='login-page'>
    <header>
      <h3>Snap<span>shot</span></h3>
      <h4>Login</h4>
    </header>
    <main>
      <div class='form-group'>
        <input type='text' v-model='email' placeholder='email'/>
        <input type='password' v-model='password' placeholder='password'/>
        <button class='login-btn' @click='login'>Login</button>
      </div>
    </main>
    <footer>
      <p>
        No Account? <router-link class='link' to ='/register'>Sign Up</router-link>
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
        password: ''
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
            localStorage.setItem('jwt', response.data.token)
            this.$router.push('/')
          } else {
            console.log('Error ', response)
          }
        }).catch(err => {
          console.log('Error ', err)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.login-page {
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
