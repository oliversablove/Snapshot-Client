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
        <input type='text' v-model='email' placeholder='email'/>
        <input type='password' v-model='password' placeholder='password'/>
        <button class='login-btn'>Register</button>
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
        password: ''
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

  .form-group {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 25px;

    input {
      width: 100%;
      height: 30px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      text-indent: 5px;
      background: #eee;
      outline: none;

      &:focus {
        border: 1px solid #aaa;
      }
    }

    button {
      width: 100%;
      height: 30px;
      background: #ffce00;
      appearance: none;
      border: none;
      outline: none;
      border-radius: 8px;

      color: #171717;
      font-size: 18px;
      font-weight: 500;
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
