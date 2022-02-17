<template>
  <div id="projectsPage">
    <!-- Header -->
    <Header />

    <!-- Title -->
    <div class="contact container d-flex flex-column align-items-center">
      <div class="section-title-container">
        <h2 class="section-title p-5 mt-5">
          <i class="bi bi-folder2"></i> Projects
        </h2>
        <p class="section-title-description">
          Here you can find some of the projects that I created recently
        </p>
      </div>
    </div>

    <!-- Projects List -->
    <!-- Data is from App.vue -->
    <div class="d-flex flex-column justify-content-center container mt-5 pt-5">
      <projectsIntro
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- Social Links Side Bar -->
    <SocialLinkSideBar :page="projects" />

    <!-- Contact -->
    <ContactSection id="contact" class="mt-5 pb-5" />

    <!-- Footer -->
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import projectsIntro from "../components/Projects/ProjectIntro.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
import ContactSection from "../components/ContactSection.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Projects",
  inject: ["projects"],
  components: {
    Header,
    projectsIntro,
    SocialLinkSideBar,
    ContactSection,
    Footer,
  },
};
</script>

<style scoped>
p {
  font-size: 1.5rem;
  color: #333;
}
</style>
