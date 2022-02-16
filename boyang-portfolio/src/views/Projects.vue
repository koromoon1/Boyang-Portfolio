<template>
  <div id="projects">
    <!-- Header -->
    <Header />

    <!-- Title -->
    <div class="contact d-flex flex-column align-items-center">
      <div class="section-title-container p-5 mt-5">
        <h2 class="section-title">
          <i class="bi bi-envelope-fill"></i> Projects
        </h2>
      </div>
      <p>Here you can find some of the projects that I created recently</p>
      <!-- <div class="btn-container my-5">
        <a class="myBtn myBtn-lg" href="mailto:eqboyang@gmail.com"
          >Send An Email</a
        >
      </div> -->
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
    <Contact id="contact" class="mt-5 pb-5" />

    <!-- Footer -->
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import projectsIntro from "../components/Projects/ProjectIntro.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Projects",
  inject: ["projects"],
  components: { Header, projectsIntro, SocialLinkSideBar, Contact, Footer },
};
</script>

<style scoped>
p {
  font-size: 1.5rem;
  color: #333;
}
</style>
