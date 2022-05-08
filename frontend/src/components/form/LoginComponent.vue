<template>
  <form action="" class="box">
    <div class="field mb-6 has-text-centered">
      <h2 class="title">Connexion</h2>
      <!--<p class="subtitle is-6 ">Pas de compte ? <a href="#">Créez-en un maintenant !</a></p>-->
    </div>

    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Mot de passe">
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
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      error: []
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