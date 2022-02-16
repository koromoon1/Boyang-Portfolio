<template>
  <div class="container d-flex flex-column align-items-center">
    <!-- Title -->
    <div class="title-container p-5 mt-5">
      <h2 class="section-title"><i class="bi bi-tools"></i> My Skills</h2>
    </div>
    <!-- Skill Card -->
    <div class="skills-card-container d-flex flex-wrap justify-content-center">
      <!-- <img src="../../assets/svg/vuejs-brands.svg" alt="" /> -->
      <div v-for="(skills, index) in skillsList" :key="index">
        <SkillsCard v-for="(i, index) in skills" :key="index" :i="i" />
      </div>
    </div>
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
.skills-card-container {
  width: 50%;
}
</style>
