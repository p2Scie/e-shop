<template>
  <header-component />
  <main class="container">
    <router-view />
  </main>
  <footer-component />
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
</style>
