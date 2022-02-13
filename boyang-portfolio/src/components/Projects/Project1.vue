<template>
  <div id="projects">
    <Header />
    <h1>Projects 1</h1>
    <button @click="toProjects">Back to Projects Page</button>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "Project1",
  components: { Header },
  props: {},
  methods: {
    toProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>
