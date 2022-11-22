<template>
  <div class="card" :style="{backgroundImage:`url('${poster_path}')`}">
    <div class="content">
      <h2 class="copy">{{ movie.title }}</h2>
      <button @click="go_modal">More Detail</button>
    </div>
      <MovieDetail :movie="movie" />
  </div>
</template>

<script>
import MovieDetail from "@/components/MovieDetail.vue";

export default {
  name: "MovieCardView",
  components: {
    MovieDetail,
  },

  data() {
    return {
      youTubeURL: null,
      movie_d: null,

    };
  },
  props: {
    movie: Object,
  },
  computed: {
    poster_path() {
      const baseURL = "https://image.tmdb.org/t/p/w500";
      return baseURL + this.movie.poster_path;
    },
  
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/moviecard.scss";
.card {
   background-size: cover
}
</style>