<template>
  <header-component/>
  <main class="container">
    <router-view/>
  </main>
  <footer-component/>
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  created() {
    this.$store.dispatch('autoLogin');
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


#app main {
  flex: 1 1 auto;
  width: 100%;
  padding-top: 4rem;
}


</style>
