<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container py-3">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

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
              <a class="button is-light is-rounded">
              <span class="icon">
              <i class="fa-solid fa-ticket"></i>
              </span>
                <strong>Billetterie</strong>
              </a>
              <router-link to="/login" class="button is-primary is-rounded">
                <strong>Se connecter</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
  .navbar {
    border-bottom: 1px solid lightgray;
  }
</style>