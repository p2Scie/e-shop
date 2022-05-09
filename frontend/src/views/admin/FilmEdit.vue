<template>
  <h1 class="title">Modifier un film</h1>
  <div class="container">
    <input v-model="film.title" class="input is-info mb-3" type="text" placeholder="Titre">
    <textarea v-model="film.overview" class="textarea mb-3" rows="10"></textarea>
    <h6 class="subtitle is-6 mb-0">Date de sortie</h6>
    <input v-model="film.release_date" class="mb-3" type="date">
    <h6 class="subtitle is-6 mb-0">Date de sortie</h6>
    <input v-model="film.vote_average" type="number" id="tentacles" class="mb-3" name="tentacles" min="1" max="10">
    <div class="has-text-right">
      <button class="button is-primary" @click="editFilm">Enregistrer</button>
    </div>

  </div>

</template>

<script>
export default {
  name: "FilmEdit",
  data() {
    return {
      film: {}
    }
  },
  methods: {
    getFilm() {
      if (this.$route.params.filmId !== undefined) {
        try {
          this.axios.get(`http://localhost:8000/api/edit-film/${this.$route.params.filmId}`, {withCredentials: true}).then((film) => {
            this.film = film.data;
          });
        } catch (e) {
          console.log(e)
        }
      }
    },
    editFilm() {
      if (this.$route.params.filmId !== undefined) {
        console.log(this.vote_average)
        try {
          this.axios.put(`http://localhost:8000/api/edit-film/${this.$route.params.filmId}`,
              null,
              {
                params: {
                  title: this.film.title,
                  overview: this.film.overview,
                  release_date: this.release_date.toString(),
                  vote_average: this.vote_average
                }
              }).then(() => {
                this.$router.push('manage');
              });
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
  mounted() {
    this.getFilm();
  }
}
</script>

<style scoped>

</style>