<template>
  <div class="wrapper">
    <login-component/>
    <register-component/>
  </div>

  <button type="button" @click="login">Click me</button>
</template>

<script>
import LoginComponent from "@/components/form/LoginComponent";
import RegisterComponent from "@/components/form/RegisterComponent";

export default {
  components: {
    LoginComponent,
    RegisterComponent
  },
  methods: {
    async login() {

      try {
        const res = await this.axios.post('http://localhost:8000/api/login', {email: 'admin@test.fr', password: 'admin123'})
        console.log(res);

      } catch (e) {
        console.log(e)
        console.log(e.response)
      }
    }
  }
}
</script>

<style scoped>

</style>