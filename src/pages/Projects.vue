<template>
  <div id="projectsPage">
    <!-- Title -->
    <div class="contact container d-flex flex-column align-items-center">
      <div class="section-title-container">
        <h2 class="section-title"><i class="bi bi-folder2"></i> Projects</h2>
        <p class="section-title-description">
          Here you can find some of the projects that I created recently
        </p>
      </div>
    </div>

    <!-- Projects List -->
    <!-- Data injects from App.vue -->
    <div class="d-flex flex-column justify-content-center container mt-5 pt-5">
      <projectsIntro
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import projectsIntro from "../components/Projects/ProjectIntro.vue";

export default {
  name: "Projects",
  inject: ["projects"],
  components: {
    projectsIntro,
  },
};
</script>

<style scoped>
p {
  font-size: 1.5rem;
  color: #333;
}
</style>
