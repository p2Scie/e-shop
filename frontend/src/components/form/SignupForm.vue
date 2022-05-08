<template>
  <form class="box"></form>
</template>

<script>
export default {
  name: "RegisterComponent",
  methods: {
    async signup() {
      const data = {
        email: 'user1@test.fr',
        password: 'user123',
        firstname: 'Stevens',
        lastname: 'Demervil'
      };
      try {
        const res = await this.axios.post('http://localhost:8000/api/register', data, {withCredentials: true})
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
form {
  max-width: 500px;
  margin: 0 auto;
}
</style>