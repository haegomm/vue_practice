<template>
  <div class="background">
    <h1 style="margin-top: 5rem">Recommended Movies</h1>
    <div class="cardbox">
      <div class="page-content">
          <MovieCardView
            v-for="movie in getList"
            :key="movie.id"
            :movie="movie"
          />
      </div>
    </div>
    <button @click="goPass">Add Movie</button>
  </div>
</template>

<script>
import MovieCardView from "@/views/MovieCardView.vue";

export default {
  name: "RecommendMoviesView",
  data() {
    return {
      id: null,
    };
  },
  components: {
    MovieCardView,
  },
  computed: {
    getList() {
      const id = this.$route.params.id;
      let who;
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          who = person;
        }
      }
      return who.movies;
    },
  },
  methods: {
    goPass() {
      this.$router.push({ name: "password" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/moviecard.scss";
.cardbox {
  display: flex;
  justify-content: center;
}
</style>