<template>
  <div id="home" class="home">
    <Header />

    <Hero id="hero" />

    <Experience id="experience" class="my-3" />

    <Skills id="skills" class="my-3" />

    <Contact id="contact" class="my-5" />

    <Footer id="footer" />

    <!-- <button @click="toAboutPage">More About Me</button>
    <button @click="toProjectsPage">More About Projects</button>
    <button>See My Resume</button> -->
  </div>
</template>

<script>
import Header from "../Header.vue";
import Hero from "../Home/Hero.vue";
import Experience from "../Home/Experience.vue";
import Skills from "../Home/Skills.vue";
import Contact from "../Home/Contact.vue";
import Footer from "../Footer.vue";
export default {
  name: "Home",
  components: { Header, Hero, Experience, Skills, Contact, Footer },
  props: {},
  methods: {
    toAboutPage() {
      this.$router.push("/about");
    },
    toProjectsPage() {
      this.$router.push("/projects");
    },
  },
};
</script>
