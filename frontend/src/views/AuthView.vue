<template>
  <login-component/>
  <register-component/>
</template>

<script>
import LoginComponent from "@/components/form/LoginComponent";
import RegisterComponent from "@/components/form/RegisterComponent";

export default {
  components: {
    LoginComponent,
    RegisterComponent
  }
}
</script>

<style scoped>

</style>