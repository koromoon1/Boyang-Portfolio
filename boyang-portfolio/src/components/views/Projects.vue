<template>
  <div id="projects">
    <Header />
    <h1>Projects Page</h1>
    <button @click="toProject1">Project 1</button>
    <button @click="toProject2">Project 2</button>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "Projects",
  components: { Header },
  props: {},
  methods: {
    toProject1() {
      this.$router.push("/projects/project1");
    },
    toProject2() {
      this.$router.push("/projects/project2");
    },
  },
};
</script>
