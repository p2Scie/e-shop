<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">

        <div class="navbar-end">

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/cart" class="button is-light">
              <span class="icon">
              <i class="fa-solid fa-basket-shopping"></i>
              </span>
                <strong>Panier</strong>
              </router-link>
              <router-link to="/auth/login" class="button is-primary" v-if="!isLoggedIn">
                <strong>Se connecter</strong>
              </router-link>

              <div class="navbar-item has-dropdown is-hoverable" v-if="isLoggedIn">
                <a class="button is-arrowless is-light px-5">
              <span class="icon">
              <i class="fa-solid fa-user"></i>
              </span>
                </a>

                <div class="navbar-dropdown">
                  <router-link to="" class="navbar-item">
                    Mon compte
                  </router-link>
                  <hr class="navbar-divider">
                  <a @click="logout" class="navbar-item">
                    Se déconnecter
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>
  .navbar {
    border-bottom: 1px solid lightgray;
  }
</style>