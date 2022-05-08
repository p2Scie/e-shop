<template>
  <router-view></router-view>

  <button type="button" @click="login">Login</button>
  <button type="button" @click="register">Inscription</button>
  <button type="button" @click="getUser">Get Connected User</button>
  <button type="button" @click="logout">Logout</button>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      form: 'login'
    }
  },
  methods: {

    async logout() {
      try {
        const res = await this.axios.get('http://localhost:8000/api/logout', {withCredentials: true});
        console.log(res);

      } catch (e) {
        console.log(e)
        console.log(e.response)
      }
    },

    async getUser() {
      try {
        const currentUser = await this.axios.get('http://localhost:8000/api/user', {withCredentials: true});
        console.log(currentUser.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}
</style>