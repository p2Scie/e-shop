<template>
  <div>
    <h1>Films à l'affiche</h1>
    <form class="box">
      <!--<p>{{ currentUser }}</p>-->

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    currentUser() {
      this.$store.commit('setCurrentUser');
      return this.$store.state.currentUser;
    }
  }
}
</script>

<style scoped>

</style>