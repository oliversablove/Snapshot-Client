<template>
  <div class='login-page'>
    <h3>Snap<span>shot</span></h3>
    <div class='form-group'>
      <input type='text' v-model='email' placeholder='email'/>
      <input type='password' v-model='password' placeholder='password'/>
      <button class='login-btn'>Login</button>
    </div>
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
    }
  }
</script>

<style lang="scss" scoped>
.login-page {
  padding: 25px;

  h3 {
    color: #000;
    font-size: 28px;
    text-align: center;
    font-weight: 900;
    span {
      font-weight: 300;
    }
  }

  .form-group {
    display: flex;
    justify-content: center;
    flex-flow: column;
    input {
      width: 100%;
      height: 30px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      text-indent: 5px;
    }
  }
}
</style>
