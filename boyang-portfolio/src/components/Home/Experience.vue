<template>
  <div class="d-flex flex-column align-items-center">
    <div class="experience-title-container p-5 mt-5">
      <h2 class="experience-title">
        <i class="bi bi-award-fill"></i> My Experience
      </h2>
    </div>
    <div class="experience-card-container">
      <ExperienceCard
        v-for="(i, index) in experienceList"
        :key="index"
        :i="i"
      />
    </div>
  </div>
</template>

<script>
import ExperienceCard from "./ExperienceCard.vue";

export default {
  components: { ExperienceCard },
  data() {
    return {
      experienceList: [
        {
          companyName: "Somoplay Inc.",
          logoName: "somoplay",
          logoUrl: require("../../assets/logo/somoplay.jpg"),
          title: "Frontend Web Developer Intern",
          city: "Toronto",
          province: "ON",
          startMonth: "January",
          startYear: "2021",
          finishMonth: "",
          finishYear: "",
          jobDescription: [
            `Developed functions for SPA components. Ex: editing backend data from admin panel,Internationalization, form validation, carousel, etc (Vue, javascript)`,
            `Ensured interactions with the backend API and properly handle errors. Worked closely with backend developers.`,
            `Optimized UI & UX and responsive design (CSS, Bootstrap)`,
            `Cleared up the database to make it more readable.`,
          ],
        },
        {
          companyName: "AvocadoCore Tech",
          logoName: "avocadocore",
          logoUrl: require("../../assets/logo/avocadocore.jpg"),
          title: "UI Designer",
          city: "London",
          province: "ON",
          startMonth: "October",
          startYear: "2019",
          finishMonth: "October",
          finishYear: "2021",
          jobDescription: [
            `Designed & created mock-up for web & mobile app UI template for a mathematical AI tutor App by using Sketch, Adobe Illustrator & Photoshops.`,
            `Cooperated with Frontend & Backend developers to improve user experience.`,
            `Designed logo for company and app.`,
          ],
        },
      ],
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
</style>
