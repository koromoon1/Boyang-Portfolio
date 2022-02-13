<template>
  <div id="home" class="home">
    <Header />

    <button @click="toAboutPage">More About Me</button>
    <button @click="toProjectsPage">More About Projects</button>
    <button>See My Resume</button>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "Home",
  components: { Header },
  props: {},
  methods: {
    toAboutPage() {
      this.$router.push("/about");
    },
    toProjectsPage() {
      this.$router.push("/projects");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
