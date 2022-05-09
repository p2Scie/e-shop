<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "AdminView",
  created() {
    this.$router.push('manage');
  }
}
</script>