<template>
    <h1 class="title has-text-weight-bold"><span> Films à l'affiche </span></h1>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {}
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