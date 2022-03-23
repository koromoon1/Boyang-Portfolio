<template>
  <div class="container d-flex flex-column align-items-center text-center">
    <!-- Title -->
    <div class="title-container pb-3">
      <h2 class="section-title"><i class="bi bi-tools"></i> My Skills</h2>
    </div>

    <!-- Skill Card -->
    <div
      class="skills-card-container d-flex flex-wrap justify-content-center mt-3 mb-5"
    >
      <div
        class="d-flex flex-wrap justify-content-center"
        v-for="(skills, index) in skillsList"
        :key="index"
      >
        <SkillsCard v-for="(i, index) in skills" :key="index" :i="i" />
      </div>
    </div>

    <p>More are coming <i class="bi bi-stars"></i></p>
  </div>
</template>

<script>
import SkillsCard from "./SkillsCard.vue";

export default {
  name: "Skills",
  components: { SkillsCard },
  data() {
    return {
      skillsList: {
        languages: [
          { name: "html", iconFileName: "html5" },
          { name: "css", iconFileName: "css3-alt" },
          { name: "javascript", iconFileName: "js-square" },
        ],
        libraries: [
          { name: "bootstrap", iconFileName: "bootstrap" },
          { name: "vue", iconFileName: "vuejs" },
        ],
        tools: [{ name: "github", iconFileName: "github-square" }],
      },
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1.5rem;
  color: #333;
}

.skills-card-container {
  width: 50%;
}
</style>
