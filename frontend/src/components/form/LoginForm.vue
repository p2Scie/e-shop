<template>
  <form class="box" @submit.prevent="submitForm">
    <div class="field mb-6 has-text-centered">
      <h2 class="title">Connexion</h2>
      <p class="subtitle is-6 ">Pas de compte ?
        <router-link to="/auth/signup">Créez-en un maintenant !
        </router-link>
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
          <strong> Se connecter</strong>
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
      formIsValid: true,
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || this.password.length < 4) {
        this.formIsValid = false;
        return;
      }

      const FormData = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', FormData);

    },
  }
}
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}
</style>