<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="experience-title-container pt-5 my-5">
      <h2 class="section-title"><i class="bi bi-award"></i> My Experience</h2>
    </div>

    <p>Here you can find my working experience and achievements</p>

    <div class="experience-card-container mt-5 pt-4">
      <MyExperienceCard
        v-for="(i, index) in experienceList"
        :key="index"
        :i="i"
      />
    </div>
  </div>
</template>

<script>
import MyExperienceCard from "./MyExperienceCard.vue";

export default {
  name: "Experience",
  components: { MyExperienceCard },
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
p {
  font-size: 1.5rem;
  color: #333;
}
</style>
