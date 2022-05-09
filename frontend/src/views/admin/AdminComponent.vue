<template>
  <h1 class="title">Espace administrateur</h1>
  <div class="card mb-5">
    <div class="card-content">
      <p class="title is-4">Liste films</p>
      <div class="content">
        <table class="table">
          <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Date de sortie</th>
            <th>Votes</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(film, index) in films" :key="index">
            <th>{{ film.title }}</th>
            <td>{{ film.overview }}</td>
            <td>{{ film.release_date }}</td>
            <td>{{ film.vote_average }} / 10</td>
            <td>
              <button class="button" @click="editFilm(film)">
                <span class="icon is-small">
                  <i class="fas fa-pen"></i>
                </span>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="columns mb-5">
    <div class="column">
      <div class="card">
        <div class="card-content">
          <p class="title is-4">John Smith</p>
          <div class="content">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at
            eget
            metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
            consectetur purus sit amet fermentum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminComponent",
  data() {
    return {
      films: []
    }
  },
  methods: {
    getAllFilms() {
      try {
        this.axios.get('http://localhost:8000/api/films', {withCredentials: true}).then((films) => {
          this.films = films.data;
        });
      } catch (e) {
        console.log(e)
      }
    },
    editFilm(film) {
      this.$router.push({
        name: 'filmEdit',
        params: {
          filmId: film.id
        },
      });
    }
  },
  created() {
    this.getAllFilms();
  }
}
</script>