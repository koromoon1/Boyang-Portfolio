<template>
  <div class="d-flex flex-column align-items-center">
    <div class="skills-title-container p-5 mt-5">
      <h2 class="skills-title"><i class="bi bi-tools"></i> My Skills</h2>
    </div>
    <div class="skills-card-container d-flex flex-wrap justify-content-center">
      <div v-for="(skills, index) in skillsList" :key="index">
        <SkillsCard v-for="(i, index) in skills" :key="index" :i="i" />
      </div>
      <!-- <font-awesome-icon :icon="['fab', 'js-square']" /> -->
      <font-awesome-icon icon="fa-brands fa-html5" />
    </div>
  </div>
</template>

<script>
import SkillsCard from "./SkillsCard.vue";

export default {
  components: { SkillsCard },
  data() {
    return {
      skillsList: {
        languages: ["HTML", "CSS", "Javascript"],
        libraries: ["Bootstrap", "Vue"],
        tools: ["Github"],
      },
    };
  },
};
</script>

<style scoped>
h2 {
  color: #333;
  font-size: 2.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.skills-card-container {
  width: 50%;
}
</style>
