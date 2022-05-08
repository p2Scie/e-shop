<template>
  <div class="wrapper">
    <form class="box" @submit.prevent="submitForm">
      <div class="field mb-6 has-text-centered">
        <h2 class="title">Connexion</h2>
        <p class="subtitle is-6 ">Pas de compte ? <a href="#" mode="flat" @click="switchForm">Créez-en un maintenant
          !</a></p>
      </div>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model.trim="email">
          <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Mot de passe" v-model.trim="password">
          <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
        </p>
      </div>
      <div class="field mt-5">
        <p class="control has-text-centered">
          <button class="button is-success is-rounded">
            Se connecter
          </button>
        </p>
      </div>
    </form>
  </div>

  <button type="button" @click="login">Login</button>
  <button type="button" @click="register">Inscription</button>
  <button type="button" @click="getUser">Get Connected User</button>
  <button type="button" @click="logout">Logout</button>
</template>

<script>


export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      form: 'login'
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || this.password.length < 4) {
        this.formIsValid = false;
        return;
      }
    },
    switchForm() {
      if(this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },

    async login() {

      try {
        const res = await this.axios.post('http://localhost:8000/api/login', {
          email: 'user1@test.fr',
          password: 'user123'
        }, {withCredentials: true})
        console.log(res);

      } catch (e) {
        console.log(e)
        console.log(e.response)
      }
    },
    async register() {
      const data = {
        email: 'user1@test.fr',
        password: 'user123',
        firstname: 'Stevens',
        lastname: 'Demervil'
      };
      try {
        const res = await this.axios.post('http://localhost:8000/api/register', data, {withCredentials: true})
        console.log(res);

      } catch (e) {
        console.log(e)
        console.log(e.response)
      }
    },
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