<template>
  <div class="background">
    <button @click="getSnow">❄️</button>
    <div class="snowflakes" aria-hidden="true" v-if="snowing">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
    </div>
    <div class="container">
      <img id="b1" class="shadow-pop-tr" src="../assets/img/5.png" alt="" />
      <!-- <img id="b2" class="shadow-pop-tr" src="../assets/img/7.png" alt="" />
      <img id="b3" class="shadow-pop-tr" src="../assets/img/8.png" alt="" />
      <img id="b4" class="shadow-pop-tr" src="../assets/img/9-1.png" alt="" />
      <img id="b5" class="shadow-pop-tr" src="../assets/img/10.png" alt="" />
      <img id="b6" class="shadow-pop-tr" src="../assets/img/11-1.png" alt="" />
      <img id="b7" class="shadow-pop-tr" src="../assets/img/12-1.png" alt="" />
      <img id="b8" class="shadow-pop-tr" src="../assets/img/13-1.png" alt="" />
      <img id="b9" class="shadow-pop-tr" src="../assets/img/14.png" alt="" />
      <img id="b10" class="shadow-pop-tr" src="../assets/img/15.png" alt="" /> -->
      <!-- <img id="t1" class="shadow-pop-tr" src="../assets/20.png" alt="" /> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "VillageView",
  components: {},
  data() {
    return {
      snowing: false,
    };

  },
  methods: {
    getOwner(event) {
      const id = event.target.id;
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          this.$router.push({ name: "recommend", params: { id: id } });
        }
      }
    },

    getSnow() {
      this.snowing = !this.snowing;
    },
  },
};
</script>



<style scoped>
@import "@/assets/scss/snowflakes.scss";

* {
  margin: 0;
  padding: 0;
}

button {
  position: absolute;
  border: 0;
  outline: 0;
  left: 2%;
  color: aliceblue;
  background-color: transparent;
  font-size: 50px;
}

.background {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url("../assets/배경6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.1);
}

/* .container {
  position: relative;
  top: 41vh;
  width: 100%;
  height: 45vh;
  margin: 0;
  padding: 0;
  max-width: 100%;
} */

img {
  display: inline-block;
  position: absolute;
  filter: brightness(1.1);
}

#b1 {
  bottom: 14.1vh;
  left: 0;
}

#b2 {
  bottom: 14.1vh;
  left: 10%;
}

#b3 {
  bottom: 14.1vh;
  left: 22%;
}

#b4 {
  bottom: 12.7vh;
  left: 30%;
}

#b5 {
  bottom: 14.1vh;
  left: 40%;
}

#b6 {
  bottom: 14.1vh;
  left: 47.2%;
}

#b7 {
  bottom: 13.95vh;
  left: 58%;
}

#b8 {
  bottom: 13.1%;
  left: 65%;
}

#b9 {
  bottom: 14.1vh;
  left: 76.5%;
}

#b10 {
  bottom: 14.1vh;
  right: 0;
}

img:hover {
  opacity: 1;
}
</style>