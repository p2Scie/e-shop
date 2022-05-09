<template>
  <form class="box" @submit.prevent="submitForm">
    <div class="field mb-6 has-text-centered">
      <h2 class="title">Inscription</h2>
      <p class="subtitle is-6 ">Déjà un compte ?
        <router-link to="/auth/login">Connectez-vous maintenant
          !
        </router-link>
      </p>
    </div>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Prénom" v-model.trim="firstname">
      </p>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Nom" v-model.trim="lastname">
      </p>
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
        <button class="button is-success">
          <strong>Je m'inscris</strong>
        </button>
      </p>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      formIsValid: true,
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || this.password.length < 4 || this.lastname === '' || this.firstname === '') {
        this.formIsValid = false;
        return;
      }

      const FormData = {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname
      }

      this.$store.dispatch('signup', FormData);

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